import React, { useState, useEffect } from 'react'
import Sidebar from '../../parts/Sidebar';
import DashboardFooter from '../../parts/DashboardFooter';
import AxiosCall from '../../AxiosCall';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const AccountUpdate = (props) => {

    const [state, setState] = useState({
        data: {},
    })
    async function load_data() {
        await AxiosCall({
            method: 'get', url: props.user.url + '/api/',
            is_auth: true,
        }).then(resp => {
            if (resp.response == true) {
                setState({
                    data: resp.bknd_data
                })
            }
        })

    }
    function on_change_fun(e) {
        let update = state.data
        let nam = e.target.name
        update[nam] = e.target.value
        setState({ data: update })

    }

    async function submit_profile() {
        const formData = new FormData()
        formData.append("first_name", state.data.first_name)
        formData.append("last_name", state.data.last_name)
        formData.append("email", state.data.email)
        formData.append("phone", state.data.phone)

        await AxiosCall({
            method: 'put', url: props.user.url + '/api/',
            is_auth: true, post_data: formData
        }).then(resp => {
            if (resp.response == true) {
                //console.log("axios_data", resp)
                toast.success("Successfully Changed Account..")
            }
            else {
                toast.error("Something is wrong......")
            }
        })

    }


    useEffect(() => {
        let mounted = true;

        if (mounted) {
            load_data()

        }

        return () => (mounted = false);
    }, []);







    return (
        <>
            <ToastContainer />

            <div className='bord-design'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-3'>
                            <Sidebar user={props.user} />
                        </div>
                        <div className='col-lg-9'>
                            <div className="main-panel">

                                <div className="content-wrapper">
                                   
                                       
                                            <div className="card">
                                                <div className="card-body">
                                                    <h4 className="card-title">Update Your Profile</h4>

                                                    {state.data ?

                                                        <div className="forms-sample row">
                                                            <div className="form-group col-md-6">
                                                                <label for="exampleInputName1">First Name</label>
                                                                <input type="text" name='first_name' value={state.data.first_name}
                                                                    onChange={(e) => on_change_fun(e)}
                                                                    className="form-control" id="exampleInputName1" placeholder="Name" />
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                                <label for="exampleInputName1">Last Name</label>
                                                                <input type="text" name='last_name' value={state.data.last_name}
                                                                    onChange={(e) => on_change_fun(e)}
                                                                    className="form-control" id="exampleInputName1" placeholder="Name" />
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                                <label for="exampleInputEmail3">Email address</label>
                                                                <input type="email" name='email' value={state.data.email}
                                                                    onChange={(e) => on_change_fun(e)}
                                                                    className="form-control" id="exampleInputEmail3" placeholder="Email" />
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                                <label for="exampleInputName1">Contact No</label>
                                                                <input type="text" name='phone' value={state.data.phone}
                                                                    onChange={(e) => on_change_fun(e)}
                                                                    className="form-control" id="exampleInputName1" placeholder="Name" />
                                                            </div>


                                                            <div className='col-md-12'>
                                                                <button type="submit" onClick={submit_profile} className="btn btn-primary mr-2">Submit</button>

                                                            </div>



                                                        </div>
                                                        :
                                                        "Loading......."
                                                    }

                                                </div>
                                            </div>
                                       
                                 


                                </div>

                               

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DashboardFooter />




        </>
    )
}

export default AccountUpdate