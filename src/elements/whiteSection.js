import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(() => ({
    light: {
        backgroundColor: '#ffffff',
        padding: '70px 50px',
        height: 'auto',
    },
}));

const WhiteSection = ({ children }) => {
    const classes = useStyles();

    return (
        <Container className={classes.light}>
            {children}
        </Container>
    );
};

export default WhiteSection;

WhiteSection.propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
}