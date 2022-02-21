import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars, FaLock, FaLockOpen } from "react-icons/fa";

export const Nav = styled.nav`
  height: 40px;
  background: #060606ff;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem calc((100vw - 1200px) / 2);
`;

export const NavLink = styled(Link)`
  font-size: 16px;
  color: white;
  padding: 1.8rem;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;
export const NavBtnLink = styled(Link)`
  font-size: 16px;
  color: black;
  background: white;
  border-radius: 3px;
  padding: 10px 1.8rem;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;
export const Bars = styled(FaBars)`
  color: #fff;
  padding: 0 1.8rem;
  cursor: pointer;
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
export const NavMenu = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SideMenu = styled.div`
  width: 40%;
  height: fit-content;
  display: block;
  position: absolute;
  top: 0;
  right: -20%;
  background: #060606ff;
  transition: 0.6s ease-in-out;

  @media screen and (min-width: 768) {
    display: none;
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
export const MenuOptions = [
  {
    name: "Home",
    path: "/home",
    icon: FaLockOpen,
  },
  {
    name: "About",
    path: "/about",
    icon: FaLockOpen,
  },
  {
    name: "Lock",
    path: "/lock",
    icon: FaLock,
  },
];
