/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from "react-router-dom";
import Navbar from './components/parts/Navbar';
// import ColourTheme from './components/parts/ColourTheme';
import Home from './components/pages/Website/Home';
import LoginPage from './components/pages/Auth/LoginPage';
import SigninPage from './components/pages/Auth/SigninPage';
// import Dashboard from './components/pages/Account/Dashboard';
import AxiosCall from './components/AxiosCall';
import AliceForm from './components/pages/Account/AliceForm';
import AccountUpdate from './components/pages/Account/AccountUpdate';
import ChangePassword from './components/pages/Account/ChangePassword';
import UserSubscription from './components/pages/Account/UserSubscription';
import ZerodhaForm from './components/pages/Account/ZerodhaForm';
import BillingReport from './components/pages/Account/BillingReport';
import Trade from './components/pages/Account/Trade';
import StartTrade from './components/pages/Account/StartTrade';
import AllAlgo from './components/pages/Website/AllAlgo';
import AlgoTraining from './components/pages/Website/AlgoTraining';
import About from './components/pages/Website/About';
import AllSubscription from './components/pages/Account/AllSubscription';
import AlgoDetails from './components/pages/Website/AlgoDetails';
import PrivacyPolicy from './components/pages/Website/PrivacyPolicy';
import TermsCondition from './components/pages/Website/TermsCondition';
import RefundPolicy from './components/pages/Website/RefundPolicy';
import HelpPage from './components/pages/Website/HelpPage';
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { API_HOST_URL } from './config';
import ForgotPasswordPage from './components/pages/Auth/ForgotPasswordPage';
import PasswordResetPage from './components/pages/Auth/PasswordResetPage';
import TestSocketPage from './components/pages/TestSocketPage';

const queryClient = new QueryClient();

const App = () => {

    const [state, setState] = useState({
        data: {
            url: API_HOST_URL,
            user_data: {},
            is_authenticated: false,
            loading: true
        }
    })

    async function load_data() {
        let my_data = JSON.parse(localStorage.getItem('user_data'))
        let update_state = state.data
        if (my_data) {

            await AxiosCall({
                method: 'get', url: state.data.url + '/api/',
                is_auth: true,
            }).then(resp => {
                if (resp.response === true) {

                    update_state.user_data = my_data
                    update_state.is_authenticated = true
                    setState({ data: update_state })
                }
                else {
                    localStorage.removeItem('user_data')
                }
            })
        }
        update_state.loading = false
        setState({ data: update_state })
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

    return (
        <QueryClientProvider client={queryClient}>
            <div className="container-scroller">
                <Navbar user={state.data} />
                <div >
                    <Switch>
                        {/* Home Path  */}
                        <Route exact path="/">
                            <Home user={state.data} />
                        </Route>
                        <Route exact path="/about">
                            <About user={state.data} />
                        </Route>
                        <Route exact path="/trading">
                            <AllAlgo user={state.data} />
                        </Route>
                        <Route exact path="/trading/:id">
                            <AlgoDetails user={state.data} />
                        </Route>
                        <Route exact path="/traning">
                            <AlgoTraining />
                        </Route>
                        <Route exact path="/terms&conditions">
                            <TermsCondition />
                        </Route>
                        <Route exact path="/privacy-policy">
                            <PrivacyPolicy />
                        </Route>
                        <Route exact path="/refund-policy">
                            <RefundPolicy />
                        </Route>
                        <Route exact path="/help">
                            <HelpPage />
                        </Route>
                        <Route exact path="/login">
                            <LoginPage user={state.data} />
                        </Route>
                        <Route exact path="/signin">
                            <SigninPage user={state.data} />
                        </Route>
                        <Route exact path="/test/:slug">
                            <TestSocketPage user={state.data} />
                        </Route>

                        {/* Account Path  */}
                        {/* <Route exact path="/account/">
							<Dashboard user={state.data} />
						</Route> */}
                        <Route exact path="/account/profile">
                            <AccountUpdate user={state.data} />
                        </Route>
                        <Route exact path="/account/change-password">
                            <ChangePassword user={state.data} />
                        </Route>
                        <Route exact path="/account/forgot-password">
                            <ForgotPasswordPage user={state.data} />
                        </Route>
                        <Route exact path="/account/forgot-password/:uidb64/:token">
                            <PasswordResetPage user={state.data} />
                        </Route>

                        {/* Alice Form Path */}
                        <Route exact path="/account/alice-form">
                            <AliceForm user={state.data} />
                        </Route>

                        {/* Zerodha Form Path */}
                        <Route exact path="/account/zerodha-form">
                            <ZerodhaForm user={state.data} />
                        </Route>

                        {/* Trade Path */}
                        <Route exact path="/account/trade">
                            <Trade user={state.data} />
                        </Route>
                        <Route exact path="/account/trade/:id">
                            <StartTrade user={state.data} />
                        </Route>

                        {/* Subscription Path */}
                        <Route exact path="/account/billing-report">
                            <BillingReport user={state.data} />
                        </Route>
                        <Route exact path="/account/my-subscription">
                            <UserSubscription user={state.data} />
                        </Route>
                        <Route exact path="/account/all-subscription">
                            <AllSubscription user={state.data} />
                        </Route>
                    </Switch>
                    <ToastContainer
                        position="top-right"
                        autoClose={4000}
                        newestOnTop
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                </div>
            </div>
            <ReactQueryDevtools initialIsOpen={false} position='bottom-left' />
        </QueryClientProvider>
    )
}

export default App
