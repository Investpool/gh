import "./northeast.css";

export default function Northeast() {
  return (
    <div className="northeastregion">
      <div className="northeastregionWrapper">
        <div className="northeastRegionLeft">
          <h2 className="northeastTitle">NORTH EAST REGION</h2>
        </div>
        <div className="northeastDistrictsRight">
          <h2>NORTH EAST DISTRICTS AND METRO ASSEMBLIES</h2>
          <div className="grOne">
            <div className="districts">MAMPRUGO-MOADURI</div>
            <div className="districts">EAST MAMPRUSI</div>
            <div className="districts">WEST MAMPRUSI</div>
            <div className="districts">CHEREPONI</div>
          </div>
          <div className="grTwo">
            <div className="districts">BUNKPURUGU YUNYOO</div>
          </div>
        </div>
      </div>
    </div>
  );
}
