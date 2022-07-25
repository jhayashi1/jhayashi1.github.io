import React from 'react';
import './banner.css';

class Banner extends React.Component {
    render() {
        const bannerColors = {
            backgroundImage: 'linear-gradient(120deg, ' + this.props.color1 + ', ' + this.props.color2 + ')'
        };

        return(
            <div className='banner-div' style={bannerColors}>
                <h1 className='banner-title'>{this.props.title}</h1> 
                <h2 className='banner-description'>{this.props.description}</h2>
                <a className='banner-url' href={this.props.url}>GitHub</a>
            </div>
        );
    }
}

export default Banner;