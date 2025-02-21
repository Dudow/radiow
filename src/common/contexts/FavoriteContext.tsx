import { createContext, useEffect, useState } from "react";
import { RadioStation } from "../interfaces/RadioStation";

interface FavoritesContextProps {
  favoriteStations: RadioStation[];
  filteredFavoriteStations: RadioStation[];
  setFavoriteStations: React.Dispatch<React.SetStateAction<RadioStation[]>>;
  setFilteredFavoriteStations: React.Dispatch<
    React.SetStateAction<RadioStation[]>
  >;
}

interface FavoritesContextProviderProps {
  children: React.ReactNode;
}

const FavoritesContext = createContext<FavoritesContextProps>(
  {} as FavoritesContextProps
);

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
