import * as Styled from './Sidebar.js'
import Playlists from '../Playlists/Playlists.jsx';

function Sidebar() {
  return (
    <Styled.MainSidebar>
      <Styled.SidebarPersonal>
        <Styled.SidebarPersonalName>Sergey.Ivanov</Styled.SidebarPersonalName>
        <Styled.SidebarIcon>
          <svg alt="logout">
            <use xlinkHref="/icon/sprite.svg#logout"></use>
          </svg>
        </Styled.SidebarIcon>
      </Styled.SidebarPersonal>
      <Playlists />
    </Styled.MainSidebar>

  );
}

export default Sidebar;