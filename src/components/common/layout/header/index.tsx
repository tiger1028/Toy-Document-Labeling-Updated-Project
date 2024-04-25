import { Brand, HeaderContainer, NavItem, NavList } from "./styles"
export const HeaderComponent: React.FC = () => {
  return (
    <HeaderContainer>
      <Brand />
      <NavList>
        <NavItem to = '/'>Home</NavItem>
        <NavItem to = '/documents'>Documents</NavItem>
      </NavList>
    </HeaderContainer>
  )
}