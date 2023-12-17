import * as Styled from './PlaylistsStyle.js'

function Playlists() {
  return  (
    <Styled.SidebarBlock>
    <Styled.SidebarList>
      <Styled.SidebarItem>
        <Styled.SidebarLink href="#">
          <Styled.SidebarImg
            src="img/playlist01.png"
            alt="day's playlist" />
              </Styled.SidebarLink>
                </Styled.SidebarItem>
                <Styled.SidebarItem>
                  <Styled.SidebarLink href="#">
                    <Styled.SidebarImg
                      src="img/playlist02.png"
                      alt="day's playlist" />
                         </Styled.SidebarLink>
                </Styled.SidebarItem>
                <Styled.SidebarItem>
                  <Styled.SidebarLink href="#">
                    <Styled.SidebarImg
                      src="img/playlist03.png"
                      alt="day's playlist" />
                      
                      </Styled.SidebarLink>
                </Styled.SidebarItem>
              </Styled.SidebarList>
            </Styled.SidebarBlock>
    )
}
export default Playlists;