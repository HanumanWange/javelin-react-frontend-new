import React, { useState, useEffect } from 'react'
import Sidebar from '../../parts/Sidebar';
import DashboardFooter from '../../parts/DashboardFooter';

import AxiosCall from '../../AxiosCall';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Spinner from '../../parts/Spinner';
import './account.scss'
import {Helmet} from "react-helmet";



const AliceForm = (props) => {

    const [state, setState] = useState({
        data: null
    })

    const [loading, isLoading] = useState(false)

    async function check_form() {
        isLoading(true)
        await AxiosCall({
            method: 'put', url: props.user.url + '/api/alice-account/',
            is_auth: true, post_data: {}
        }).then(resp => {

            if (resp.response == false) {
                toast.error("Something Is Missing To Your Alice Account!")
                let update = state.data
                update.is_valid = false
                setState({ data: update })
                isLoading(false)
                return
            }
            toast.success("Alice Account Is Valid")
            isLoading(false)
        })
    }

    function show_pass(id) {
        let elm = document.getElementById(id)
        if (elm.type == 'password') {
            elm.type = 'text'
        }
        else {
            elm.type = 'password'
        }

    }

    function onchange_fun(e) {
        let update = state.data
        let nam = e.target.name
        let val = e.target.value
        update[nam] = val

        setState({ data: update })


    }

    async function alice_submit_form() {
        isLoading(true)
        const formData = new FormData()

        formData.append("user_name", state.data.user_name)
        formData.append("password", state.data.password)
        formData.append("client_id", state.data.client_id)
        formData.append("two_fa", state.data.two_fa)
        formData.append("secrect_key", state.data.secrect_key)


        await AxiosCall({
            method: 'post', url: props.user.url + '/api/alice-account/',
            is_auth: true, post_data: formData
        }).then(resp => {
            if (resp.response == true) {
                let update = state.data
                update.is_valid = true
                setState({ data: update })
                toast.success("Alice Account Has Been Valid")
                return isLoading(false)
            }
            isLoading(false)
            return toast.error("Alice Credentail Is Invalid")
        })
    }

    async function load_data() {
        await AxiosCall({
            method: 'get', url: props.user.url + '/api/alice-account/',
            is_auth: true,
        }).then(resp => {
            setState({ data: resp.bknd_data })
        })

    }

    useEffect(() => {

        let mounted = true

        if (mounted) {
            load_data()




        }
        return () => {

            mounted = false

        }
 


    }, [])
    const [show, setShow] = useState(false)

    return (
        <>
        <Helmet>
            <title>Alice Credential Form - Javelin Traders</title>
        </Helmet>
        <ToastContainer />
        <div className=" page-body-wrapper-one">
        <div className='d-lg-block d-none'>
                <Sidebar user={props.user} />
            </div>
             

            <div className='bariconaccout d-lg-none'>
                <i onClick={() => setShow(!show)} className='fa fa-bars' ></i>
            </div>

             <div >
                 {
                     show &&  <div className='menubaraccount'>
                         <div className='iconshowde'>
                            <i onClick={() => setShow(!show)} className='fa fa-close' ></i>
                         </div>
                     
                     <Sidebar user={props.user} />
                  </div>
                 }
               
             </div>

            <div className="main-panel">

                <div className="content-wrapper">
                    <div className="row">
                        <div className="col-md-12 grid-margin stretch-card stretch-card border shadow-sm rounded">
                            <div className="card">
                                <div className="card-body">


                                    {state.data && !loading ?
                                        <>
                                            <div className="px-2 ">
                                                <h4 className="card-title">Alice Credential Form</h4>
                                                <div className='d-flex  justify-content-end'>

                                                
                                                {state.data.is_valid ?
                                                    <button type="submit" onClick={check_form} className="btn btn-success mr-2 d-inline-block">Check</button>
                                                    :
                                                    ''
                                                }
                                                </div>
                                            </div>


                                            <div className="forms-sample row">
                                                <div className="form-group col-md-6">
                                                    <label for="exampleInputUsername1">Username</label>
                                                    <input type="text" className="form-control"
                                                        value={state.data.user_name}
                                                        name="user_name"
                                                        onChange={(e)=>onchange_fun(e)}
                                                        id="exampleInputUsername1" placeholder="Username" />
                                                </div>



                                                <div className="form-group col-md-6">
                                                    <label for="exampleInputEmail1">Password</label>
                                                    <div className="input-group">
                                                        <input type="password" className="form-control"
                                                            value={state.data.password}
                                                            name="password"
                                                            onChange={(e)=>onchange_fun(e)}
                                                            id="password" />
                                                        <div className="input-group-prepend">
                                                            <button
                                                                onClick={() => show_pass('password')}
                                                                className="input-group-text bg-primary text-white">
                                                                <i className="fa fa-eye" aria-hidden="true"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group col-md-6">
                                                    <label for="exampleInputPassword1">Client Id</label>
                                                    <div className="input-group">
                                                        <input type="password" className="form-control"
                                                            value={state.data.client_id}
                                                            name="client_id"
                                                            onChange={(e)=>onchange_fun(e)}
                                                            id="client_id" />
                                                        <div className="input-group-prepend">
                                                            <button
                                                                onClick={() => show_pass('client_id')}
                                                                className="input-group-text bg-primary text-white">
                                                                <i className="fa fa-eye" aria-hidden="true"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="form-group col-md-6">
                                                    <label for="exampleInputConfirmPassword1">Two Fa</label>
                                                    <input type="text"
                                                        value={state.data.two_fa}
                                                        className="form-control" 
                                                        name="two_fa"
                                                        onChange={(e)=>onchange_fun(e)} />
                                                </div>

                                                <div className="form-group col-md-6">
                                                    <label for="exampleInputUsername1">Secrect Key</label>
                                                    <div className="input-group">
                                                        <input type="password" className="form-control"
                                                            value={state.data.secrect_key}
                                                            name="secrect_key"
                                                            onChange={(e)=>onchange_fun(e)}
                                                            id="secrect_key" />
                                                        <div className="input-group-prepend">
                                                            <button
                                                                onClick={() => show_pass('secrect_key')}
                                                                className="input-group-text bg-primary text-white">
                                                                <i className="fa fa-eye" aria-hidden="true"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                               


                                                    <div className="col-md-12">
                                                        <button type="submit" onClick={alice_submit_form} className="btn btn-primary mr-2">Submit</button>
                                                    </div>

                                                    
                                            </div>
                                        </>
                                        :
                                        <i className="fa-li fa fa-spinner fa-spin"></i>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <DashboardFooter />
            </div>
        
        </div>




        </>
    )
}

export default AliceForm