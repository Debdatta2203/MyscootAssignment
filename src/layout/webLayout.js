import React from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useTheme from '@material-ui/core/styles/useTheme';
import Header from '../elements/header';
import MobileHeader from '../elements/mobileHeader';
import Footer from '../elements/footer';
import Banner from '../components/banner';

const WebLayout = ({ children }) => {
    const appTheme = useTheme();
    const isMobile = useMediaQuery(appTheme.breakpoints.down('sm'), { noSsr: true });

    return (
        <div style={{ overflowX: 'none' }}>
            <Banner 
                heading="Learn From The Top 1% LIVE" 
                text="We partner with the top 1% of instructors to create high-impact CBCs on personal and professional growth for learners all over the world."
                buttonText="Explore programs"
            >
                {isMobile 
                    ? <MobileHeader />
                    : <Header />
                }
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