import React from 'react';
import './Contacts.css';
import Button from '@material-ui/core/Button';
import Apt1 from '../../assets/apt1.jpeg'


function Contacts() {
  return (

    <div className='ccard'>
      <div className='ccard-header ccard-image'><img src={Apt1} /></div>
      <div className='ccard-body'>
          hfkwflshfljdsfmslanlsnclsndkvns;dvnsnv;snkvsnvsnv
      </div>
      <div className='ccard-footer'>
        <button className='cc-btn'>Details</button>
        <button className='cc-btn cc-btn-outline'>Contact Seller</button>
      </div>

      
    </div>
  );
}

export default Contacts