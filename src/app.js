import React from "react";
import Sidebar from './components/sidebar';
import Home from './pages/home';
import Project from "./pages/project";
import { Routes, Route } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <React.StrictMode>
                <div className="App" id="outer-container">
                    <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    <div id="page-wrap">
                        <Routes>
                            <Route exact path='/' element={<Home />} />

                            <Route exact path='/gnutella' element={<Project
                                title='Gnutella Network'
                                description='A simple file sharing P2P network'
                                url='TODO'
                                readmeURL='https://raw.githubusercontent.com/jhayashi1/e7-automation-manager/master/README.md'
                                color1='#ff1818'
                                color2='#ff49e7'
                            />} />

                            <Route exact path='/e7-auto-shop' element={<Project
                                title='Epic Seven Auto Shop'
                                description='An image recognition based automation tool'
                                url='https://github.com/jhayashi1/e7-automation-manager'
                                readmeURL='https://raw.githubusercontent.com/jhayashi1/e7-automation-manager/master/README.md'
                                color1='#5de07e'
                                color2='#3b87b9'
                            />} />

                            <Route exact path='/berry-bot' element={<Project
                                title='BerryBot'
                                description='A general use discord bot'
                                url='https://github.com/jhayashi1/BerryBot'
                                readmeURL='https://raw.githubusercontent.com/jhayashi1/BerryBot/master/README.md'
                                color1='#ff6918'
                                color2='#edff49'
                            />} />

                            <Route exact path='/website' element={<Project
                                title='Website'
                                description='A website built using React js'
                                url='TODO'
                                readmeURL='https://raw.githubusercontent.com/jhayashi1/BerryBot/master/README.md'
                                color1='#18d1ff'
                                color2='#bc49ff'
                            />} />

                            <Route exact path='/azulAI' element={<Project
                                title='Azul AI'
                                description='An AI that plays the board game AZUL using NEAT'
                                url='TODO'
                                readmeURL='https://raw.githubusercontent.com/jhayashi1/BerryBot/master/README.md'
                                color1='#f0e554'
                                color2='#25e05d'
                            />} />
                        </Routes>
                    </div>
                </div>
            </React.StrictMode>
        );
    }
}

export default App;