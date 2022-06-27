import React, { useEffect, useState } from 'react';
import './SingleProperty.css';
import 'bootstrap/dist/css/bootstrap.css'
import house from '../assets/property/property-img-1.jpg'
import house1 from '../assets/property/property-img-2.jpg'
import house2 from '../assets/property/property-img-3.jpg'
import house3 from '../assets/property/property-img-4.jpg'
import house4 from '../assets/property/property-img-5.jpg'
import fp from '../assets/property/floor-plan-1.png'
import Featured from '../components/Featured';
import { useParams } from 'react-router-dom';
import { db } from '../firebase/firebaseApp';
import { getDoc,doc } from 'firebase/firestore';
import Slider from '../components/carousel/carousel';



const SingleProperty = () => {
    
    const {id} = useParams()
    const [property,setProperty] = useState('');

    function GetCurrentProperty() {
        useEffect(()=>{
            const getProperty = async() => {
                const docRef = doc(db,'sellForm',id);
                const docSnap = await getDoc(docRef);
                setProperty(docSnap.data());
            };
            getProperty();
        },[])
        return property
    }
    GetCurrentProperty();
        
        

    return(
            <section className='single-proper blog details'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-8 col-md-12 blog-pots'>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <section className ="headings-2 pt-0">
                                        <div className="pro-wrapper">
                                            
                                            <div className="detail-wrapper-body">
                                                <div className="listing-title-bar">
                                                    <h3>{property.Name_of_Property}</h3>
                                                    <div className="mt-0">
                                                        <a href="#listing-location" className="listing-address">
                                                            <i className="fa fa-map-marker pr-2 ti-location-pin mrg-r-5"></i>{property.Location}
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single detail-wrapper mr-2">
                                                <div className="detail-wrapper-body">
                                                    <div className="listing-title-bar">
                                                        <h4>Rs.{property.Price}</h4>
                                                        <div className="mt-0">
                                                            <a href="#listing-location" className="listing-address">
                                                                <p>{property.Sqft_total} Sqft</p>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section> 
                                    <div id="listingDetailsSlider" className="carousel listing-details-sliders slide mb-30">
                                    <h5 className="mb-4">Gallery</h5>
                                    {console.log("Images in SPA:"+property)}
                                    {property && <Slider images={property.Image_URL}/>}
                                    {/* <div className="carousel-inner">
                                        <div className="item carousel-item active" data-slide-number="0">
                                            <img src={property.Image_URL} className="img-fluid" alt="slider-listing"></img>
                                        </div>
                                        <div className="item carousel-item" data-slide-number="1">
                                            <img src={house1} className="img-fluid" alt="slider-listing"></img>
                                        </div>
                                        <div className="item carousel-item active" data-slide-number="2">
                                            <img src={property.Image_URL} className="img-fluid" alt="slider-listing"></img>
                                        </div>
                                        <div className="item carousel-item" data-slide-number="4">
                                            <img src={house3} className="img-fluid" alt="slider-listing"></img>
                                        </div>
                                        <div className="item carousel-item" data-slide-number="5">
                                            <img src={house4} className="img-fluid" alt="slider-listing"></img>
                                        </div>

                                        <a className="carousel-control left" href="#listingDetailsSlider" data-slide="prev"><i className="fa fa-angle-left"></i></a>
                                        <a className="carousel-control right" href="#listingDetailsSlider" data-slide="next"><i className="fa fa-angle-right"></i></a>

                                    </div> */}
                                    {/* <!-- main slider carousel nav controls --> */}
                                    {/* <ul className="carousel-indicators smail-listing list-inline">
                                        <li className="list-inline-item">
                                            <a id="carousel-selector-0" className="selected" data-slide-to="0" data-target="#listingDetailsSlider">
                                                <img src={house} className="img-fluid" alt="listing-small"></img>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a id="carousel-selector-1" data-slide-to="1" data-target="#listingDetailsSlider">
                                                <img src={house1} className="img-fluid" alt="listing-small"></img>
                                            </a>
                                        </li>
                                        <li className="list-inline-item active">
                                            <a id="carousel-selector-2" data-slide-to="2" data-target="#listingDetailsSlider">
                                                <img src={house2} className="img-fluid" alt="listing-small"></img>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a id="carousel-selector-3" data-slide-to="3" data-target="#listingDetailsSlider">
                                                <img src={house3} className="img-fluid" alt="listing-small"></img>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a id="carousel-selector-4" data-slide-to="4" data-target="#listingDetailsSlider">
                                                <img src={house4} className="img-fluid" alt="listing-small"></img>
                                            </a>
                                        </li>
                                    </ul> */}
                                    </div>
                                    <div className="blog-info details mb-30">
                                        <h5 className="mb-4">Description</h5>
                                        <p className="mb-3">{property.Description}</p>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="single homes-content details mb-30">
                            
                                <h5 className="mb-4">Property Details</h5>
                                <ul className="homes-list clearfix">
                                    <li>
                                        <span className="font-weight-bold mr-1">Property ID:</span>
                                        <span className="det">V254680</span>
                                    </li>
                                    <li>
                                        <span className="font-weight-bold mr-1">Property Type:</span>
                                        <span className="det">House</span>
                                    </li>
                                    <li>
                                        <span className="font-weight-bold mr-1">Property status:</span>
                                        <span className="det">For Rent</span>
                                    </li>
                                    <li>
                                        <span className="font-weight-bold mr-1">Property Price:</span>
                                        <span className="det">Rs.{property.Price}</span>
                                    </li>
                                    <li>
                                        <span className="font-weight-bold mr-1">Rooms:</span>
                                        <span className="det">{property.Number_of_Bedrooms}</span>
                                    </li>
                                    <li>
                                        <span className="font-weight-bold mr-1">Bedrooms:</span>
                                        <span className="det">{property.Number_of_Bedrooms}</span>
                                    </li>
                                    <li>
                                        <span className="font-weight-bold mr-1">Bath:</span>
                                        <span className="det">{property.Number_of_Bathrooms}</span>
                                    </li>
                                    <li>
                                        <span className="font-weight-bold mr-1">Garages:</span>
                                        <span className="det">{property.Number_of_Garages}</span>
                                    </li>
                                    <li>
                                        <span className="font-weight-bold mr-1">Year Built:</span>
                                        <span className="det">{property.yr_built}</span>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="floor-plan property wprt-image-video w50 pro mb-3">
                                <h5>Floor Plans</h5>
                                <img alt="image" src={fp}></img>
                            </div>
                        </div>
                        
                        
                        
                        <aside className="col-lg-4 col-md-12 car">                          
                            
                            <div className="widget-boxed mt-33 mt-5">
                                    <div className="widget-boxed-header">
                                        <h4>Seller Information</h4>
                                    </div>
                                    <div className="widget-boxed-body">
                                        <div className="sidebar-widget author-widget2">
                                            <div className="author-box clearfix">
                                                <h4 className="author__title">{property.seller_name}</h4>
                                                <p className="author__meta">Agent of Property</p>
                                            </div>
                                            <ul className="author__contact">
                                                <li><span className="la la-map-marker"><i className="fa fa-map-marker"></i></span>{property.Location}</li>
                                                <li><span className="la la-envelope-o"><i className="fa fa-envelope" aria-hidden="true"></i></span>{property.seller_number}</li>
                                            </ul>
                                            <div className="agent-contact-form-sidebar">
                                                <h4>Request Inquiry</h4>
                                                <form name="contact_form" method="post" action="functions.php">
                                                    <input type="text" id="fname" name="full_name" placeholder="Full Name" required=""></input>
                                                    <input type="number" id="pnumber" name="phone_number" placeholder="Phone Number" required=""></input>
                                                    <input type="email" id="emailid" name="email_address" placeholder="Email Address" required=""></input>
                                                    <textarea placeholder="Message" name="message" required=""></textarea>
                                                    <input type="submit" name="sendmessage" className="multiple-send-message" value="Submit Request"></input>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </aside>

                    </div>
                    <Featured/>
                </div>
            </section>
            

        
    );
  }
  export default SingleProperty;