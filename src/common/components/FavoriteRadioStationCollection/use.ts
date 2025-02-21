import { useFavoriteContext } from "../../contexts/FavoritesContext/FavoritesContext";

export const useFavoriteRadioStationCollection = () => {
  const { filteredFavoriteStations } = useFavoriteContext();

  return {
    filteredFavoriteStations,
  };
};
