import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import Star from '../assets/star.svg';
import Workshop1 from '../assets/workshop/workshop1.png';

const useStyles = makeStyles(() => ({
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
    cardBtn: {
        backgroundColor: '#C1091C',
        fontFamily: 'Gilroy',
        fontSize: '14px',
        fontWeight: '800',
        color: '#FFB8B8',
        textTransform: 'capitalize',
        padding: '4px 20px',
        boxShadow: 'none',
        cursor: 'text',
        '&:hover': {
            backgroundColor: '#C1091C',
            boxShadow: 'none',
        }
    },
    icon: {
        height: '16px',
        color: '#056966',
        backgroundColor: '#ffffff',
        borderRadius: '50%',
        border: '10px solid #ffffff',
        cursor: 'pointer',
    },
    name: {
        color: '#ffffff',
        fontFamily: 'Gilroy',
        fontSize: '16px',
        fontWeight: '800',
    },
    caption: {
        color: '#ffffff',
        fontFamily: 'Gilroy',
        fontSize: '16px',
        fontWeight: '600',
    },
    normal: {
        color: 'rgba(0, 0, 0, 0.5)',
        fontFamily: 'Gilroy',
        fontSize: '14px',
        fontWeight: '500',
    },
    bold: {
        color: 'rgba(0, 0, 0, 0.5)',
        fontFamily: 'Gilroy',
        fontSize: '14px',
        fontWeight: '700',
    },
    heading: {
        color: '#014949',
        fontFamily: 'Gilroy',
        fontSize: '24px',
        fontWeight: '800',
    },
    price: {
        color: '#18ABD6',
        fontFamily: 'Gilroy',
        fontSize: '24px',
        fontWeight: '800',
    },
    moreBtn: {
        backgroundImage: 'linear-gradient(to right, #21B5E0 , #00DEB4)',
        fontFamily: 'Gilroy',
        fontSize: '16px',
        fontWeight: '800',
        color: '#ffffff',
        textTransform: 'capitalize',
        width: '100%',
        marginTop: '20px',
    },
}));

const InfoCard = ({workshop}) => {
    const classes = useStyles();
    const navigate = useNavigate();
    const { seats, image, name, designation, date, title, oldPrice, newPrice, stars, students, link } = workshop;

    return (
        <Card style={{ maxWidth: '350px', boxShadow: 'none', borderRadius: '10px', marginTop: '30px' }}>
            <div className={classes.imageContainer}>
                <img src={image} alt="person" style={{ height: '250px', objectFit: 'contain' }} />
                <div className={classes.overlay} style={{ top: '1rem' }}>
                    <Grid container spacing={0}>
                        <Grid item md={10}>
                            <Button variant="contained" className={classes.cardBtn}>{seats}</Button>
                        </Grid>
                        <Grid item md={2} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                            <FontAwesomeIcon icon={faPlay} className={classes.icon} />
                        </Grid>
                    </Grid>
                </div>
                <div className={classes.overlay} style={{ bottom: '1rem' }}>
                    <Typography className={classes.name}>
                        {name}
                    </Typography>
                    <Typography className={classes.caption}>
                        {designation}
                    </Typography>
                </div>
            </div>
            <CardContent style={{ padding: '20px' }}>
                <Grid container spacing={0}>
                    <Grid item md={12} style={{ height: '21px'}}>
                        <Typography className={classes.normal}>
                            {seats !== 'Sold Out' && `Next Session on ${date}`}
                        </Typography>
                    </Grid>
                    <Grid item md={6}>
                        <Typography className={classes.heading}>
                            {title}
                        </Typography>
                    </Grid>
                    <Grid item md={6} style={{ textAlign: 'right' }}>
                        <Typography className={classes.normal} style={{ textDecoration: 'line-through' }}>
                            {oldPrice}
                        </Typography>
                        <Typography className={classes.price}>
                            {newPrice}
                        </Typography>
                    </Grid>
                    <Grid container style={{ border : '1px solid rgba(0, 0, 0, 0.05)', borderRadius: '10px', padding: '14px 5px 10px' }}>
                        <Grid item md={6}>
                            <Typography className={classes.bold}>
                                <img src={Star} alt="stars" style={{paddingRight: '5px'}} />
                                {stars}
                            </Typography>
                        </Grid>
                        <Grid item md={6} style={{ textAlign: 'right' }}>
                            <Typography className={classes.normal}>
                                <span className={classes.bold}>
                                    {students}&nbsp;
                                </span>
                                Students Enrolled
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Button variant="contained" className={classes.moreBtn} onClick={() => navigate({link})}>Learn More</Button>
            </CardContent>
        </Card>
    );
};

export default InfoCard;

InfoCard.propTypes = {
    workshop: PropTypes.instanceOf(Object).isRequired,
}