import {React, useState} from 'react';
import './accordion.css';

const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

        return(
            <div className='accordion-item'>
                <div className='accordion-title' onClick={() => setIsActive(!isActive)}>
                    <div>{title}</div>
                    <div style={{marginRight: 0, marginLeft: 'auto'}}>{isActive ? '-' : '+'}</div>
                </div>
                {isActive && <div className='accordion-content'>{content}</div>}
            </div>
        );
};

export default Accordion;