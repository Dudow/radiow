import { RadioStation } from "../../interfaces/RadioStation";
import playIcon from "../../assets/play-solid.svg";

interface RadioStationItemProps {
  station: RadioStation;
  index: number;
}

const RadioStationItem = ({ station, index }: RadioStationItemProps) => {
  const { name, votes, country, favicon } = station;

  return (
    <div className="flex gap-3 p-2 hover:bg-gray-800 rounded-lg group">
      <div className="w-5 flex justify-center items-center relative">
        <p className="inline group-hover:hidden text-white">{index + 1}</p>

        <img
          src={playIcon}
          alt=""
          className="invert absolute w-3 hidden group-hover:inline"
        />
      </div>
      <div className="w-12 h-12 bg-gradient-to-br from-green-900 to-green-600  rounded p-1 flex justify-center items-center ">
        {favicon && (
          <img src={favicon} alt="station favicon" className="w-full" />
        )}
      </div>
      <div className="flex flex-col justify-evenly">
        <p className="font-semibold">{name}</p>
        <p className="text-sm">
          {country ? country + " • " : ""} {votes} votes
        </p>
      </div>
    </div>
  );
};

export default RadioStationItem;
