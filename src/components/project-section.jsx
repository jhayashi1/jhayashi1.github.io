import React from 'react';
import './project-section.css';

import imgs from '../assets/images';

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

const projectData = [
    {
      title: 'Gnutella Network',
      description: `A proof of concept file sharing network based on the Gnutella protocol. Implements UDP for connections
      and TCP for file sharing.`,
      image: imgs.gnutella,
      link: '/gnutella',
      divider: true
    },  
    {
      title: 'Epic Seven Auto Shop',
      description: `A tool that uses opencv2 image recognition to automate buying items from a shop in a game
      called Epic Seven.`,
      image: imgs.autoshop,
      link: '/e7-auto-shop',
      divider: true
    },
    {
      title: 'Discord Bot',
      description: `A discord bot with several functionalities for my personal discord server. Including message and voice chat logging,
      user tracking, reddit post fetching, etc.`,
      image: imgs.berrybot,
      link: '/berry-bot',
      divider: true
    },
    {
      title: 'Website',
      description: `A basic portfolio website built from scratch using React js and a few other npm packages.`,
      image: imgs.website,
      link: '/website',
      divider: false
    },
  ];

export {
    ProjectSection,
    projectData
};