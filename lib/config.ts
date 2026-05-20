import { CardDataRow, SeriesDataRow } from "@/types/Data";
import { CONNECTOR } from "@/types/Network";
export const DEFAULT_PAGE_SIZE = 6;

export const DEFAULT_CONNECTOR = CONNECTOR.local;

export const SITE_TITLE = "Graham Cruickshank - Portfolio 2026"

export const localSeriesData = [
  {
    series_id: "icons",
    series_name: "ICONOGRAPHY",
    series_desc: "Library of icons, visuals and other resources of data concepts used by various tools and websites. (2024-2026)",
  }, {
    series_id: "binder",
    series_name: "STATE OF AI",
    series_desc: "Informational 22-page binder on AI in ESDC shared across the department. (2023)",
  }, {
    series_id: "guides",
    series_name: "DATA, AI, ML GUIDES",
    series_desc: "Various graphics which simplify complex data, AI, and ML concepts taught to numerous groups. (2022-2024)",
  }
] satisfies SeriesDataRow[];

export const localCardData = [
    //img_url: "https://drive.google.com/thumbnail?id=1J2sItiEfvKvnhrgFUt3JeCrsIsMKAANE&sz=w1000",
  {
    img_url: "https://lh3.googleusercontent.com/d/1VXzvJFZCs_fh0CkB-R-XQjIvjkvEWMzY",
    title: "Iconography, various artifacts (1)",
    series_id: "icons",
    w: 2000,
    h: 1668,
    w_thumb: 1000,
    h_thumb: 834,
    url_suffix: "=w",
  }, {
    img_url: "https://lh3.googleusercontent.com/d/1oFhxWy55_fIG8N5728REv4XZ80fg0Jwl",
    title: "Iconography, various artifacts (2)",
    series_id: "icons",
    w: 2000,
    h: 1668,
    w_thumb: 1000,
    h_thumb: 834,
    url_suffix: "=w",
  }, {
    img_url: "https://lh3.googleusercontent.com/d/1U3nC4EpLG4YkKEBu0uHynBRYHB4Q0lsG",
    title: "State of AI Binder (Page 1)",
    series_id: "binder",
    w: 1920,
    h: 1080,
    w_thumb: 1000,
    h_thumb: 563,
    url_suffix: "=w",
  }, {
    img_url: "https://lh3.googleusercontent.com/d/1aPXFdIR8nnGmgcFaHEtpxRZ_ttXY7DD7",
    title: "State of AI Binder (Page 2)",
    series_id: "binder",
    w: 1920,
    h: 1080,
    w_thumb: 1000,
    h_thumb: 563,
    url_suffix: "=w",
  }, {
    img_url: "https://lh3.googleusercontent.com/d/1EVx3zC89R1iR4k08xoxu3IjwB-bb6-98",
    title: "State of AI Binder (Page 3)",
    series_id: "binder",
    w: 1920,
    h: 1080,
    w_thumb: 1000,
    h_thumb: 563,
    url_suffix: "=w",
  }, {
    img_url: "https://lh3.googleusercontent.com/d/15N_su7Kh1tmap6vSj4Phf8Hm6Gk4kE1J",
    title: "State of AI Binder (Page 9)",
    series_id: "binder",
    w: 1920,
    h: 1080,
    w_thumb: 1000,
    h_thumb: 563,
    url_suffix: "=w",
  }, {
    img_url: "https://lh3.googleusercontent.com/d/1yzODHX91Ma3J_AlERH6cLJPEHzF2Np8-",
    title: "State of AI Binder (Page 22)",
    series_id: "binder",
    w: 1920,
    h: 1080,
    w_thumb: 1000,
    h_thumb: 540,
    url_suffix: "=w",
  }, {
    img_url: "https://lh3.googleusercontent.com/d/14AVEpY4mwl1RXni4U1WE6NC_y6sCcCVr",
    title: "How OCR works in ESDC",
    series_id: "guides",
    w: 1920,
    h: 1080,
    w_thumb: 1000,
    h_thumb: 540,
    url_suffix: "=w",
  }, {
    img_url: "https://lh3.googleusercontent.com/d/153mMYCkPdi1rLuI737cOgj4nb8jHsvGc",
    title: "How Record Linkage works",
    series_id: "guides",
    w: 1920,
    h: 1080,
    w_thumb: 1000,
    h_thumb: 540,
    url_suffix: "=w",
  // }, {
  //   img_url: "https://lh3.googleusercontent.com/d/172IwQIw8i9zlvrqo4Q6lRmDeOqRaeIWv",
  //   title: "How Record Linkage works - Example in ESDC",
  //   series_id: "guides",
  //   w: 1920,
  //   h: 1080,
  //   w_thumb: 1000,
  //   h_thumb: 540,
  //   url_suffix: "=w",
  }, {
    img_url: "https://lh3.googleusercontent.com/d/1xVWsUTmm62Ya8Wdp5V7ieC1b-TPc3TMI",
    title: "Navigating Risks of AI",
    series_id: "guides",
    w: 1920,
    h: 1080,
    w_thumb: 1000,
    h_thumb: 540,
    url_suffix: "=w",
  }, {
    img_url: "https://lh3.googleusercontent.com/d/16U9l7gOaNaNv5ZV8OxzqVn5Guj6u6okz",
    title: "How De-Identification works",
    series_id: "guides",
    w: 1920,
    h: 1080,
    w_thumb: 1000,
    h_thumb: 540,
    url_suffix: "=w",
  }
] satisfies CardDataRow[];