import { useContext } from "react";
import { StationsContextProvider } from "../contexts/StationsContext";

export const useFavoriteContext = () => {
  const context = useContext(FavoritesContext);

  if (context === undefined) {
    throw new Error("Check if you put it inside FavoritesContext provider");
  }

  return context;
};
