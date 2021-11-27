import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(() => ({
    image: {
        height: '370px',
        maxWidth: '150px',
        objectFit: 'cover',
        borderRadius: '10px',
    },
    category: {
        fontFamily: 'Gilroy',
        fontSize: '12px',
        color: '#21B5E0',
        fontWeight: '800',
    },
    normal: {
        color: 'rgba(0, 0, 0, 0.5)',
        fontFamily: 'Gilroy',
        fontSize: '12px',
        fontWeight: '500',
        paddingLeft: '20px',
    },
    heading: {
        color: '#014949',
        fontFamily: 'Gilroy',
        fontSize: '24px',
        fontWeight: '800',
        lineHeight: '25px',
        paddingTop: '20px',
    },
    text: {
        color: '#014949',
        fontFamily: 'Gilroy',
        fontSize: '14px',
        fontWeight: '600',
        lineHeight: '18px',
        paddingTop: '10px',
        opacity: '0.5',
    },
    name: {
        color: '#014949',
        fontFamily: 'Gilroy',
        fontSize: '14px',
        fontWeight: '600',
        lineHeight: '18px',
        paddingTop: '10px',
    },
}));

const MemberTestimonial = ({ member }) => {
    const classes = useStyles();
    const { image, category, date, heading, text, name } = member;

    return (
        <Card style={{ width: '500px', height: '370px', boxShadow: 'none', borderRadius: '10px', marginTop: '30px', padding: '10px', position: 'relative' }}>
            <Grid container spacing={0}>
                <Grid item md={4}>
                    <img src={image} alt="member" className={classes.image} />
                </Grid>
                <Grid item md={8} style={{ padding: '10px' }}>
                    <Typography className={classes.category}>
                        {category}
                        <span  className={classes.normal}>
                            {date}
                        </span>
                    </Typography>
                    <Typography className={classes.heading}>
                        {heading}
                    </Typography>
                    <Typography className={classes.text}>
                        {text}
                    </Typography>
                    <Grid container spacing={0} style={{ position: 'absolute', bottom: '1rem' }}>
                        <Grid item md={2} style={{ maxWidth: '4rem' }}>
                            <Avatar src={image} alt="member" />
                        </Grid>
                        <Grid item md={10}>
                            <Typography className={classes.name}>
                                {name}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    );
};

export default MemberTestimonial;

MemberTestimonial.propTypes = {
    member: PropTypes.instanceOf(Object).isRequired,
}