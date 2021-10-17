import { createContext, useContext, useEffect, useState } from "react";
import { GenreResponseProps, MovieContextDataProps, MovieProps, MoviesProviderProps } from "../protocols/ComponentsProtocols";
import { api } from "../services/api";

const MoviesContext = createContext<MovieContextDataProps>({} as MovieContextDataProps)

export const MoviesProviders = ({ children }: MoviesProviderProps) => {

  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  
  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }
  
  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);
  
  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);
  
  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });
  
    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);
  return(
    <MoviesContext.Provider value={{genres, selectedGenre, movies, selectedGenreId, handleClickButton}}>
      {children}
    </MoviesContext.Provider>
  )
}

export const useMovies = () => {
  const Context = useContext(MoviesContext)

  return Context
}