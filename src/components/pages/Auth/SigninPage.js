import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AxiosCall from '../../AxiosCall';
import { Link, useHistory } from 'react-router-dom';
import './Login.scss'
import Logintwo from './login-two.png'

const SigninPage = (props) => {

  const history = useHistory()

  const [loading, setLoading] = useState(false)

  const [form, setForm] = useState({
    data: {
      first_name: "",
      last_name: "",
      email: "",
      contact: "",
      city: "",
      password: "",
      password2: "",
      mc: "",
      state: ""
    }
  })

  async function register_account() {
    setLoading(true)
    const formData = new FormData()

    formData.append("first_name", form.data.first_name)
    formData.append("last_name", form.data.last_name)
    formData.append("email", form.data.email)
    formData.append("contact", form.data.contact)
    formData.append("city", form.data.city)
    formData.append("password", form.data.password)
    formData.append("password2", form.data.password2)
    formData.append("profession", form.data.mc)
    formData.append("state", form.data.state)


    await AxiosCall({ method: 'post', url: props.user.url + '/api/register/', post_data: formData }).then(resp => {
      console.log(resp)
      if (resp.response == false) {
        toast.error('Something Is Wrong')
        setLoading(false)
        return
      }

      if (resp.bknd_data.status == 200) {
        toast.success(resp.bknd_data.message)
        history.push('/login')
      }
      else {
        toast.error(resp.bknd_data.message)
      }

      setLoading(false)

    })


  }


  function on_change_fun(e) {
    let update = form.data
    update[e.target.name] = e.target.value

    setForm({ data: update })
  }


  useEffect(() => {
    let nav_btn = document.getElementById("nav_btn")
    let nav_btn_mb = document.getElementById('nav_btn_mb')
    if(nav_btn)
    nav_btn.classList.add('notshow')
    if(nav_btn_mb)
    nav_btn_mb.classList.add('notshow')

  }, [])






  return (
    <>
      <ToastContainer />

      <div className='login-page'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <img className='w-100' src={Logintwo} />
            </div>
            <div className='col-lg-6'>
              <div className='login-text'>
                <h4>
                  Create <br />
                  Your Account
                </h4>
                <div className="pt-3">

                  <div className='row' >
                    <div className='col-lg-6'>
                      <div className="form-group">

                        <input type="text" className="form-control form-control-lg"
                          name="first_name"
                          value={form.data.first_name}
                          onChange={(e) => on_change_fun(e)}
                          placeholder="First Name" />
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className="form-group">

                        <input type="text" className="form-control form-control-lg"
                          name="last_name"
                          value={form.data.last_name}
                          onChange={(e) => on_change_fun(e)}
                          placeholder="Last Name" />
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className="form-group">

                        <input type="text" className="form-control form-control-lg"
                          name="mc"
                          value={form.data.mc}
                          onChange={(e) => on_change_fun(e)}
                          placeholder="Profession" />
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className="form-group">

                        <input type="email" className="form-control form-control-lg"
                          name="email"
                          value={form.data.email}
                          onChange={(e) => on_change_fun(e)}
                          placeholder="Email" />
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className="form-group">

                        <input type="password" className="form-control form-control-lg"
                          name="password"
                          value={form.data.password}
                          onChange={(e) => on_change_fun(e)}
                          placeholder="Password" />
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className="form-group">

                        <input type="password" className="form-control form-control-lg"
                          name="password2"
                          value={form.data.password2}
                          onChange={(e) => on_change_fun(e)}

                          placeholder="Confirm Password" />
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className="form-group">

                        <input type="text" className="form-control form-control-lg"
                          name="contact"
                          value={form.data.contact}
                          onChange={(e) => on_change_fun(e)}
                          placeholder="Contact" />
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className="form-group">

                        <input type="text" className="form-control form-control-lg"
                          name="city"
                          value={form.data.city}
                          onChange={(e) => on_change_fun(e)}
                          placeholder="City" />
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className="form-group">

                        <input type="text" className="form-control form-control-lg"
                          name="state"
                          value={form.data.state}
                          onChange={(e) => on_change_fun(e)}
                          placeholder="State" />
                      </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-center">
                    <button className="btn signbtn"
                      onClick={register_account} >SIGN UP</button>
                  </div>


                  <div className="text-center mt-4 font-weight-light">
                    I have an account? <Link to="/login" className="text-primary">Login Account</Link>
                  </div>
                </div>
              </div>
            </div>
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
        </div>
      </div>



      {/* <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="content-wrapper d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto border shadow-sm rounded">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">

                <div className="brand-logo">
                  <img src="/static/images/logo22.png" alt="logo" />
                </div>




                <div className="pt-3">
                  <div className="form-group">
                    <label className="form-label">First Name</label>
                    <input type="text" className="form-control form-control-lg"
                      name="first_name"
                      value={form.data.first_name}
                      onChange={(e) => on_change_fun(e)}
                      placeholder="First Name" />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Last Name</label>
                    <input type="text" className="form-control form-control-lg"
                      name="last_name"
                      value={form.data.last_name}
                      onChange={(e) => on_change_fun(e)}
                      placeholder="Last Name" />
                  </div>


                  <div className="form-group">
                    <label className="form-label">Profession</label>
                    <input type="text" className="form-control form-control-lg"
                      name="mc"
                      value={form.data.mc}
                      onChange={(e) => on_change_fun(e)}
                      placeholder="Profession" />
                  </div>



                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control form-control-lg"
                      name="email"
                      value={form.data.email}
                      onChange={(e) => on_change_fun(e)}
                      placeholder="Email" />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control form-control-lg"
                      name="password"
                      value={form.data.password}
                      onChange={(e) => on_change_fun(e)}
                      placeholder="Password" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Confirm Password</label>
                    <input type="password" className="form-control form-control-lg"
                      name="password2"
                      value={form.data.password2}
                      onChange={(e) => on_change_fun(e)}

                      placeholder="Confirm Password" />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Mobile No</label>
                    <input type="text" className="form-control form-control-lg"
                      name="contact"
                      value={form.data.contact}
                      onChange={(e) => on_change_fun(e)}
                      placeholder="Contact" />
                  </div>

                  <div className="form-group">
                    <label className="form-label">City</label>
                    <input type="text" className="form-control form-control-lg"
                      name="city"
                      value={form.data.city}
                      onChange={(e) => on_change_fun(e)}
                      placeholder="City" />
                  </div>

                  <div className="form-group">
                    <label className="form-label">State</label>
                    <input type="text" className="form-control form-control-lg"
                      name="state"
                      value={form.data.state}
                      onChange={(e) => on_change_fun(e)}
                      placeholder="State" />
                  </div>


                  <div className="mt-3">
                    <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                      onClick={register_account} >SIGN UP</button>
                  </div>


                  <div className="text-center mt-4 font-weight-light">
                    I have an account? <Link to="/login" className="text-primary">Login Account</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div> */}


    </>
  )
}

export default SigninPage