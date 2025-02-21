import playIcon from "../../assets/play-solid.svg";
import stopIcon from "../../assets/stop-solid.svg";
import addIcon from "../../assets/plus-circle.svg";
import removeIcon from "../../assets/minus-circle.svg";
import disk from "../../assets/compact-disc-solid.svg";
import volume from "../../assets/volume-high-solid.svg";

import { RadioStation } from "../../interfaces/RadioStation";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useFavoriteContext } from "../../contexts/FavoritesContext/FavoritesContext";
import { useSelectedSongContext } from "../../contexts/SelectedSongContext/SelectedSongContext";

interface RadioStationItemProps {
  station: RadioStation;
  index: number;
}

const RadioStationItem = ({ station, index }: RadioStationItemProps) => {
  const { name, votes, country, favicon } = station;

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

  return (
    <div className="flex gap-3 p-2 hover:bg-gray-800 rounded-lg group ">
      <div className="w-5 flex justify-center items-center relative">
        <p className="inline group-hover:hidden text-white">{index + 1}</p>

        {selectedStation.stationuuid === station.stationuuid ? (
          <img
            onClick={() => setSelectedstation({} as RadioStation)}
            src={stopIcon}
            alt=""
            className="invert absolute w-3 hidden group-hover:inline cursor-pointer"
          />
        ) : (
          <img
            onClick={() => setSelectedstation(station)}
            src={playIcon}
            alt=""
            className="invert absolute w-3 hidden group-hover:inline cursor-pointer"
          />
        )}
      </div>
      <div className="w-12 h-12 bg-gradient-to-br from-green-900 to-green-600  rounded p-1 flex justify-center items-center ">
        <img
          src={favicon ? favicon : disk}
          alt="station favicon"
          className={` ${favicon ? "w-full" : "invert w-8"}`}
        />
      </div>

      <div className="flex max-w-7/10 flex-col justify-evenly">
        <p
          className={`${
            isSelectedStation ? "text-green-700" : ""
          } font-semibold truncate`}
        >
          {name}
        </p>
        <p className="text-sm truncate overflow-hidden text-ellipsis">
          {country ? country + " • " : ""} {votes} votes
        </p>
      </div>

      <img
        src={alreadyAdded ? removeIcon : addIcon}
        alt=""
        onClick={() => handleFavorite()}
        className="invert w-6 hidden group-hover:inline cursor-pointer ml-auto"
      />
      {isSelectedStation && (
        <img
          src={volume}
          alt=""
          onClick={() => handleFavorite()}
          className="w-6 inline group-hover:hidden cursor-pointer ml-auto"
        />
      )}
    </div>
  );
};

export default RadioStationItem;
