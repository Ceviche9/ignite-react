import { ReactNode } from "react"

export type MoviesProviderProps = {
  children: ReactNode
}

export type MovieContextDataProps = {
  genres: GenreResponseProps[]
  selectedGenreId: number
  selectedGenre: GenreResponseProps
  handleClickButton: (id: number) => void
  movies: MovieProps[]
}

export type MovieProps = {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export type GenreResponseProps = {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}