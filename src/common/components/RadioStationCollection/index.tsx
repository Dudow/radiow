import RadioStationItem from "../RadioStationItem";
import { useStationsContext } from "../../contexts/StationsContext/StationsContext";
import { Loading } from "../Loading";
import getCountries from "../../services/Countries";
import { useEffect, useState } from "react";
import { Country } from "../../interfaces/Country";
import { useSearcher } from "../Searcher/use";
import { Language } from "../../interfaces/Language";
import getLanguages from "../../services/Languages";

const RadioStationCollection = () => {
  const { isLoading, stations } = useStationsContext();
  const [countries, setCountries] = useState([] as Country[]);
  const [languages, setLanguages] = useState([] as Language[]);

  const {
    handleChangeCountry,
    handleChangeLanguage,
    resetFilters,
    searchQuery,
  } = useSearcher();

  useEffect(() => {
    getCountries().then((res) => setCountries(res));
    getLanguages().then((res) => setLanguages(res));
  }, []);

  const capitalizeFirstLetter = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
    <div className="relative flex w-10/10 flex-col bg-gradient-to-b from-violet-900 to-zinc-950 rounded-lg p-4">
      <div className="mb-12 flex gap-3 ">
        <button
          type="button"
          className=" text-sm rounded-full  w-20 p-2.5 transparent-background  placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 hover:bg-gray-900 cursor-pointer"
          onClick={() => resetFilters()}
        >
          All
        </button>
        <select
          id="countries"
          className=" text-sm rounded-full w-50 p-2.5 transparent-background
  placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 cursor-pointer"
          onChange={(e) => handleChangeCountry(e)}
          value={searchQuery.country}
        >
          <option>Country</option>;
          {countries.map((country) => {
            return <option key={country.name}>{country.name}</option>;
          })}
        </select>
        <select
          id="countries"
          className=" text-sm rounded-full  w-50 p-2.5 transparent-background  placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 cursor-pointer"
          onChange={(e) => handleChangeLanguage(e)}
          value={searchQuery.language}
        >
          <option>Language</option>;
          {languages.map((language) => {
            return (
              <option key={language.name}>
                {capitalizeFirstLetter(language.name)}
              </option>
            );
          })}
        </select>
      </div>

      {isLoading ? (
        <Loading />
      ) : (
        stations.map((station, index) => (
          <RadioStationItem
            station={station}
            index={index}
            key={station.stationuuid}
          />
        ))
      )}
    </div>
  );
};

export default RadioStationCollection;
