import React from 'react';
import './home.css';
import selfie from '../assets/about-picture.jpg'
import gnutella from '../assets/gnutella-image.png'
import autoshop from '../assets/autoshop-image.png'
import berrybot from '../assets/berrybot-image.png'
import website from '../assets/website-image.png'

class Home extends React.Component {
    render() {
        return(
            <div className='home'>
                <div className='home-banner'>
                    <h1 className='home-title'>Jared Hayashi</h1>
                    <h2 className='home-description'>
                        Software Engineering Student @ Iowa State University
                    </h2>
                </div>

                <hr width="75%" />

                <div className='about'>
                    <div className='about-text'>
                        <div className='about-title-picture-div'>
                            <h3 className='about-title'>About:</h3>
                            <img className='about-image' src={selfie} alt='Jared Hayashi'/>
                        </div>
                        <div className='about-description-div'>
                            <h4 className='about-description'>
                                Hi my name is Jared, and I am currently a senior at Iowa State University. I will be graduating in Fall of 2022
                                with a bachelor's degree in Software Engineering.
                            </h4>
                            <h4 className='about-description'>
                                My passion for technology started when I was young and loved to play video games. I have always had the desire
                                to understand how the things around me work. Eventually, that curiosity lead me to learn how to create mods for
                                the games that I played which transitioned into my choice to pursue Software Engineering.
                            </h4>

                            <h4 className='about-description'>
                                My areas of interest include Software Engineering, Cybersecurity, and Networking. I am currently looking for
                                a place that will allow me leverage my knowledge and experience to overcome challenges within these fields.
                            </h4>
                        </div>
                    </div>
                </div>

                <hr width="75%" />

                <div className='projects'>
                    <h3 style={{marginBlock: '2rem'}}>Projects:</h3>

                    {renderProjectContent(
                        'Gnutella Network',
                        `A proof of concept file sharing network based on the Gnutella protocol. Implements UDP for connections
                        and TCP for file sharing.
                        `,
                        gnutella,
                        '/gnutella'
                    )}

                    {renderProjectContent(
                        'Epic Seven Auto Shop',
                        `A tool that uses opencv2 image recognition to automate buying items from a shop in a game called Epic Seven.
                        `,
                        autoshop,
                        '/e7-auto-shop'
                    )}

                    {renderProjectContent(
                        'Discord Bot',
                        `A discord bot with several functionalities for my personal discord server. Including message and voice chat logging,
                        user tracking, reddit post fetching, etc.
                        `,
                        berrybot,
                        '/berry-bot'
                    )}

                    {renderProjectContent(
                        'Website',
                        `A basic portfolio website built from scratch using React js and a few other npm packages.`,
                        website,
                        '/website'
                    )}
                </div>
            </div>
        );
    }
}

function renderProjectContent(title, description, image, link) {
    return(
        <>
            <div className='project-stuff'>
                <div className='project-text'>
                    <a className='project-title' href={link}>{title}</a>
                    <h4 className='project-description'>{description}</h4>
                </div>
                <a className='project-link' href={link}><img className='project-image' src={image} alt={'yuh'} /></a>
            </div>
            <hr width="90%" />
        </>
    );
}

export default Home;