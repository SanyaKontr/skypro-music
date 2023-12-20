import * as Styled from './PlaylistsStyle.js'
import { Categories } from "../../constants.js";
function Playlists() {
  return  (
        <Styled.SidebarBlock>
              <Styled.SidebarList>
              {Categories.map((category) => {
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