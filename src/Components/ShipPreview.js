function ShipPreview({
    ship,
    selectShipToPlace
}) {
    let placeholder = new Array(ship.length).fill(0);
    let shipBoxes = placeholder.map((_n, i) => {
        return (
        <div className="preview-box" key={i}></div>
        );
    })

    return (
        <div
            id={`${ship.name}-preview`}
            className="preview"
            onClick={() => selectShipToPlace(ship.name)}
            key={ship.name}
        >
            <div className="preview-name">{ship.name}</div>
            <div className="preview-boxes">{shipBoxes}</div>
        </div>
    );
}

export default ShipPreview;