import React from 'react';
import { useNavigate } from 'react-router-dom';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(() => ({
    box: {
        backgroundImage: 'linear-gradient(to right, #056A67, #004848)',
        borderRadius: '10px',
        padding: '60px 50px',
        // transform: 'translateY(-150px)',
    },
    heading: {
        color: '#ffffff',
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
    text: {
        color: '#ffffff',
        fontFamily: 'Gilroy',
        fontSize: '16px',
        fontWeight: '600',
        opacity: '0.5',
        width: '90%',
    },
    newsletterDiv: {
        backgroundColor: '#ffffff',
        borderRadius: '10px',
        padding: '0px 20px'
    },
    normal: {
        color: 'rgba(0, 0, 0, 0.8)',
        fontFamily: 'Gilroy',
        fontSize: '16px',
        fontWeight: '500',
        paddingTop: '5px',
        width: '300px',
    },
    noBorder: {
        border: 'none',
    },
}));

const NewsLetter = () => {
    const classes = useStyles();
    const navigate = useNavigate()

    return (
        <Box className={classes.box}>
            <Grid container spacing={0}>
                <Grid item md={6}>
                    <Typography className={classes.heading}>
                        Be looped into future offerings 
                    </Typography>
                    <Typography className={classes.text}>
                        Get updates on new programs, workshops, the latest developments, and community activities, straight to your inbox.
                    </Typography>
                </Grid>
                <Grid item md={6} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Box className={classes.newsletterDiv}>
                        <Grid container spacing={0}>
                            <Grid item md={6}  style={{ display: 'flex' , alignItems: 'center' }}>
                                {/* <Typography className={classes.normal}>
                                    Emai
                                </Typography> */}
                                <TextField 
                                    variant="outlined"
                                    margin="none"
                                    fullWidth
                                    // className={classes.normal}
                                    placeholder="Email Address"
                                    InputProps={{
                                        disableUnderline: true,
                                        classes: {
                                          notchedOutline: classes.noBorder,
                                          root: classes.normal,
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item md={6} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                                <Button variant="contained" className={classes.boxBtn} onClick={() => navigate('/')}>Subscribe</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default NewsLetter;