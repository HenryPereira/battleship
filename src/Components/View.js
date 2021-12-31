import Fleet from "./Fleet";
import { GAME_STATE } from "../Helpers/gameConstants";
function View({
    gameState,
    setGameState,
    unplacedShips,
    selectShipToPlace
}) {

    const renderFleetOrInfo = () => {
        switch(gameState) {
            case GAME_STATE.SHIP_PLACEMENT:
                return (
                    <Fleet 
                        unplacedShips={unplacedShips}
                        selectShipToPlace={selectShipToPlace}
                    />
                );
            default:
                return (
                    <div>Out of placement phase</div>
                );
        }
    }
    return (
        <>
            {renderFleetOrInfo()}
        </>
    );
}

export default View;