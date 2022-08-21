import React from 'react';
import { Link } from "react-router-dom";

const DashboardFooter = () => {
    return (
        <>


            <footer>

                <div className="container">

                    <div className="row">

                    <div className='pt-2 col-12 col-md-12 col-lg-5 d-flex align-items-center db-footer'>
                        <ul className='d-flex align-items-center'>

                            <li className='px-2 db-footer-list '>
                                <Link className="nav-link" href="/">Home</Link>
                            </li>

                            <li className='px-2 db-footer-list'>
                                <Link href="/about"  className="nav-link">About</Link>
                            </li>

                            <li className='px-2 db-footer-list'>
                                <Link href="/trading">Trading</Link>
                            </li>

                            <li className='px-2 db-footer-list'>
                                <Link href="/traning">Training</Link>
                            </li>

                        </ul>
                    </div>

                    <div className='col-12 col-md-12 col-lg-3 d-flex align-items-center db-footer-logo'>

                        <p className='footer-section-copyright px-2 m-0'>&#169;</p>

                        <span className="footer-section-copyright">
                            Javelin Traders
                        </span>

                    </div>

                    {/* <div className='col-12 col-md-12 col-lg-4 d-flex align-items-center pr-5 pt-2 db-footer-icon'>

                        <ul className='d-flex align-items-center'>

                            <li className='px-3 db-footer-list'>
                                <a href="" target="_blank">
                                    <i className="fa fa-whatsapp" style={{ fontSize: "25px" }} aria-hidden="true"></i>
                                </a>
                            </li>

                            <li className='px-3 db-footer-list'>
                                <a href="" target="_blank">
                                    <i className="fa fa-paper-plane" style={{ fontSize: "25px" }} aria-hidden="true"></i>
                                </a>
                            </li>

                            <li className='px-3 db-footer-list'>
                                <a href="" target="_blank">
                                    <i className="fa fa-instagram" style={{ fontSize: "25px" }} aria-hidden="true"></i>
                                </a>
                            </li>


                        </ul>

                    </div> */}

                    </div>

                </div>

            </footer>


        </>
    )
}

export default DashboardFooter