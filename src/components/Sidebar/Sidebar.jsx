import * as Styled from './Sidebar.js'
import Playlists from '../Playlists/Playlists.jsx';
import { useContext } from "react";
import { UserContext } from "../../Authorization.js";


function Sidebar({ handleLogout }) {
  const { userData } = useContext(UserContext);
  return (
    <Styled.MainSidebar>
      <Styled.SidebarPersonal>
      <Styled.SidebarPersonalName> 
          {userData.username}
          </Styled.SidebarPersonalName>
          <Styled.SidebarIcon onClick={handleLogout}>
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
