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

const accordionData = [
    {
        title: 'COM S 309 - Software Development Practices',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum.`	
    },
    {
        title: 'COM S 311 - Algorithm Design and Analysis',
        content: ``
    },
    {
        title: 'COM S 321 - Computer Architecture and Machine-Level Programming',
        content: ``
    },
    {
        title: 'COM S 327 - Advanced Programming Techniques',
        content: ``
    },
    {
        title: 'COM S 352 - Introduction to Operating Systems',
        content: ``	
    },
    {
        title: 'COM S 363 - Introduction to Database Management Systems',
        content: ``
    },
    {
        title: 'COM S 472 - Principles of Artificial Intelligence',
        content: ``	
    },
    {
        title: 'COM S 487 - Network Programming, Applications, and Research Issues',
        content: ``
    },
    {
        title: 'S E 317 - Introduction to Software Testing',
        content: ``
    },
    {
        title: 'S E 319 - Construction of User Interfaces',
        content: ``
    },
    {
        title: 'S E 329 - Software Project Management',
        content: ``
    },
    {
        title: 'S E 339 - Software Architecture and Design',
        content: ``
    },
    {
        title: 'S E 409 - Software Requirements Engineering',
        content: ``
    },
    {
        title: 'S E 421 - Sofware Analysis and Verification for Safety and Security',
        content: ``
    },
    {
        title: 'S E 491/492 - Senior Design Project',
        content: `` 
    },
    {
        title: 'CPR E 430 - Network Protocols and Security',
        content: ``
    },
  ];

export {
    Accordion,
    accordionData
};