import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

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
        backgroundImage: 'linear-gradient(to right, #21B5E0 , #00DEB4)',
        fontFamily: 'Gilroy',
        fontSize: '14px',
        fontWeight: '800',
        color: '#ffffff',
        textTransform: 'capitalize',
        padding: '4px 25px',
    },
    icon: {
        height: '16px',
        color: '#ffffff',
    },
    mediaIcon: {
        height: '16px',
    },
    heading: {
        color: '#014949',
        fontFamily: 'Gilroy',
        fontSize: '16px',
        fontWeight: '800',
    },
    text: {
        color: '#014949',
        fontFamily: 'Gilroy',
        fontSize: '13px',
        fontWeight: '600',
        opacity: '0.5',
    },
}));

const MemberCard = ({ member, isMobile }) => {
    const classes = useStyles();
    const { image, name, tag, designation, socialMediaIcon, socialMediaLink } = member;

    return (
        <Card style={{ maxWidth: isMobile ? '150px' : '240px', padding: '15px', boxShadow: 'none', borderRadius: '10px', marginBottom: isMobile ? '10px' : '' }}>
            <div className={classes.imageContainer}>
                <img src={image} alt="person" style={{ width: '100%', borderRadius: '10px', }} />
                <div className={classes.overlay} style={{ top: '1rem' }}>
                    <Grid container spacing={0}>
                        <Grid item md={10} xs={10}>
                            <Button variant="contained" className={classes.cardBtn}>{tag}</Button>
                        </Grid>
                        <Grid item md={2} xs={2} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                            <FontAwesomeIcon icon={faPlay} className={classes.icon} />
                        </Grid>
                    </Grid>
                </div>
            </div>
            <CardContent style={{ padding: '10px' }}>
                <Grid container spacing={0}>
                    <Grid item md={10} xs={10}>
                        <Typography className={classes.heading}>
                            {name}
                        </Typography>
                    </Grid>
                    <Grid item md={2} xs={2} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                        <Link to={socialMediaLink}>
                            <FontAwesomeIcon icon={socialMediaIcon} className={classes.mediaIcon} />
                        </Link>
                    </Grid>
                </Grid>
                <Typography className={classes.text}>
                    {designation}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default MemberCard;

MemberCard.propTypes = {
    member: PropTypes.instanceOf(Object).isRequired,
    isMobile: PropTypes.bool.isRequired,
}