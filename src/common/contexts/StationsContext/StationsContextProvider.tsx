import { useState } from "react";
import { RadioStation } from "../../interfaces/RadioStation";
import { StationsContext } from "./StationsContext";

interface StationsContextProviderProps {
  children: React.ReactNode;
}

export const StationsContextProvider: React.FC<
  StationsContextProviderProps
> = ({ children }) => {
  const [stations, setStations] = useState<RadioStation[]>(
    [] as RadioStation[]
  );
  const [searchQuery, setSearchQuery] = useState<string>("");
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
