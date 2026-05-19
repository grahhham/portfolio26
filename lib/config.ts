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
    img_url: "https://lh3.googleusercontent.com/d/1J2sItiEfvKvnhrgFUt3JeCrsIsMKAANE",
    //img_url: "https://drive.google.com/thumbnail?id=1J2sItiEfvKvnhrgFUt3JeCrsIsMKAANE&sz=w1000",
    //img_url: "/test0.jpg",
    title: "Test",
    series_id: "1",
    w: 2400,
    h: 2520,
    w_thumb: 1000,
    h_thumb: 1050,
    url_suffix: "=w",
  }, {
    img_url: "/test1.jpg",
    title: "Test",
    series_id: "1",
    w: 500,
    h: 639,
  }, {
    img_url: "/test2.jpg",
    title: "Test",
    series_id: "1",
    w: 940,
    h: 934,
  }, {
    img_url: "/test3.jpg",
    title: "Test",
    series_id: "1",
    w: 712,
    h: 1024,
  }
] satisfies CardDataRow[];