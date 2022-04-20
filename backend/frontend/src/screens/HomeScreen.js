import React, { useState, useEffect } from 'react'
import { Carousel, Container, Image } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import cam1 from './cam1.jpg'
import cam2 from './cam2.jpg'
import cam3 from './cam3.png'


 
const HomeScreen = () => {

    const [hoverOpacity, setHoverOpacity] = useState(0.7)

    
    return (

        <div>
             <Carousel pause='hover' sm={12} md={6} lg={4} xl={3}>

                <Carousel.Item>
                    <Image src={cam1} style={{height:'100%', width:'100%'}}  fluid />
                    <Carousel.Caption>
                        <div className="bg-light p-3 text-dark d-none d-md-block" style={{opacity: hoverOpacity}}  
                            onMouseEnter={
                                () => {setHoverOpacity(1)}
                        }
                            onMouseLeave={
                                () => {setHoverOpacity(0.7)}
                        }
                        >
                            <h1  className='m-4  mb-2' style={{fontSize:'55px'}}>More intelligent. More Secure.</h1>
                            <h5 className='m-5'>Get the best security camera, for the best price. Delivered at your door step, installed and explained</h5>

                            <Link to={'/shop'}>
                                <button type="button" class="btn btn-primary btn-lg">Buy Now</button>
                            </Link>

                        </div>
                    </Carousel.Caption>
                </Carousel.Item> 
                

                 <Carousel.Item>
                    <Image src={cam2} style={{height:'100%', width:'100%'}} fluid />
                    <Carousel.Caption>
                        <div className="bg-light p-3 text-dark d-none d-md-block" style={{opacity: hoverOpacity}}  
                            onMouseEnter={
                                () => {setHoverOpacity(1)}
                        }
                            onMouseLeave={
                                () => {setHoverOpacity(0.7)}
                        }
                        >
                            <h1 className='m-4 mb-2' style={{fontSize:'55px'}}>Worried about the installation hassle ?</h1>
                            <h5 className='m-2'>Dont worry because we have got your back. Our team of professionals will set it up for you in no time.</h5>
                            
                            <Link to={'/installation'}>
                                <button type="button" class="btn btn-primary btn-lg">Installation</button>
                            </Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>    

                
                <Carousel.Item>
                    <Image src={cam3} style={{height:'100%', width:'100%'}}  fluid />
                    <Carousel.Caption>
                        <div className="bg-light p-3 text-dark d-none d-md-block" style={{opacity: hoverOpacity}}  
                            onMouseEnter={
                                () => {setHoverOpacity(1)}
                        }
                            onMouseLeave={
                                () => {setHoverOpacity(0.7)}
                        }
                        >
                            <h1 className='m-4 mb-2' style={{fontSize:'55px'}}>Make your and your loved one's life easy and secure.</h1>
                            <h5 className='m-2'>Our reliable smart home devices wont ever fail you and will be ready for your service 24/7</h5>
                            <Link to={'/contact'}>
                                <button type="button" class="btn btn-primary btn-lg">Give Feedback</button>
                            </Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>    
                


            </Carousel>


            
            
            <div className='mt-5'>
                <h1 className="text-center font-weight-light" style={{fontSize:'60px'}}>
                    What do we offer?
                </h1>

                <div className="card-deck">

                    <div className="card d-flex align-items-center justify-content-center m-5 shadow-lg p-3 mb-5 bg-white rounded border-0" style={{width: "15rem"}}>
                        <i className=" d-flex justify-center  fas fa-house-user fa-10x" />
                        <div className="card-body text-center">
                            <h4 className="card-title">Smarter Living</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>

                    <div className="card d-flex align-items-center justify-content-center m-5 shadow-lg p-3 mb-5 bg-white rounded border border-0" style={{width: "15rem"}}>
                        <i className="m-3 d-flex justify-center fas fa-tools fa-10x" />
                        <div className="card-body text-center">
                            <h4 className="card-title">Professional Installation</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>


                    <div className="card d-flex align-items-center justify-content-center m-5 shadow-lg p-3 mb-5 bg-white rounded border border-0" style={{width: "15rem"}}>
                        <i className="m-3 d-flex justify-center fas fa-user-shield fa-10x" />
                        <div className="card-body text-center">
                            <h4 className="card-title">Safety And Security</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>

                    

                </div>



                {/* second row */}
                <div style={{marginBottom:'250px'}} className="card-deck">

                    <div class="card d-flex align-items-center justify-content-center m-5 shadow-lg p-3 mb-5 bg-white rounded border border-0" style={{width: "15rem"}}>
                        <i className="m-3 d-flex justify-center fas fa-headset fa-10x" />
                        <div class="card-body text-center">
                            <h4 class="card-title">World-Class Customer Service</h4>
                            <p class="card-text">Got a problem ? Dont worry we are just a call away.</p>
                        </div>
                    </div>

                    <div class="card d-flex align-items-center justify-content-center m-5 shadow-lg p-3 mb-5 bg-white rounded border border-0" style={{width: "15rem"}}>
                        <i className="m-3 d-flex justify-center far fa-edit fa-10x" />
                        <div class="card-body text-center">
                            <h4 class="card-title">Customer Feedback</h4>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>

                    <div class="card d-flex align-items-center justify-content-center m-5 shadow-lg p-3 mb-5 bg-white rounded border border-0" style={{width: "15rem"}}>
                        <i className="m-3 d-flex justify-center fas fa-calendar-alt fa-10x" />
                        <div class="card-body text-center">
                            <h4 class="card-title">Scheduling Appointment</h4>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>

                </div>
            </div>




            <div style={{marginBottom:'350px'}}>
                <Container>
                    <img style={{float:'right', marginLeft:'100px'}} src="https://image.freepik.com/free-photo/close-up-delivery-woman-man_23-2149103399.jpg" className="img-responsive rounded float-right mr-5 d-none d-sm-block row" alt="image"></img>
                    <div  style={{float:'left'}}>
                        <h1 className="text-left mt-5 mb-5 ml-5 font-weight-bold" style={{fontSize:'58px'}}>
                            <u>You Dont !</u>
                        </h1>

                        <div className="card-res-chng">
                            <div className="card d-flex align-items-center justify-content-center shadow-lg p-3 mb-5 bg-white rounded border">
                                <div className="card-body text-center">
                                    <h2 className="card-title">have to worry about going out</h2>
                                    <p className="card-text">We will help you find the best products with the latest technology and get it delivered to your doorstep. Right from the comfort of your home.</p>
                                    
                                    <Link to={'/shop'}>
                                        <button type="button" class="btn btn-primary btn-lg">Buy Now</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>



            

            <div style={{marginBottom:'350px'}}>
                <Container>
                    <img style={{float:'left', marginRight:'100px'}} src="https://image.freepik.com/free-photo/service-man-adjusting-house-heating-system_1303-26545.jpg" className="img-responsive rounded float-left ml-5 d-none d-sm-block row" alt="image"></img>
                    <div style={{float:'right'}}>
                        <h1 className="text-right mt-5 mb-5 mr-5 font-weight-bold" style={{fontSize:'58px'}}>
                            <u>You Dont !</u>
                        </h1>

                        <div className="card-res-chng">
                            <div className="card d-flex align-items-center justify-content-center shadow-lg p-3 mb-5 bg-white rounded border">
                                <div className="card-body text-center">
                                    <h2 className="card-title">have to worry about installation</h2>
                                    <p className="card-text">Our team of professionals will come to your house whenever you want, to install the products the clean and right way without any mess.</p>
                                    
                                    <Link to={'/installation'}>
                                        <button type="button" class="btn btn-primary btn-lg">Book An Installation</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            


            <div style={{marginBottom:'350px'}}>
                <div  className="w-100" style={{marginBottom:'350px'}}>
                    <Container>
                        <img style={{float:'right', marginLeft:'100px'}} src="https://images.unsplash.com/photo-1593873964743-0d8b01c5c09f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" className="img-responsive rounded float-right mr-5 d-none d-sm-block row" alt="image"></img>
                        <div  style={{float:'left'}}>
                            <h1 className="text-left mt-5 mb-5 ml-5 font-weight-bold" style={{fontSize:'58px'}}>
                                <u>You Dont !</u>
                            </h1>

                            <div className='card-res-chng'>
                                <div className="card d-flex align-items-center justify-content-center shadow-lg p-3 mb-5 bg-white rounded border">
                                    <div className="card-body text-center">
                                        <h2 className="card-title">have to worry about the security of your loved ones</h2>
                                        <p className="card-text">Our wide range of security products are built to to make your home feel secure 24 hous a day, 7 days a week and 365 days a year.</p>
                                        
                                        <Link to={'/shop'}>
                                            <button type="button" class="btn btn-primary btn-lg">Buy Now</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>



            
            {/* Testimonials */}
            <section style={{paddingTop:'200px'}} class="team-section text-center my-5 row col-12 col-md-12">
                <div className="w-100">

                    {/* <!-- Section heading --> */}
                    <h1 class="h1-responsive font-weight-bold my-5 ">What do our customers have to say about us</h1>
                    {/* <!-- Section description --> */}
                    

                    {/* <!--Grid row--> */}
                    <div class="row text-center">

                        {/* <!--Grid column--> */}
                        <div class="col-md-4 mb-md-0 mb-5">

                            <div class="testimonial">
                                {/* <!--Avatar--> */}
                                <div class="avatar mx-auto">
                                    <img style={{width:'250px', height:'250px'}} src="https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80" class="rounded-circle z-depth-1 img-fluid" />
                                </div>
                                {/* <!--Content--> */}
                                <h4 class="font-weight-bold dark-grey-text mt-4">Farhan Davar</h4>
                                <p class="font-weight-normal dark-grey-text">
                                    <i class="fas fa-quote-left pr-2"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                                    eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
                                </p>
                                {/* <!--Review--> */}
                                <div class="orange-text">
                                    <i class="fas fa-star"> </i>
                                    <i class="fas fa-star"> </i>
                                    <i class="fas fa-star"> </i>
                                    <i class="fas fa-star"> </i>
                                    <i class="fas fa-star-half-alt"> </i>
                                </div>
                            </div>

                        </div>
                        {/* <!--Grid column--> */}

                        {/* <!--Grid column--> */}
                        <div class="col-md-4 mb-md-0 mb-5">

                            <div class="testimonial">
                                {/* <!--Avatar--> */}
                                <div class="avatar mx-auto">
                                    <img style={{width:'250px', height:'250px'}} src="https://images.unsplash.com/photo-1547212371-eb5e6a4b590c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" class="rounded-circle z-depth-1 img-fluid" />
                                </div>
                                {/* <!--Content--> */}
                                <h4 class="font-weight-bold dark-grey-text mt-4">Marie Yohanan</h4>
                                <p class="font-weight-normal dark-grey-text">
                                    <i class="fas fa-quote-left pr-2"></i>Ut enim ad minima veniam, quis nostrum exercitationem ullam
                                    corporis suscipit laboriosam, nisi ut aliquid commodi.
                                </p>
                                {/* <!--Review--> */}
                                <div class="orange-text">
                                    <i class="fas fa-star"> </i>
                                    <i class="fas fa-star"> </i>
                                    <i class="fas fa-star"> </i>
                                    <i class="fas fa-star"> </i>
                                    <i class="fas fa-star"> </i>
                                </div>
                            </div>

                        </div>
                        {/* <!--Grid column--> */}

                        {/* <!--Grid column--> */}
                        <div class="col-md-4">

                            <div class="testimonial">
                                {/* <!--Avatar--> */}
                                <div class="avatar mx-auto">
                                <img style={{width:'250px', height:'250px'}} src="https://images.unsplash.com/photo-1639242210298-27861f84eab1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" class="rounded-circle z-depth-1 img-fluid" />
                                </div>
                                {/* <!--Content--> */}
                                <h4 class="font-weight-bold dark-grey-text mt-4">Arthur 
                                clegg</h4>
                                <p class="font-weight-normal dark-grey-text">
                                    <i class="fas fa-quote-left pr-2"></i>At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                    blanditiis praesentium voluptatum deleniti atque corrupti.
                                </p>
                                {/* <!--Review--> */}
                                <div class="orange-text">
                                    <i class="fas fa-star"> </i>
                                    <i class="fas fa-star"> </i>
                                    <i class="fas fa-star"> </i>
                                    <i class="fas fa-star"> </i>
                                    <i class="far fa-star"> </i>
                                </div>
                            </div>

                        </div>
                        {/* <!--Grid column--> */}

                    </div>
                    {/* <!--Grid row--> */}
                </div>

            </section>
            {/* <!-- Section: Testimonials v.3 --> */}


            {/* style={{backgroundImage: `url("")` }} */}

            <div className="text-center shadow-lg">
                <h1 style={{marginTop:'200px'}}>
                    Got A Question?
                </h1>
                <p className="border-bottom border-5">If you have any question regarding our products, services, policies or anything related to us feel free to contact us, we will be happy to help you because for us our customers are just like our family.</p>
                <Link to={'/contact'}>
                    <button type="button" class="btn btn-primary btn-lg m-5">Contact Now</button>
                </Link>
            </div>


            <div className="mt-5 mx-5 text-center d-none d-md-block">
                <img src="https://ouch-cdn2.icons8.com/upU1N80OCG9F31fJYwL_cHUTkPKbeJkBPSDDssxpbLI/rs:fit:256:839/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMzg1/L2JhZGQ0ZDIzLWJj/MzYtNDFhNC05YTc4/LTI3NjJiOGVlY2Nj/OS5wbmc.png" /> 
                <img src="https://ouch-cdn2.icons8.com/oNaKuM31QJv-zgeuW8FRVHLpNB0ak54Qg6WC2cRArJw/rs:fit:256:396/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNjM3/L2ZkYWYzYjcxLWM5/YWEtNDU1Ny1iOWEx/LWE0NzIzZjQ1ZDZi/OC5wbmc.png" /> 
                <img src="https://ouch-cdn2.icons8.com/drOdT1b0o9LYHWiZEtHHjOK2vKC1z-BxbUID4zOl26I/rs:fit:256:499/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvOTIv/OTBmMzlkMWUtY2Qz/Ny00NWQzLTk2ZWUt/NDliM2M0ZGMwZGRm/LnBuZw.png" /> 
                <img className='ml-5' src="https://ouch-cdn2.icons8.com/ZX8fRpajVHkDkPpzbB3W7aoHSBHDiYKVAz72cs7-fjI/rs:fit:256:974/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNjI0/LzlmNWJhM2VmLWE0/ZmQtNGNlYi04MDZj/LTk4ZDc2ZGZiNGEx/YS5wbmc.png" /> 
            </div>

            <h1 className="mt-5 text-center">
                "Join Our Family Today"
            </h1>

        </div>
    )
}

export default HomeScreen


// Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
// when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
// into electronic typesetting, remaining essentially unchanged. It was popularised in