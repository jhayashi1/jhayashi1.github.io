import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

//Couldn't figure out how to set body style through css
document.body.style.margin = '0px';
document.body.style.padding = '0px';
document.body.style.backgroundColor = '#1f252f';
document.body.style.color = '#ffffff';
document.body.style.fontFamily = 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif';

root.render(
    <BrowserRouter>
        <App /> 
    </BrowserRouter>
);