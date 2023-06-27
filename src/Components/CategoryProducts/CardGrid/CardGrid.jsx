import {useEffect, useState} from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import PropTypes from 'prop-types';
import './CardGrid.css';
import {Link} from 'react-router-dom';

const CardGrid = ({cards}) => {
    const [showCards, setShowCards] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const cardGridElement = document.getElementById('card-grid');
        const topOffset = cardGridElement.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        const onScroll = () => {
            const scrollOffset = window.pageYOffset;
            const showThreshold = topOffset - windowHeight + 200; // Настройте пороговое значение для определения, когда показывать карточки
            setShowCards(scrollOffset > showThreshold);
        };

        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return (
        <div id="card-grid" className="card-grid">
            <TransitionGroup component={null}>
                {showCards && (
                    <CSSTransition classNames="card-animation" timeout={1000}>
                        <div className="card-container">
                            {cards.map((card) => (
                                <Link to={card.to} key={card.id}>
                                    <div  className="card">
                                        <img src={card.img} alt={card.text}/>
                                        <p>{card.text}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

CardGrid.propTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            to: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default CardGrid;
