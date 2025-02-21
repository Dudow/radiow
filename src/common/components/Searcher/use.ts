import { useCallback, useEffect } from "react";
import { getRadioStations } from "../../services/RadioStations";
import { useStationsContext } from "../../contexts/StationsContext/StationsContext";

export const useSearcher = () => {
  const { setIsLoading, setStations, setSearchQuery, searchQuery } =
    useStationsContext();

  const { country, name } = searchQuery;

  const resetFilters = () => {
    setSearchQuery({ country: "", name: "" });
  };

  const handleChangeName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery((prev) => ({
        ...prev,
        ["name"]: e.target.value,
      }));
    },
    [setSearchQuery]
  );

  const handleChangeCountry = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      if (e.target.value === "Country") {
        return setSearchQuery((prev) => ({
          ...prev,
          ["country"]: "",
        }));
      }

      setSearchQuery((prev) => ({
        ...prev,
        ["country"]: e.target.value,
      }));
    },
    [setSearchQuery]
  );

  console.log("aaaaaaa");

  useEffect(() => {
    setIsLoading(true);
    getRadioStations(name, country).then((res) => {
      setStations(res);
      setIsLoading(false);
    });
  }, [country, name, searchQuery, setIsLoading, setStations]);

  return {
    handleChangeCountry,
    handleChangeName,
    resetFilters,
    searchQuery,
  };
};
