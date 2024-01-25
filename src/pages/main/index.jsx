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
import { useSelector } from "react-redux";

export const Main = ({ handleLogout }) => {
  const [loading, setLoading] = useState(true);
  const [tracks, setTracks] = useState(true);
  const [tracksError, setTracksError] = useState(true);

  const currentTrack = useSelector((state) => state.player.currentTrack);

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
  <EmulationApp handleLogout={handleLogout} />
) : (
  <S.Wrapper>
    <GlobalStyle />
    <S.Container>
      <S.Main>
      <NavMenu handleLogout={handleLogout} />
        <div>
          <Search />
          <S.CenterblockH2>Треки</S.CenterblockH2>
          <Filters />
          <Tracklist tracks={tracks} tracksError={tracksError} />
        </div>
        <Sidebar tracks={tracks} handleLogout={handleLogout} />
        </S.Main>
        {currentTrack ? <AudioPlayer track={currentTrack} /> : null}
        <footer></footer>
      </S.Container>
    </S.Wrapper>
  );
};