import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup';

const useStyles = makeStyles(() => ({
    box: {
        backgroundColor: '#ffffff',
        width: '200px',
        height: '170px',
        padding: '7px',
        borderRadius: '10px',
    },
    number: {
        color: '#014949',
        fontFamily: 'Gilroy',
        fontSize: '36px',
        fontWeight: '800',
    },
    image: {
        height: '40px',
        objectFit: 'contain',
    },
    text: {
        color: 'rgba(3, 89, 88, 0.5)',
        fontFamily: 'Gilroy',
        fontSize: '16px',
        fontWeight: '700',
    },
}));

const CounterupCard = ({ image, limit, suffix, text }) => {
    const classes = useStyles();

    return (
        <div>
            <Box className={classes.box}>
                <Grid container spacing={0}>
                    <Grid 
                        item 
                        md={5} 
                        style={{ 
                            backgroundImage: 'linear-gradient(156.93deg, #21B5E0 0%, #00DEB4 100%)', 
                            borderRadius: '10px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <img src={image} alt="icons" className={classes.image} />
                    </Grid>
                    <Grid 
                        item 
                        md={7} 
                        style={{ 
                            padding: '20px 10px', 
                            display: 'flex',
                            // justifyContent: 'center',
                            alignItems: 'center', 
                        }}>
                        <Typography className={classes.text}>
                            <CountUp
                                className={classes.number}
                                start={0}
                                end={limit}
                                duration={2.75}
                                useEasing={true}
                                useGrouping={true}
                                separator=" "
                                decimals={0}
                                decimal=","
                                prefix=""
                                suffix={suffix}
                            />
                            <br />
                            {text}
                        </Typography>   
                    </Grid>
                </Grid>    
            </Box>
        </div>
    );
};

export default CounterupCard;

CounterupCard.propTypes = {
    image: PropTypes.string.isRequired,
    limit: PropTypes.number.isRequired,
    suffix: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}