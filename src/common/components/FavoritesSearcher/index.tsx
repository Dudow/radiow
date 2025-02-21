import { useFavoriteSearcher } from "./use";

export const FavoritesSearcher: React.FC = () => {
  const { handleSearch } = useFavoriteSearcher();

  return (
    <input
      type="text"
      placeholder="Search in your favorites"
      className="rounded bg-gray-800 px-4 py-2 text-sm"
      onChange={(e) => handleSearch(e.currentTarget.value)}
    />
  );
};
