import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles(() => ({
    box: {
        backgroundColor: '#ffffff',
        borderRadius: '10px',
        width: '265px',
        height: '330px',
        marginTop: '10px',
        marginBottom: '10px',
    },
    imageContainer: {
        position: 'relative',
        width: '100%',
    },
    overlay: {
        position: 'absolute',
        zIndex: '999',
        left: '1rem',
        right: '1rem',
    },
    icon: {
        height: '40px',
        color: '#ffffff',
    },
    avatar: {
        height: '50px',
        width: '50px',
        border: '1px solid #ffffff',
    },
    lightText: {
        color: '#ffffff',
        fontFamily: 'Gilroy',
        fontSize: '14px',
        fontWeight: '800',
    },
}));

const StudentCardType1 = ({ student }) => {
    const { image, name } = student;
    const classes = useStyles();

    return (
        <Box className={classes.box}>
            <div className={classes.imageContainer}>
                <img src={image} alt="person" style={{ height: '330px', width: '100%', borderRadius: '10px', }} />
                <div className={classes.overlay} style={{ bottom: '50%', left: '50%' }}>
                    <FontAwesomeIcon icon={faPlay} className={classes.icon} />
                </div>
                <div className={classes.overlay} style={{ bottom: '1.8rem' }}>
                    <Grid container spacing={0}>
                        <Grid item md={3}>
                            <Avatar src={image} alt={name} className={classes.avatar} />
                        </Grid>
                        <Grid item md={9} style={{ display: 'flex', alignItems: 'center'}}>
                            <Typography className={classes.lightText}>
                                {name}
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Box>
    );
};

export default StudentCardType1;

StudentCardType1.propTypes = {
    student: PropTypes.instanceOf(Object).isRequired
};