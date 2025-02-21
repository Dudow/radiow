import { useCallback, useEffect } from "react";
import { getRadioStations } from "../../services/RadioStations";
import { useStationsContext } from "../../contexts/StationsContext/StationsContext";

export const useSearcher = () => {
  const { setIsLoading, setStations, setSearchQuery, searchQuery } =
    useStationsContext();

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.target.value);
    },
    [setSearchQuery]
  );

  useEffect(() => {
    setIsLoading(true);
    getRadioStations(searchQuery).then((res) => {
      setStations(res);
      setIsLoading(false);
    });
  }, [searchQuery, setIsLoading, setStations]);

  return {
    handleChange,
    searchQuery,
  };
};
