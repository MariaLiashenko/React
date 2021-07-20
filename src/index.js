// Import React liblaries
import { directive } from '@babel/types';
import React from 'react';
import ReactDOM from 'react-dom';

//create a react component
const App  = () => {
    return <div>Hi there</div>;
};

//Show it on the screen 
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);


