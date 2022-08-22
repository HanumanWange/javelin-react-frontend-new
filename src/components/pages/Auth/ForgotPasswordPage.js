import React from 'react'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import LoginImg from './login-one.png'
import { Helmet } from "react-helmet";
import ForgotPasswordForm from '../../Forms/ForgotPasswordForm';
import { useForgotPassword } from '../../../hooks/user';

const ForgotPasswordPage = (props) => {
	const { handleForgotPassword, ForgotPwdIsLoading } = useForgotPassword();
	const [response, setResponse] = useState(null)
	const handleSubmit = async (values, resetForm) => {
		const { email } = values;
		const res = await handleForgotPassword(email)
		setResponse(res)
		if (res.status === 200) {
			toast.success(res.detail)
			resetForm()
		} else {
			toast.error(res.detail)
		}
	}
	return (
		<>
			<Helmet>
				<title>Forgot password - Javelin Traders</title>
			</Helmet>
			<ToastContainer />
			<div className='login-page' >

				<div className="container">
					<div className='row align-items-center'    >
						<div className='col-lg-6' >
							<img className='w-100' alt='' src={LoginImg} />
						</div>
						<div className='col-lg-6'>
							<div className='login-text'>
								<h4>Forgot Password</h4>
								<ForgotPasswordForm
									response={response}
									handleSubmit={handleSubmit}
									isLoading={ForgotPwdIsLoading}
								/>

								<div className="text-center mt-4 font-weight-light">
									Want to login? <Link to="/login" className="text-primary">Click here</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ForgotPasswordPage;