import "./bono.css";

export default function Bono() {
  return (
    <div className="bonoregion">
      <div className="bonoregionWrapper">
        <div className="bonoRegionLeft">
          <h2 className="bonoHeading">BONO REGION</h2>
        </div>
        <div className="bonoDistrictsRight">
          <div className="bonoHeadingRight">
            <h2> BONO DISTRICTS AND METRO ASSEMBLIES</h2>

            <div className="grOne">
              <div className="districts">SUNYANI WEST</div>

              <div className="districts">JAMAN SOUTH</div>

              <div className="districts">JAMAN NORTH</div>

              <div className="districts">SUNYANI MUNICIPAL</div>
            </div>

            <div className="grTwo">
              <div className="districts">WENCHI MUNICIPAL</div>

              <div className="districts">BANDA</div>

              <div className="districts">BEREKUM MUNICIPAL</div>

              <div className="districts">DORMAA MUNICIPAL</div>
            </div>
            
            <div className="grThree">
              <div className="districts">DORMAA EAST</div>

              <div className="districts"> DORMAA WEST</div>

              <div className="districts">TAIN</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
