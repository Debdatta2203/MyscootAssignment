import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Comment from '../assets/comment.svg';
import Share from '../assets/share.svg';
import Like from '../assets/like.svg';

const useStyles = makeStyles(() => ({
    box: {
        backgroundColor: '#ffffff',
        borderRadius: '10px',
        width: '100%',
        height: 'auto',
        padding: '20px',
        marginTop: '10px',
        marginBottom: '10px',
    },
    darkText: {
        color: '#014949',
        fontFamily: 'Gilroy',
        fontSize: '14px',
        fontWeight: '800',
    },
    text: {
        width: '90%',
        color: '#014949',
        fontFamily: 'Gilroy',
        fontSize: '14px',
        fontWeight: '800',
        opacity: '0.5',
    },
    normal: {
        color: 'rgba(0, 0, 0, 0.5)',
        fontFamily: 'Gilroy',
        fontSize: '14px',
        fontWeight: '500',
    },
}));

const StudentTestimonial = ({ testimonial }) => {
    const classes = useStyles();
    const { image, name, text, date, comment, share, like } = testimonial;

    return (
        <Box className={classes.box}>
            <Grid container spacing={0}>
                <Grid item md={2} style={{ maxWidth: '3.5rem' }}>
                    <Avatar src={image} alt={name} className={classes.avatar} />
                </Grid>
                <Grid item md={10} style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography className={classes.darkText}>
                        {name}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={0} style={{ paddingTop: '10px' }}>
                <Grid item md={12}>
                    <Typography className={classes.text}>
                        {text}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={0} style={{ paddingTop: '10px' }}>
                <Grid item md={12}>
                    <Typography className={classes.normal}>
                        {date}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={0} style={{ paddingTop: '10px' }}>
                <Grid item md={2}>
                    <Typography className={classes.normal}>
                        <img src={Comment} alt="" style={{ paddingRight: '5px' }} /> {comment}
                    </Typography>
                </Grid>
                <Grid item md={2}>
                    <Typography className={classes.normal}>
                        <img src={Share} alt="" style={{ paddingRight: '5px' }} /> {share}
                    </Typography>
                </Grid>
                <Grid item md={2}>
                    <Typography className={classes.normal}>
                        <img src={Like} alt="" style={{ paddingRight: '5px' }} /> {like}
                    </Typography>
                </Grid>
                <Grid item md={6}/>
            </Grid>
        </Box>
    );
};

export default StudentTestimonial;

StudentTestimonial.propTypes = {
    testimonial: PropTypes.instanceOf(Object).isRequired,
};