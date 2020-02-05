export interface IApiImage {
  medium: string
  original: string
}

export interface IEpisode {
  id: number
  name: string
  season: number
  number: number
  image: IApiImage
  summary: string
}

export interface IHeader {
  name: string
  image: IApiImage
}

export interface ISummaryBlock {
  title: string
  description?: string
  imageSrc?: string
}
