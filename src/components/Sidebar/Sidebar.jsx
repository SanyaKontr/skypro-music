import * as Styled from './Sidebar.js'
import Playlists from '../Playlists/Playlists.jsx';
import { useNavigate } from 'react-router-dom';


function Sidebar({loading}) {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <Styled.MainSidebar>
      <Styled.SidebarPersonal>
        <Styled.SidebarPersonalName>Sergey.Ivanov</Styled.SidebarPersonalName>
        <Styled.SidebarIcon onClick={handleLogout}>
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