import React from 'react';
import './home.css';

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
                        <h3 className='about-title'>About:</h3>
                        <div className='about-description-div'>
                            <h4 className='about-description'>
                            Hi my name is Jared, and I am currently a senior at Iowa State University. I will be graduating in Fall of 2022
                            with a bachelor's degree in Software Engineering.
                            </h4>
                            <h4 className='about-description'>
                                More here
                            </h4>
                        </div>
                    </div>
                </div>

                <hr width="75%" />

                <div className='projects'>
                    <h3>Projects:</h3>

                    {renderProjectContent(
                        'Gnutella Network',
                        `A proof of concept file sharing network based on the Gnutella protocol. \n
                        
                        Learn more here https://en.wikipedia.org/wiki/Gnutella
                        `,
                        '/gnutella'
                    )}

                    {renderProjectContent(
                        'Epic Seven Auto Shop',
                        `A tool that uses image recognition to automate buying items from a shop in a game called Epic Seven.
                        
                        `,
                        '/e7-auto-shop'
                    )}

                    {renderProjectContent(
                        'Discord Bot',
                        `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Morbi non arcu risus quis varius. Tempor orci dapibus ultrices in iaculis nunc sed.
                        Malesuada proin libero nunc consequat interdum varius sit.`,
                        '/berry-bot'
                    )}

                    {renderProjectContent(
                        'Website',
                        `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Morbi non arcu risus quis varius. Tempor orci dapibus ultrices in iaculis nunc sed.
                        Malesuada proin libero nunc consequat interdum varius sit.`,
                        '/website'
                    )}

                    {renderProjectContent(
                        'Azul AI',
                        `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Morbi non arcu risus quis varius. Tempor orci dapibus ultrices in iaculis nunc sed.
                        Malesuada proin libero nunc consequat interdum varius sit.`,
                        '/azulAI'
                    )}
                </div>
            </div>
        );
    }
}

function renderProjectContent(title, description, link) {
    return(
        <>
            <a className='project-title' href={link}>{title}</a>
            <h4 className='project-description'>{description}</h4>
            <hr width="80%" />
        </>
    );
}

export default Home;