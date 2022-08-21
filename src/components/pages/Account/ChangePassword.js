import React, { useState, useEffect } from 'react'
import Sidebar from '../../parts/Sidebar';
import DashboardFooter from '../../parts/DashboardFooter';
import AxiosCall from '../../AxiosCall';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './account.scss'

const ChangePassword = (props) => {

    const [oldPass, setOldPass] = useState({
        val: "",
        error_list: []
    })

    const [newPass, setNewPass] = useState({
        val: "",
        error_list: []
    })
    const [new2Pass, setNew2Pass] = useState({
        val: "",
        error_list: []
    })


    function on_change_fun(e) {

        let nam = e.target.name
        let val = e.target.value

        let err = [];

        if (nam === 'old_password') {

            setOldPass({
                val: val,
                error_list: err
            })
        }
        else if (nam === 'new_password') {

            let lowerCaseLetters = /[a-z]/g;

            if (!val.match(lowerCaseLetters)) {

                err.push('Password Must be Required Lowercase!')
            }

            let upperCaseLetters = /[A-Z]/g;
            if (!val.match(upperCaseLetters)) {

                err.push('Password Must be Required Uppercase!')
            }

            let numbers = /[0-9]/g;
            if (!val.match(numbers)) {
                err.push('Password Must be Required Number!')
            }

            if (val.length <= 8) {
                err.push('Password Must be Required 8 Digit!')
            }

            setNewPass({
                val: val,
                error_list: err
            })

        }
        else if (nam === 'new2_password') {

            console.log(val, newPass.val, new2Pass.val)



            if (newPass.val != val) {
                err.push("Password Doesn't Match")
            }

            setNew2Pass({
                val: val,
                error_list: err
            })
        }

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

    async function submit_forgot_form() {


        if (oldPass.val.length < 2 || newPass.val.length < 2 || new2Pass.val.length < 2) {
            return toast.error("Your Form Is Not Valid")
        }


        if (newPass.error_list.length != 0) {
            return toast.error("Strong Password Required")
        }
        if (new2Pass.error_list.length != 0) {
            return toast.error("Password is not match")
        }

        const formData = new FormData()
        formData.append('old_password', oldPass.val)
        formData.append('new_password', newPass.val)

        AxiosCall({
            method: 'put', url: props.user.url + '/api/change-password/',
            is_auth: true, post_data: formData
        }).then(resp => {
            if (resp.response == true) {
                toast.success("Successfully Changed Pasword")
            }
            else {
                toast.error("Password Is Not Valid.")
            }
        })

    }


    const [show, setShow] = useState(false)

    return (
        <>
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
                        <div className="col-12 grid-margin stretch-card rounded shadow-sm border">
                            <div className="card">
                                <div className="card-body col-md-7">
                                    <h4 className="card-title">Change Password</h4>

                                    <div className="forms-sample">
                                        <div className="form-group">
                                            <label>Old Password</label>
                                            <div className="input-group">
                                                <input type="password" name='old_password'
                                                    onChange={(e) => on_change_fun(e)}
                                                    id='old_password'
                                                    value={oldPass.val}
                                                    className="form-control" placeholder="Enter Your Password" />
                                                <div className="input-group-prepend">
                                                    <button
                                                        onClick={() => show_pass('old_password')}
                                                        className="input-group-text bg-primary text-white">
                                                        <i className="fa fa-eye" aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            {oldPass.error_list.map((i, id) => (
                                                <label className=' mt-2 text-danger' for="exampleInputEmail3">
                                                    {i}
                                                </label>

                                            ))}

                                        </div>

                                        <div className="form-group">
                                            <label>New Password</label>
                                            <div className="input-group">
                                                <input type="password" className="form-control"
                                                    name='new_password'
                                                    id='new_password'
                                                    value={newPass.val}
                                                    onChange={(e) => on_change_fun(e)}
                                                    placeholder="Enter Your New Password" />
                                                <div className="input-group-prepend">
                                                    <button
                                                        onClick={() => show_pass('new_password')}
                                                        className="input-group-text bg-primary text-white"><i className="fa fa-eye" aria-hidden="true"></i></button>
                                                </div>
                                            </div>
                                            {newPass.error_list.map((i, id) => (
                                                <p className='mt-1'>
                                                    <label className='text-danger' for="exampleInputEmail3">
                                                        {i}
                                                    </label>
                                                </p>

                                            ))}

                                        </div>

                                        <div className="form-group">
                                            <label>Confirm Password</label>
                                            <div className="input-group">
                                                <input type="password" className="form-control"
                                                    name='new2_password'
                                                    id='new2_password'
                                                    value={new2Pass.val}
                                                    onChange={(e) => on_change_fun(e)}
                                                    placeholder="Confirm Your Password" />
                                                <div className="input-group-prepend">
                                                    <button
                                                        onClick={() => show_pass('new2_password')}
                                                        className="input-group-text bg-primary text-white"><i className="fa fa-eye" aria-hidden="true"></i></button>
                                                </div>
                                            </div>
                                            {new2Pass.error_list.map((i, id) => (
                                                <label className=' mt-2 text-danger' for="exampleInputEmail3">
                                                    {i}
                                                </label>

                                            ))}
                                        </div>


                                        <button type="button" 
                                        onClick={submit_forgot_form}
                                        className="btn btn-primary mr-2">Submit</button>

                                    </div>
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

export default ChangePassword