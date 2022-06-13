import React, { useState } from "react"
import Dice from "./components/Dice"
import Text from "./components/Text"
import Button from "./components/Button"


export default function App() {
    function randomNumber() {
        return Math.floor(Math.random() * 6) + 1;

    }

    function randomArray() {
        const randomArray = [];
        for (let i=0; i<10; i++) {
            randomArray.push({value:randomNumber(), isFrozen:false})
        }
        return randomArray
    }

    const [dice, setDice]= useState(randomArray())
    
    function handleRoll() {
        setDice(oldDice => oldDice.map(die =>
            die.isFrozen ? die : {...die, value:randomNumber()}

        ))
    }

    function handleFreeze(event, id) {
        setDice(oldDice => {
            const newDice=[...oldDice];
            newDice[id]={...newDice[id], isFrozen: !newDice[id].isFrozen}
            return newDice
        })
    }

    const isWin = dice.every(die=>die.value===dice[0].value)
    && dice.every(die=>die.isFrozen===true)



    function handleReset(){
        setDice(randomArray())
    }

    return (
        <main>
            <Text isWin={isWin} />
            <div className="dice--area">
                <Dice className="dice--0" 
                dice={dice}
                handleFreeze={handleFreeze}
                id={0}
                />
                <Dice className="dice--1"
                dice={dice}
                handleFreeze={handleFreeze}
                id={1}
                />
                <Dice className="dice--2"
                dice={dice}
                handleFreeze={handleFreeze}
                id={2}
                />
                <Dice className="dice--3"
                dice={dice}
                handleFreeze={handleFreeze}
                id={3}
                />
                <Dice className="dice--4"
                dice={dice}
                handleFreeze={handleFreeze}
                id={4}
                />
                <Dice className="dice--5"
                dice={dice}
                handleFreeze={handleFreeze}
                id={5}
                />
                <Dice className="dice--6"
                dice={dice}
                handleFreeze={handleFreeze}
                id={6}
                />
                <Dice className="dice--7"
                dice={dice}
                handleFreeze={handleFreeze}
                id={7}
                />
                <Dice className="dice--8"
                dice={dice}
                handleFreeze={handleFreeze}
                id={8}
                />
                <Dice className="dice--9"
                dice={dice}
                handleFreeze={handleFreeze}
                id={9}
                />
            </div>
            <Button 
            handleRoll={handleRoll}
            isWin={isWin}
            handleReset={handleReset}
            />
        </main>
    )
} 