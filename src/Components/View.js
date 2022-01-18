import Fleet from "./Fleet";
import HeroBoard from "./HeroBoard";
import { GAME_STATE } from "../Helpers/gameConstants";
import "../Styles/view.css";


function View({
    gameState,
    setGameState,
    heroState,
    setHeroState,

    unplacedShips,
    selectShipToPlace
}) {

    const renderFleetOrInfo = () => {
        switch(gameState) {
            case GAME_STATE.SHIP_PLACEMENT:
                return (
                    <div className="view">
                        <Fleet 
                            unplacedShips={unplacedShips}
                            selectShipToPlace={selectShipToPlace}
                        />
                        <HeroBoard heroState={heroState}/>
                    </div>
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