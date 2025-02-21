import { useState } from "react";
import { RadioStation } from "../../interfaces/RadioStation";
import { StationsContext } from "./StationsContext";
import { SearchQueryType } from "../../interfaces/searchQuery";

interface StationsContextProviderProps {
  children: React.ReactNode;
}

export const StationsContextProvider: React.FC<
  StationsContextProviderProps
> = ({ children }) => {
  const [stations, setStations] = useState<RadioStation[]>(
    [] as RadioStation[]
  );
  const [searchQuery, setSearchQuery] = useState<SearchQueryType>({
    country: "",
    name: "",
    language: "",
    page: 0,
  } as SearchQueryType);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <StationsContext.Provider
      value={{
        stations,
        searchQuery,
        isLoading,
        setStations,
        setSearchQuery,
        setIsLoading,
      }}
    >
      {children}
    </StationsContext.Provider>
  );
};
