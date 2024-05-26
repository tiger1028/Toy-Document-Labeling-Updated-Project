import { FooterComponent } from "../footer";
import { HeaderComponent } from "../header";

interface LayoutComponentProps {
  children?: React.ReactNode;
}

export const LayoutComponent: React.FC<LayoutComponentProps> = ({children}) => {
  return (
    <>
      <HeaderComponent/>
        {children}
      <FooterComponent/>
    </>
  )
}
