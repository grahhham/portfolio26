export enum ERROR_CODE {
  none = 0,
  no_response,
  server_error,
  validation_error,
  endpoint_error,
}

export interface Error {
  code?: ERROR_CODE;
  message: string; // Information about the error that can be made public
  internalMessage: string; // Information about the error that is internal use only
}