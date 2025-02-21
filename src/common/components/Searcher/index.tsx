import { useSearcher } from "./use";

export const Searcher: React.FC = () => {
  const { handleChange, searchQuery } = useSearcher();

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => handleChange(e)}
        placeholder="What do you want to play?"
        className="h-full w-lg px-10 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block p-2.5 bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  );
};
