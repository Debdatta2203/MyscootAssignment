import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';

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
        <div className={classes.light}>
            {children}
        </div>
    );
};

export default WhiteSection;

WhiteSection.propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
}