import React from 'react';
import './home.css';

class Home extends React.Component {
    render() {
        return(
            <div className='home'>
                <div className='home-banner'>
                    <h1 className='home-title'>Jared Hayashi</h1>
                    <h2 className='home-description'>
                        Currently a senior at Iowa State University graduating in the Fall of 2022
                    </h2>
                </div>

                <hr width="75%" />

                <div className='projects'>
                    <h3>Projects:</h3>

                    {renderProjectContent(
                        'Gnutella Network',
                        `A proof of concept file sharing network based on the Gnutella protocol.`,
                        '/gnutella'
                    )}

                    {renderProjectContent(
                        'Epic 7 Auto Shop',
                        `A that uses image recognition to automate buying items from a shop in a game called Epic Seven.
                        
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
            <hr width="75%" />
        </>
    );
}

export default Home;