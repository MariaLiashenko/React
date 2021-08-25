import './SeasonDisplay.css';
import React from 'react';

const SeasonConfig = {
    summer:{
        text : "Как же задолбала жара +35",
        iconName : "sun"
    },
    winter:{
        text : "Холодно, хочуууу летооо ",
        iconName : "snowflake"
    }
};

const getSeason = (lat,month) => {
    if(month > 2 && month < 9)  {
        return lat > 0 ? "summer" : "winter";
    } else {
        return lat > 0 ? "winter" : "summer";
    }
}

const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    // const text = season === "winter" ? "Холодно" : "Жарко";
    // const icon = season === "winter" ? "snowflake": "sun";
    const {text, iconName} = SeasonConfig[season]; 
    return (
    <div className = {`season-display ${season}`}>
        <i className = {`icon-left massive ${iconName} icon`}></i>
         <h1>{text}</h1>
        <i className = {`icon-right massive ${iconName} icon`}></i>
    </div>
    );
    
};
export default SeasonDisplay;
