import { useSearcher } from "./use";

export const Searcher: React.FC = () => {
  const { handleChangeName, searchQuery } = useSearcher();

  return (
    <div>
      <input
        type="text"
        value={searchQuery.name}
        onChange={(e) => handleChangeName(e)}
        placeholder="What do you want to play?"
        className="h-full w-lg px-10 border text-sm rounded-full block p-2.5 bg-gray-900 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
};
