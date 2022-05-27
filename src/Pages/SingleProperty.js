import React from 'react';
import './SingleProperty.css';
import 'bootstrap/dist/css/bootstrap.css'
import house from '../assets/property/property-img-1.jpg'
import house1 from '../assets/property/property-img-2.jpg'
import house2 from '../assets/property/property-img-3.jpg'
import house3 from '../assets/property/property-img-4.jpg'
import house4 from '../assets/property/property-img-5.jpg'
import fp from '../assets/property/floor-plan-1.png'


const SingleProperty = () => {


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
                                                    <h3>Luxury Villa House</h3>
                                                    <div className="mt-0">
                                                        <a href="#listing-location" className="listing-address">
                                                            <i className="fa fa-map-marker pr-2 ti-location-pin mrg-r-5"></i>77 - Central Park South, NYC
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single detail-wrapper mr-2">
                                                <div className="detail-wrapper-body">
                                                    <div className="listing-title-bar">
                                                        <h4>$ 230,000</h4>
                                                        <div className="mt-0">
                                                            <a href="#listing-location" className="listing-address">
                                                                <p>$ 1,200 / sq ft</p>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section> 
                                    <div id="listingDetailsSlider" className="carousel listing-details-sliders slide mb-30">
                                    <h5 className="mb-4">Gallery</h5>
                                    <div className="carousel-inner">
                                        <div className="item carousel-item active" data-slide-number="0">
                                            <img src={house} className="img-fluid" alt="slider-listing"></img>
                                        </div>
                                        <div className="item carousel-item" data-slide-number="1">
                                            <img src={house1} className="img-fluid" alt="slider-listing"></img>
                                        </div>
                                        <div className="item carousel-item active" data-slide-number="2">
                                            <img src={house2} className="img-fluid" alt="slider-listing"></img>
                                        </div>
                                        <div className="item carousel-item" data-slide-number="4">
                                            <img src={house3} className="img-fluid" alt="slider-listing"></img>
                                        </div>
                                        <div className="item carousel-item" data-slide-number="5">
                                            <img src={house4} className="img-fluid" alt="slider-listing"></img>
                                        </div>

                                        <a className="carousel-control left" href="#listingDetailsSlider" data-slide="prev"><i className="fa fa-angle-left"></i></a>
                                        <a className="carousel-control right" href="#listingDetailsSlider" data-slide="next"><i className="fa fa-angle-right"></i></a>

                                    </div>
                                    {/* <!-- main slider carousel nav controls --> */}
                                    <ul className="carousel-indicators smail-listing list-inline">
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
                                    </ul>
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
                                        <span className="det">For Sale</span>
                                    </li>
                                    <li>
                                        <span className="font-weight-bold mr-1">Property Price:</span>
                                        <span className="det">$230,000</span>
                                    </li>
                                    <li>
                                        <span className="font-weight-bold mr-1">Rooms:</span>
                                        <span className="det">6</span>
                                    </li>
                                    <li>
                                        <span className="font-weight-bold mr-1">Bedrooms:</span>
                                        <span className="det">7</span>
                                    </li>
                                    <li>
                                        <span className="font-weight-bold mr-1">Bath:</span>
                                        <span className="det">4</span>
                                    </li>
                                    <li>
                                        <span className="font-weight-bold mr-1">Garages:</span>
                                        <span className="det">2</span>
                                    </li>
                                    <li>
                                        <span className="font-weight-bold mr-1">Year Built:</span>
                                        <span className="det">10/6/2020</span>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="floor-plan property wprt-image-video w50 pro">
                                <h5>Floor Plans</h5>
                                <img alt="image" src={fp}></img>
                            </div>
                        </div>
                        
                        
                        
                        <aside class="col-lg-4 col-md-12 car">
                            <div class="single widget">
                                <div className="schedule widget-boxed mt-33 mt-0">
                                        <div className="widget-boxed-header">
                                            <h4><i className="fa fa-calendar pr-3 padd-r-10"></i>Schedule a Tour</h4>
                                        </div>
                                        <div className="widget-boxed-body">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-12 book">
                                                    <input type="text" id="reservation-date" data-lang="en" data-large-mode="true" data-min-year="2017" data-max-year="2020" data-disabled-days="08/17/2017,08/18/2017" data-id="datedropper-0" data-theme="my-style" className="form-control picker-input" readonly=""></input>
                                                </div>
                                                <div className="col-lg-6 col-md-12 book2">
                                                    <input type="text" id="reservation-time" className="form-control td-input" readonly=""></input>
                                                </div>
                                            </div>
                                            <a href="payment-method.html" className="btn reservation btn-radius theme-btn full-width mrg-top-10">Submit Request</a>
                                        </div>
                                </div>
                            </div>
                            
                            
                            <div class="widget-boxed mt-33 mt-5">
                                    <div class="widget-boxed-header">
                                        <h4>Seller Information</h4>
                                    </div>
                                    <div class="widget-boxed-body">
                                        <div class="sidebar-widget author-widget2">
                                            <div class="author-box clearfix">
                                                <img src="images/testimonials/ts-1.jpg" alt="author-image" class="author__img"></img>
                                                <h4 class="author__title">Lisa Clark</h4>
                                                <p class="author__meta">Agent of Property</p>
                                            </div>
                                            <ul class="author__contact">
                                                <li><span class="la la-map-marker"><i class="fa fa-map-marker"></i></span>302 Av Park, New York</li>
                                                <li><span class="la la-phone"><i class="fa fa-phone" aria-hidden="true"></i></span><a href="#">(234) 0200 17813</a></li>
                                                <li><span class="la la-envelope-o"><i class="fa fa-envelope" aria-hidden="true"></i></span><a href="#">lisa@gmail.com</a></li>
                                            </ul>
                                            <div class="agent-contact-form-sidebar">
                                                <h4>Request Inquiry</h4>
                                                <form name="contact_form" method="post" action="functions.php">
                                                    <input type="text" id="fname" name="full_name" placeholder="Full Name" required=""></input>
                                                    <input type="number" id="pnumber" name="phone_number" placeholder="Phone Number" required=""></input>
                                                    <input type="email" id="emailid" name="email_address" placeholder="Email Address" required=""></input>
                                                    <textarea placeholder="Message" name="message" required=""></textarea>
                                                    <input type="submit" name="sendmessage" class="multiple-send-message" value="Submit Request"></input>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </aside>

                    </div>

                </div>
            </section>
            

        
    );
  }
  export default SingleProperty;