export type CardDataElement = {
  img_url: string,
  title: string,
}

export type CardDataRow = CardDataElement & {
  series_id: string,
}

export type SeriesDataRow = {
  series_id: string,  
  series_name: string,
  series_desc: string,
}

export type SeriesDataElement = SeriesDataRow & {
  cards: CardDataElement[]
}