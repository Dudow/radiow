import { RadioStation } from "../interfaces/RadioStation";

export const useLocalStorage = () => {
  const saveFavorites = (stations: RadioStation[]) => {
    localStorage.setItem("favorites", JSON.stringify(stations));
  };

  const getFavorites = () => {
    return localStorage.getItem("favorites");
  };

  return {
    saveFavorites,
    getFavorites,
  };
};
