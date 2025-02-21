import { useState } from "react";
import { RadioStation } from "../../interfaces/RadioStation";
import { SelectedSongContext } from "./SelectedSongContext";

interface SelectedSongContextProviderProps {
  children: React.ReactNode;
}

export const SelectedSongContextProvider: React.FC<
  SelectedSongContextProviderProps
> = ({ children }) => {
  const [selectedStation, setSelectedstation] = useState<RadioStation>(
    {} as RadioStation
  );

  return (
    <SelectedSongContext.Provider
      value={{
        selectedStation,
        setSelectedstation,
      }}
    >
      {children}
    </SelectedSongContext.Provider>
  );
};
