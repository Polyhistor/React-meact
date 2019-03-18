import React from 'react';
import './Person.css'


const Person = (props) => {
    return (
        <div className="Person" >
        <p  onClick={props.click}>I'm {props.name} and I'm {props.age} years old</p>
        <input type="text" onChange={props.changed} value={props.name} />
        <h1 >{props.name}</h1>
        </div>
    )
}

export default (Person) 



