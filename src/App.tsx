import { BrowserRouter, Routes, Route} from "react-router-dom";
import { DashBoardPage, DocumentPage, DocumentsPage } from "pages";
import { DocumentContextProvider } from "contexts";
import { LayoutComponent } from "components";
import { PATH } from 'consts';

export const App = () => {
  return (
    <DocumentContextProvider>
      <BrowserRouter>
        <LayoutComponent>
          <Routes>
            <Route path={PATH.HOME} element={<DashBoardPage />} />
            <Route path={PATH.DOCUMENTS} element={<DocumentsPage />} />
            <Route path={PATH.DOCUMENTBYID} element = {<DocumentPage/>} />
          </Routes>
         </LayoutComponent>
        </BrowserRouter>
    </DocumentContextProvider>
  );
};
