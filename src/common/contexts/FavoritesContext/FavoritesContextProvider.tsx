import { useEffect, useState } from "react";
import { RadioStation } from "../../interfaces/RadioStation";
import { FavoritesContext } from "./FavoritesContext";

interface FavoritesContextProviderProps {
  children: React.ReactNode;
}

export const FavoritesContextProvider: React.FC<
  FavoritesContextProviderProps
> = ({ children }) => {
  const [favoriteStations, setFavoriteStations] = useState<RadioStation[]>(
    [] as RadioStation[]
  );

  const [filteredFavoriteStations, setFilteredFavoriteStations] =
    useState<RadioStation[]>(favoriteStations);

  useEffect(() => {
    setFilteredFavoriteStations(favoriteStations);
  }, [favoriteStations]);

  return (
    <FavoritesContext.Provider
      value={{
        favoriteStations,
        setFavoriteStations,
        filteredFavoriteStations,
        setFilteredFavoriteStations,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
