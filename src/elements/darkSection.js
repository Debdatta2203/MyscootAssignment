import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(() => ({
    solid: {
        backgroundImage: 'linear-gradient(to right, #056A67, #004848)',
        padding: '70px 50px',
        margin: '0px',
    },
}));

const DarkSection = ({ children }) => {
    const classes = useStyles();

    return (
        <div className={classes.solid}>
            {children}
        </div>
    );
};

export default DarkSection;

DarkSection.propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
}