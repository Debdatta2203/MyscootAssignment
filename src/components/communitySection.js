import React, { useState } from 'react';
import CategoryTab from '../elements/categoryTab';
import MemberTestimonial from '../elements/memberTestimonial';
import { categories, members } from '../resources/community';

const CommunitySection = () => {
    const [ selectedCat, setSelectedCat ] = useState(categories?.[0]);
    const [ list, setList ] = useState(members);

    const handleSelect = (value) => {
        setSelectedCat(value);
        console.log('Value Selected ', value.toLowerCase());
        if(value === 'All'){
            setList(members);
        } else {
            const filtered = members.filter(member => {
                return member.category.toLowerCase().includes(value.toLowerCase())
            });
            setList(filtered);
        }
    };

     return (
         <>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', paddingLeft: '100px', paddingRight: '100px' }}>
                {categories.map((category) => (
                    <CategoryTab category={category} isSelected={selectedCat === category ? true : false} handleSelect={handleSelect} />
                ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', paddingTop: '20px' }}>
                {list.map((member) => (
                    <MemberTestimonial member={member} />
                ))}
            </div>
         </>
     );
};

export default CommunitySection;