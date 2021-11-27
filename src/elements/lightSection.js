import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(() => ({
    light: {
        // backgroundImage: 'linear-gradient(180deg, rgba(5, 217, 186, 0.1) 0.01%, rgba(5, 217, 186, 0.1) 0.01%, rgba(5, 218, 186, 0) 100%)',
        backgroundColor: 'rgba(5, 217, 186, 0.1)',
        padding: '70px 50px',
        height: 'auto',
    },
}));

const LightSection = ({ children }) => {
    const classes = useStyles();

    return (
        <Container className={classes.light}>
            {children}
        </Container>
    );
};

export default LightSection;

LightSection.propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
}