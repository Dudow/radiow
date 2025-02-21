import RadioStationItem from "../RadioStationItem";
import { useFavoriteRadioStationCollection } from "./use";

const FavoriteRadioStationCollection = () => {
  const { filteredFavoriteStations } = useFavoriteRadioStationCollection();

  return filteredFavoriteStations.map((station, index) => (
    <RadioStationItem
      station={station}
      index={index}
      key={station.stationuuid}
    />
  ));
};

export default FavoriteRadioStationCollection;
