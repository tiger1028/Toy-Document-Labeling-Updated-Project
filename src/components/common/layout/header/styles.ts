import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #833737;
  width: 100%;
  height: 70px;
`;

export const Brand = styled.image`
  width: 50px;
  height: 50px;
`;

export const NavList = styled.div`
  display: flex;
  margin-right: 30px;
  gap: 15px;
`;

export const LinkContent = styled(NavLink)`
  text-decoration: none;

`;

export const NavItem = styled.button`
  cursor: pointer;
  background-color: #833737;
  width: 100px;
  height: 40px;
  color: white;
  font-size: 20px;
  font-weight: 400;
  border-radius: 10px;
  border: none;
  &:hover {
    color: #150C0C;
  }
`;