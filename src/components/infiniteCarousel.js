import React from 'react';
import PropTypes from 'prop-types';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const InfiniteCarousel = ({ children }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    return (
        <div>
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    );
};

export default InfiniteCarousel;

InfiniteCarousel.propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
}