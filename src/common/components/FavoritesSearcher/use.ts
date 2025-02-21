import { useFavoriteContext } from "../../contexts/FavoritesContext/FavoritesContext";

export const useFavoriteSearcher = () => {
  const { favoriteStations, setFilteredFavoriteStations } =
    useFavoriteContext();

  const handleSearch = (value: string) => {
    if (!value) {
      setFilteredFavoriteStations(favoriteStations);
    }

    const temp = favoriteStations.filter((station) => {
      return station.name.toLowerCase().match(value.toLowerCase());
    });

    setFilteredFavoriteStations(temp);
  };

  return {
    handleSearch,
  };
};
