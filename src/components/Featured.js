import './Featured.css';
import react from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.css';
import SingleCard from '../Pages/SingleCard';




const Featured = () => {
    return(
            <div className='container'>
            <h4 className='mb-3'>Featured Properties</h4>
            <div className="row">
                <SingleCard/>
                <SingleCard/>
                <SingleCard/>
                
            </div>
            </div>
        
    )
}

export default Featured