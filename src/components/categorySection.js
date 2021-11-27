import React, { useState } from 'react';
import CategoryTab from '../elements/categoryTab';
import InfoCard from '../elements/infoCard';
import { categories, worshops } from '../resources/categories';

const CategorySection = () => {
    const [ selectedCat, setSelectedCat ] = useState(categories?.[0]);
    const [ list, setList ] = useState(worshops);

    const handleSelect = (value) => {
        setSelectedCat(value);
        if(value === 'All'){
            setList(worshops);
        } else {
            const filtered = worshops.filter(workshop => {
                return workshop.category.toLowerCase().includes(value.toLowerCase())
            });
            setList(filtered);
        }
    };

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
                {categories.map((category) => (
                    <CategoryTab category={category} isSelected={selectedCat === category ? true : false} handleSelect={handleSelect} />
                ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', paddingTop: '20px' }}>
                {list.map((workshop) => (
                    <InfoCard workshop={workshop} />
                ))}
            </div>
        </>
    );
};

export default CategorySection;