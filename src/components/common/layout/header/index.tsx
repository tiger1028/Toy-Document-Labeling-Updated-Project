import { Brand, HeaderContainer, LinkContent, NavItem, NavList } from "./styles"
export const HeaderComponent: React.FC = () => {
  return (
    <HeaderContainer>
      <Brand />
      <NavList>
        <LinkContent to = '/'>
          <NavItem>Home</NavItem>
        </LinkContent>
        <LinkContent to = '/documents'>
          <NavItem>Documents</NavItem>
        </LinkContent>
      </NavList>
    </HeaderContainer>
  )
}