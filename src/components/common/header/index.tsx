import { PATH } from "consts";
import { Brand, BrandContent, HeaderContainer, LinkItem, NavList } from "./styles"
import brand from 'assets/dog-face-color-icon.svg';

export const HeaderComponent: React.FC = () => {
  return (
    <HeaderContainer>
      <BrandContent to={PATH.DOCUMENTS}>
        <Brand src ={brand} />
      </BrandContent>
      <NavList>
        <LinkItem to = {PATH.HOME}>Home</LinkItem>
        <LinkItem to = {PATH.DOCUMENTS}>Documents</LinkItem>
      </NavList>
    </HeaderContainer>
  )
}