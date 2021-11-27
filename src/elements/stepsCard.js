import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
    box: {
        backgroundColor: '#ffffff',
        border: '1px solid rgba(30, 186, 220, 0.5)',
        borderRadius: '10px',
        padding: '0 30px 20px',
        width: '280px',
    },
    tag: {
        color: '#21b5e0',
        fontFamily: 'Gilroy',
        fontSize: '72px',
        fontWeight: '800',
        marginTop: '-30px',
    },
    heading: {
        color: '#014949',
        fontFamily: 'Gilroy',
        fontSize: '24px',
        fontWeight: '800',
    },
    text: {
        color: '#014949',
        fontFamily: 'Gilroy',
        fontSize: '16px',
        fontWeight: '600',
        opacity: '0.5',
    },
}));

const StepsCard = ({ step }) => {
    const classes = useStyles();
    const { stepNumber, stepName, description } = step;

    return (
        <Box className={classes.box}>
            <Typography className={classes.tag}>
                {stepNumber}
            </Typography>
            <Typography className={classes.heading}>
                {stepName}
            </Typography>
            <Typography className={classes.text}>
                {description}
            </Typography>
        </Box>
    );
};

export default StepsCard;

StepsCard.propTypes = {
    step: PropTypes.instanceOf(Object).isRequired,
}