import React, {useState, useEffect} from "react";
import {BOARD_SPECS, GAME_STATE, STARTING_SHIPS} from "../Helpers/gameConstants.js"
import View from "./View.js";

function Game() {
    const [gameState, setGameState] = useState(GAME_STATE.SHIP_PLACEMENT);
    const [unplacedShips, setUnplacedShips] = useState(STARTING_SHIPS);
    const [placedShips, setPlacedShips] = useState([]);
    const [shipToPlace, setShipToPlace] = useState(null);

    /* Function definitions */
    const selectShipToPlace = (name) => {
        let ship = unplacedShips.find(ship => ship.name === name);
        setShipToPlace({
            ...ship,
            orientation: 'above',
            position: null
        });
    }

    const placeShip = () => {
        if(shipToPlace === null) {
            throw Error("Attempting to place ship, but shipToPlace is null.");
        } else if(shipToPlace.placed) {
            throw Error(`${shipToPlace.name} has already been placed.`);
        }
        setPlacedShips([
            ...placedShips,
            {
                ...shipToPlace,
                placed: true
            }
        ])
    }

    return (
        <div>
            <View 
                gameState={gameState} 
                setGameState={setGameState}
                unplacedShips={unplacedShips}
                selectShipToPlace={selectShipToPlace}
            />
        </div>
        
    )
}

export default Game;