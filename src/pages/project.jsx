import React from 'react';
import Banner from '../components/banner';
import { marked } from 'marked';
import parse from 'html-react-parser';
import './project.css';

class Project extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            readme: null,
        };

        this.getReadmeContent(this.props.readmeURL);
    }

    async getReadmeContent(url) {
        //Get the content from the url
        const reader = new FileReader();
        const content = await fetch(url)
        .then(res => res.blob())
        .then(blob => {
            return blob;
        })

        //Parse the content and return a string
        reader.readAsText(content);
        const htmlContent = await new Promise((resolve, reject) => {
            reader.onload = (event) => {
                //Get markdown content and convert it to an html string
                const markdownContent = reader.result;
                var htmlString = marked.parse(markdownContent);

                //Change the style of the links in the parsed html
                htmlString = htmlString.replace(/<a/g, "<a className='description-link'");
                htmlString = htmlString.replace(/<h1/g, "<h1 style='color:" + this.props.color1 + ";'");
                htmlString = htmlString.replace(/<h2/g, "<h2 style='color:" + this.props.color1 + ";'");
                
                //Convert the html string to raw html
                const ret = parse(htmlString);  
                console.log(ret);

                resolve(ret);
            }
        });

        //Once the content has been parsed, convert the markdown to html
        this.setState({
            readme: htmlContent,
        });
    }

    render() {
        return(
            <div>
                <Banner title={this.props.title} description={this.props.description} url={this.props.url} color1={this.props.color1} color2={this.props.color2}/> 
                <div className='project-info'>{this.state.readme}</div>
            </div>
        );
    }
}

export default Project;