import { createContext, useContext } from "react";
import { RadioStation } from "../../interfaces/RadioStation";
import { SearchQueryType } from "../../interfaces/searchQuery";

interface StationsContextProps {
  stations: RadioStation[];
  searchQuery: SearchQueryType;
  isLoading: boolean;
  setStations: React.Dispatch<React.SetStateAction<RadioStation[]>>;
  setSearchQuery: React.Dispatch<React.SetStateAction<SearchQueryType>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const StationsContext = createContext<StationsContextProps>(
  {} as StationsContextProps
);

export const useStationsContext = () => {
  const context = useContext(StationsContext);

  if (context === undefined) {
    throw new Error("Check if you put it inside useStationsContext provider");
  }

  return context;
};
