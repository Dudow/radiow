import RadioStationItem from "../RadioStationItem";
import { useStationsContext } from "../../contexts/StationsContext/StationsContext";
import { Loading } from "../Loading";
import getCountries from "../../services/Countries";
import { useEffect, useState } from "react";
import { Country } from "../../interfaces/Country";

const RadioStationCollection = () => {
  const { isLoading, stations } = useStationsContext();
  const [countries, setCountries] = useState([] as Country[]);

  useEffect(() => {
    getCountries().then((res) => setCountries(res));
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="relative flex w-10/10 flex-col bg-gradient-to-b from-violet-900 to-zinc-950 rounded-lg p-4">
      <select
        id="countries"
        className="border text-sm rounded-full  w-50 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
      >
        {countries.map((country) => {
          return <option selected>{country.name}</option>;
        })}
      </select>
      {stations.map((station, index) => (
        <RadioStationItem
          station={station}
          index={index}
          key={station.stationuuid}
        />
      ))}
    </div>
  );
};

export default RadioStationCollection;
