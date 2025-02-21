import { useCallback, useEffect } from "react";
import { getRadioStations } from "../../services/RadioStations";
import { useStationsContext } from "../../contexts/StationsContext/StationsContext";

export const useSearcher = () => {
  const { setIsLoading, setStations, setSearchQuery, searchQuery } =
    useStationsContext();

  const { country, name, language } = searchQuery;

  const resetFilters = () => {
    setSearchQuery({ country: "", name: "", language: "", page: 0 });
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

  const handleChangeLanguage = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      if (e.target.value === "Language") {
        return setSearchQuery((prev) => ({
          ...prev,
          ["language"]: "",
        }));
      }

      setSearchQuery((prev) => ({
        ...prev,
        ["language"]: e.target.value,
      }));
    },
    [setSearchQuery]
  );

  const handleChangePage = useCallback(
    (page: number) => {
      setSearchQuery((prev) => ({
        ...prev,
        ["page"]: page,
      }));
    },
    [setSearchQuery]
  );

  useEffect(() => {
    setIsLoading(true);
    getRadioStations(name, country, language).then((res) => {
      setStations(res);
      setIsLoading(false);
    });
  }, [country, language, name, searchQuery, setIsLoading, setStations]);

  return {
    handleChangeCountry,
    handleChangeName,
    handleChangeLanguage,
    resetFilters,
    handleChangePage,
    searchQuery,
  };
};
