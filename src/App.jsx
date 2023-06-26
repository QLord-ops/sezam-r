import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import IndexPage from "./Components/IndexPage/IndexPage.jsx";


const App = () => {


    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<IndexPage />} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    );
};

export default App;