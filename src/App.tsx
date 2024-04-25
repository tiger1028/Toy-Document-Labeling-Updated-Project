import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashBoardPage, DocumentsPage } from "./pages";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashBoardPage />} />
          <Route path="/documents" element = {<DocumentsPage/>} />
        </Routes>
      </BrowserRouter>
      <DashBoardPage/>
    </>
  );
};
