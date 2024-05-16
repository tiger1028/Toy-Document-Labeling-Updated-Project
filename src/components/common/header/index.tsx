import { Brand, BrandContent, HeaderContainer, LinkItem, NavList } from "./styles"
import brand from './dog-face-color-icon.svg';

export const HeaderComponent: React.FC = () => {
  return (
    <HeaderContainer>
      <BrandContent to="/">
        <Brand src ={brand} />
      </BrandContent>
      <NavList>
        <LinkItem to = '/'>Home</LinkItem>
        <LinkItem to = '/documents'>Documents</LinkItem>
      </NavList>
    </HeaderContainer>
  )
}