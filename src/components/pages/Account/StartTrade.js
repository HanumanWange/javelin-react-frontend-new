import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from "react-router-dom";
import Sidebar from '../../parts/Sidebar';
import DashboardFooter from '../../parts/DashboardFooter';
import AxiosCall from '../../AxiosCall';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './account.scss'

const StartTrade = (props) => {
	let { id } = useParams()
	const history = useHistory()

	const [state, setState] = useState({
		form: {
			id: "loading...",
			subscription: "",
			qty: 1
		}
	})

	const [loading, setLoading] = useState(false)
	const [show, setShow] = useState(false)

	const [subs, setSubs] = useState({
		data: {}
	})

	const [algo, setAlgo] = useState({
		data: {}
	})

	const [trade, setTrade] = useState({
		data: {}
	})


	function on_change_fun(e, my_id = null) {
		let nam = e.target.name
		let val = e.target.value

		if (trade.data.status && trade.data.status !== "stop") {
			return toast.error("Trade Is Running")
		}

		let update = state.form

		if (nam === "subscription") {
			if (val === "err") {
				return alert("Invalid")
			}
			setAlgo(
				{ data: subs.data.results[parseInt(val)] }
			)
			val = subs.data.results[parseInt(val)].id
		}

		update[nam] = val

		setState({
			form: update
		})

	}


	async function load_subs_data() {
		setLoading(true)
		let update = state.form
		await AxiosCall({ method: 'get', url: `${props.user.url}/api/subscription/`, is_auth: true }).then(resp => {
			console.log(resp)
			if (resp.response === true) {


				setSubs({ data: resp.bknd_data })

				if (resp.bknd_data.results.length === 0) {
					toast.info("Add subscription First")
					return history.push('/trading')
				}
				setAlgo({ data: resp.bknd_data.results[0] })

				update['subscription'] = resp.bknd_data.results[0].id
				update['id'] = id
				setState({ form: update })
				setTrade({ data: {} })
			}

		})



		if (id !== 'start') {

			await AxiosCall({ method: 'get', url: `${props.user.url}/api/trading/${id}/`, is_auth: true }).then(resp => {
				if (resp.response === false) {
					history.push('/account/trade/')

					return toast.error("Id Is Not valid")
				}

				setAlgo({ data: resp.bknd_data.subscription_detail })
				update['subscription'] = resp.bknd_data.subscription_detail.id
				update['qty'] = resp.bknd_data.qty
				setState({ form: update })
				setTrade({ data: resp.bknd_data })

			})

			setLoading(false)

		}

		else {
			await AxiosCall({
				method: 'post', url: props.user.url + '/api/',
				is_auth: true
			}).then(resp => {

				if (resp.bknd_data) {
					history.push('/account/trade/' + resp.bknd_data)
				}

				setLoading(false)

			})
		}

	}

	async function start_trade(status) {
		const formData = new FormData()
		setLoading(true)
		let method;
		if (id === "start") {
			method = 'post'

		}
		else {
			method = 'put'
			formData.append("id", id)

		}
		formData.append("status", status)
		formData.append("subscription", state.form.subscription)
		formData.append("qty", state.form.qty)

		await AxiosCall({
			method: method, url: props.user.url + '/api/trading/',
			is_auth: true, post_data: formData
		}).then(resp => {
			if (resp.response === true) {
				if (resp.bknd_data.status === 400) {
					toast.error(resp.bknd_data.message)
				}
				else {
					if (id === "start") {
						history.push('/account/trade/' + resp.bknd_data.trade_id)
						toast.success(resp.bknd_data.message)
						return
					}
					let update_trade = trade.data
					update_trade['status'] = status
					setTrade({
						data: update_trade
					})
					toast.success(resp.bknd_data.message)
				}
			}
			else {
				toast.error("Something is wrong......")
			}

			setLoading(false)
		})
	}

	useEffect(() => {
		let mounted = true;
		if (mounted) {

			load_subs_data()

		}

		return () => {
			mounted = false;

		}

	}, [id])

	return (
		<>

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
                     show &&  <div className='menubaraccount'>
                         <div className='iconshowde'>
                            <i onClick={() => setShow(!show)} className='fa fa-close' ></i>
                         </div>
                     
                     <Sidebar user={props.user} />
                  </div>
                 }
               
             </div>


                <div className="main-panel">

                    <div className="content-wrapper">

                        <div className="row">
                            <div className="col-md-12 grid-margin border stretch-card  shadow-sm rounded">
                                <div className="card position-relative">
                                    <div className="card-body">
                                        <div id="detailedReports"
                                            className="carousel slide detailed-report-carousel position-static pt-2"
                                            data-ride="carousel">
                                            {algo.data.algo ?
                                                <div className="carousel-inner">

                                                    <div className="carousel-item active">
                                                        <div className="row">
                                                            <div className="col-md-12 col-xl-3 d-flex flex-column justify-content-start">
                                                                <div className="ml-xl-4 mt-3">

                                                                    {state.form.id == "start" ?
                                                                        <p className="card-title">Start Trading </p>
                                                                        :
                                                                        <p className="card-title">Trading Id {state.form.id}</p>
                                                                    }




                                                                    <h1 className="text-primary">#{algo.data.subscription_id}</h1>
                                                                    <h3 className="font-weight-500 mb-xl-4 text-primary">PNL</h3>
                                                                    <p className="mb-2 mb-xl-0">

                                                                    </p>
                                                                </div>
                                                            </div>





                                                            <div className="col-md-12 col-xl-9">
                                                                <div className="row">
                                                                    <div className="col-md-6 border-right">
                                                                        <div className="table-responsive mb-3 mb-md-0 mt-3">
                                                                            <table className="table table-borderless report-table">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td className="text-muted">Broker Name :</td>

                                                                                        <td>
                                                                                            <h5 className="font-weight-bold mb-0">
                                                                                                {algo.data.algo.strategie_detail.broker_name}
                                                                                            </h5>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td className="text-muted">Product Name :</td>

                                                                                        <td>
                                                                                            <h5 className="font-weight-bold mb-0">
                                                                                                {algo.data.algo.strategie_detail.product_name}
                                                                                            </h5>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td className="text-muted">Algo Name :</td>

                                                                                        <td>
                                                                                            <h5 className="font-weight-bold mb-0">
                                                                                                {algo.data.algo.name}
                                                                                            </h5>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td className="text-muted">Strategy Code :</td>

                                                                                        <td>
                                                                                            <h5 className="font-weight-bold mb-0">
                                                                                                {algo.data.algo.strategie_detail.code}
                                                                                            </h5>
                                                                                        </td>
                                                                                    </tr>

                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 mt-3">
                                                                        <div className='card' >
                                                                            <div className='card-body' >
                                                                                <h4 className="card-title">Trading Form</h4>

                                                                                <div className="forms-sample">
                                                                                    <div className="form-group mb-4">
                                                                                        <label className='mb-2' for="exampleInputUsername1">Subscription</label>
                                                                                        <select className="form-control"
                                                                                            name="subscription"
                                                                                            onChange={(e) => on_change_fun(e)}
                                                                                        >

                                                                                            {subs.data.results ?
                                                                                                subs.data.results.map((i, id) => (

                                                                                                    state.form.subscription == i.id ?

                                                                                                        <>
                                                                                                            <option value={id} key={id} selected>{i.algo.name}</option>
                                                                                                        </>
                                                                                                        :
                                                                                                        <>
                                                                                                            <option value={id} key={id}>{i.algo.name}</option>
                                                                                                        </>

                                                                                                ))

                                                                                                :
                                                                                                <option value="err">No data Found</option>
                                                                                            }

                                                                                        </select>
                                                                                    </div>

                                                                                    <div className="form-group mb-4">
                                                                                        <label className='mb-2'>Quantity</label>
                                                                                        <input type="number"
                                                                                            value={state.form.qty}
                                                                                            onChange={(e) => on_change_fun(e)}
                                                                                            name="qty" className="form-control" />
                                                                                    </div>

                                                                                    {state.form.id == "start" ?
                                                                                        <>
                                                                                            <button type="submit" onClick={() => start_trade('start')} className="btn btn-success mr-2">Start</button>

                                                                                        </>
                                                                                        :
                                                                                        <>
                                                                                            {trade.data.status == 'stop' ?

                                                                                                <button type="submit"
                                                                                                    onClick={() => start_trade('start')} className="btn btn-success mr-2">
                                                                                                    Start
                                                                                                </button>
                                                                                                :
                                                                                                <>

                                                                                                    {trade.data.status == 'squre_off' ?
                                                                                                        ''
                                                                                                        :

                                                                                                        <button type="submit"
                                                                                                            onClick={() => start_trade('squre_off')}
                                                                                                            className="btn btn-info text-light mr-2">
                                                                                                            Squre Off
                                                                                                        </button>
                                                                                                    }

                                                                                                    <button type="submit"
                                                                                                        onClick={() => start_trade('stop')}
                                                                                                        className="btn btn-danger text-light mr-2">
                                                                                                        Stop
                                                                                                    </button>
                                                                                                </>





                                                                                            }

                                                                                        </>
                                                                                    }



                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                :
                                                ''
                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {state.form.id != "start" ?

                            <div className="row">

                                <div className="col-md-12 grid-margin stretch-card stretch-card border shadow-sm rounded">

                                    <div className="card">
                                        <div className="card-body">
                                            <p className="card-title">Trade Order</p>
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
                                                                    <table className="display expandable-table dataTable no-footer"
                                                                        style={{ width: "100%" }} role="grid">


                                                                        <thead>
                                                                            <tr role="row">
                                                                                <th className="select-checkbox sorting_disabled" rowspan="1"
                                                                                    colspan="1" aria-label="Quote#"
                                                                                    style={{ width: "110px" }}>

                                                                                    Order ID#</th>
                                                                                <th className="sorting_asc" tabindex="0"
                                                                                    aria-controls="example" rowspan="1" colspan="1"
                                                                                    aria-label="Product: activate to sort column descending"
                                                                                    aria-sort="ascending" style={{ width: "124px" }}>
                                                                                    Order Type
                                                                                </th>
                                                                                <th className="sorting" tabindex="0" aria-controls="example"
                                                                                    rowspan="1" colspan="1"
                                                                                    aria-label="Business type: activate to sort column ascending"
                                                                                    style={{ width: "148px" }}>Market Rate</th>
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
                                                                                    style={{ width: "123px" }}>Created Time</th>

                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            {trade.data.order ?
                                                                                <>

                                                                                    {trade.data.order.length == 0 ?
                                                                                        <>
                                                                                            <tr className="odd" key=''>
                                                                                                <td >No Data Found!</td>
                                                                                            </tr>
                                                                                        </>
                                                                                        :
                                                                                        <>
                                                                                            {trade.data.order.map((i, id) => (
                                                                                                <tr className="odd" key={id}>
                                                                                                    <td >#{i.order_id}</td>
                                                                                                    <td className="sorting_1">
                                                                                                        {i.order_type}
                                                                                                    </td>
                                                                                                    <td>₹ {i.market_rate}</td>
                                                                                                    <td>{i.qty}</td>
                                                                                                    <td>{i.status}</td>

                                                                                                    <td>
                                                                                                        {new Date(i.created_at).toDateString()}
                                                                                                        <p className='mt-1'>
                                                                                                            {new Date(i.created_at).toLocaleTimeString()}
                                                                                                        </p>

                                                                                                    </td>

                                                                                                </tr>

                                                                                            ))}


                                                                                        </>
                                                                                    }
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
                            :
                            ''
                        }

                    </div>

                    <DashboardFooter />

                </div>
            </div>
		</>
	)
}

export default StartTrade