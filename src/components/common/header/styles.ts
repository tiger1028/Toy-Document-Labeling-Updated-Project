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
export const BrandContent = styled(NavLink)`
  margin-left: 20px;
`

export const Brand = styled.img`
  width: 50px;
  height: 50px;
`;

export const NavList = styled.div`
  display: flex;
  margin-right: 30px;
  gap: 15px;
`;

export const LinkItem = styled(NavLink)`
  text-decoration: none;  
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
