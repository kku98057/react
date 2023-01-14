import { createContext, useContext } from "react";
import FakeYoutubeAPIs from "../api/fake-youtubeAPIs";
import YoutubeAPIs from "../api/youtubeAPIs";

export const YoutubeContextAPIs = createContext();

// const youtube = new YoutubeAPIs();
const youtube = new FakeYoutubeAPIs();

export function YoutubeAPIsProvider({ children }) {
  return (
    <YoutubeContextAPIs.Provider value={{ youtube }}>
      {children}
    </YoutubeContextAPIs.Provider>
  );
}

export function useYoutubeAPI() {
  return useContext(YoutubeContextAPIs);
}
