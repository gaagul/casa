import '../components/Featured.css';
import react from 'react'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';
import Apt1 from '../assets/apt1.jpeg'
const SingleCard = () => {
    return(
        <><div className="item col-lg-4 col-md-6 col-xs-12 landscapes ">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Apt1} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        PRICE : 9000$
                    </Card.Text>
                </Card.Body>

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

                <Card.Body>
                    <Card.Link href="#">Details</Card.Link>
                    
                </Card.Body>

                <div className="footer">
                    <p>
                        <img src="#" alt="" className="mr-2"></img> Lisa Jhonson
                    </p>
            
                </div>
            </Card>
            </div></>
    )
}
export default SingleCard