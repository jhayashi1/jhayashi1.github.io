import React from 'react';
import './home.css';

class Home extends React.Component {
    render() {
        return(
            <div className='home'>
                <div className='home-banner'>
                    <h1 className='home-title'>Jared Hayashi</h1>
                    <h2 className='home-description'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </h2>
                </div>

                <hr width="75%"></hr>

                <div className='projects'>
                    <h3>Projects:</h3>

                    {renderProjectContent(
                        'Gnutella Network',
                        `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Morbi non arcu risus quis varius. Tempor orci dapibus ultrices in iaculis nunc sed.
                        Malesuada proin libero nunc consequat interdum varius sit.`,
                        '/gnutella'
                    )}

                    {renderProjectContent(
                        'Epic 7 Auto Shop',
                        `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Morbi non arcu risus quis varius. Tempor orci dapibus ultrices in iaculis nunc sed.
                        Malesuada proin libero nunc consequat interdum varius sit.`,
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
        </>
    );
}

export default Home;