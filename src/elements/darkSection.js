import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(() => ({
    solid: {
        backgroundImage: 'linear-gradient(to right, #056A67, #004848)',
        padding: '70px 50px',
    },
}));

const DarkSection = ({ children }) => {
    const classes = useStyles();

    return (
        <Container className={classes.solid}>
            {children}
        </Container>
    );
};

export default DarkSection;

DarkSection.propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
}