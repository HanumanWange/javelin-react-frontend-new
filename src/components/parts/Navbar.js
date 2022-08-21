import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import '../../scss/NavBar.scss';
import Profileicon from "./profile.png"

const Navbar = (props) => {

	function louout_function() {
		localStorage.removeItem('user_data')
		window.location.href = ('/login')
	}

	function active_link(path) {

		let elm = document.getElementById('desktop_path_view')
		let all_li = elm.getElementsByTagName('li')
		// console.log(all_li)
		for (let i = 0; i < all_li.length; i++) {
			let all_a = all_li[i].getElementsByTagName('a')[0]
			// console.log(all_a.href, window.location.origin)
			if (all_a) {
				if (all_a.href.replace(window.location.origin, '') === path) {
					all_a.classList.add('current')
				}
				else {
					all_a.classList.remove('current')
				}
			}

		}

	}

	useEffect(() => {
		active_link(window.location.pathname)
	})


	return (
		<>
			<div className='navbar-background' >
				<div className='container'>
					<div className='whicon'>
						<a href="https://wa.me/8333952020" className="nav-link" target='_blank' alt="wp" rel="noreferrer">
							<i className="fa fa-whatsapp" aria-hidden="true" ></i>
						</a>
					</div>
					<nav className="navbar ">
						<div className='d-flex justify-content-between w-100'>
							<div className="text-center logo-image  ">
								<Link to="/" className="brand-logo" ><img src="/static/images/JAVLOGO26.png" className="mr-2 logo-size"
									alt="logo" /></Link>

								<Link to="/" className="navbar-brand brand-logo-mini d-none"><img className="p-1" src="/static/images/logo-min.png"
									alt="logo" />
								</Link>

							</div>


							<div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
								<button className="navbar-toggler navbar-toggler align-self-center d-none" type="button" data-toggle="minimize">
									<span className="icon-menu" id="nav_btn"></span>
								</button>

								<ul className="mr-lg-2 desktop-path ml-5 mt-1 d-none d-lg-block" id="desktop_path_view">
									{props.user.is_authenticated === true ?
										<>
											<li className="nav-item">
												<Link to="/account/trade/start"
													id="account"
													onClick={() => active_link('/account/trade/start')}
													className="nav-link" >My Account</Link>
											</li>

										</>
										:
										''
									}
									<li className="nav-item ">
										<Link to="/" className="nav-link"
											id="web_home"
											onClick={() => active_link('/')}
										>Home <span className="sr-only">(current)</span>
										</Link>
									</li>


									<li className="nav-item">
										<Link className="nav-link"
											id="web_about"
											onClick={() => active_link('/about')}
											to="/about">About</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" to="/trading"
											onClick={() => active_link('/trading')}
										>Algo Trading</Link>
									</li>


									<li className="nav-item">
										<Link to="/traning"
											onClick={() => active_link('/traning')}
											className="nav-link" >Trainings</Link>
									</li>


								</ul>

								<ul className="navbar-nav ">
									<li className="nav-profile dropdown">
										<a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
											{props.user.loading ?
												<img src={Profileicon} alt='' />
												:
												<img src={Profileicon}  alt=''/>
											}
										</a>
										<div className="dropdown-menu dropdown-menu-right navbar-dropdown"
											aria-labelledby="profileDropdown">
											{props.user.is_authenticated === true ?
												<>
													<Link to="#" className="dropdown-item">

														{props.user.user_data.email}
													</Link>

												</>
												:
												''
											}

											<div className="mobile-path d-lg-none ">
												<li className="nav-item ">
													<Link to="/" className="nav-link current">Home <span className="sr-only">(current)</span>
													</Link>
												</li>
												<li className="nav-item">
													<Link className="nav-link" to="/about/">About</Link>
												</li>
												<li className="nav-item">
													<Link className="nav-link" to="/trading">Algo Trading</Link>
												</li>
												<li className="nav-item">
													<Link to="/traning/" className="nav-link" >Trainings</Link>
												</li>

												<li className="nav-item">
													<Link to="/account/trade/start" className="nav-link" >My Account</Link>
												</li>

												{/* <li className="nav-item">
                                                    <Link to="/account/" className="nav-link text-success" >Whatsapp</Link>
                                                </li> */}
											</div>

											{props.user.is_authenticated === true ?
												<>

													<Link to="/account/trade/start" className="dropdown-item">
														<i className="ti-settings text-primary"></i>
														Account
													</Link>

													<a className="dropdown-item"
														onClick={louout_function}
													>
														<i className="ti-power-off text-primary"></i>
														Logout
													</a>
												</>
												:
												<>
													<Link to="/login" className="dropdown-item">
														<i className="ti-power-off text-primary"></i>
														Login

													</Link>

													<Link to="/signin" className="dropdown-item">
														<i className="ti-power-off text-primary"></i>
														Register

													</Link>
												</>
											}
										</div>
									</li>
								</ul>
								{/* <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button"
                                    data-toggle="offcanvas">
                                    <span className="icon-menu" id="nav_btn_mb"></span>
                                </button> */}
							</div>
						</div>
					</nav>
				</div>
			</div>
		</>
	)
}

export default Navbar