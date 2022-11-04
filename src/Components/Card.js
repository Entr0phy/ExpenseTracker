import React from "react";
import "./Card.css";
export default function Card(props){
    const classes = 'card ' + props.className;

    return <div className={classes}>{props.children}</div>
}

//* This componenet here enables us to create a customer componenet to wrap componenets in it to prevent 
//*code repetition. 
