import * as Styled from './PlaylistsStyle.js'
import { Categories } from "../../constants.js";
function Playlists({loading}) {
  return  (
        <Styled.SidebarBlock>
              <Styled.SidebarList>
              {loading ? ([1,2,3].map(()=>(
                 <Styled.SidebarItem>
                 <Styled.SidebarLink href="#">
                   <img src="/icon/sidebar.svg" alt="Плейлист загружается" />
                 </Styled.SidebarLink>
               </Styled.SidebarItem>
              )))
            :
            Categories.map((category) => {
              return (
                <Styled.SidebarItem key={category.id}>
                  <Styled.SidebarLink
                    id={category.id}
                    to={`/category/${category.id}`}
                  >
                    <Styled.SidebarImg src={category.img} alt={category.alt} />
                  </Styled.SidebarLink>
                </Styled.SidebarItem>
              );
            })}

              </Styled.SidebarList>
            </Styled.SidebarBlock>
    )
}
export default Playlists;