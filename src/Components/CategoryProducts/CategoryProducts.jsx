import s from './categoryProducts.module.scss'
import {Container} from "react-bootstrap";

const CategoryProducts = () => {
    return (
        <section className={s.category}>
            <Container>
                <div className={s.category__inner}>
                    <h3>Категорії виробів</h3>

                </div>
            </Container>
        </section>
    );
};

export default CategoryProducts;