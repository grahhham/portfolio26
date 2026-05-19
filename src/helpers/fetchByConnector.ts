import { DEFAULT_PAGE_SIZE, localSeriesData, localCardData } from "../../lib/config";
import { Packet } from "@/types/Packet";
import { SeriesDataElement } from "@/types/Data";
import { ERROR_CODE } from "@/types/Error";

export function getLocalPage(
  page: number = 0,
  pageSize: number = DEFAULT_PAGE_SIZE,
): Packet<SeriesDataElement> {

  const packet: Packet<SeriesDataElement> = {
    data: [],
    error: {
      code: ERROR_CODE.none,
      message: "Success",
      internalMessage: "Success",
    },
    info: {}
  };

  let tempSeriesDataElementIndex;
  let tempSeriesDataRow;

  try {

    // Slice stops at array end if range exceeds
    const localCardDataSlice = localCardData.slice(pageSize*page, pageSize*(page+1));
    // If range exceeded, indicate end of set
    if (localCardDataSlice.length < pageSize) {
      packet.info.noMorePages = true;
    }
    for (const cardRow of localCardDataSlice) {
      tempSeriesDataElementIndex = packet.data.findIndex(series => series.series_id == cardRow.series_id);

      if (tempSeriesDataElementIndex == -1) {
        tempSeriesDataRow = localSeriesData.find(series => series.series_id == cardRow.series_id);
        if (tempSeriesDataRow) {
          packet.data.push({
            series_id: tempSeriesDataRow.series_id,
            series_name: tempSeriesDataRow.series_name,
            series_desc: tempSeriesDataRow.series_desc,
            cards: []
          })
          tempSeriesDataElementIndex = packet.data.length - 1;
        } else {
          packet.error.code = ERROR_CODE.validation_error;
          packet.error.message = "Series not found by series_id"
          packet.error.internalMessage = "Series not found by series_id in localSeriesData";
        }
      }
      
      // Add the cardRow as cardElement to new or existing seriesElement
      packet.data[tempSeriesDataElementIndex].cards.push({
        ...cardRow
      })

    }        
  } catch (error) {
    if (error instanceof Error) {
      packet.error.code = ERROR_CODE.server_error;
      packet.error.message = "Internal error"
      packet.error.internalMessage = error.message +"\n"+error.stack;
    }
  }

  return (packet);
}