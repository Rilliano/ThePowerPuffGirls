export interface IApiImage {
  medium: string
  original: string
}

export interface IEpisode {
  id: number
  name: string
  season: string
  number: string
  image: IApiImage
  summary: string
}

export interface IHeader {
  name: string
  image: IApiImage
}
