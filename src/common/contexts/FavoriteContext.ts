import { createContext } from "react";
import { RadioStation } from "../interfaces/RadioStation";

interface FavoritesContextProps {
  favoriteStations: RadioStation[];
  filteredFavoriteStations: RadioStation[];
  setFavoriteStations: React.Dispatch<React.SetStateAction<RadioStation[]>>;
  setFilteredFavoriteStations: React.Dispatch<
    React.SetStateAction<RadioStation[]>
  >;
}

export const FavoritesContext = createContext<FavoritesContextProps>(
  {} as FavoritesContextProps
);
