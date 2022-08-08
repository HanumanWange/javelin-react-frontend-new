import React, { useEffect, useState } from 'react'
import '../../../../scss/Home.scss'
import AboutImg from '.././about-img.png'
// import Contact from '../../parts/Contact';


const Aboutinner = () => {
    return (
        <>
          <div className='aboutus'>
                <div className='container'>
                    <div className='heading'>
                        <h2 className="about-heading text-center ">About Us</h2>
                        <div className='line-bar mx-auto' ></div>
                    </div>
                    <div className='row align-items-center'>
                        <div className='col-lg-6'>
                            <img className='mb-lg-0 mb-5 w-100 '  src={AboutImg} />
                        </div>
                        <div className='col-lg-6'>
                            <div className="abouttext ">


                                <p >
                                    We are a team of dedicated Traders, Data Scientists and Developers bringing success to people in the stock market.
                                    Our product can be used with minimum knowledge about the stock market and we provide free training to make you
                                    understand our products. We are having web and app based solutions which can be managed even at workspace.
                                    <br />
                                    <br />
                                    Our team uses Price Action to trade in Equity and Derivative Markets and we believe in strategy first approach and  managing
                                    money with Proper Risk Reward Ratio (RRR)  which is the key factor in our well tested flexible strategies that accommodate both
                                    bull and bear markets. We conduct both online,offline and   hybrid  training as we strongly believe people connect is important.
                                </p>
                                {/* <Contact /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aboutinner