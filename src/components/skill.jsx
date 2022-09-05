import React from 'react';
import './skill.css';

import imgs from '../assets/images';

const Skill = ({ title, image }) => {
        return(
            <div className='skill-item'>
                <img className='skill-image' src={image} alt={'skill'} />
                <h4 className='skill-title'>{title}</h4>
            </div>
        );
};

const skillData = [
    {
      title: 'Java',
      image: imgs.java,
    },
    {
      title: 'C',
      image: imgs.c,
    },
    {
      title: 'C++',
      image: imgs.cplusplus,
    },
    {
      title: 'Python',
      image: imgs.python,
    },
    {
      title: 'Javascript',
      image: imgs.javascript,
    },
    {
      title: 'React js',
      image: imgs.website,
    },
    {
      title: 'Node js',
      image: imgs.node,
    },
    {
      title: 'HTML',
      image: imgs.html,
    },
    {
      title: 'CSS',
      image: imgs.css,
    },
    {
      title: 'MYSQL',
      image: imgs.mysql,
    },
    {
      title: 'MSSQL',
      image: imgs.mssql,
    },
    {
      title: 'X++',
      image: imgs.xplusplus,
    },
    {
      title: 'VBA',
      image: imgs.vba,
    },
    {
      title: 'git',
      image: imgs.git
    }
  ];

export {
    Skill,
    skillData
};