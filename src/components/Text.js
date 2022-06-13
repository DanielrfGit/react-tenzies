import React from "react";

export default function Text(props) {
    return (
        <div>
            <div className="title">
                <h1>{props.isWin ? "YOU WON! CONGRATULATIONS!" :"Tenzies"}</h1>
            </div>
            <div className="rules">
                <p> Roll until all dice are the same.
                    Click each die to freeze it at 
                    its current value between rolls.
                </p>            
            </div>
        </div>
    )
}