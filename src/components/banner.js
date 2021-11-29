import React from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useTheme from '@material-ui/core/styles/useTheme';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
    bannerSection: {
        backgroundImage: 'linear-gradient(to right, #E5FFF4 , rgba(229, 255, 252, 0.84) 83.7%, rgba(229, 255, 252, 0) 100%)',
        height: '700px',
    },
    bannerSectionMob: {
        backgroundImage: 'linear-gradient(to right, #E5FFF4 , rgba(229, 255, 252, 0.84) 83.7%, rgba(229, 255, 252, 0) 100%)',
        height: '500px',
    },
    bannerTextDiv: {
        textAlign: 'center',
        maxWidth: '590px',
        paddingBottom: '30px',
    },
    heading1: {
        color: '#014949',
        fontFamily: 'Gilroy',
        fontSize: '64px',
        fontWeight: '800',
        padding: '50px',
        paddingBottom: '10px',
    },
    heading1Mob: {
        color: '#014949',
        fontFamily: 'Gilroy',
        fontSize: '34px',
        fontWeight: '800',
        padding: '50px',
        paddingBottom: '10px',
    },
    bannerText: {
        color: '#01494980',
        fontFamily: 'Gilroy',
        fontSize: '18px',
        fontWeight: '500',
        paddingBottom: '30px',
    },
    bannerBtn: {
        backgroundImage: 'linear-gradient(to right, #21B5E0 , #00DEB4)',
        fontFamily: 'Gilroy',
        fontSize: '16px',
        fontWeight: '800',
        color: '#ffffff',
        textTransform: 'capitalize',
        padding: '6px 40px',
    }
}));

const Banner = ({heading, text, buttonText, children}) => {
    const classes = useStyles();
    const appTheme = useTheme();
    const isMobile = useMediaQuery(appTheme.breakpoints.down('sm'), { noSsr: true });

    return (
        <div className={isMobile ? classes.bannerSectionMob : classes.bannerSection}>
            {children}
            <Container style={{ display: 'flex', justifyContent: 'center' }}>
                <Box className={classes.bannerTextDiv}>
                    <Typography className={isMobile ? classes.heading1Mob : classes.heading1}>
                        {heading}
                    </Typography>
                    <Typography className={classes.bannerText}>
                        {text}
                    </Typography>
                    <Button variant="contained" className={classes.bannerBtn}>{buttonText}</Button>
                </Box>
            </Container>
        </div>
    );
};

export default Banner;

Banner.propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    heading: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
}