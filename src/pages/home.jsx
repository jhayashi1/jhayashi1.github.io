import React from 'react';
import './home.css';

import {Accordion, accordionData} from '../components/accordion'
import {ProjectSection, projectData} from '../components/project-section';
import {Skill, skillData} from '../components/skill';

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

export default Home;