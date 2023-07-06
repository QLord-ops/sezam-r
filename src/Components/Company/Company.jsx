import React from 'react';
import s from "./company.module.scss"
import {Container} from "react-bootstrap";

const Company = () => {
    return (
        <section className={s.company}>
            <Container>
                <div className="s.company__aboutCompany">
                    <div className="s.company__col-md-12">
                        <div className="s.company__card">
                            <div className="s.company__card-body">
                                <h5 className="s.company__card-title">
                                    Безпека: ми використовуємо передові механізми безпеки, такі як багатоточкові замки, антивандальні, потайні петлі і системи контролю доступу, щоб забезпечити максимальний захист вашого приміщення від несанкціонованого доступу.
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Company;