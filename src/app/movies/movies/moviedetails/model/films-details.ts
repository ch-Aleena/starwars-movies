export interface FilmsDetails {
  message: string;
  result: Result;
}
export interface Result {
  properties: Properties;
  description: string;
  _id: string;
  uid: string;
  __v: number;
}
export interface Properties {
  characters: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  producer: string;
  title: string;
  episode_id: number;
  director: string;
  release_date: string;
  opening_crawl: string;
  url: string;
}
