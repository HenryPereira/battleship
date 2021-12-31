import ShipPreview from "./ShipPreview";
import "../Styles/Fleet.css";

function Fleet({
    unplacedShips,
    selectShipToPlace
}) {
    let fleetDisplay = unplacedShips.map((ship) => {
        return (
        <ShipPreview ship={ship} selectShipToPlace={selectShipToPlace}/>
        );
    })
    return (
        <div className="fleet">
            {fleetDisplay}
        </div>
    );
}

export default Fleet;