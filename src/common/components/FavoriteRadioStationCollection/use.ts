import { useFavoriteContext } from "../../hooks/useFavoriteContext";

export const useFavoriteRadioStationCollection = () => {
  const { filteredFavoriteStations } = useFavoriteContext();

  return {
    filteredFavoriteStations,
  };
};
