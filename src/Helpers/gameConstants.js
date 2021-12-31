export const BOARD_SPECS = {
    HEIGHT: 10,
    WIDTH: 10,
    MAX_X: 9,
    MAX_Y: 9,
    MIN_X: 0,
    MIN_Y: 0
}
export const STARTING_SHIPS = [
    {
        name: "carrier",
        length: 5,
        placed: false
    },
    {
        name: "battleship",
        length: 4,
        placed: false
    },
    {
        name: "cruiser",
        length: 3,
        placed: false
    },
    {
        name: "submarine",
        length: 3,
        placed: false
    },
    {
        name: "destroyed",
        length: 2,
        placed: false
    }
]
export const GAME_STATE = {
    SHIP_PLACEMENT: 0,
    HERO_TURN: 1,
    VILLAIN_TURN: 2,
    GAME_OVER: 3
}