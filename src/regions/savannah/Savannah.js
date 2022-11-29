import "./savannah.css"

export default function Savannah() {
  return (
    <div className="savannahregion">
        <div className="savannahregionWrapper">
            <div className="savannahRegionLeft">
                <h2 className="savannahTitle">SAVANNAH REGION</h2>
            </div>
            <div className="savannahDistrictsRight">
                <div className="savannahDistrictsItems">SAVANNAH DISTRICTS AND METRO ASSEMBLIES</div>
                <div className="grOne">
                <div className="districts">BOLE	</div>
                <div className="districts">NORTH GONJA</div>	
                <div className="districts">CENTRAL GONJA</div>	
                <div className="districts">EAST GONJA</div>	
                </div>
                <div className="grTwo">
                <div className="districts">SAWLA TUNA KALBA</div>	
                <div className="districts">WEST GONJA</div>	
               </div>
            </div>
        </div>
    </div>
  )
}