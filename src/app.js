import React from "react";
import Sidebar from './components/sidebar';
import Home from './pages/home';
import Project from "./pages/project";
import { Routes, Route } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
                <div className="App" id="outer-container">
                    <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    <div id="page-wrap">
                        <Routes>
                            <Route exact path='/' element={<Home />} />

                            <Route exact path='/e7-auto-shop' element={<Project
                                title='Epic Seven Auto Shop'
                                description='An image recognition based automation tool for the game Epic Seven'
                                url='https://github.com/jhayashi1/e7-automation-manager'
                                readmeURL='https://raw.githubusercontent.com/jhayashi1/e7-automation-manager/master/README.md'
                                color1='#5de07e'
                                color2='#3b87b9'
                            />} />

                            <Route exact path='/gnutella' element={<Project
                                title='Gnutella Network'
                                description='A proof of concept file sharing P2P network'
                                url='https://github.com/jhayashi1/gnutella-concept'
                                readmeURL='https://raw.githubusercontent.com/jhayashi1/gnutella-concept/master/README.md'
                                color1='#ff1818'
                                color2='#ff49e7'
                            />} />

                            <Route exact path='/#/berry-bot' element={<Project
                                title='BerryBot'
                                description='A general use discord bot'
                                url='https://github.com/jhayashi1/BerryBot'
                                readmeURL='https://raw.githubusercontent.com/jhayashi1/BerryBot/master/README.md'
                                color1='#e36019'
                                color2='#edff49'
                            />} />

                            <Route exact path='/website' element={<Project
                                title='Website'
                                description='A website built using React js'
                                url='https://github.com/jhayashi1/jhayashi1.github.io'
                                readmeURL='https://raw.githubusercontent.com/jhayashi1/jhayashi1.github.io/master/README.md'
                                color1='#18d1ff'
                                color2='#bc49ff'
                            />} />
                        </Routes>
                    </div>
                </div>
        );
    }
}

export default App;