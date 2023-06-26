import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Main from "./Components/Main/Main.jsx";



const App = () => {



    return (
        <>
            <BrowserRouter>
                <Header/>
                <Main />

                <Footer/>
            </BrowserRouter>
        </>
    );
};

export default App;