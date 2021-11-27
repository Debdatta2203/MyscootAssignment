import React from 'react';
import { Link } from 'react-router-dom';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Logo from '../assets/ProjectLogo.png'

const useStyles = makeStyles(() => ({
    footer: {
        padding: '75px 25px 0',
        backgroundColor: '#056A67',
    },
    footerMenu: {
        display: 'flex',
        justifyContent: 'center',
    },
    heading: {
        color: '#ffffff',
        fontFamily: 'Gilroy',
        fontSize: '17px',
        fontWeight: '700',
    },
    menuItem: {
        color: 'rgba(255, 255, 255, 0.5)',
        fontFamily: 'Gilroy',
        fontSize: '14px',
        fontWeight: '600',
        textDecoration: 'none',
    },
    actionBtn: {
        display: 'flex',
        justifyContent: 'flex-end',
        // alignItems: 'center',
    },
    heading2: {
        color: '#ffffff',
        fontFamily: 'Gilroy',
        fontWeight: '800',
        textAlign: 'center',
    },
    footerIcons: {
        height: '20px',
        padding: '10px',
    },
    footerBtn: {
        backgroundColor: '#ffffff',
        fontFamily: 'Gilroy',
        fontSize: '16px',
        fontWeight: '800',
        color: '#056A67',
        textTransform: 'capitalize',
    },
    copyRight: {
        paddingTop: '30px',
        color: 'rgba(255, 255, 255, 0.5)',
        fontFamily: 'Gilroy',
        fontSize: '14px',
        paddingBottom: '30px',
    }
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.footer}>
            <Container>
                <Grid container spacing={0} style={{ paddingBottom: '75px' }}>
                    <Grid item md={2}>
                        <Link to="/">
                            <img src={Logo} alt="Logo" style={{ height: '50px', objectFit: 'contain' }} />
                        </Link>
                    </Grid>
                    <Grid item md={8}>
                        <Grid container spacing={0}>
                            <Grid item md={4} className={classes.footerMenu}>
                                <List style={{ paddingTop: '0px' }}>
                                    <ListItem>
                                        <Typography className={classes.heading}>
                                            Growth School
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Link to="/"  className={classes.menuItem}>
                                            About
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link to="/"  className={classes.menuItem}>
                                            Community
                                        </Link>
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid item md={4} className={classes.footerMenu}>
                                <List style={{ paddingTop: '2.6rem' }}>
                                    <ListItem>
                                        <Link to="/"  className={classes.menuItem}>
                                            Workshops
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link to="/"  className={classes.menuItem}>
                                            Programs
                                        </Link>
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid item md={4} className={classes.footerMenu}>
                                <List style={{ paddingTop: '2.6rem' }}>
                                    <ListItem>
                                        <Link to="/"  className={classes.menuItem}>
                                            Apply as Mentor
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link to="/"  className={classes.menuItem}>
                                            Login
                                        </Link>
                                    </ListItem>
                                </List>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={2} className={classes.actionBtn}>
                        <Typography variant="h5" className={classes.heading2}>
                            Need more info?
                            <FontAwesomeIcon icon={faFacebook} className={classes.footerIcons} />
                            <FontAwesomeIcon icon={faInstagram} className={classes.footerIcons} />
                            <FontAwesomeIcon icon={faTwitter} className={classes.footerIcons} />
                            <Button variant="contained" className={classes.footerBtn}>Contact Us</Button>
                        </Typography>
                    </Grid>
                </Grid>
                <Divider style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }} />
                <Typography className={classes.copyRight}>
                    © GrowthSchool 2021
                </Typography>
            </Container>
        </div>
    );
};

export default Footer;