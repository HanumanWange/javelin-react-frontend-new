import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer className="footer">

                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-5 col-12'>
                            <div className='d-lg-block d-flex  justify-content-center flex-column w-100 mb-0'>
                                  <img src="/static/images/JAVLOGO26.png" className="footer-logo mx-lg-left mx-auto " />
                                    {/* <div className='icon-design mx-lg-left mx-auto ' >
                                        <div>
                                            <a herf="" >
                                                <i className=' fa fa-facebook-f' ></i>
                                            </a>
                                        </div>
                                        <div>
                                            <a herf="" >
                                                <i className=' fa fa-linkedin' ></i>
                                            </a>
                                        </div>
                                        <div>
                                            <a herf="" >
                                                <i className=' fa fa-twitter' ></i>
                                            </a>
                                        </div>
                                        <div>
                                            <a herf="" >
                                                <i className=' fa fa-dribbble' ></i>
                                            </a>
                                        </div>

                                    </div> */}
                            </div>
                          

                        </div>
                        <div className='col-lg-3 col-md-6'>
                            <div className='footer-secound-box '>
                                <div className='one-box'>
                                    <h4>Get to know us</h4>
                                    <div className='line' ></div>
                                    <ul className="footer-section-list">
                                        <li>
                                            <a className='anc-clr' to="" target="_blank">Account</a>
                                        </li>
                                        <li className="footer-links footer-section-address">

                                            <Link className="" to="/"> Home </Link>

                                        </li>

                                        <li className="footer-links footer-section-address">

                                            <Link className="" to="/about"> About us </Link>

                                        </li>

                                        <li className="footer-links footer-section-address">

                                            <Link className="" to="/trading"> Algo Trading </Link>

                                        </li>

                                        <li className="footer-links footer-section-address">

                                            <Link className="" to="/traning"> Training </Link>

                                        </li>
                                        <li className="footer-links footer-section-address">

                                            <Link className="" to="/terms&conditions">Terms & Conditions</Link>

                                        </li>

                                        {/* <li className="footer-links footer-section-address">

                                            <Link className="" to="/privacy-policy"> Privacy Policy </Link>

                                        </li>

                                        <li className="footer-links footer-section-address">

                                            <Link className="" to="/refund-policy"> Refund Policy </Link>

                                        </li>

                                        <li className="footer-links footer-section-address">

                                            <Link className="" to="/help"> Help </Link>

                                        </li> */}

                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 '>
                            <div className='footer-secound-box'>

                                <div className='one-box'>
                                    <h4>Get to know us</h4>
                                    <div className='line' ></div>
                                </div>
                                <div className='contact-box'>
                                    <p>8001, Velocity Business Hub, NR. Madhuvan Circle, LP Savani Road, Hyderabad,  – 399088.</p>
                                    <div> <a href="mailto:"><span _ngcontent-serverapp-c78="">infojavelin.com</span></a></div>
                                    <div>
                                        <a href="tel:+88298 87874">(+91) 85104541 478</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="  d-flex justify-content-center align-items-center copyright">


                    <p className='footer-section-copyright px-2 m-0'>&#169;</p>

                    <span className="footer-section-copyright">
                        Javelin Traders. All Right Reserved.
                    </span>

                </div>
            </footer>
        </>

    )
}

export default Footer