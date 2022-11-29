import "./uppereast.css";

export default function Uppereast() {
  return (
    <div className="uppereastregion">
      <div className="uppereastregionWrapper">
        <div className="uppereastLeft">
          <h2 className="uppereastTitle">UPPER EAST</h2>
        </div>
        <div className="uppereastDistrictsRight">
          <h2 className="districtItems">
            UPPER EAST DISTRICTS AND METRO ASSEMBLIES
          </h2>
          <div className="grOne">
            <div className="districts">BAWKU MUNICIPAL</div>
            <div className="districts">BAWKU WEST</div>
            <div className="districts">BOLGATANGA MUNICIPAL</div>
            <div className="districts">BONGO</div>
          </div>
          <div className="grTwo">
            <div className="districts">BUILSA NORTH</div>
            <div className="districts">BUILSA SOUTH</div>
            <div className="districts">GARU-TIMPANE</div>
            <div className="districts">KASENA NANKANA EAST</div>
          </div>
          <div className="grThree">
            <div className="districts">NABDAM</div>
            <div className="districts">PUSIGA</div>
            <div className="districts">TALENSI</div>
            <div className="districts">KASENA NANKANA WEST</div>
          </div>
          <div className="grFour">
            <div className="districts">BINDURI</div>
          </div>
        </div>
      </div>
    </div>
  );
}
