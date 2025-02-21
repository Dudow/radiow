import { createContext, useContext } from "react";
import { RadioStation } from "../../interfaces/RadioStation";

interface StationsContextProps {
  stations: RadioStation[];
  searchQuery: string;
  isLoading: boolean;
  setStations: React.Dispatch<React.SetStateAction<RadioStation[]>>;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
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
