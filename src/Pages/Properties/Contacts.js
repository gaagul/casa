import React from 'react';
import './Contacts.css';
import Button from '@material-ui/core/Button';
import Apt1 from '../../assets/apt1.jpeg'


function Contacts() {
  return (

    <div className='card'>
      <div className='card-header card-image'><img src={Apt1} /></div>
      <div className='card-body'>
          hfkwflshfljdsfmslanlsnclsndkvns;dvnsnv;snkvsnvsnv
      </div>
      <div className='card-footer'>
        <button className='c-btn'>Details</button>
        <button className='c-btn c-btn-outline'>Contact Seller</button>
      </div>

      
    </div>
  );
}

export default Contacts