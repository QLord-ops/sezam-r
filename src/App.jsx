import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";



const App = () => {



    return (
        <>
            <BrowserRouter>

                <Header/>
                <Footer/>
            </BrowserRouter>
        </>
    );
};

export default App;