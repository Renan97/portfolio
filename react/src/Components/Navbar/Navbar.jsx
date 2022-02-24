import React, { useState } from "react";
import {
  Nav,
  NavLink,
  NavBtnLink,
  Bars,
  NavMenu,
  SideMenu,
  MenuOptions,
  NavUl,
  NavCloseDiv,
} from "./NavbarElements";
import { RiCloseFill } from "react-icons/ri";

function Navbar() {
  const [openedSideMenu, setOpenedSideMenu] = useState(false);
  return (
    <Nav>
      <NavLink to="/Home">RR.</NavLink>
      <Bars onClick={() => setOpenedSideMenu(true)}></Bars>
      <NavMenu>
        {MenuOptions.map((option) => (
          <NavLink key={option.name} to={option.path}>
            <option.icon></option.icon>
            {option.name}
          </NavLink>
        ))}
        <NavBtnLink to="/signin">Sign In</NavBtnLink>
      </NavMenu>
      <SideMenu style={{ right: openedSideMenu ? "0px" : "-41%" }}>
        <NavCloseDiv onClick={() => setOpenedSideMenu(false)}>
          <RiCloseFill></RiCloseFill>
        </NavCloseDiv>
        <NavUl>
          {MenuOptions.map((option) => (
            <li key={option.name}>
              <NavLink to={option.path}>
                <option.icon></option.icon> {option.name}
              </NavLink>
            </li>
          ))}
        </NavUl>
      </SideMenu>
    </Nav>
  );
}

export default Navbar;
