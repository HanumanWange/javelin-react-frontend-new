import React, { useState, useEffect } from 'react'
import { toast } from "react-toastify";
import { Link, useHistory } from 'react-router-dom';
import './Login.scss'
import Logintwo from './login-two.png'
import { useRegistration } from '../../../hooks/user';
import {Helmet} from "react-helmet";

const SigninPage = (props) => {
	const history = useHistory()
    const {loading, handleRegistration} = useRegistration()

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
        const {first_name, last_name, email, contact, city, mc, state, password, password2} = form.data;
        if (!first_name | !last_name){
            toast.warning('First & Last name is required.')
            return;
        }
        if (!email | !contact){
            toast.warning('Email & Contact is required.')
            return;
        }
        if (!password | !password2){
            toast.warning('Password is required.')
            return;
        }
        if (password !== password2){
            toast.error('Passwords should be same.')
            return;
        }
        if (!city | !mc | state){
            toast.warning('Profession, City, State is required.')
            return;
        }
        const data = await handleRegistration(first_name, last_name, email, contact, mc, city, state, password);
        
        if (data.status === 201){
            toast.success('Registration successful.');
			history.push('/login')
        } else {
            data.email && toast.error(data.email[0]);
            data.password && toast.error('Password at least 6 characters.');
            data.error && toast.error(data.error[0]);
            return;
        }
	}

	function on_change_fun(e) {
		let update = form.data
		update[e.target.name] = e.target.value
		setForm({ data: update })
	}
	useEffect(() => {
		let nav_btn = document.getElementById("nav_btn")
		let nav_btn_mb = document.getElementById('nav_btn_mb')
		if (nav_btn)
			nav_btn.classList.add('notshow')
		if (nav_btn_mb)
			nav_btn_mb.classList.add('notshow')
	}, [])

	return (
		<>
            <Helmet>
                <title>Sign Up - Javelin Traders</title>
            </Helmet>
			<div className='login-page'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-6'>
							<img className='w-100' src={Logintwo} alt=''/>
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

												<input type="email" className="form-control form-control-lg"
													name="email"
													value={form.data.email}
													onChange={(e) => on_change_fun(e)}
													placeholder="Email" />
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
										<div className='col-lg-4'>
											<div className="form-group">

												<input type="text" className="form-control form-control-lg"
													name="mc"
													value={form.data.mc}
													onChange={(e) => on_change_fun(e)}
													placeholder="Profession" />
											</div>
										</div>
										<div className='col-lg-4'>
											<div className="form-group">

												<input type="text" className="form-control form-control-lg"
													name="city"
													value={form.data.city}
													onChange={(e) => on_change_fun(e)}
													placeholder="City" />
											</div>
										</div>
										<div className='col-lg-4'>
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
											onClick={register_account}>{loading ? 'Loading...' : 'SIGN UP'}</button>
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
		</>
	)
}

export default SigninPage