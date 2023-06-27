import s from './categoryProducts.module.scss'
import {Container} from "react-bootstrap";
import CardGrid from "./CardGrid/CardGrid.jsx";
import {category} from "../../data/index.data.js";

const CategoryProducts = () => {
    return (
        <section className={s.category}>
            <Container>
                <div className={s.category__inner}>
                    <h3>Категорії виробів</h3>
                    <CardGrid cards={category} />
                </div>
            </Container>
        </section>
    );
};

export default CategoryProducts;