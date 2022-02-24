import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars, FaLock, FaLockOpen } from "react-icons/fa";

export const Nav = styled.nav`
  height: 50px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem calc((100vw - 1200px) / 2);
`;

export const NavLink = styled(Link)`
  font-size: 16px;
  display: flex;
  align-items: center;
  color: white;
  padding: 0 1.8rem;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    padding: 0 1.8rem;
  }
`;
export const NavBtnLink = styled(Link)`
  font-size: 16px;
  font-weight: bold;
  color: gray;
  background: white;
  border-radius: 3px;
  padding: 0px 1.8rem;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;
export const Bars = styled(FaBars)`
  color: #fff;
  margin: 0 1.8rem;
  cursor: pointer;
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
export const NavMenu = styled.div`
  height: 30px;
  line-height: 30px;
  display: flex;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SideMenu = styled.div`
  width: 40%;
  height: fit-content;
  position: fixed;
  display: none;
  top: 0;
  right: -20%;
  background: #060606ff;
  transition: 0.6s ease-in-out;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;
export const NavUl = styled.ul`
  list-style-type: none;
`;

export const NavCloseDiv = styled.div`
  height: 40px;
  justify-content: flex-end;
  align-items: center;
  padding: 0.5rem 1.6rem;
  display: flex;
  & > svg {
    height: 25px;
    width: 25px;
  }
`;
const iconLock = styled(FaLock)`
  margin-right: 3px;
`;
const iconLockOpen = styled(FaLockOpen)`
  margin-right: 3px;
`;
export const MenuOptions = [
  {
    name: "Home",
    path: "/",
    icon: iconLockOpen,
  },
  {
    name: "About",
    path: "/about",
    icon: iconLockOpen,
  },
  {
    name: "Locked",
    path: "/locked",
    icon: iconLock,
  },
];
