import { DEFAULT_CONNECTOR } from "../../../../../lib/config";
import { CONNECTOR } from "@/types/Network";
import { ERROR_CODE } from "@/types/Error";
import { getLocalPage } from '@/helpers/fetchByConnector';
import { Packet } from "@/types/Packet";
import { SeriesDataElement } from "@/types/Data";
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ pageSlug: string }> }
) {

  const connector = DEFAULT_CONNECTOR;
  let status = 200;
  let page = 0;
  let body: Packet<SeriesDataElement> = {
    data: [],
    error: {
      code: ERROR_CODE.server_error,
      message: "Internal error",
      internalMessage: "Default error initialization",
    },
    info: {}
  };

  let initialTestsPassed = true;

  const { pageSlug } = await params;

  if (Number.isInteger(parseInt(pageSlug)) && parseInt(pageSlug) > -1) {
    page = parseInt(pageSlug);
  } else {
    initialTestsPassed = false;
    body.error.message = "Invalid page number"
    body.error.internalMessage = "Invalid page number"
    status = 400;
  }

  if (initialTestsPassed) {
    switch (connector) {
      case CONNECTOR.local:
        /* Definition:
          Retrieves local relational data from "/lib/config.ts"
        */
        body = getLocalPage(page);
        if (body.error.code != 0) {
          status = 500;
        }
    }
  }

  return NextResponse.json(body, {status});
}