import { useState } from 'react';
import * as S from './NavMenuStyles.js'
import { useNavigate } from "react-router-dom";



const NavMenu = ({handleLogout}) => {
  const [visible, setVisible] = useState(false);

  const burgerClick = () => setVisible(!visible);

  const activeClassName = "underline";
  const navigate = useNavigate();

  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImage src="/img/logo.png" alt="logo" />
      </S.NavLogo>
      <S.NavBurger onClick={burgerClick}>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
      </S.NavBurger>
      {visible && (
        <S.NavMenu>
          <S.MenuList>
            <S.MenuItem>
            <S.NavLink to="/ ">Главное</S.NavLink>
            </S.MenuItem>
            <S.MenuItem>
            <S.NavLink
                to="/favorites"

              >
                Мой плейлист
              </S.NavLink>
            </S.MenuItem>
            <S.MenuItem>
            <S.Button onClick={handleLogout}>Выйти</S.Button>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>
      )}
    </S.MainNav>
  );
};
export default NavMenu;