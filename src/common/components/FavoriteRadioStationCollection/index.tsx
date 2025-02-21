import RadioStationItem from "../RadioStationItem";
import { useFavoriteRadioStationCollection } from "./use";

const FavoriteRadioStationCollection = () => {
  const { filteredFavoriteStations } = useFavoriteRadioStationCollection();

  return (
    <div className="overflow-y-scroll h-8/10">
      {filteredFavoriteStations.map((station, index) => (
        <RadioStationItem
          station={station}
          index={index}
          key={station.stationuuid}
        />
      ))}
    </div>
  );
};

export default FavoriteRadioStationCollection;
