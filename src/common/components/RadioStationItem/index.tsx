import { RadioStation } from "../../interfaces/RadioStation";

interface RadioStationItemProps {
  station: RadioStation;
}

const RadioStationItem = ({ station }: RadioStationItemProps) => {
  return (
    <div className="flex gap-3 p-2 hover:bg-gray-800 rounded-lg">
      <div className="w-12 h-12 bg-green-400 rounded"></div>
      <div className="flex flex-col justify-evenly">
        <p className="font-semibold">{station.name}</p>
        <p className="text-sm">Playlist - 311 songs</p>
      </div>
    </div>
  );
};

export default RadioStationItem;
