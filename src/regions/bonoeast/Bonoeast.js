import "./bonoeast.css";

export default function Bonoeast() {
  return (
    <div className="bonoeastregion">
      <div className="bonoeastRegionWrapper">
        <div className="bonoeastRegionLeft">
          <h2 className="bonoTitle">BONO EAST REGION</h2>
        </div>
        <div className="bonoeastDistrictsRight">
          
           <h2> BONO EAST DISTRICTS AND METRO ASSEMBLIES</h2>
          

          <div className="grOne">
            <div className="districts">SENE EAST</div>

            <div className="districts">ATEBUBU-AMANTIN</div>

            <div className="districts">PRU WEST</div>

            <div className="districts">NKORANZA NORTH </div>
          </div>

          <div className="grTwo">
            <div className="districts">NKORANZA SOUTH</div>

            <div className="districts">KINTAMPO SOUTH</div>

            <div className="districts"> TECHIMAN MUNICIPALITY</div>

            <div className="districts">TECHIMAN NORTH</div>
          </div>
          <div className="grThree">
            <div className="districts">KINTAMPO NORTH MUNICIPAL</div>

            <div className="districts">SENE WEST</div>

            <div className="districts"> PRU EAST</div>
          </div>
        </div>
      </div>
    </div>
  );
}
