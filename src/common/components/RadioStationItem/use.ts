import { useFavoriteContext } from "../../contexts/FavoritesContext/FavoritesContext";
import { useSelectedSongContext } from "../../contexts/SelectedSongContext/SelectedSongContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { RadioStation } from "../../interfaces/RadioStation";

export const useRadioStationItem = (station: RadioStation) => {
  const { setFavoriteStations, filteredFavoriteStations } =
    useFavoriteContext();
  const { saveFavorites } = useLocalStorage();
  const { selectedStation, setSelectedstation } = useSelectedSongContext();

  const alreadyAdded = filteredFavoriteStations.find(
    (favoritedStation) => favoritedStation.stationuuid === station.stationuuid
  );
  const isSelectedStation = selectedStation.stationuuid === station.stationuuid;

  const handleFavorite = () => {
    if (alreadyAdded) {
      const newFavorites = filteredFavoriteStations.filter(
        (favoritedStation) =>
          favoritedStation.stationuuid !== alreadyAdded.stationuuid
      );
      saveFavorites(newFavorites);
      return setFavoriteStations(newFavorites);
    }

    setFavoriteStations((prev) => {
      const newFavoriteStations = [...prev, station];

      saveFavorites(newFavoriteStations);

      return newFavoriteStations;
    });
  };

  return {
    selectedStation,
    setSelectedstation,
    isSelectedStation,
    handleFavorite,
    alreadyAdded,
  };
};
