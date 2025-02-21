import { RadioStation } from "../../interfaces/RadioStation";
import playIcon from "../../assets/play-solid.svg";
import addIcon from "../../assets/plus-circle.svg";
import removeIcon from "../../assets/minus-circle.svg";
import { Dispatch, SetStateAction } from "react";
import { useFavoriteContext } from "../../hooks/useFavoriteContext";

interface RadioStationItemProps {
  station: RadioStation;
  index: number;
  setSelectedstation: Dispatch<SetStateAction<RadioStation>>;
}

const RadioStationItem = ({
  station,
  index,
  setSelectedstation,
}: RadioStationItemProps) => {
  const { name, votes, country, favicon } = station;
  const { setFavoriteStations, filteredFavoriteStations } =
    useFavoriteContext();

  const alreadyAdded = filteredFavoriteStations.find(
    (favoritedStation) => favoritedStation.stationuuid === station.stationuuid
  );

  const handleFavorite = () => {
    if (alreadyAdded) {
      const newFavorites = filteredFavoriteStations.filter(
        (favoritedStation) =>
          favoritedStation.stationuuid !== alreadyAdded.stationuuid
      );

      return setFavoriteStations(newFavorites);
    }

    setFavoriteStations((prev) => [...prev, station]);
  };

  return (
    <div className="flex gap-3 p-2 hover:bg-gray-800 rounded-lg group ">
      <div className="w-5 flex justify-center items-center relative">
        <p className="inline group-hover:hidden text-white">{index + 1}</p>

        <img
          onClick={() => setSelectedstation(station)}
          src={playIcon}
          alt=""
          className="invert absolute w-3 hidden group-hover:inline cursor-pointer"
        />
      </div>
      <div className="w-12 h-12 bg-gradient-to-br from-green-900 to-green-600  rounded p-1 flex justify-center items-center ">
        {favicon && (
          <img src={favicon} alt="station favicon" className="w-full" />
        )}
      </div>

      <div className="flex max-w-7/10 flex-col justify-evenly">
        <p className={`font-semibold truncate`}>{name}</p>
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
    </div>
  );
};

export default RadioStationItem;
