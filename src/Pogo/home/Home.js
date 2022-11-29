import React from 'react';
import "./home.css"

export default function Home() {
    return (
        <div className='homeContainer'>
            <h1>Welcome Home</h1>
            <div className='homeGallery'>
                <div className='firstGallery'>
                    <img className='fourth' src='assets/random/hnd.PNG'  alt='foto'height= {150} width={200}/>
                </div>
                <div className='secondGallery'>
                    <img className='fourth' src='assets/random/rbed.jpg' alt='foto' height= {150} width={200}/>
                </div>
                <div className='thirdGallery'>
                    <img className='fourth' src='assets/random/shade5.jpg' alt='foto' height= {150} width={200}/>
                </div>
                <div className='fourthGallery'>
                    <img className='fourth' src='assets/random/shade5.jpg' alt='foto' 
                    height= {150} width={200}/>
                </div>
                <div className='fifthGallery'>
                    <img className='fourth' src='assets/random/machine.jpg' alt='foto' height= {150} width={200}/>
                </div>
                <div className='sixthGallery'>
                    <img className='fourth' src='assets/random/shade7.PNG' alt='foto' height= {150} width={200}/>
                </div>
            </div>
        </div>
    )
}


