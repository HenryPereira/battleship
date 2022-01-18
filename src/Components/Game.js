import React, {useState, useEffect} from "react";
import {
    BOARD_SPECS, 
    GAME_STATE, 
    STARTING_SHIPS, 
    HERO_TILE_STATE, 
    VILLAIN_TILE_STATE
} from "../Helpers/gameConstants.js"
import {coordToIndex, indexToCoord} from "../Helpers/helperFunctions.js";
import View from "./View.js";

function Game() {
    const [gameState, setGameState] = useState(GAME_STATE.SHIP_PLACEMENT);
    const [unplacedShips, setUnplacedShips] = useState(STARTING_SHIPS);
    const [placedShips, setPlacedShips] = useState([]);
    const [shipToPlace, setShipToPlace] = useState(null);

    const heroSetup = new Array(100).fill(HERO_TILE_STATE.EMPTY);
    const villainSetup = new Array(100).fill(VILLAIN_TILE_STATE.EMPTY);
    const [heroState, setHeroState] = useState(heroSetup);
    const [villainState, setVillainState] = useState(villainSetup);

    /*      SHIP PLACEMENET     */
    const selectShipToPlace = (name) => {
        let ship = unplacedShips.find(ship => ship.name === name);
        setShipToPlace({
            ...ship,
            orientation: 'above',
            position: null
        });
    }

    const placeShip = (position, orientation) => {
        if(shipToPlace === null) {
            throw Error("Attempting to place ship, but shipToPlace is null.");
        } else if(shipToPlace.placed) {
            throw Error(`${shipToPlace.name} has already been placed.`);
        }
        setPlacedShips([
            ...placedShips,
            {
                ...shipToPlace,
                placed: true,
                orientation: orientation,
                position: position
            }
        ]);
        setUnplacedShips((oldUnplacedShips) => {
            let newUnplacedShips = oldUnplacedShips.slice();
            let shipToPlaceIdx = newUnplacedShips.indexOf(ship => ship.name === shipToPlace.name);
            newUnplacedShips.splice(shipToPlaceIdx, 1);
            return newUnplacedShips;
        });
    }

    /*      BOARD STATE UPDATES     */
    const updateHeroTile = (coord, newTileState) => {
        const idx = coordToIndex(coord);
        const newHeroState = heroState.slice();
        newHeroState[idx] = newTileState;
        setHeroState(newHeroState);
    }

    const updateVillainTile = (coord, newTileState) => {
        const idx = coordToIndex(coord);
        const newVillainState = villainState.slice();
        newVillainState[idx] = newTileState;
        setVillainState(newVillainState);
    }
    return (
        <div>
            <View 
                // Game states
                gameState={gameState} 
                unplacedShips={unplacedShips}
                heroState={heroState}
                villainState={villainState}

                // State updates
                selectShipToPlace={selectShipToPlace}
                setGameState={setGameState}
                setHeroState={setHeroState}
            />
        </div>
        
    )
}

export default Game;