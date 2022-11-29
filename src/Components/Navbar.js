import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='nav' style={{backgroundColor:"green", textAlign:"right", 
    paddingTop:15, paddingBottom:10, textDecorationLine:"none"}}>
      <Link to="/home" className='home' style={{color:"white",
    }}>Home</Link>
      <Link to="/market" className='market' style={{color:"white", 
      marginLeft:20}}>Market</Link>
      <Link to="/memoriam" className='memoriam' style={{color:"white", marginRight:20, 
      marginLeft:20}}>Memoriam</Link>
      <Link to="/industries" className='industries' style={{color:"white", marginRight:20}}>Industries</Link>
    </div>
  );
}

export default Navbar;
