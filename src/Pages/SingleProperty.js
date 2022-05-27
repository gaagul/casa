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
                                    <div id="listingDetailsSlider" class="carousel listing-details-sliders slide mb-30">
                                    <h5 class="mb-4">Gallery</h5>
                                    <div class="carousel-inner">
                                        <div class="item carousel-item active" data-slide-number="0">
                                            <img src={house} class="img-fluid" alt="slider-listing"></img>
                                        </div>
                                        <div class="item carousel-item" data-slide-number="1">
                                            <img src={house1} class="img-fluid" alt="slider-listing"></img>
                                        </div>
                                        <div class="item carousel-item active" data-slide-number="2">
                                            <img src={house2} class="img-fluid" alt="slider-listing"></img>
                                        </div>
                                        <div class="item carousel-item" data-slide-number="4">
                                            <img src={house3} class="img-fluid" alt="slider-listing"></img>
                                        </div>
                                        <div class="item carousel-item" data-slide-number="5">
                                            <img src={house4} class="img-fluid" alt="slider-listing"></img>
                                        </div>

                                        <a class="carousel-control left" href="#listingDetailsSlider" data-slide="prev"><i class="fa fa-angle-left"></i></a>
                                        <a class="carousel-control right" href="#listingDetailsSlider" data-slide="next"><i class="fa fa-angle-right"></i></a>

                                    </div>
                                    {/* <!-- main slider carousel nav controls --> */}
                                    <ul class="carousel-indicators smail-listing list-inline">
                                        <li class="list-inline-item">
                                            <a id="carousel-selector-0" class="selected" data-slide-to="0" data-target="#listingDetailsSlider">
                                                <img src={house} class="img-fluid" alt="listing-small"></img>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a id="carousel-selector-1" data-slide-to="1" data-target="#listingDetailsSlider">
                                                <img src={house1} class="img-fluid" alt="listing-small"></img>
                                            </a>
                                        </li>
                                        <li class="list-inline-item active">
                                            <a id="carousel-selector-2" data-slide-to="2" data-target="#listingDetailsSlider">
                                                <img src={house2} class="img-fluid" alt="listing-small"></img>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a id="carousel-selector-3" data-slide-to="3" data-target="#listingDetailsSlider">
                                                <img src={house3} class="img-fluid" alt="listing-small"></img>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a id="carousel-selector-4" data-slide-to="4" data-target="#listingDetailsSlider">
                                                <img src={house4} class="img-fluid" alt="listing-small"></img>
                                            </a>
                                        </li>
                                    </ul>
                                    </div>
                                    
                                </div>
                            </div>

                            <div class="single homes-content details mb-30">
                            
                                <h5 class="mb-4">Property Details</h5>
                                <ul class="homes-list clearfix">
                                    <li>
                                        <span class="font-weight-bold mr-1">Property ID:</span>
                                        <span class="det">V254680</span>
                                    </li>
                                    <li>
                                        <span class="font-weight-bold mr-1">Property Type:</span>
                                        <span class="det">House</span>
                                    </li>
                                    <li>
                                        <span class="font-weight-bold mr-1">Property status:</span>
                                        <span class="det">For Sale</span>
                                    </li>
                                    <li>
                                        <span class="font-weight-bold mr-1">Property Price:</span>
                                        <span class="det">$230,000</span>
                                    </li>
                                    <li>
                                        <span class="font-weight-bold mr-1">Rooms:</span>
                                        <span class="det">6</span>
                                    </li>
                                    <li>
                                        <span class="font-weight-bold mr-1">Bedrooms:</span>
                                        <span class="det">7</span>
                                    </li>
                                    <li>
                                        <span class="font-weight-bold mr-1">Bath:</span>
                                        <span class="det">4</span>
                                    </li>
                                    <li>
                                        <span class="font-weight-bold mr-1">Garages:</span>
                                        <span class="det">2</span>
                                    </li>
                                    <li>
                                        <span class="font-weight-bold mr-1">Year Built:</span>
                                        <span class="det">10/6/2020</span>
                                    </li>
                                </ul>
                            </div>
                            
                            <div class="floor-plan property wprt-image-video w50 pro">
                                <h5>Floor Plans</h5>
                                <img alt="image" src={fp}></img>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            

        
    );
  }
  export default SingleProperty;