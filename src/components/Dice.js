import React from "react"

export default function Dice(props) {
    return (
        <div 
        className= {props.dice[props.id].isFrozen 
            ? "green--boxes" : "boxes"}
        onClick={event => 
        props.handleFreeze(event, props.id)}
        >
            <h1 className="number">{props.dice[props.id].value}</h1>
        </div>
    )
}