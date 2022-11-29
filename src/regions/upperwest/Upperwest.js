import "./upperwest.css"

export default function Upperwest() {
  return (
    <div className="upperwestregion">
        <div className="upperwestregionWrapper">
            <div className="upperwestLeft">
                <h2 className="upperwestTitle">UPPER WEST</h2>
            </div>
            <div className="upperwestDistrictsRight">
                <h2 className="districtItems">UPPER WEST DISTRICTS AND METRO ASSEMBLIES</h2>
                <div className="grOne">
                <div className="districts"> DAFFIAMA-BUSSIE-ISSA	</div>
                <div className="districts">JIRAPA</div>	
                <div className="districts">LAMBUSIE KARNI</div>	
                <div className="districts">LAWRA</div>	
                </div>
                <div className="grOne">
                <div className="districts">NADOWLI-KALEO</div>	
                <div className="districts">NANDON</div>	
                <div className="districts"> SISILA EAST	</div>
                <div className="districts">SISSILA WEST</div>
                </div>
                <div className="grOne">
                <div className="districts">WA EAST</div>	
                <div className="districts">WA MUNICIPAL</div>	
                <div className="districts">WA WEST</div>	
              </div>	
            </div>
        </div>
    </div>
  )
}