import { useEffect, useRef, useState } from "react";
import * as S from "../../App.styles.js";
import { GlobalStyle } from "../../App.styles.js";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer.jsx";
import Filters from "../../components/Filters/Filters.jsx";
import NavMenu from "../../components/NavMenu/NavMenu.jsx";
import Search from "../../components/Search/Search.jsx";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import Tracklist from "../../components/Tracklist/Tracklist.jsx";
import { EmulationApp } from "../../components/Emulation/EmulationApp.jsx";
import { getAllTracks } from "../../Api.js";
import { handleStart, handleStop, handleTrackPlay } from "../../components/AudioPlayer/AudioPlayer.jsx";

export const Main = ({ handleLogout}) => {
  const [showAudioPlayer, setShowAudioPlayer] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [tracks, setTracks] = useState(true); 
  const [tracksError, setTracksError] = useState(true); 
  const [isPlaying, setIsPlaying] = useState(false); 
  const audioRef = useRef(null);


const handleStart = () => {
  console.log("handleStart");
  audioRef.current.play();
  setIsPlaying(true);
};

const handleStop = () => {
  audioRef.current.pause();
  setIsPlaying(false);
};

const handleTrackPlay = (track) => {
  console.log("handleTrackPlay");
  setShowAudioPlayer(track);
};

useEffect(() => {
  getAllTracks()
    .then((tracks) => {
      setTracks(tracks);
      setLoading(false);
    })
    .catch((error) => {
      setTracksError(
        `Не удалось загрузить плейлист, попробуйте позже: ${error.message}`
      );
    })
    .finally(() => setLoading(false));
}, []);

return loading ? (
  <EmulationApp />
) : (
  <S.Wrapper>
    <GlobalStyle />
    <S.Container>
      <S.Main>
      <NavMenu handleLogout={handleLogout}/>
        <div>
          <Search />
          <S.CenterblockH2>Треки</S.CenterblockH2>
          <Filters />
          <Tracklist
            handleTrackPlay={handleTrackPlay}
            tracks={tracks}
            tracksError={tracksError}
          />
        </div>
        <Sidebar tracks={tracks} handleLogout={handleLogout} />
        </S.Main>
        {showAudioPlayer ? (
          <AudioPlayer
            track={showAudioPlayer}
            handleTrackPlay={handleTrackPlay}
            setShowBar={setShowAudioPlayer}
            setIsPlaying={setIsPlaying}
            handleStart={handleStart}
            handleStop={handleStop}
            isPlaying={isPlaying}
            audioRef={audioRef}
          />
        ) : null}
        <footer></footer>
      </S.Container>
    </S.Wrapper>
  );
};