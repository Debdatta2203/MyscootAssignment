import React, { useEffect } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useTheme from '@material-ui/core/styles/useTheme';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import DarkSection from '../elements/darkSection';
import LightSection from '../elements/lightSection';
import WhiteSection from '../elements/whiteSection';
import ImageGroup from '../components/imageGroup';
import Razorpay from '../assets/icons/razorpay.svg';
import Amazon from '../assets/icons/Amazon.svg';
import Paytm from '../assets/icons/paytm.svg';
import Microsoft from '../assets/icons/Microsoft.svg';
import Google from '../assets/icons/Google.svg';
import Ola from '../assets/icons/OLA.svg';
import Facebook from '../assets/icons/facebook.svg';
import Oyo from '../assets/icons/OYO.svg';
import Student from '../assets/icons/student-icon.svg';
import WorkShop from '../assets/icons/workshop-icon.svg';
import Rating from '../assets/icons/rating-icon.svg';
import Live from '../assets/icons/live-icon.svg';
import CounterupCard from '../elements/counterUpCard';
// import InfiniteCarousel from '../components/infiniteCarousel';
import MemberCard from '../elements/memberCard';
import CategorySection from '../components/categorySection';
import OverlapDiv from '../components/overlapDiv';
import StepsCard from '../elements/stepsCard';
import StudentCardType1 from '../elements/studentCardType1';
import StudentCardType2 from '../elements/studentCardType2';
import StudentTestimonial from '../elements/studentTestimonial';
import CommunitySection from '../components/communitySection';
import NewsLetter from '../components/newsletter';
import SkillCard from '../elements/skillCard';
import Background from '../assets/background.png';
import { members } from '../resources/member';
import { steps } from '../resources/steps';
import { students } from '../resources/students';
import { testimonials } from '../resources/students';
import { skills } from '../resources/skills';


const useStyles = makeStyles(() => ({
    lightHeading: {
        color: '#ffffff',
        fontFamily: 'Gilroy',
        fontSize: '48px',
        fontWeight: '800',
    },
    lightText: {
        color: '#ffffff',
        fontFamily: 'Gilroy',
        fontSize: '16px',
        fontWeight: '600',
        opacity: '0.5',
    },
    textDiv: {
        textAlign: 'center',
        maxWidth: '660px',
        paddingBottom: '30px',
    },
    darkHeading: {
        color: '#014949',
        fontFamily: 'Gilroy',
        fontSize: '48px',
        fontWeight: '800',
    },
    darkText: {
        color: '#014949',
        fontFamily: 'Gilroy',
        fontSize: '16px',
        fontWeight: '600',
        opacity: '0.5',
    },
}));

