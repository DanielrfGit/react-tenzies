import React from "react"

export default function Button(props) {
    return (
        <div className="bottom">
            <div className="button" 
            onClick={props.isWin ? props.handleReset : props.handleRoll}
            >
                <h2>{props.isWin ? "Reset" : "Roll"}</h2>
            </div>
        </div>
    )
}