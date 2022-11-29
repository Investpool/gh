import React from 'react';
import "./bodyItem.css"

export default function BodyItem() {
  return (
    <div className='sales'>
        <div className='itemImg'>
            <img src='assets/random/colo.PNG' alt='pic'/>
        </div>
        <div className='itemDesc'>
            <div className='name'><p>Name of Seller: Kweku Ntim</p></div>
            <div className='phone'><p>Phone: 024 3464 387</p></div>
            <div className='location'><p>Location: Chapel Square, Fomena</p></div>
            <div className='price'><p>Price: Ghc 54,666</p></div>
            <div className='category'><p>Category: Car</p></div>
            <div className='condition'><p>Condition: Used</p></div>
            <div className='negotiable'><p>Negotiable: Yes</p></div>
        </div>
        <div className='adverts'>
          <img src='assets/random/advert.PNG' alt='hhh' height="430" width="380"  />
        </div>
    </div>
  )
}
