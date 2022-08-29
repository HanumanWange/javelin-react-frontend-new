import React from 'react'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AxiosCall from '../../AxiosCall';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import LoginImg from './login-one.png'
import {Helmet} from "react-helmet";

import './Login.scss'

const LoginPage = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    //toast.error("Process Has Been Failed.")

    const [loading, setLoading] = useState(false)

    function show_pass(id) {
        let elm = document.getElementById(id)
        if (elm.type == 'password') {
            elm.type = 'text'
        }
        else {
            elm.type = 'password'
        }

    }

    async function user_login() {
        setLoading(true)
        const formData = new FormData()
        formData.append('username', username)
        formData.append('password', password)
        await AxiosCall({ method: 'post', url: props.user.url + '/api/login/', post_data: formData }).then(resp => {
            if (resp.response == false) {
                toast.error('Invalid Username And password')
            }
            else {

                localStorage.setItem('user_data', JSON.stringify(resp.bknd_data))

                window.location.href = ('/account/trade/start')
            }
            setLoading(false)
        })
    }

    function on_change_fun(e) {
        let nam = e.target.name

        if (nam == 'username') {
            setUsername(e.target.value)
        }
        else if (nam == 'password') {
            setPassword(e.target.value)
        }


    }


    useEffect(() => {
        let nav_btn = document.getElementById("nav_btn")
        let nav_btn_mb = document.getElementById('nav_btn_mb')
        if(nav_btn_mb)
        nav_btn.classList.add('notshow')
        if(nav_btn_mb)
        nav_btn_mb.classList.add('notshow')

    }, [])

    return (
        <>
            <Helmet>
                <title>Login - Javelin Traders</title>
            </Helmet>
            <ToastContainer />
            <div className='login-page' >

                <div className="container">
                    <div className='row align-items-center'    >
                        <div className='col-lg-6' >
                            <img className='w-100' src={LoginImg} />
                        </div>
                        <div className='col-lg-6'>
                            <div className='login-text'>
                                <h4>
                                    Hello <br/>
                                    Welcome back
                                </h4>
                                <div className="form-group">
                                    <input type="email"
                                        onChange={(e) => on_change_fun(e)}
                                        className="form-control form-control-lg"
                                        onKeyPress={event => {
                                            if (event.key === 'Enter') {
                                                user_login()
                                            }
                                        }}
                                        id="exampleInputEmail1" name='username' placeholder="Email Id" />
                                </div>
                                <div className="input-group">
                                    <input type="password"
                                        onChange={(e) => on_change_fun(e)}
                                        onKeyPress={event => {
                                            if (event.key === 'Enter') {
                                                user_login()
                                            }
                                        }}
                                        className="form-control form-control-lg" name='password' id="password" placeholder="Password" />
                                    <div className="input-group-prepend">
                                        <button
                                            onClick={() => show_pass("password")}
                                            className="input-group-text text-white"><i className="fa fa-eye" aria-hidden="true"></i></button>
                                    </div>
                                </div>
                                <div className="mt-4 d-flex justify-content-end align-items-center">
                                    <Link to="/account/forgot-password" className="auth-link text-black"><a>Forgot password?</a></Link>
                                    
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <button className="btn signbtn "
                                        onClick={user_login} >SIGN IN</button>
                                </div>
                                

                                <div className="text-center mt-4 font-weight-light">
                                    Don't have an account? <Link to="/signin" className="text-primary">Create Account</Link>
                                </div>
                                <div className='mt-2 text-center'>
                                    <a style={{color:"red"}} href='https://docs.google.com/document/d/123QoplLIpoRta_HEn-HCGRrR7DtCpSxHg1j7uzIUm2Y/edit' target="_blank" >Click Here For Help</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {loading ?
                                    <div className='d-flex d-flex justify-content-center mt-5 align-items-center'>

                                        <div className="spinner-border mt-3" role="status">
                                            <span className="sr-only">Loading...</span>

                                        </div>
                                        <span className="mx-3 text-danger">Checking Your Credential...</span>
                                    </div>
                                    :
                                    ''
                                }
                </div>


                {/* <div className="content-wrapper d-flex align-items-center auth px-0">
                    <div className="">
                        <div className=""   >
                            <div className="auth-form-light text-left py-5 px-4 px-sm-5">

                                <div className="brand-logo">
                                    <img src="/static/images/logo22.png" alt="logo" />
                                </div>
                                {loading ?
                                    <div>

                                        <div className="spinner-border mt-3" role="status">
                                            <span className="sr-only">Loading...</span>

                                        </div>
                                        <span className="ml-3 text-danger">Checking Your Credential...</span>
                                    </div>
                                    :
                                    ''
                                }
                                <div className="pt-3">
                                    <div className="form-group">
                                        <input type="email"
                                            onChange={(e) => on_change_fun(e)}
                                            className="form-control form-control-lg"
                                            onKeyPress={event => {
                                                if (event.key === 'Enter') {
                                                    user_login()
                                                }
                                            }}
                                            id="exampleInputEmail1" name='username' placeholder="Email Id" />
                                    </div>
                                    <div className="input-group">
                                        <input type="password"
                                            onChange={(e) => on_change_fun(e)}
                                            onKeyPress={event => {
                                                if (event.key === 'Enter') {
                                                    user_login()
                                                }
                                            }}
                                            className="form-control form-control-lg" name='password' id="password" placeholder="Password" />
                                        <div className="input-group-prepend">
                                            <button
                                                onClick={() => show_pass("password")}
                                                className="input-group-text bg-primary text-white"><i className="fa fa-eye" aria-hidden="true"></i></button>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                                            onClick={user_login} >SIGN IN</button>
                                    </div>
                                    <div className="my-2 d-flex justify-content-between align-items-center">

                                        <a href="#" className="auth-link text-black">Forgot password?</a>
                                    </div>

                                    <div className="text-center mt-4 font-weight-light">
                                        Don't have an account? <Link to="/signin" className="text-primary">Create Account</Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div> */}

            </div>

        </>
    )
}

export default LoginPage