// Import React liblaries
import { directive } from '@babel/types';
import React from 'react';
import ReactDOM from 'react-dom';

//create a react component

const App  = () => {
    const buttonText = "Call me";
    return ( 
    <div>
        <label className = "label" htmlFor = "name">Enter name</label>
        <input id = "name" type = "text"></input>
        <button style = {{ backgroundColor: 'blue', color: 'white'}}>{buttonText}</button>
    </div>);
};

//Show it on the screen 
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);


