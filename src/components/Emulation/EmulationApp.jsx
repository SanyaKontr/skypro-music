import { useEffect, useState } from "react";
import NavMenu from "../NavMenu/NavMenu.jsx";
import Search from "../Search/Search.jsx";
import Filters from "../Filters/Filters.jsx";
import App from "../../App.jsx";
import {
    EmulationTracklist,
    EmulationSidebar,
    EmulationPlayer
}
 from "./EmulationLoading.jsx";
 import * as S from "../../App.styles.js";
 import { GlobalStyle } from "../../App.styles.js";

 function EmulationApp() {
  return (
    <S.Wrapper>
      <GlobalStyle />
      <S.Container>
        <S.Main>
          <NavMenu />
          <div>
            <Search />
            <S.CenterblockH2>Треки</S.CenterblockH2>
            <Filters />
            <EmulationTracklist />
          </div>
          <EmulationSidebar />
        </S.Main>
        <EmulationPlayer />
        <footer></footer>
      </S.Container>
    </S.Wrapper>
  );
}
function ShowEmulationApp() {
  const [visibleComponent, setVisibleComponent] = useState(<EmulationApp />);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setVisibleComponent(<App/>);
    }, 10000);

    return () => {
      clearTimeout(timerId);
    };
  });

  return <div>{visibleComponent}</div>;
}

export { EmulationApp, ShowEmulationApp };
