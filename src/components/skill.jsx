import React from 'react';
import './skill.css';

const Skill = ({ title, image }) => {
        return(
            <div className='skill-item'>
                <img className='skill-image' src={image} alt={'skill'} />
                <h4 className='skill-title'>{title}</h4>
            </div>
        );
};

export default Skill;