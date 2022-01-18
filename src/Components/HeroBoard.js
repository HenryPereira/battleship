import { HERO_TILE_STATE } from "../Helpers/gameConstants";
import { coordToIndex } from "../Helpers/helperFunctions";
import "../Styles/heroboard.css";

function HeroBoard({
    heroState
}) {
    const renderBoard = () => {
        const board = [];
        for(let y = 0; y < 10; y++) {
            board.push(renderRow(y));
        }
        return (
            <div className="hero-board">
                {board}
            </div>
        );
    }

    const renderRow = (y) => {
        const row = []
        for(let x = 0; x < 10; x++) {
            row.push(
                <Tile state={heroState[coordToIndex({y, x})]}/>
            );
        }
        return (
            <div className="hero-row">
                {row}
            </div>
        );
    }

    return (
        <div>
            {renderBoard()}
        </div>
       
    );
}

function Tile ({
    state
}) {
    let className;
    switch (state) {
        case HERO_TILE_STATE.EMPTY:
            className = "hero-empty";
            break;
        case HERO_TILE_STATE.HIT:
            className = "hero-hit";
            break;
        case HERO_TILE_STATE.PLACING:
            className = "hero-placing";
            break;
        case HERO_TILE_STATE.SHIP:
            className = "hero-ship";
            break;
        case HERO_TILE_STATE.SUNK:
            className = "hero-sunk";
            break;
        default:
            console.log(state);
            throw Error(`Unknown HERO_TILE_STATE: ${state}`);
    }
    return (
        <div className={"hero-tile " + className}></div>
    );

}

export default HeroBoard;