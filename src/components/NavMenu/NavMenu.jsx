import { useState } from 'react';
import * as S from './NavMenuStyles.js'
import { useNavigate } from "react-router-dom";
const NavMenu = () => {
  const [visible, setVisible] = useState(false);
  const burgerClick = () => setVisible(!visible);
  const activeClassName = "underline";
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
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
              <S.MenuLink href="#">Главное</S.MenuLink>
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