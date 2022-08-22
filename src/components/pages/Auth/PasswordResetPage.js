/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom';
import LoginImg from './login-one.png'
import { Helmet } from "react-helmet";
import PasswordResetForm from '../../Forms/PasswordResetForm';
import { checkForgotPasswordVerificationToken, useResetPassword } from '../../../hooks/user';



const PasswordResetPage = (props) => {
    const history = useHistory()

    const { handleResetPassword, pwdResetIsLoading } = useResetPassword();
    const [tokenStatus, setTokenStatus] = useState({ is_valid: false })
    const [response, setResponse] = useState(null)
    let { uidb64, token } = useParams();
    const checkTokens = async () => {
        const res = await checkForgotPasswordVerificationToken(uidb64, token);
        setTokenStatus(res)
    }

    useEffect(() => {
        checkTokens();
    }, [uidb64, token]);

    const handleSubmit = async (values, resetForm) => {
        const { password } = values;
        const res = await handleResetPassword(uidb64, token, password)
        setResponse(res)
        if (res.status === 200) {
            toast.success(res.detail)
            resetForm()
            history.replace("/login");
        } else {
            toast.error(res.detail)
        }
    }

    return (
        <>
            <Helmet>
                <title>Reset password - Javelin Traders</title>
            </Helmet>
            <ToastContainer />
            <div className='login-page'>
                <div className="container">
                    <div className='row align-items-center'    >
                        <div className='col-lg-6' >
                            <img className='w-100' alt='' src={LoginImg} />
                        </div>
                        {tokenStatus.is_valid ?
                            <div className='col-lg-6'>
                                <div className='login-text'>
                                    <h4>Forgot Password</h4>
                                    <PasswordResetForm
                                        response={response}
                                        handleSubmit={handleSubmit}
                                        isLoading={pwdResetIsLoading}
                                    />

                                    <div className="text-center mt-4 font-weight-light">
                                        Want to login? <Link to="/login" className="text-primary">Click here</Link>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className='col-lg-6'>
                                <h3 className='error'>{tokenStatus.detail}</h3>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default PasswordResetPage;