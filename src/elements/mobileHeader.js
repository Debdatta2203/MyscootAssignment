import React, { cloneElement, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useTheme from '@material-ui/core/styles/useTheme';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Logo1 from '../assets/ProjectLogo.png';
import Logo2 from '../assets/ProjectLogo2.png'

const ElevationScroll = (props) => {
    const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    // target: window ? window() : undefined,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
};

const Transition = React.forwardRef((props, ref) => <Slide direction="down" ref={ref} {...props} />);

const MobileHeader = (props) => {
    const appTheme = useTheme();
    const isMobile = useMediaQuery(appTheme.breakpoints.down('sm'), { noSsr: true });
    const [headerBackground, setHeaderBackground] = useState('transparent');
    const [menuBorder, setMenuBorder] = useState('1px solid rgba(1, 73, 73, 0.15)');
    const [menuColor, setMenuColor] =useState('#142947');
    const [open, setOpen] = useState(false);

    const useStyles = makeStyles(() => ({
        appBar: {
            backgroundColor: headerBackground,
            height:' 75px',
        },
        toolBar: {
            paddingTop: '0.4rem', 
            paddingBottom: '0.4rem',
        },
        menu: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        menudiv: {
            border: menuBorder,
            borderRadius: '30px',
            padding: '8px 30px 8px',
        },
        menuItem: {
            color: menuColor,
            fontSize: '14px',
            textDecoration: 'none',
            padding: '0px 15px',
        },
        actionBtn: {
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
        },
        menuBtn: {
            backgroundImage: 'linear-gradient(to right, #21B5E0 , #00DEB4)',
            fontFamily: 'Gilroy',
            fontSize: '14px',
            fontWeight: '800',
            color: '#ffffff',
            textTransform: 'capitalize',
        }
    }));
    const classes = useStyles();

    const listenScrollEvent = e => {
        if (window.scrollY > 50) {
            setHeaderBackground('#056A67');
            setMenuBorder('none');
            setMenuColor('#ffffff')
        } else {
            setHeaderBackground('transparent');
            setMenuBorder('1px solid rgba(1, 73, 73, 0.15)');
            setMenuColor('#142947');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
    }, []);

    return (
        <>
            <ElevationScroll {...props}>
                <AppBar className={classes.appBar}>
                    <Toolbar className={classes.toolBar}>
                        <Container>
                            <Grid container spacing={0}>
                                <Grid item xs={6}>
                                <Link to="/">
                                    <img src={Logo2} alt="Logo" style={{ height: '30px', objectFit: 'contain' }} />
                                </Link>
                                </Grid>
                                <Grid item xs={6} className={classes.actionBtn}>
                                    <Button variant="contained" className={classes.menuBtn} onClick={() => setOpen(true)}>Menu</Button>
                                </Grid>
                            </Grid>
                        </Container>
                    </Toolbar>
                    </AppBar>
                </ElevationScroll>
            <Toolbar />
            {/* <Dialog
                open={open}
                TransitionComponent={Transition}
                // keepMounted
                PaperProps={{
                  style: {
                    width: '100%',
                    borderRadius: isMobile ? '20px 20px 0px 0px' : '10px',
                    margin: isMobile ? '0px' : '',
                    top: isMobile ? '0px' : '',
                    position: isMobile ? 'absolute' : '',
                    height: '100vh',
                    maxWidth: '1000px',
                  },
                }}
                onClose={() => setOpen(false)}
                aria-describedby="alert-dialog-slide-description"
            >
                hi
            </Dialog> */}
        </>
    );
};

export default MobileHeader;