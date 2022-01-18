import ShipPreview from "./ShipPreview";
import "../Styles/fleet.css";

function Fleet({
    unplacedShips,
    selectShipToPlace
}) {
    let renderFleet = unplacedShips.map((ship) => {
        return (
        <ShipPreview ship={ship} selectShipToPlace={selectShipToPlace}/>
        );
    })
    return (
        <div className="fleet">
            {renderFleet}
        </div>
    );
}

export default Fleet;