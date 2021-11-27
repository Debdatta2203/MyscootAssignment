import React from 'react';
import { useNavigate } from 'react-router-dom';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
    overlap: {
        backgroundColor: '#ffffff',
        borderRadius: '10px',
        padding: '60px 50px',
        transform: 'translateY(-150px)',
    },
    heading: {
        color: '#014949',
        fontFamily: 'Gilroy',
        fontSize: '36px',
        fontWeight: '800',
    },
    boxBtn: {
        backgroundImage: 'linear-gradient(to right, #21B5E0 , #00DEB4)',
        fontFamily: 'Gilroy',
        fontSize: '16px',
        fontWeight: '800',
        color: '#ffffff',
        textTransform: 'capitalize',
        padding: '8px 30px',
    },
}));

const OverlapDiv = () => {
    const classes = useStyles();
    const navigate = useNavigate()

    return (
        <Box className={classes.overlap}>
            <Grid container spacing={0}>
                <Grid item md={6}>
                    <Typography className={classes.heading}>
                        Looking for something more advanced?
                    </Typography>
                </Grid>
                <Grid item md={6} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Button variant="contained" className={classes.boxBtn} onClick={() => navigate('/')}>Check out Our Mentorship Programs</Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default OverlapDiv;