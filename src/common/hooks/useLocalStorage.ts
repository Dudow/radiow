import { useCallback, useEffect } from "react";
import { RadioStation } from "../interfaces/RadioStation";
import { useFavoriteContext } from "./useFavoriteContext";

export const useLocalStorage = () => {
  const { setFavoriteStations } = useFavoriteContext();

  const saveFavorites = (stations: RadioStation[]) => {
    localStorage.setItem("favorites", JSON.stringify(stations));
  };

  const getFavorites = useCallback(() => {
    return localStorage.getItem("favorites");
  }, []);

  useEffect(() => {
    const hasFavorites = getFavorites();

    if (hasFavorites && hasFavorites.length > 2)
      setFavoriteStations(JSON.parse(hasFavorites));
  }, [getFavorites, setFavoriteStations]);

  return {
    saveFavorites,
    getFavorites,
  };
};
