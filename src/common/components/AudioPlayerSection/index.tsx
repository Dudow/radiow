import { useSelectedSongContext } from "../../contexts/SelectedSongContext/SelectedSongContext";
import "react-h5-audio-player/lib/styles.css";
import "../../styles/audioPlayerStyleOverwrite.css";
import AudioPlayer from "react-h5-audio-player";

export const AudioPlayerSection: React.FC = () => {
  const { selectedStation } = useSelectedSongContext();

  return (
    <div className="p-3 pt-0 flex justify-between">
      <div className="w-160 flex items-center gap-3">
        {selectedStation.url_resolved && (
          <>
            <div className="w-14 h-14 bg-gradient-to-br from-green-900 to-green-600  rounded p-1 flex justify-center items-center ">
              <img src={selectedStation.favicon} alt="" className="w-full" />
            </div>
            <div className="flex flex-col justify-evenly">
              <p className="font-semibold">{selectedStation.name}</p>
              <p className="text-sm">
                {selectedStation.country ? selectedStation.country + " • " : ""}
                {selectedStation.votes} votes
              </p>
            </div>
          </>
        )}
      </div>
      <AudioPlayer
        autoPlay
        src={selectedStation.url_resolved ? selectedStation.url_resolved : ""}
        showJumpControls={false}
        showFilledProgress={false}
        showFilledVolume={false}
        volume={1}
        muted={false}
      />
      <div className="w-160"></div>
    </div>
  );
};
