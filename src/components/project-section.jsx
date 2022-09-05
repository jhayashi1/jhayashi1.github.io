import React from 'react';
import './project-section.css';

const ProjectSection = ({ title, description, image, link, divider }) => {
    return(
        <>
            <div className='project-item'>
                <div className='project-text'>
                    <a className='project-title' href={link}>{title}</a>
                    <h4 className='project-description'>{description}</h4>
                </div>
                <a className='project-link' href={link}><img className='project-image' src={image} alt={'yuh'} /></a>
            </div>
            {divider && <hr width="90%" />}
        </>
    );
};

export default ProjectSection;