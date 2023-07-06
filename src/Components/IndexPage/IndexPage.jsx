
import Main from "../Main/Main.jsx";
import CategoryProducts from "../CategoryProducts/CategoryProducts.jsx";
import Cards from "../Cards/Cards.jsx";
import According from "../According/Accordion.jsx";
import Company from "../Company/Company.jsx";

const IndexPage = () => {
    return (
            <div>
                <Main />
                <CategoryProducts />
                <Cards />
                <According />
            </div>
    );
};

export default IndexPage;