import { FooterComponent } from "./footer";
import { HeaderComponent } from "./header";
import { LayoutContainer, SectionContent } from "./styles";

interface LayoutComponentProps {
  children?: React.ReactNode;
}

export const LayoutComponent: React.FC<LayoutComponentProps> = ({children}) => {
  return (
    <LayoutContainer>
      <HeaderComponent/>
      <SectionContent>{children}</SectionContent>
      <FooterComponent/>
    </LayoutContainer>
  )
}

export const WithLayout = (Component: React.FC) => () => {
  return (
    <LayoutComponent>
      <Component/>
    </LayoutComponent>
  )
}