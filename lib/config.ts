import { CardDataRow, SeriesDataRow } from "@/types/Data";
import { CONNECTOR } from "@/types/Network";
export const DEFAULT_PAGE_SIZE = 2;

export const DEFAULT_CONNECTOR = CONNECTOR.local;

export const localSeriesData = [
  {
    series_id: "1",
    series_name: "Test",
    series_desc: "Testing",
  }
] satisfies SeriesDataRow[];

export const localCardData = [
  {
    img_url: "/test0.jpg",
    title: "Test",
    series_id: "1",
  }, {
    img_url: "/test1.jpg",
    title: "Test",
    series_id: "1",
  }, {
    img_url: "/test2.jpg",
    title: "Test",
    series_id: "1",
  }, {
    img_url: "/test3.jpg",
    title: "Test",
    series_id: "1",
  }
] satisfies CardDataRow[];