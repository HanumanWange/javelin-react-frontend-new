import React, { useState } from 'react';
import DashboardFooter from '../../parts/DashboardFooter';
import Sidebar from '../../parts/Sidebar';
import AlgoInner from '../Website/parts/AlgoInner';
import './account.scss'
import { Helmet } from "react-helmet";

const AllSubscription = (props) => {
	const [show, setShow] = useState(false)
	return (
		<>
			<Helmet>
				<title>Subscriptions - Javelin Traders</title>
			</Helmet>
			<div className=" page-body-wrapper-one">
				{/* <Sidebar user={props.user}/> */}

				<div className='d-lg-block d-none'>
					<Sidebar user={props.user} />
				</div>


				<div className='bariconaccout d-lg-none'>
					<i onClick={() => setShow(!show)} className='fa fa-bars' ></i>
				</div>

				<div >
					{
						show && <div className='menubaraccount'>
							<div className='iconshowde'>
								<i onClick={() => setShow(!show)} className='fa fa-close' ></i>
							</div>

							<Sidebar user={props.user} />
						</div>
					}

				</div>


				<div className="main-panel">

					<div className="content-wrapper">

						<AlgoInner user={props.user} />

					</div>

					<DashboardFooter />
				</div>
			</div>

		</>
	)
}

export default AllSubscription