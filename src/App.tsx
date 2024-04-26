import { BrowserRouter, Routes, Route} from "react-router-dom";
import { DashBoardPage, DocumentPage, DocumentsPage } from "./pages";
import { DocumentContextProvider } from "./contexts";

export const App = () => {
  return (
    <DocumentContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashBoardPage />} />
          <Route path="/documents" element={<DocumentsPage />} />
          <Route path="/documents/:id" element = {<DocumentPage/>} />
        </Routes>
      </BrowserRouter>
    </DocumentContextProvider>
  );
};
