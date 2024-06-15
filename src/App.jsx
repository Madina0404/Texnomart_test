import Header from "./components/Header";
import "./index.css";
import Sale from "./pages/Sale";
import { Route, Routes } from "react-router-dom";
import Sotuvchilar from "./pages/Sotuvchilar";
import Smartfonlar from "./pages/smartfonlar";
import Muzlatkichlar from "./pages/muzlatkichlar";
import Changyutgich from "./pages/Changyutgich";
import Noutbooklar from "./pages/Noutbooklar";
import Televizorlar from "./pages/Televizorlar";
import BarchaQategoriyalar from "./pages/BarchaQategoriyalar";
import MuddatliTolov from "./pages/MuddatliTolov";
import Footer from "./components/Footer";

import DynamicPage1 from "./pages/DynamicPage1";
import Home from "./pages/Home";
import DynamicPage2 from "./pages/DynamicPage2";
import NotFound from "./components/NotFound";
import Karzinka from "./pages/Karzinka";

function App() {
  return (
    <div className=" max-w-[1800px] mx-auto">
      <div className={"flex flex-col px-10"}>
        <Header />

        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound/>}/>
            <Route path="/sale" element={<Sale />} />
            <Route path="/MuddatliTolov" element={<MuddatliTolov />} />
            <Route path="/Sotuvchilar" element={<Sotuvchilar />} />
            <Route path="/Smartfonlar" element={<Smartfonlar />} />
            <Route path="/Muzlatkichlar" element={<Muzlatkichlar />} />
            <Route path="/Changyutgich" element={<Changyutgich />} />
            <Route path="/Noutbooklar" element={<Noutbooklar />} />
            <Route path="/Televizorlar" element={<Televizorlar />} />
            <Route path="/Karzinka" element={<Karzinka/>}/>
            <Route
              path="/BarchaQategoriyalar"
              element={<BarchaQategoriyalar />}
            />
            <Route path="/XitSavdo/:id" element={<DynamicPage1 />} />
            <Route path="/products/:id" element={<DynamicPage2 />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
