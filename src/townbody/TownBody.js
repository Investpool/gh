import React from 'react';
import "./townBody.css";
import { useState } from "react";




export default function TownBody() {
    const [status, setStatus] = useState();
    
  
    return (
    <>
        <div className="container">
      <div className="townTop">
        <div className="townLogo">FOMENA</div>
        <div className="correspondent">
          <span className="correspondence">Resident Correspondent:</span>
          <span className="corresName">Teresa Coleman, 0243778253</span>
        </div>
      </div>
         <div className="selectors">
          <div className="home">
            <h5
            onClick={() =>
              setStatus(
                  <img className='gallery'
                    src="assets/random/city 3.webp"
                    alt="foto"
                    height="200"
                    width="300"
                  />
                )
              }>HOME</h5>
          </div>
          <div className="industry">
            <h5
              onClick={() =>
                setStatus(
                <form>
                  <label>INPUT BOX</label><br/>
                  <input></input><br/>
                  <input></input><br/>
                  <input></input><br/>
                  <input></input>
                </form>
                )
              }>
                INDUSTRY
              </h5>
          </div>
          <div className="aerialView">
            <h5
              onClick={() =>
                setStatus(<p>A nice aerial map to be displayed</p>)
              }
            >
              AERIAL VIEW
            </h5>
          </div>
          
          <div className="funeralTab">
            <h5
              onClick={() => 
                setStatus(<p>Seventeen people died last week</p>)}
            >
              FUNERAL TAB
            </h5>
          </div>
          
          <div className="infrastructure">
            <h5 onClick={() =>
                setStatus(
                  <p className='text'>
                    
                    < img src='assets/persons/Baaba.jpg' 
                    alt='foto' className='foto' height="100" width="100" 
                    />
                    
                  </p>
                )
              }
            >
              INFRASTRUCTURE
            </h5>
          </div>
          <div className="market">
            <h5 onClick={() => 
              setStatus(
              <div className='mart'>
                <div className='formpart'>
                  <h1>MARKET</h1>
                <form className='data'>
                  <label className='label'>Name of Seller</label>
                  <input placeholder="Seller's name"></input><br/><br/>
                  <label className='label' >Phone Number</label><br/>
                  <input placeholder='YourPhone Number'></input><br/><br/>
                  <label className='label'>Name of item</label><br/>
                  <input></input><br/><br/>
                  <label className='label'>Category</label><br/>
                  <input></input><br/><br/>
                  <label className='label'>Upload Picture</label><br/>
                  <input type="file" name='file' placeholder='Upload Picture'/>
                  <br/><br/>
                  <label className='label'>Price</label><br/>
                  <input></input><br/><br/>
                  <label className='label'>Condition</label><br/>
                  <input></input><br/><br/>
                  <label className='label'>Location</label><br/>
                  <input></input><br/><br/>
                  <label className='label'>Negotiable?</label><br/>
                  <input></input><br/><br/>
                  <button variant="primary" type="submit">Submit</button>
                </form>
                </div>
                <div className='show'>
                  <div className='collector'>
                  <div className='all'><img src='assets/random/colo.PNG' height="40" 
                   width="40" alt='pic' className='pics'/>
                   <p>Hyundai i10</p></div> 
                  </div>
                  <div className='collector'>
                  <div className='all'><img src='assets/random/ernst.jpg' height="40" 
                   width="40" alt='pic' className='pics'/>
                   <p>Electric Iron</p></div>
                  </div>
                  <div className='collector'>
                  <div className='all'><img src='assets/random/ernst.jpg' height="40" 
                   width="40" alt='pic' className='pics'/>
                   <p>Billy Goat</p></div>
                  </div>
                  <div className='collector'>
                  <div className='all'><img src='assets/random/ernst.jpg' height="40" 
                   width="40" alt='pic' className='pics'/>
                   <p>Plot of land</p></div>
                  </div>
                  <div className='collector'>
                  <div className='all'><img src='assets/random/ernst.jpg' height="40" 
                   width="40" alt='pic' className='pics'/>
                   <p>An Old cocoa Farm</p></div>
                  </div>
                  <div className='collector'>
                  <div className='all'><img src='assets/random/ernst.jpg' height="40" 
                   width="40" alt='pic' className='pics'/>
                   <p>Local Rice</p></div>
                  </div>
                  <div className='collector'>
                  <div className='all'><img src='assets/random/ernst.jpg' height="40" 
                   width="40" alt='pic' className='pics'/>
                   <p>Poultry Eggs</p></div>
                  </div>
                  <div className='collector'>
                  <div className='all'><img src='assets/random/ernst.jpg' height="40" 
                   width="40" alt='pic' className='pics'/>
                   <p>3-bedroom House</p></div>
                  </div>
                  
                </div>
              </div>
              )
              }>
              MARKET
            </h5>
          </div>
          <div className="prominent">
            <h5
              onClick={() =>
                setStatus()
              }
            >
              PROMINENT PERSONS
            </h5>
          </div>
          <div className="chieftancy">
            <h5
              onClick={() =>
                setStatus(<p>nana Akpanja is the only Chief in town</p>)
              }
            >
              CHIEFTANCY
            </h5>
          </div>
          <div className="agriculture">
            <h5
              onClick={() =>
                setStatus(
                  <p id='agric'>There is more than 500 acres of land under cultivation</p>
                )
              }
            >
              AGRICULTURE
            </h5>
          </div>
          <div className="resources">
            <h5 onClick={() => 
              setStatus(<p>If you work in technology</p>)
              }>
              ECONOMIC RESOURCES
            </h5>
          </div>
        </div>
         <div className="mainbox">
          <div className='boxOne'>
             {status}
             
          </div>
        </div>
      </div>
    </>
  );
};

   