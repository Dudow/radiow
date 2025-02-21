import FavoriteRadioStationCollection from "../FavoriteRadioStationCollection";
import RadioStationCollection from "../RadioStationCollection";
import library from "../../assets/library.svg";
import { FavoritesSearcher } from "../FavoritesSearcher";
import { useSelectedSongContext } from "../../contexts/SelectedSongContext/SelectedSongContext";

export const SongsSection: React.FC = () => {
  const { setSelectedstation } = useSelectedSongContext();

  return (
    <div className="flex w-full h-10/10 gap-2 px-2">
      <div className="w-10/10 max-w-120 h-10/10 rounded-lg bg-zinc-950 p-2">
        <div className="flex gap-2 p-2">
          <img src={library} alt="" className="w-5 h-5 rotate-90" />
          <p className="text-base font-bold">Your Library</p>
        </div>
        <div className="p-2">
          <FavoritesSearcher />
        </div>
        <FavoriteRadioStationCollection
          setSelectedstation={setSelectedstation}
        />
      </div>
      <RadioStationCollection setSelectedstation={setSelectedstation} />
    </div>
  );
};
