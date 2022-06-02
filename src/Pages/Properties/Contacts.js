import React from 'react';
import './Contacts.css';
import Button from '@material-ui/core/Button';
import Apt1 from '../../assets/apt1.jpeg'


function Contacts() {
  return (

    <div className='ccard'>
      <div className='ccard-header ccard-image'><img src={Apt1} /></div>
      <h4>
          TITLE
      </h4>
      <p>PRICE : </p>
      <ul className="homes-list clearfix pb-3">
                    <li className="the-icons">
                        <i className="flaticon-bed mr-2" aria-hidden="true"></i>
                        <span>6 Bedrooms</span>
                    </li>
                    <li className="the-icons">
                        <i className="flaticon-bathtub mr-2" aria-hidden="true"></i>
                        <span>3 Bathrooms</span>
                    </li>
                    <li className="the-icons">
                        <i className="flaticon-square mr-2" aria-hidden="true"></i>
                        <span>720 sq ft</span>
                    </li>
                    <li className="the-icons">
                        <i className="flaticon-car mr-2" aria-hidden="true"></i>
                        <span>2 Garages</span>
                    </li>
                </ul>

      
      <div className='ccard-footer'>
        <button className='cc-btn'>Details</button>
      </div>

      
    </div>
  );
}

export default Contacts