import * as Styled from './Sidebar.js'
import Playlists from '../Playlists/Playlists.jsx';

function Sidebar({loading}) {
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
      <Playlists 
      loading={loading}/>
    </Styled.MainSidebar>

  );
}

export default Sidebar;