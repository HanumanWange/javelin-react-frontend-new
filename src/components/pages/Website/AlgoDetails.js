import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from "react-router-dom";
import Footer from '../../parts/Footer';
import AxiosCall from '../../AxiosCall';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";

const AlgoDetails = ({ user }) => {

	let { id } = useParams()
	const history = useHistory()

	const [state, setState] = useState({
		data: null
	})

	const [subs, setSubs] = useState({
		data: null
	})

	function on_change_fun(e) {
		let algo_id = e.target.value
		setSubs({ data: state.data.algos[algo_id] })
	}

	async function load_data() {
		await AxiosCall({ method: 'get', url: `${user.url}/api/strategie/${id}` }).then(resp => {
			//   console.log("RESP DTL------>>>", resp)
			if (resp.response == true) {
				setState({ data: resp.bknd_data })
				if (resp.bknd_data.algos.length != 0) {
					setSubs({ data: resp.bknd_data.algos[0] })
				}
			}
			else {
				toast.error("Id Is Not Found!")
				history.push('/trading/')
			}

		})
	}

	async function submit_subscription(id) {
		const formData = new FormData()
		formData.append("id", id)
		//setLoading(true)

		await AxiosCall({ method: 'post', url: `${user.url}/api/subscription/`, is_auth: true, post_data: formData }).then(resp => {

			if (resp.response == true) {
				if (resp.bknd_data.status == 302) {
					toast.info(resp.bknd_data.message)
				}
				else {
					toast.success(resp.bknd_data.message)
				}
			}
			else {
				toast.error("Failed")
			}
			//setLoading(false)
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

	}, [id])




	return (
		<>
			<Helmet>
				<title>Algo Trading - Javelin Traders</title>
			</Helmet>
			<ToastContainer />


			<div className='AlgoDetails'>
				<div className='container'>

					{state.data == null ?
						'Loading.......'
						:

						<div className="123">

							<div className='heading'>
								<h2 className='about-heading text-center'>{state.data.name}</h2>
								<div className='line-bar mx-auto' ></div>
							</div>

							<div className='algodetails-contact' >
								<div className='row'>
									<div className='col-lg-6'>
										{/* <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">

                      <div className="carousel-inner">

                        <div className="carousel-item active">
                          <img className="d-block algo-crousel w-100" src="/static/images/aimg1.png" alt="First slide" />
                        </div>

                        <div className="carousel-item">
                          <img className="d-block algo-crousel w-100" src="/static/images/aimg-2.png" alt="Second slide" />
                        </div>

                        <div className="carousel-item">
                          <img className="d-block algo-crousel w-100" src="/static/images/aimg-3.png" alt="Third slide" />
                        </div>

                      </div>

                      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                      </a>

                      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                      </a>

                    </div> */}
										<img className='w-100 chartimg' src="/static/images/aimg1.png" />
									</div>
									<div className='col-lg-6'>

										<div className='algotextline'  >

											<h2 className='text-info'>About Strategy</h2>

											<p className='body-font mt-3'>
												{state.data.desc}
											</p>

											<label className='test-dark'><b>Subscriptions</b></label>

											<select className="form-control" name="algo" onChange={(e) => on_change_fun(e)}>
												{state.data.algos.map((i, id) => (
													<option className="text-capitalize" value={id} key={id}>
														{i.time_period} {i.time_type} / ₹{i.amount}
													</option>
												))}


											</select>

											{user.is_authenticated ?
												<>
													<button className="btn buttondesign"
														data-toggle="modal" data-target="#exampleModal">
														Subscribe
													</button>

													<Link className="btn buttondesign" to="/account/trade/start">
														Go to Strategy
													</Link>
												</>
												:
												<a className="btn buttondesign" href="#" target="_blank">
													Past Results
												</a>
											}
											<a className="btn buttondesign" href="#" target="_blank">
												View Excel File
											</a>

										</div>

									</div>
								</div>
							</div>

						</div>

					}



				</div>
			</div>


			<div className="container-fluid p-0">
				{/* <div className="content-wrapper d-flex align-items-center justify-content-center">
          {state.data == null ?
            'Loading.......'
            :

            <div className=" shadow p-4 rounded" style={{ width: "90%" }}>

              <div className="row px-4 pb-4 pt-2">

                <div className="col-12 p-0 mb-2">
                  <h3 className='text-info'>{state.data.name}</h3>
                </div>

                <div className="col-12 col-lg-7 p-0">

                  <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">

                    <div className="carousel-inner rounded border shadow-sm">

                      <div className="carousel-item active">
                        <img className="d-block algo-crousel" src="/static/images/algo-img-1.jpg" alt="First slide" />
                      </div>

                      <div className="carousel-item">
                        <img className="d-block algo-crousel" src="/static/images/algo-img-2.jpg" alt="Second slide" />
                      </div>

                      <div className="carousel-item">
                        <img className="d-block algo-crousel" src="/static/images/algo-img-3.jpg" alt="Third slide" />
                      </div>

                    </div>

                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="sr-only">Previous</span>
                    </a>

                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="sr-only">Next</span>
                    </a>

                  </div>

                </div>

                <div className="col-12 col-lg-5 pl-4">

                  <h2 className='text-info'>About Strategy</h2>

                  <p className='body-font mt-3'>
                    {state.data.desc}
                  </p>

                  <label className='test-dark'><b>Subscriptions</b></label>

                  <select className="form-control" name="algo" onChange={(e) => on_change_fun(e)}>
                    {state.data.algos.map((i, id) => (
                      <option className="text-capitalize" value={id} key={id}>
                        {i.time_period} {i.time_type} / ₹{i.amount}
                      </option>
                    ))}


                  </select>

                  {user.is_authenticated ?
                    <>
                      <button className="btn btn-danger btn-font mt-3 mr-2"
                        data-toggle="modal" data-target="#exampleModal">
                        Subscribe
                      </button>

                      <Link className="btn btn-warning btn-font mr-2 mt-3" to="/account/trade/start">
                        Go to Strategy
                      </Link>
                    </>
                    :
                    <a className="btn btn-info btn-font mt-3 mr-2" href="#" target="_blank">
                      Past Results
                    </a>
                  }





                  <a className="btn btn-success btn-font mt-3" href="#" target="_blank">
                    View Excel File
                  </a>

                </div>

              </div>

            </div>
          }


        </div> */}
				{subs.data ?


					<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div class="modal-dialog" role="document">
							<div class="modal-content">
								<div class="modal-header">
									<h5 class="modal-title" id="exampleModalLabel">Subscription Form</h5>
									<button type="button" class="close" data-dismiss="modal" aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div class="modal-body">
									<p>
										Are you sure want to subscription! {subs.data.id}
									</p>
									<p> ₹ {subs.data.amount} for {subs.data.time_period} {subs.data.time_type}</p>
								</div>
								<div class="modal-footer">
									<button data-dismiss="modal" aria-label="Close" type="button" class="btn btn-primary close"
										onClick={() => submit_subscription(subs.data.id)}
									>Submit</button>
								</div>
							</div>
						</div>
					</div>
					: ''}

				{/* <Footer /> */}
			</div>

			<Footer />

		</>
	)
}

export default AlgoDetails