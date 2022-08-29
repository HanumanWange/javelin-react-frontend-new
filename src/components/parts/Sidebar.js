import React, { useEffect } from 'react';

import { Link, useHistory } from 'react-router-dom';
//import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./parts.scss"

const Sidebar = (props) => {
    const history = useHistory()

    // useEffect(() => {
    //     let nav_btn = document.getElementById("nav_btn")
    //     let nav_btn_mb = document.getElementById('nav_btn_mb')
    //     nav_btn.classList.remove('notshow')
    //     nav_btn_mb.classList.remove('notshow')

    //     // if (props.user.loading === false) {
    //     //     if (props.user.is_authenticated === false) {
    //     //         history.push('/login')
    //     //     }
    //     // }

    // }, [props]);

    if (!props.user.loading && !props.user.is_authenticated){
        history.push('/login')
    }


    return (
        <>
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
                <ul className="nav">
                    <li className="nav-item">
                        <Link to="/account/trade/start" className="nav-link active">
                            <i className="icon-grid menu-icon"></i>
                            <span className="menu-title">Dashboard</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                            <i className="icon-layout menu-icon"></i>
                            <span className="menu-title">Trading Accounts</span>
                            <i className="menu-arrow"></i>
                        </a>
                            <div className="collapse" id="ui-basic">
                                <ul className="nav flex-column sub-menu">

                                    <li className="nav-item">
                                        <Link to="/account/alice-form" className="nav-link">Alice</Link>
                                    </li>

                                    {/* <li className="nav-item">
                                        <Link to="/account/zerodha-form" className="nav-link" >Zerodha </Link>
                                    </li> */}

                                </ul>
                            </div>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/account/all-subscription">
                            <i className="icon-columns menu-icon"></i>
                            <span className="menu-title">All Subscription</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/account/my-subscription">
                            <i className="icon-columns menu-icon"></i>
                            <span className="menu-title">My Subscription</span>
                        </Link>
                    </li>

                    {/* <li className="nav-item">
                        <Link className="nav-link" to="/account/trade/start">
                            <i className="icon-bar-graph menu-icon"></i>
                            <span className="menu-title">Start Trade</span>
                        </Link>
                    </li> */}

                    <li className="nav-item">
                        <Link className="nav-link" to="/account/trade">
                            <i className="icon-bar-graph menu-icon"></i>
                            <span className="menu-title">All Trades</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/account/profile">
                            <i className="icon-head menu-icon"></i>
                            <span className="menu-title">Update Profile</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/account/change-password">
                            <i className="icon-head menu-icon"></i>
                            <span className="menu-title">Change Password</span>
                        </Link>
                    </li>

                   

                </ul>
                <li >
                        <a  style={{color:"red"}} href="https://docs.google.com/document/d/123QoplLIpoRta_HEn-HCGRrR7DtCpSxHg1j7uzIUm2Y/edit" target="_blank" >
                           
                        Click Here For Help
                        </a>
                    </li>
            </nav>




        </>
    )
}

export default Sidebar