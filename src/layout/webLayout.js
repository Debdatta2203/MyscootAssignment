import React from 'react';
import PropTypes from 'prop-types';
import Header from '../elements/header';
import Footer from '../elements/footer';
import Banner from '../components/banner';

const WebLayout = ({ children }) => {
    return (
        <div>
            <Banner 
                heading="Learn From The Top 1% LIVE" 
                text="We partner with the top 1% of instructors to create high-impact CBCs on personal and professional growth for learners all over the world."
                buttonText="Explore programs"
            >
                <Header/>
            </Banner>
            {children}
            <Footer />
        </div>
    );
};

export default WebLayout;

WebLayout.propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
}