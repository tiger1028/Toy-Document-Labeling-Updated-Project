import { BrowserRouter, Routes, Route} from "react-router-dom";
import { DashBoardPage, DocumentPage, DocumentsPage } from "./pages";
import { DocumentContextProvider } from "./contexts";
import { LayoutComponent } from "./components/common";

export const App = () => {
  return (
    <DocumentContextProvider>
      <BrowserRouter>
        <LayoutComponent>
          <Routes>
            <Route path="/" element={<DashBoardPage />} />
            <Route path="/documents" element={<DocumentsPage />} />
            <Route path="/documents/:id" element = {<DocumentPage/>} />
          </Routes>
         </LayoutComponent>
        </BrowserRouter>
    </DocumentContextProvider>
  );
};
