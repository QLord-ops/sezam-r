import { useState } from 'react';
import './Slider.scss';
import PropTypes from "prop-types";

const Slider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
        <section className='slider'>
            <button className='left-arrow' onClick={prevSlide}> &lt;  </button>
            <button className='right-arrow' onClick={nextSlide}>&gt;</button>
            {slides.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (<img src={slide.image} alt='slide image' className='image' />)}
                    </div>
                );
            })}
        </section>
    );
};

Slider.propTypes = {
    slides: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Slider;
