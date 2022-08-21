import React from 'react';
// import DashboardFooter from '../../parts/DashboardFooter';
// import Sidebar from '../../parts/Sidebar';
import { Helmet } from "react-helmet";

const Dashboard = (props) => {
	return (
		<>
			<Helmet>
				<title>Dashboard - Javelin Traders</title>
			</Helmet>
			<div className='bord-design'>
				<div className='container'>
					<div className='row'>
						<div className='col-3'>

							{/* <Sidebar user={props.user} /> */}
						</div>
						<div className='col-lg-9'>
							<div className="main-panel">

								<div className="content-wrapper">

									<div className="row">

										<div className="col-md-12 grid-margin transparent">

											<div className="row">

												<div className="col-md-3 mb-4 stretch-card transparent">
													<div className="card card-tale">
														<div className="card-body">
															<p className="mb-4">Today’s Bookings</p>
															<p className="fs-30 mb-2">4006</p>
															<p>10.00% (30 days)</p>
														</div>
													</div>
												</div>

												<div className="col-md-3 mb-4 stretch-card transparent">
													<div className="card card-dark-blue">
														<div className="card-body">
															<p className="mb-4">Total Bookings</p>
															<p className="fs-30 mb-2">61344</p>
															<p>22.00% (30 days)</p>
														</div>
													</div>
												</div>

												<div className="col-md-3 mb-4 stretch-card transparent">
													<div className="card card-tale">
														<div className="card-body">
															<p className="mb-4">Today’s Bookings</p>
															<p className="fs-30 mb-2">4006</p>
															<p>10.00% (30 days)</p>
														</div>
													</div>
												</div>

												<div className="col-md-3 mb-4 stretch-card transparent">
													<div className="card card-dark-blue">
														<div className="card-body">
															<p className="mb-4">Total Bookings</p>
															<p className="fs-30 mb-2">61344</p>
															<p>22.00% (30 days)</p>
														</div>
													</div>
												</div>

												<div className="col-md-3 mb-4 stretch-card transparent">
													<div className="card card-tale">
														<div className="card-body">
															<p className="mb-4">Today’s Bookings</p>
															<p className="fs-30 mb-2">4006</p>
															<p>10.00% (30 days)</p>
														</div>
													</div>
												</div>

												<div className="col-md-3 mb-4 stretch-card transparent">
													<div className="card card-dark-blue">
														<div className="card-body">
															<p className="mb-4">Total Bookings</p>
															<p className="fs-30 mb-2">61344</p>
															<p>22.00% (30 days)</p>
														</div>
													</div>
												</div>

												<div className="col-md-3 mb-4 stretch-card transparent">
													<div className="card card-tale">
														<div className="card-body">
															<p className="mb-4">Today’s Bookings</p>
															<p className="fs-30 mb-2">4006</p>
															<p>10.00% (30 days)</p>
														</div>
													</div>
												</div>

												<div className="col-md-3 mb-4 stretch-card transparent">
													<div className="card card-dark-blue">
														<div className="card-body">
															<p className="mb-4">Total Bookings</p>
															<p className="fs-30 mb-2">61344</p>
															<p>22.00% (30 days)</p>
														</div>
													</div>
												</div>

											</div>

										</div>

									</div>

									<div className="row">

										<div className="col-md-12 grid-margin stretch-card">

											<div className="card">
												<div className="card-body">
													<p className="card-title">Advanced Table</p>
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
																							}}>Quote#</th>
																						<th className="sorting_asc" tabindex="0"
																							aria-controls="example" rowspan="1" colspan="1"
																							aria-label="Product: activate to sort column descending"
																							aria-sort="ascending" style={{ width: "124px" }}>
																							Product
																						</th>
																						<th className="sorting" tabindex="0" aria-controls="example"
																							rowspan="1" colspan="1"
																							aria-label="Business type: activate to sort column ascending"
																							style={{ width: "148px" }}>Business type</th>
																						<th className="sorting" tabindex="0" aria-controls="example"
																							rowspan="1" colspan="1"
																							aria-label="Policy holder: activate to sort column ascending"
																							style={{ width: "141px" }}>Policy holder</th>
																						<th className="sorting" tabindex="0" aria-controls="example"
																							rowspan="1" colspan="1"
																							aria-label="Premium: activate to sort column ascending"
																							style={{ width: "102px" }}>Premium</th>
																						<th className="sorting" tabindex="0" aria-controls="example"
																							rowspan="1" colspan="1"
																							aria-label="Status: activate to sort column ascending"
																							style={{ width: "102px" }}>Status</th>
																						<th className="sorting" tabindex="0" aria-controls="example"
																							rowspan="1" colspan="1"
																							aria-label="Updated at: activate to sort column ascending"
																							style={{ width: "123px" }}>Updated at</th>
																						<th className="details-control sorting_disabled" rowspan="1"
																							colspan="1" aria-label="" style={{ width: "41px" }}>
																						</th>
																					</tr>
																				</thead>
																				<tbody>
																					<tr className="odd">
																						<td className=" select-checkbox">Incs234</td>
																						<td className="sorting_1">Car insurance</td>
																						<td>Business type 1</td>
																						<td>Jesse Thomas</td>
																						<td>$1200</td>
																						<td>In progress</td>
																						<td>25/04/2020</td>
																						<td className=" details-control"></td>
																					</tr>

																					<tr>
																						<td colspan="8">
																							<table cellpadding="5" cellspacing="0" border="0"
																								style={{ width: "100%" }}>
																								<tbody>
																									<tr className="expanded-row">
																										<td colspan="8" className="row-bg">
																											<div>
																												<div
																													className="d-flex justify-content-between">
																													<div className="cell-hilighted">
																														<div
																															className="d-flex mb-2">
																															<div
																																className="mr-2 min-width-cell">
																																<p>Policy start
																																	date</p>
																																<h6>25/04/2020
																																</h6>
																															</div>
																															<div
																																className="min-width-cell">
																																<p>Policy end
																																	date</p>
																																<h6>24/04/2021
																																</h6>
																															</div>
																														</div>
																														<div className="d-flex">
																															<div
																																className="mr-2 min-width-cell">
																																<p>Sum insured
																																</p>
																																<h5>$26,000</h5>
																															</div>
																															<div
																																className="min-width-cell">
																																<p>Premium</p>
																																<h5>$1200</h5>
																															</div>
																														</div>
																													</div>
																													<div
																														className="expanded-table-normal-cell">
																														<div className="mr-2 mb-4">
																															<p>Quote no.</p>
																															<h6>Incs234</h6>
																														</div>
																														<div className="mr-2">
																															<p>Vehicle Reg. No.
																															</p>
																															<h6>KL-65-A-7004
																															</h6>
																														</div>
																													</div>
																													<div
																														className="expanded-table-normal-cell">
																														<div className="mr-2 mb-4">
																															<p>Policy number</p>
																															<h6>Incsq123456</h6>
																														</div>
																														<div className="mr-2">
																															<p>Policy number</p>
																															<h6>Incsq123456</h6>
																														</div>
																													</div>
																													<div
																														className="expanded-table-normal-cell">
																														<div
																															className="mr-2 mb-3 d-flex">
																															<div
																																className="highlighted-alpha">
																																A</div>
																															<div>
																																<p>Agent /
																																	Broker</p>
																																<h6>Abcd
																																	Enterprices
																																</h6>
																															</div>
																														</div>
																														<div
																															className="mr-2 d-flex">
																															<img src="/static/images/faces/face5.jpg"
																																alt="profile" />
																															<div>
																																<p>Policy holder
																																	Name &amp;
																																	ID Number
																																</p>
																																<h6>Phillip
																																	Harris /
																																	1234567</h6>
																															</div>
																														</div>
																													</div>
																													<div
																														className="expanded-table-normal-cell">
																														<div className="mr-2 mb-4">
																															<p>Branch</p>
																															<h6>Koramangala,
																																Bangalore</h6>
																														</div>
																													</div>
																													<div
																														className="expanded-table-normal-cell">
																														<div className="mr-2 mb-4">
																															<p>Channel</p>
																															<h6>Online</h6>
																														</div>
																													</div>
																												</div>
																											</div>
																										</td>
																									</tr>
																								</tbody>
																							</table>
																						</td>
																					</tr>

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

								{/* <DashboardFooter /> */}
							</div>
						</div>
					</div>
				</div>
			</div>







		</>
	)
}

export default Dashboard