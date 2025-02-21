import { FavoritesContextProvider } from "./common/contexts/FavoritesContext/FavoritesContextProvider";
import { StationsContextProvider } from "./common/contexts/StationsContext/StationsContextProvider";
import { Header } from "./common/components/Header";
import { SongsSection } from "./common/components/SongsSection";
import { SelectedSongContextProvider } from "./common/contexts/SelectedSongContext/SelectedSongContextProvider";
import { AudioPlayerSection } from "./common/components/AudioPlayerSection";

import "./common/styles/App.css";

function App() {
  return (
    <FavoritesContextProvider>
      <StationsContextProvider>
        <SelectedSongContextProvider>
          <div className="h-screen p-0 flex flex-col gap-2">
            <Header />

            <SongsSection />

            <AudioPlayerSection />
          </div>
        </SelectedSongContextProvider>
      </StationsContextProvider>
    </FavoritesContextProvider>
  );
}

export default App;
