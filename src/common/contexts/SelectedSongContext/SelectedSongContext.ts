import { createContext, useContext } from "react";
import { RadioStation } from "../../interfaces/RadioStation";

interface SelectedSongContextProps {
  selectedStation: RadioStation;
  setSelectedstation: React.Dispatch<React.SetStateAction<RadioStation>>;
}

export const SelectedSongContext = createContext<SelectedSongContextProps>(
  {} as SelectedSongContextProps
);

export const useFavoriteContext = () => {
  const context = useContext(SelectedSongContext);

  if (context === undefined) {
    throw new Error("Check if you put it inside SelectedSongContext provider");
  }

  return context;
};
