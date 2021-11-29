import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(() => ({
    imageDiv: {
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        // alignItems: 'center',
        // paddingLeft: '30px',
        // paddingRight: '30px',
    },
    image: {
        height: '25px', 
        objectFit: 'contain', 
        padding: '20px 20px',
    },
    imageMob: {
        height: '18px', 
        objectFit: 'contain', 
        padding: '10px 10px',
    }
}));

const ImageGroup = ({imageList, isMobile}) => {
    const classes = useStyles();

    return (
        <div className={classes.imageDiv}>
            {imageList.map((image) => (
                <div style={{ width: isMobile ? 'auto' : '170px' }}>
                    <img src={image} alt="icons" className={isMobile ? classes.imageMob : classes.image} />
                </div>
            ))}
        </div>
    );
};

export default ImageGroup;

ImageGroup.propTypes = {
    imageList: PropTypes.array.isRequired,
    isMobile: PropTypes.bool.isRequired,
}