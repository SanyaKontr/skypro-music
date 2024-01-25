import * as Styled from "./SearchStyle.js";
function Search () {
  return(
  <Styled.CenterblockSearch>
  <Styled.SearchSvg>
  <use xlinkHref="/icon/sprite.svg#icon-search"></use>
  </Styled.SearchSvg>
  <Styled.SearchText
    type="search"
    placeholder="Поиск"
    name="search" />
</Styled.CenterblockSearch>
);
}
export default Search;