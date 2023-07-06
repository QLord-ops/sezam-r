import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import IndexPage from "./Components/IndexPage/IndexPage.jsx";
import MetalDoors from "./Pages/MetalDoors/MetalDoors.jsx";
import AutomaticGates from "./Pages/AutomaticGates/AutomaticGates.jsx";
import BarsOnWindow from "./Pages/BarsOnWindow/BarsOnWindow.jsx";
import Ferm from "./Pages/Ferm/Ferm.jsx";
import MetalShutters from "./Pages/MetalShutters/MetalShutters.jsx";
import MetalFences from "./Pages/MetalFences/MetalFences.jsx";
import ForgedProducts from "./Pages/ForgedProducts/ForgedProducts.jsx";
import Mdf from "./Pages/Mdf/Mdf.jsx";
import InteriorDoors from "./Pages/InteriorDoors/InteriorDoors.jsx";
import MetalWindow from "./Pages/MetalWindow/MetalWindow.jsx";
import Company from "./Components/Company/Company.jsx";



const App = () => {


    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<IndexPage />} />
                    <Route path="/metal-doors" element={<MetalDoors />} />
                    <Route path="/automatic-gates" element={<AutomaticGates />} />
                    <Route path="/bars-on-window" element={<BarsOnWindow />} />
                    <Route path="/ferm" element={<Ferm />} />
                    <Route path="/metal-shutters" element={<MetalShutters />} />
                    <Route path="/metal-fences" element={<MetalFences />} />
                    <Route path="/forged-products" element={<ForgedProducts />} />
                    <Route path="/mdf" element={<Mdf />} />
                    <Route path="/interior-doors" element={<InteriorDoors />} />
                    <Route path="/metal-windows" element={<MetalWindow />} />
                    <Route path="/aboutCompany" element={<Company />} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    );
};

export default App;