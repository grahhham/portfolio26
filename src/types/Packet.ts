import { Error } from "@/types/Error";

export interface Packet<T> {
  data: T[];
  error: Error;
  info: {
    noMorePages?: boolean;
  };
}