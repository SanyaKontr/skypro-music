import { GlobalStyle } from "../../App.styles"
import { Outlet } from "react-router-dom"
import * as S from "../../App.styles.js";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer.jsx";
import { useSelector } from "react-redux";
import NavMenu from "../../components/NavMenu/NavMenu.jsx";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import Search from "../../components/Search/Search";

const PageLayout = ({ handleLogout, tracks}) => {
    const currentTrack = useSelector((state) => state.player.currentTrack);

return (
    <>
    <S.Wrapper>
      <GlobalStyle />
      <S.Container>
        <S.Main>
        <NavMenu handleLogout={handleLogout} />
          <Outlet currentTrack={currentTrack}/>
          {currentTrack ? <AudioPlayer track={currentTrack} /> : null}
          <Sidebar tracks={tracks} handleLogout={handleLogout} />
        </S.Main>
        <footer></footer>
      </S.Container>
    </S.Wrapper>
    </>
)
}

export {PageLayout} 