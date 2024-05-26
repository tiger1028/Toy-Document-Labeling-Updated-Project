import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #833737;
  width: 100%;
  height: 70px;
  padding: 20px;
`;

export const BrandContent = styled(NavLink)`
`;

export const Brand = styled.img`
  width: 50px;
  height: 50px;
`;

export const NavList = styled.div`
  display: flex;
  gap: 15px;
`;

export const LinkItem = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  background-color: #833737;
  height: 40px;
  color: white;
  font-size: 20px;
  border: none;
  &:hover {
    color: #150C0C;
  }
`;
