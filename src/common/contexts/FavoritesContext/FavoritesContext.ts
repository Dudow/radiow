import { createContext, useContext } from "react";
import { RadioStation } from "../../interfaces/RadioStation";

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

export const useFavoriteContext = () => {
  const context = useContext(FavoritesContext);

  if (context === undefined) {
    throw new Error("Check if you put it inside FavoritesContext provider");
  }

  return context;
};
