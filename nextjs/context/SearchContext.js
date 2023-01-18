import { createContext, useContext } from "react";
import Search from "../pages/api/searchApi";

const MovieContext = createContext();

const mov = new Search();

export function MovideContextProvider({ children }) {
  return (
    <MovieContext.Provider value={{ mov }}>{children}</MovieContext.Provider>
  );
}

export function useMovieContext() {
  return useContext(MovieContext);
}
