import './Contacts.css';
import Button from '@material-ui/core/Button';
import Apt1 from '../../assets/apt1.jpeg'
import { propTypes } from 'react-bootstrap/esm/Image';
import { Link } from 'react-router-dom';


function Contacts(props) {
  
  return (

    <div className='ccard'>
      <div className='ccard-header ccard-image'><img src={props.image} /></div>
      <h4>
          {props.name}
      </h4>
      <p>PRICE : {props.price}</p>
      <ul className="homes-list clearfix pb-3">
                    <li className="the-icons">
                        <i className="flaticon-bed mr-2" aria-hidden="true"></i>
                        <span>{props.bedrooms} Bedrooms</span>
                    </li>
                    <li className="the-icons">
                        <i className="flaticon-bathtub mr-2" aria-hidden="true"></i>
                        <span>{props.bathrooms} Bathrooms</span>
                    </li>
                    <li className="the-icons">
                        <i className="flaticon-square mr-2" aria-hidden="true"></i>
                        <span>{props.totalsqft} sq ft</span>
                    </li>
                    <li className="the-icons">
                        <i className="flaticon-car mr-2" aria-hidden="true"></i>
                        <span>{props.garages} Garages</span>
                    </li>
                </ul>

      
      <div className='ccard-footer'>
        <Link to={`/Rent/properties/${props.id}`}><button className='cc-btn'>Details</button></Link>
      </div>

      
    </div>
  );
}

export default Contacts