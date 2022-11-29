import "./western.css"

export default function Western() {
  return (
    <div className="westernregion">
        <div className="westernregionWrapper">
            <div className="westernLeft">
                <h2 className="westernTitle">WESTERN REGION</h2>
            </div>
            <div className="westernDistrictsRight">
                <h2 className="districtItems">WESTERN DISTRICTS AND METRO ASSEMBLIES</h2>
                <div className="grOne">
                <div className="districts"> ELLEMBELE</div>	
                <div className="districts">TAKORADI SUB	</div>
                <div className="districts"> ESSIKADO KETAN</div>	
                <div className="districts">TARKWA NSUAEM</div>
                </div>
                  <div className="grTwo">	
                  <div className="districts">SHAMA</div>	
                  <div className="districts">AHANTA WEST</div>	
                  <div className="districts">JOMORO</div>	
                  <div className="districts">WASSA AMENFI WEST</div>
                  </div>
                  <div className="grThree">	
                  <div className="districts"> WASSA EAST</div>	
                  <div className="districts"> MPOHOR	</div>
                  <div className="districts"> NZEMA EAST MUNICIPAL</div>	
                  <div className="districts"> PRESTEA HONI VALLEY</div>
                  </div>
                  <div className="grFour">	
                  <div className="districts">SHAMA</div>	
                  <div className="districts">WASSA AMENFI CENTRAL</div>	
                  <div className="districts">WASSA AMENFI EAST</div>	
                  </div>
            </div>
        </div>
    </div>
  )
}