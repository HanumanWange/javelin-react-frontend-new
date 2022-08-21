import React, { useState, useEffect } from 'react';
import Sidebar from '../../parts/Sidebar';
import DashboardFooter from '../../parts/DashboardFooter';
import AxiosCall from '../../AxiosCall';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import Spinner from '../../parts/Spinner';
import { Helmet } from "react-helmet";

const Trade = (props) => {

	const [state, setState] = useState({
		data: {}
	})

	const [loading, setLoading] = useState(false)




	async function load_data() {
		setLoading(true)
		await AxiosCall({
			method: 'get', url: `${props.user.url}/api/trading/`, is_auth: true
		}).then(resp => {

			setState({
				data: resp.bknd_data
			})

			setLoading(false)

		})

	}

	useEffect(() => {
		let mounted = true;
		if (mounted) {

			load_data()
		}

		return () => {
			mounted = false;

		}

	}, [])

	const [show, setShow] = useState(false)

	return (
		<>
			<Helmet>
				<title>All Trades - Javelin Traders</title>
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
						show && <div className='menubaraccount'>
							<div className='iconshowde'>
								<i onClick={() => setShow(!show)} className='fa fa-close' ></i>
							</div>

							<Sidebar user={props.user} />
						</div>
					}

				</div>
				{/* {console.log(state)} */}
				<div className="main-panel">

					<div className="content-wrapper">

						<div className="row">
							<div className="col-md-12 grid-margin stretch-card stretch-card border shadow-sm rounded">
								<div className="card">

									<div className="card-body">
										<p className="card-title">Trade List</p>
										<div className="row">
											<div className="col-12">
												<div className="table-responsive">
													<div id="example_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
														<div className="row">
															<div className="col-sm-12 col-md-6"></div>
															<div className="col-sm-12 col-md-6"></div>
														</div>
														<div className="row">
															<div className="col-sm-12">
																<table className="display expandable-table dataTable no-footer" style={{
																	width: "100%"
																}} role="grid">
																	<thead>
																		<tr role="row">
																			<th className="select-checkbox sorting_disabled" rowspan="1"
																				colspan="1" aria-label="Quote#" style={{
																					width: "110px"
																				}}>Trade Id</th>

																			<th className="sorting" tabindex="0" aria-controls="example"
																				rowspan="1" colspan="1"
																				aria-label="Premium: activate to sort column ascending"
																				style={{ width: "102px" }}>Strategy Code</th>

																			<th className="sorting_asc" tabindex="0"
																				aria-controls="example" rowspan="1" colspan="1"
																				aria-label="Product: activate to sort column descending"
																				aria-sort="ascending" style={{ width: "124px" }}>
																				Broker Name
																			</th>

																			<th className="sorting" tabindex="0" aria-controls="example"
																				rowspan="1" colspan="1"
																				aria-label="Business type: activate to sort column ascending"
																				style={{ width: "148px" }}>Product Name</th>

																			<th className="sorting" tabindex="0" aria-controls="example"
																				rowspan="1" colspan="1"
																				aria-label="Policy holder: activate to sort column ascending"
																				style={{ width: "141px" }}>Quantity</th>

																			<th className="sorting" tabindex="0" aria-controls="example"
																				rowspan="1" colspan="1"
																				aria-label="Status: activate to sort column ascending"
																				style={{ width: "102px" }}>Status</th>

																			<th className="sorting" tabindex="0" aria-controls="example"
																				rowspan="1" colspan="1"
																				aria-label="Updated at: activate to sort column ascending"
																				style={{ width: "123px" }}>Trade Date</th>
																			<th className="details-control sorting_disabled" rowspan="1"
																				colspan="1" aria-label="" style={{ width: "41px" }}>
																				Action
																			</th>
																		</tr>
																	</thead>
																	<tbody>

																		{state.data.results ?
																			<>

																				{state.data.results.map((i, id) => (

																					<>

																						<tr className="odd" key={id}>
																							<td className="">#{i.trade_id}</td>
																							<td className="sorting_1">
																								#{i.subscription_detail.algo.strategie_detail.code}
																							</td>
																							<td>
																								{i.subscription_detail.algo.strategie_detail.broker_name}
																							</td>
																							<td>
																								{i.subscription_detail.algo.strategie_detail.product_name}
																							</td>
																							<td>
																								{i.qty}
																							</td>
																							<td>
																								{i.status}
																							</td>
																							<td>
																								{new Date(i.trade_date).toDateString()}

																							</td>
																							<td>
																								<Link className='btn btn-info py-2'
																									to={"/account/trade/" + i.trade_id}
																								>view</Link>
																							</td>
																						</tr>

																						{i.overview ?
																							''
																							:
																							''
																						}

																					</>
																				))}

																				{state.data.results.length == 0 ?

																					<tr className="odd">
																						<td className="">No Data Found!</td>
																					</tr>
																					: ''}
																			</>

																			:
																			''
																		}
																	</tbody>
																</table>
															</div>
														</div>
														<div className="row">
															<div className="col-sm-12 col-md-5"></div>
															<div className="col-sm-12 col-md-7"></div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>

									<nav aria-label="Page navigation example">
										<ul className="pagination justify-content-end pr-3">
											<li className="page-item"><a className="page-link" href="#">Previous</a></li>
											<li className="page-item"><a className="page-link" href="#">1</a></li>
											<li className="page-item"><a className="page-link" href="#">2</a></li>
											<li className="page-item"><a className="page-link" href="#">3</a></li>
											<li className="page-item"><a className="page-link" href="#">Next</a></li>
										</ul>
									</nav>

								</div>
							</div>
						</div>

					</div>

					<DashboardFooter />

				</div></div>
		</>
	)
}

export default Trade