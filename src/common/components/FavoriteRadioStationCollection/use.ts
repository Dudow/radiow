import { useFavoriteContext } from "../../hooks/useFavoriteContext";

export const useFavoriteRadioStationCollection = () => {
  const { favoriteStations } = useFavoriteContext();

  return {
    favoriteStations,
  };
};
