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
import { useGetAllTracksQuery } from "../../Store/api/music.js";

export const Main = ({ handleLogout }) => {
  const [tracksError, setTracksError] = useState(true);
  const {data: tracks, isLoading: loading} = useGetAllTracksQuery();
  const currentTrack = useSelector((state) => state.player.currentTrack);
  const myUser = JSON.parse(localStorage.getItem("user"));
  console.log(myUser);
  const mappedTracks = tracks?.map((track) => {
    const isLike = track.stared_user?.filter((user)=> user.id === myUser.id).length > 0 ? true : false;
    return {
      ...track,
      isLike
    };
  }); 
  return loading ? (
    <EmulationApp handleLogout={handleLogout} />
  ) : (
    <>
      <GlobalStyle />
      <S.Container>
        <S.Main>
        <div>
            <Search />
            <S.CenterblockH2>Треки</S.CenterblockH2>
            <Filters />
            <Tracklist tracks={mappedTracks} tracksError={tracksError} />
          </div>
          </S.Main>
          <footer></footer>
      </S.Container>
      </>
  );
};