const HomePage = () => {
    useEffect(() => {
        document.title = 'Home - Growth School';
    }, []);

    const classes = useStyles();
    const appTheme = useTheme();
    const isMobile = useMediaQuery(appTheme.breakpoints.down('sm'), { noSsr: true });
    const imageList = [Razorpay, Amazon, Paytm, Microsoft, Google, Ola, Facebook, Oyo];
    const counterUps = [
        {
            image: Student,
            limit: 180,
            suffix: 'k+',
            text: 'Total students'
        },{
            image: WorkShop,
            limit: 25,
            suffix: '',
            text: 'Programs & workshops'
        },{
            image: Rating,
            limit: 9,
            suffix: '.1',
            text: 'Average Rating'
        },{
            image: Live,
            limit: 375,
            suffix: 'k+',
            text: 'Total Live Hours'
        }
    ];

    return (
        <div>
            <DarkSection>
                <Container>
                    <Grid container spacing={0}>
                        <Grid item md={4} xs={12} style={{ textAlign: isMobile ? 'center' : '' }}>
                            <Typography className={classes.lightHeading} style={{ fontSize: isMobile ? '34px' : ''}}>
                                10,000 +
                            </Typography>
                            <Typography className={classes.lightText} style={{ maxWidth: isMobile ? '100%' : '80%' }}>
                                Folks from top brands and companies have experienced GrowthSchool
                            </Typography>
                        </Grid>
                        <Grid item md={8} xs={12}>
                            <ImageGroup imageList={imageList} isMobile={isMobile} />
                        </Grid>
                    </Grid>
                </Container>
            </DarkSection>
            <LightSection>
                <Container style={{ display: 'flex', justifyContent: 'center' }}>
                    <Box className={classes.textDiv}>
                        <Typography className={classes.darkText} style={{ opacity: '1',paddingBottom: '40px', fontSize: isMobile ? '16px' : '22px' }}>
                            Growth School does what colleges still don’t provide- an engaging learning experience. We stay relevant by co-creating hands-on programs with the top professionals who find bookish knowledge as dull as we do.
                        </Typography>
                        <Divider style={{ backgroundcolor: 'rgba(6, 106, 103, 0.25)'}} />
                        <Typography className={classes.darkHeading} style={{ paddingTop: '40px', lineHeight: '49px', fontSize: isMobile ? '30px' : '' }}>
                            Join a community
                        </Typography>
                        <Typography className={classes.darkHeading} style={{ paddingBottom: '40px', fontSize: isMobile ? '30px' : '' }}>
                            With a strong drive to excel
                        </Typography>
                    </Box>
                </Container>
                <Container style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', padding: '0px', paddingBottom: '50px' }}>
                    {counterUps.map((counter) => (
                        <CounterupCard
                            image={counter.image}
                            limit={counter.limit}
                            suffix={counter.suffix}
                            text={counter.text}
                            isMobile={isMobile}
                        />
                    ))}
                </Container>
                <Divider style={{ backgroundcolor: 'rgba(6, 106, 103, 0.25)', margin: '0px 100px' }} />
                <Container style={{ display: 'flex', justifyContent: 'center', paddingTop: '50px' }}>
                    <Box className={classes.textDiv}>
                        <Typography className={classes.darkHeading} style={{ fontSize: isMobile ? '30px' : '' }}>
                            New age mentors to help you
                            grow, learn and upskill
                        </Typography>
                    </Box>
                </Container>
                <Container style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', padding: '0px', paddingBottom: '50px' }}>
                    {/* {members?.length > 0 &&
                        <InfiniteCarousel>
                            <div> */}
                            {members.map((member) => (
                                <MemberCard member={member} isMobile={isMobile} />
                            ))}
                            {/* </div>
                        </InfiniteCarousel>
                    } */}
                </Container>
            </LightSection>
            <DarkSection>
                <Container style={{ display: 'flex', justifyContent: 'center', padding: isMobile ? '0px' : '' }}>
                    <Box className={classes.textDiv} style={{ maxWidth: isMobile ? '800px' : '' }}>
                        <Typography className={classes.lightHeading} style={{ fontSize: isMobile ? '29px' : '' }}>
                            LIVE Workshops
                        </Typography>
                        <Typography className={classes.lightText}>
                            Our flagship live workshops impart valuable skills you don’t even know you need. Start something new, break out of your rut, or boost your job readiness.
                        </Typography>
                    </Box>
                </Container>
                <Container style={{ padding: '0px', paddingBottom: '100px' }}>
                    <CategorySection isMobile={isMobile} />
                </Container>
            </DarkSection>
            <LightSection>
                <Container>
                    <OverlapDiv />
                </Container>
                <Container style={{ display: 'flex', justifyContent: 'center' }}>
                    <Box className={classes.textDiv} style={{ maxWidth: '750px' }}>
                        <Typography className={classes.darkHeading}>
                            How Growth School Shakes It Up
                        </Typography>
                        <Typography className={classes.darkText} style={{ paddingLeft: '100px', paddingRight: '100px' }}>
                        Our methodology is a refreshing step up from generic theoretical courses and one-sided demos.
                        </Typography>
                    </Box>
                </Container>
                <Container  style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', paddingTop: '20px', paddingBottom: '80px' }}>
                    {steps.map((step) => (
                        <StepsCard step={step} isMobile={isMobile} />
                    ))}
                </Container>
                <Container>
                <Divider style={{ backgroundcolor: 'rgba(6, 106, 103, 0.25)' }} />
                    <Grid container spacing={0} style={{ padding: '30px 50px' }}>
                        <Grid item md={4} xs={12}>
                            <Typography className={classes.darkHeading} style={{ width: isMobile ? '80%' : '70%', textAlign: isMobile ? 'center' : '' }}>
                                Our students love what we do
                            </Typography>
                            <Typography className={classes.darkText} style={{ width: isMobile ? '80%' : '70%', textAlign: isMobile ? 'center' : '' }}>
                                Our community is a mix of students, professionals, and budding entrepreneurs, who drive us and inspire us. Here’s them sharing their love.
                            </Typography>
                        </Grid>
                        <Grid item md={8} xs={12} style={{ height: '50rem', overflow: 'hidden', overflowY: 'scroll' }}>
                            <Grid container spacing={0}>
                                <Grid item md={5}>
                                    {students.map((student, index) => (
                                        <div>
                                            {index === 0 
                                                ? <StudentCardType1 student={student} />
                                                : <StudentCardType2 student={student} />
                                            }
                                        </div>
                                    ))}
                                </Grid>
                                <Grid item md={7}>
                                    {testimonials.map((testimonial) => (
                                        <StudentTestimonial testimonial={testimonial} />
                                    ))}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </LightSection>
            <DarkSection>
                <Container style={{ display: 'flex', justifyContent: 'center' }}>
                    <Box className={classes.textDiv} style={{ maxWidth: '800px' }}>
                        <Typography className={classes.lightHeading}>
                            Stellar work from our Community
                        </Typography>
                        <Typography className={classes.lightText} style={{ paddingLeft: '50px', paddingRight: '50px' }}>
                            Here are some of the projects created by the Growth School community. We’re thrilled to see their interpretation of the courses and their rapid progress.
                        </Typography>
                        <Button 
                            variant="contained" 
                            style={{ 
                                backgroundColor: '#ffffff', 
                                color: '#056966',
                                fontFamily: 'Gilroy',
                                fontWeight: '800',
                                textTransform: 'capitalize',
                                padding: '6px 30px',
                                marginTop: '25px',
                            }}
                        >
                            View all case studies
                        </Button>
                    </Box>
                </Container>
                <Container style={{ padding: '0px', paddingBottom: '50px' }}>
                    <CommunitySection />
                </Container>
            </DarkSection>
            <WhiteSection>
                <Container style={{ display: 'flex', justifyContent: 'center' }}>
                    <Box className={classes.textDiv} style={{ maxWidth: isMobile ? '300px' : '900px' }}>
                        <Typography className={classes.darkHeading} style={{ fontSize : isMobile ? '30px' : '' }}>
                            Community-led learning is the future
                        </Typography>
                        <Typography className={classes.darkText} style={{ paddingLeft: isMobile ? '' : '150px', paddingRight: isMobile ? '' : '150px' }}>
                            We at Growth School facilitate a dynamic community to build real-world problem-solving skills.
                        </Typography>
                        <Button 
                            variant="contained" 
                            style={{ 
                                backgroundImage: 'linear-gradient(to right, #21B5E0 , #00DEB4)', 
                                color: '#ffffff',
                                fontFamily: 'Gilroy',
                                fontWeight: '800',
                                fontSize: '17px',
                                textTransform: 'capitalize',
                                padding: '6px 30px',
                                marginTop: '25px',
                            }}
                        >
                            Join Community
                        </Button>
                    </Box>
                </Container>
                <Container style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
                    {skills.map((skill) => (
                        <SkillCard skill={skill} />
                    ))}
                </Container>
                <Container style={{ display: 'flex', justifyContent: 'center', paddingTop: '50px' }}>
                    <img src={Background} alt="background" style={{ display: isMobile ? 'none' : '' }} />
                </Container>
                <Container>
                    <NewsLetter />
                </Container>
                <Container style={{ display: 'flex', justifyContent: 'center', paddingTop: '100px', paddingBottom: '100px' }}>
                    <Box className={classes.textDiv} style={{ maxWidth: isMobile ? '300px' : '800px' }}>
                        <Typography className={classes.darkHeading} style={{ fontSize : isMobile ? '30px' : '' }}>
                            25+ Offerings To Enable You
                        </Typography>
                        <Typography className={classes.darkText} style={{ paddingLeft: isMobile ? '' : '150px', paddingRight: isMobile ? '' : '150px' }}>
                            Sounds exciting? Check out the programs and workshops we have on offer now.
                        </Typography>
                        <Button 
                            variant="contained" 
                            style={{ 
                                backgroundImage: 'linear-gradient(to right, #21B5E0 , #00DEB4)', 
                                color: '#ffffff',
                                fontFamily: 'Gilroy',
                                fontWeight: '800',
                                fontSize: '17px',
                                textTransform: 'capitalize',
                                padding: '6px 30px',
                                marginTop: '25px',
                            }}
                        >
                            Explore Growth School
                        </Button>
                    </Box>
                </Container>
            </WhiteSection>
        </div>
    );
};

export default HomePage;