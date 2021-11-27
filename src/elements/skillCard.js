import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles(() => ({
    box: {
        backgroundColor: 'transparent',
        width: '350px',
    },
    icon: {
        fontSize: '10px',
        fontWeight: '400',
        color: '#ffffff',
        backgroundColor: '#056966',
        borderRadius: '50%',
        border: '4px solid #056966',
    },
    heading: {
        paddingLeft: '10px',
        color: '#014949',
        fontFamily: 'Gilroy',
        fontSize: '17px',
        fontWeight: '800',
    },
    text: {
        color: '#014949',
        fontFamily: 'Gilroy',
        fontSize: '14px',
        fontWeight: '600',
        opacity: '0.5',
    },
}));

const SkillCard = ({ skill }) => {
    const classes = useStyles();
    const { heading, text } = skill;

    return (
        <Box className={classes.box}>
            <Typography>
                <FontAwesomeIcon icon={faCircle} className={classes.icon} />
                <span className={classes.heading}>
                    {heading}
                </span>
            </Typography>
            <Typography className={classes.text}>
                {text}
            </Typography>
        </Box>
    );
};

export default SkillCard;

SkillCard.propTypes = {
    skill: PropTypes.instanceOf(Object).isRequired,
}