import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Button from '@material-ui/core/Button';

const CategoryTab = ({ category, isSelected, handleSelect }) => {
    const [ background, setBackground ] = useState('transparent');
    const [ color, setColor ] = useState('#ffffff');

    useEffect(() => {
        if(isSelected) {
            setBackground('#ffffff');
            setColor('#056966');
        } else {
            setBackground('transparent');
            setColor('#ffffff');
        }
    }, [isSelected]);

    const useStyles = makeStyles(() => ({
        tabBtn: {
            backgroundColor: background,
            borderColor: '#ffffff',
            fontFamily: 'Gilroy',
            fontSize: '14px',
            fontWeight: '700',
            color: color,
            textTransform: 'capitalize',
            padding: '5px 30px',
            '&:hover': {
                backgroundColor: background,
            }
        }
    }));
    const classes = useStyles();

    return (
        <Button 
            variant="outlined" 
            className={classes.tabBtn} 
            onClick={() => {
                handleSelect(category);
            }}
        >
            {category}
        </Button>
    );
};

export default CategoryTab;

CategoryTab.propTypes = {
    category: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
    handleSelect: PropTypes.func.isRequired,
}