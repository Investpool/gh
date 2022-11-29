import React from 'react';
import "./market.css";


export default function Market() {
    return (
<div className='container'>
    <h1 className='heading'>MARKET</h1>
    <div className='marketPage'>
        <div className='formPage'>
        <form className='form'>
            <label>Name of Seller</label><br/>
            <input></input><br/><br/>
            <label>Phone No.</label><br/>
            <input></input><br/><br/>
            <label>Name of Item</label><br/>
            <input></input><br/><br/>
            <label>Location(house no.)</label><br/>
            <input></input><br/><br/>
            <label>Upload Picture of Item</label><br/>
            <input></input><br/><br/>
            <label>Price</label><br/>
            <input></input><br/><br/>
            <label>Condition</label><br/>
            <input></input><br/><br/>
            <label>Negotiable</label><br/>
            <input></input><br/><br/>
            <button type='submit'>Submit</button>
        </form>
        </div>
        <div className='infoPage'>
        <div className='infoPageWrapper'>
            <ul className='infoPageList'>
                <li className='infoListItems'>
                    <img className='infoImg' src='assets/random/colo.PNG' height={40} width={40} 
                    alt='foto'/>
                    <span className='item'>Hyundai Tucson i10</span>
                    <p className='date'>4th Nov, 2022</p>
                </li>
                <li className='infoListItems'>
                    <img className='infoImg' src='assets/random/machine.jpg' height={40} width={40} 
                    alt='foto'/>
                    <span className='item'>Sewing Machine</span>
                    <p className='date'>4th Nov, 2022</p>
                </li>
                <li className='infoListItems'>
                    <img className='infoImg' src='assets/random/colo.PNG' height={40} width={40} 
                    alt='foto'/>
                    <span className='item'>Hyundai Tucson i10</span>
                    <p className='date'>4th Nov, 2022</p>
                </li>
                <li className='infoListItems'>
                    <img className='infoImg' src='assets/random/colo.PNG' height={40} width={40} 
                    alt='foto'/>
                    <span className='item'>Hyundai Tucson i10</span>
                    <p className='date'>4th Nov, 2022</p>
                </li>
                <li className='infoListItems'>
                    <img className='infoImg' src='assets/random/colo.PNG' height={40} width={40} 
                    alt='foto'/>
                    <span className='item'>Hyundai Tucson i10</span>
                    <p className='date'>4th Nov, 2022</p>
                </li>
                <li className='infoListItems'>
                    <img className='infoImg' src='assets/random/colo.PNG' height={40} width={40} 
                    alt='foto'/>
                    <span className='item'>Hyundai Tucson i10</span>
                    <p className='date'>4th Nov, 2022</p>
                </li>
                <li className='infoListItems'>
                    <img className='infoImg' src='assets/random/colo.PNG' height={40} width={40} 
                    alt='foto'/>
                    <span className='item'>Hyundai Tucson i10</span>
                    <p className='date'>4th Nov, 2022</p>
                </li>
                <li className='infoListItems'>
                    <img className='infoImg' src='assets/random/colo.PNG' height={40} width={40} 
                    alt='foto'/>
                    <span className='item'>Hyundai Tucson i10</span>
                    <p className='date'>4th Nov, 2022</p>
                </li>
                <li className='infoListItems'>
                    <img className='infoImg' src='assets/random/colo.PNG' height={40} width={40} 
                    alt='foto'/>
                    <span className='item'>Hyundai Tucson i10</span>
                    <p className='date'>4th Nov, 2022</p>
                </li>
                
            </ul>
        </div>
        </div>
        <div className='advertPage'>
             <h1>Adverts</h1>
        </div>
    </div>
</div>
    )
}

