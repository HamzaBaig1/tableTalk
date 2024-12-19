import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Pages/Home";
import OfficeChairs from "./Pages/OfficeChairs";
import OfficeTables from "./Pages/OfficeTables";
import DiningChairs from "./Pages/DiningChairs";
import DiningTables from "./Pages/DiningTables";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/OfficeChairs/:activeTab" element={<OfficeChairs />} />

          <Route path="/OfficeTables/:activeTab" element={<OfficeTables />} />
          <Route path="/DiningChairs" element={<DiningChairs />} />
          <Route path="/DiningTables" element={<DiningTables />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
