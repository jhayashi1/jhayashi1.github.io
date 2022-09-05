import React from 'react';
import './home.css';

import Accordion from '../components/accordion'
import ProjectSection from '../components/project-section';
import Skill from '../components/skill';

import imgs from '../assets/images';

class Home extends React.Component {
    render() {
        return (
          <div className="home">
            <div className="home-banner">
              <h1 className="home-title">Jared Hayashi</h1>
              <h2 className="home-description">
                Software Engineering Student @ Iowa State University
              </h2>
            </div>

            <hr width="75%" />

            <div className="about">
              <div className="about-text">
                <div className="about-title-picture-div">
                  <h3 className="about-title">About:</h3>
                  <img
                    className="about-image"
                    src={imgs.selfie}
                    alt="Jared Hayashi"
                  />
                </div>
                <div className="about-description-div">
                  <h4 className="about-description">
                    Hi my name is Jared, and I am currently a senior at Iowa
                    State University. I will be graduating in Fall of 2022 with
                    a bachelor's degree in Software Engineering.
                  </h4>
                  <h4 className="about-description">
                    My passion for technology started when I was young and loved
                    to play video games. I have always had the desire to
                    understand how the things around me work. Eventually, that
                    curiosity lead me to learn how to create mods for the games
                    that I played which transitioned into my choice to pursue
                    Software Engineering.
                  </h4>

                  <h4 className="about-description">
                    My areas of interest include Software Engineering,
                    Cybersecurity, and Networking. I am currently looking for a
                    place that will allow me leverage my knowledge and
                    experience to overcome challenges within these fields.
                  </h4>
                </div>
              </div>
            </div>

            <hr width="75%" />

            <div className="projects">
              <h3>Projects:</h3>

              {projectData.map(({title, description, image, link, divider}) => (
                <ProjectSection title={title} description={description} image={image} link={link} divider={divider} />
              ))}
            </div>

            <hr width="75%" />

            <div className="relavent-courses">
              <h3>Relavent Courses:</h3>

              {accordionData.map(({title, content}) => (
                <Accordion title={title} content={content} />
              ))}
            </div>

            <div className="skills">
                <h3>Skills:</h3>

                <div className='skill-table'>
                      {skillData.map(({title, image, index}) => (
                          <Skill title={title} image={image} />
                      ))}
                </div>
            </div>

          </div>
        );
    }
}

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

]

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
]

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

]

export default Home;