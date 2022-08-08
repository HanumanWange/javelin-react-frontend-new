import React, { useState, useEffect } from 'react'
import Sidebar from '../../parts/Sidebar';
import DashboardFooter from '../../parts/DashboardFooter';
import AxiosCall from '../../AxiosCall';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const UserSubscription = (props) => {

    const [state, setState] = useState({
        data: {}
    })
    const [loading, setLoading] = useState(false)

    const [renew, setRenew] = useState({
        form: {
            tr_id: "",
            note: "",
            payment_type: "0"
        }
    })

    function reset_renew_form() {
        setRenew({
            form: {
                tr_id: "",
                note: "",
                payment_type: "0"
            }
        })
    }

    function show_algo(id) {
        let update = state.data

        state.data.results[id].overview = !state.data.results[id].overview

        setState({
            data: update
        })
    }

    async function load_data() {
        setLoading(true)

        await AxiosCall({ method: 'get', url: `${props.user.url}/api/subscription/`, is_auth: true }).then(resp => {

            if (resp.response == true) {
                console.log(resp)
                setState({ data: resp.bknd_data })
            }
            setLoading(false)
        })

    }

    function on_change_fun(e) {
        let update = renew.form;
        let nam = e.target.name;
        let val = e.target.value
        update[nam] = val
        setRenew({ form: update })
    }

    async function submit_renew_form(id) {
        const formData = new FormData()
        formData.append("tr_id", renew.form.tr_id)
        formData.append("subscription", id)
        formData.append("note", renew.form.note)
        formData.append("payment_type", parseInt(renew.form.payment_type))


        await AxiosCall({
            method: 'post', url: `${props.user.url}/api/billing-report/`,
            post_data: formData, is_auth: true
        }).then(resp => {

            if (resp.response) {
                toast.success("Form Has Been Saved")
            }
            else {
                toast.error("Failed To Save This Form")
            }

        })

        console.log(renew)
    }

    async function delete_subscription(id) {
        const formData = new FormData()

        formData.append("action", "delete")
        formData.append("id", id)

        await AxiosCall({ method: 'put', url: `${props.user.url}/api/subscription/`, post_data: formData, is_auth: true }).then(resp => {
            if (resp.response == true) {
                if (resp.bknd_data.status == 200) {
                    //toast.success(resp.bknd_data.message)
                    window.location.reload()
                    // let bdy = document.getElementsByTagName('body')
                    // bdy[0].classList.remove("modal-open")
                }
                else {
                    toast.error(resp.bknd_data.message)
                }
            }
        })
    }


    // useEffect(() => {

    //     let mounted = true;
    //     if (mounted){
    //         load_data()
    //     }

    //     return () => {
    //         mounted = false

    //     }

    // }, [])


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
        <>
            <ToastContainer />

            <div className='bord-design'>
                <div className='container-fluid' >
                    <div className='row' >
                <div className='col-lg-3'>
                    <Sidebar user={props.user} />
                </div>
                <div className='col-lg-9'>
                    <div className="main-panel">
                        <div className="content-wrapper">
                            <div >
                                <div >
                                    <div>

                                        <div>
                                            <p className="card-title">My Subscriptions</p>
                                            <div >
                                                <div>
                                                    <div className="table-responsive">
                                                        <div id="example_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
                                                            <div className="row">
                                                                <div className="col-sm-12 col-md-6"></div>
                                                                <div className="col-sm-12 col-md-6"></div>
                                                            </div>
                                                            <div>
                                                                <div >
                                                                    <table cellPadding={5} cellSpacing={5} className="display expandable-table dataTable no-footer"
                                                                        style={{ width: "100%" }} role=" grid">

                                                                        <thead>
                                                                            <tr role="row">
                                                                                <th className="select-checkbox sorting_disabled" rowspan="1"
                                                                                    colspan="1" aria-label="Quote#" style={{
                                                                                        width: "110px"
                                                                                    }}>ID#</th>
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
                                                                                    style={{ width: "141px" }}>Algo Name</th>
                                                                                <th className="sorting" tabindex="0" aria-controls="example"
                                                                                    rowspan="1" colspan="1"
                                                                                    aria-label="Premium: activate to sort column ascending"
                                                                                    style={{ width: "102px" }}>Price</th>
                                                                                <th className="sorting" tabindex="0" aria-controls="example"
                                                                                    rowspan="1" colspan="1"
                                                                                    aria-label="Status: activate to sort column ascending"
                                                                                    style={{ width: "102px" }}>Status</th>
                                                                                <th className="sorting" tabindex="0" aria-controls="example"
                                                                                    rowspan="1" colspan="1"
                                                                                    aria-label="Updated at: activate to sort column ascending"
                                                                                    style={{ width: "123px" }}>Created at</th>
                                                                                <th className="details-control sorting_disabled" rowspan="1"
                                                                                    colspan="1" aria-label="" style={{ width: "41px" }}>
                                                                                </th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>

                                                                            {loading ?
                                                                                "Loading......"
                                                                                :
                                                                                <>
                                                                                    {state.data.results ?

                                                                                        <>
                                                                                            {state.data.results.map((i, id) => (
                                                                                                <>
                                                                                                    <tr className="odd" key={id}>
                                                                                                        <td>#{i.subscription_id}</td>
                                                                                                        <td className="sorting_1">
                                                                                                            {i.algo.strategie_detail.broker_name}
                                                                                                        </td>
                                                                                                        <td>
                                                                                                            {i.algo.strategie_detail.product_name}
                                                                                                        </td>
                                                                                                        <td>{i.algo.name}</td>
                                                                                                        <td>₹ {i.algo.amount}</td>
                                                                                                        <td>
                                                                                                            <div className="progress progress-md">

                                                                                                                <div className={"progress-bar progress-bar-striped bg-" + i.status.badge}
                                                                                                                    role="progressbar"
                                                                                                                    style={{ width: i.status.percent }}
                                                                                                                    aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
                                                                                                                </div>


                                                                                                            </div>
                                                                                                            <div className="d-flex justify-content-between mt-2">
                                                                                                                <small>{i.status.msg}</small>

                                                                                                            </div>
                                                                                                        </td>
                                                                                                        <td>{new Date(i.created_at).toDateString()}</td>
                                                                                                        <td className=" details-control"
                                                                                                            onClick={() => show_algo(id)}
                                                                                                        ></td>
                                                                                                    </tr>

                                                                                                    {i.overview ?
                                                                                                        <>

                                                                                                            <tr key={id}>
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
                                                                                                                                                        <p>Renew
                                                                                                                                                            Date</p>
                                                                                                                                                        <h6>{i.renew_date}
                                                                                                                                                        </h6>
                                                                                                                                                    </div>
                                                                                                                                                    <div
                                                                                                                                                        className="min-width-cell">
                                                                                                                                                        <p>Expire
                                                                                                                                                            Date</p>
                                                                                                                                                        <h6>{i.expire_date}
                                                                                                                                                        </h6>
                                                                                                                                                    </div>
                                                                                                                                                </div>
                                                                                                                                                <div className="d-flex">
                                                                                                                                                    <div
                                                                                                                                                        className="mr-2 min-width-cell">
                                                                                                                                                        <p>Total Trade
                                                                                                                                                        </p>
                                                                                                                                                        <h5>0</h5>
                                                                                                                                                    </div>
                                                                                                                                                    <div
                                                                                                                                                        className="min-width-cell">
                                                                                                                                                        <p>Subscription Price</p>
                                                                                                                                                        <h5>
                                                                                                                                                            ₹ {i.algo.amount}

                                                                                                                                                        </h5>
                                                                                                                                                    </div>
                                                                                                                                                </div>
                                                                                                                                            </div>

                                                                                                                                            <div
                                                                                                                                                className="expanded-table-normal-cell">
                                                                                                                                                <div className="mr-2 mb-4">
                                                                                                                                                    <p>Subscription Id.</p>
                                                                                                                                                    <h6>#{i.subscription_id}</h6>
                                                                                                                                                </div>
                                                                                                                                                <div className="mr-2">
                                                                                                                                                    <p>Subscription Name.

                                                                                                                                                    </p>
                                                                                                                                                    <h6>{i.algo.name}
                                                                                                                                                    </h6>
                                                                                                                                                </div>
                                                                                                                                            </div>

                                                                                                                                            <div
                                                                                                                                                className="expanded-table-normal-cell">
                                                                                                                                                <div className="mr-2 mb-4">
                                                                                                                                                    <p>Subscription Time</p>
                                                                                                                                                    <h6 className="text-capitalize">
                                                                                                                                                        {i.algo.time_period} / {i.algo.time_type}
                                                                                                                                                    </h6>
                                                                                                                                                </div>
                                                                                                                                                {i.status.badge != 'danger' ?

                                                                                                                                                    <div className="mr-2 mb-4">
                                                                                                                                                        <p>Start Trade</p>
                                                                                                                                                        <button type="submit" className="btn btn-info py-2 mr-2">Start</button>
                                                                                                                                                    </div>
                                                                                                                                                    :
                                                                                                                                                    ''
                                                                                                                                                }

                                                                                                                                            </div>

                                                                                                                                            <div
                                                                                                                                                className="expanded-table-normal-cell">
                                                                                                                                                <div
                                                                                                                                                    className="mr-2 mb-3 d-flex">
                                                                                                                                                    <div
                                                                                                                                                        className="highlighted-alpha">
                                                                                                                                                        {i.algo.strategie_detail.broker_name.slice(0, 1)}</div>
                                                                                                                                                    <div>
                                                                                                                                                        <p>Broker Name
                                                                                                                                                        </p>

                                                                                                                                                        <h6>{i.algo.strategie_detail.broker_name}
                                                                                                                                                        </h6>
                                                                                                                                                    </div>
                                                                                                                                                </div>
                                                                                                                                                <div
                                                                                                                                                    className="mr-2 d-flex">
                                                                                                                                                    <div
                                                                                                                                                        className="highlighted-alpha">
                                                                                                                                                        {i.algo.strategie_detail.product_name.slice(0, 1)}
                                                                                                                                                    </div>
                                                                                                                                                    <div>
                                                                                                                                                        <p>Product Name
                                                                                                                                                        </p>

                                                                                                                                                        <h6>{i.algo.strategie_detail.product_name}
                                                                                                                                                        </h6>
                                                                                                                                                    </div>
                                                                                                                                                </div>
                                                                                                                                            </div>

                                                                                                                                            <div
                                                                                                                                                className="expanded-table-normal-cell">
                                                                                                                                                <div className="mr-2 mb-4">
                                                                                                                                                    <p>Status</p>

                                                                                                                                                    <div className="d-flex justify-content-between mt-2">
                                                                                                                                                        <small>{i.status.msg}</small>

                                                                                                                                                    </div>
                                                                                                                                                </div>
                                                                                                                                                {i.status.badge != 'success' ?
                                                                                                                                                    <div className="mr-2 mb-4">

                                                                                                                                                        <button type="submit"
                                                                                                                                                            data-toggle="modal" data-target={"#renew_modal" + id}
                                                                                                                                                            onClick={reset_renew_form}
                                                                                                                                                            className="btn btn-info mr-2 py-2">Renew</button>
                                                                                                                                                    </div>
                                                                                                                                                    :
                                                                                                                                                    ''
                                                                                                                                                }
                                                                                                                                            </div>

                                                                                                                                            <div
                                                                                                                                                className="expanded-table-normal-cell">
                                                                                                                                                <div className="mr-2 mb-4">
                                                                                                                                                    <p>Country</p>
                                                                                                                                                    <h6>India</h6>
                                                                                                                                                </div>

                                                                                                                                                {i.first_time_active ? '' :
                                                                                                                                                    <div className="mr-2 mb-4">

                                                                                                                                                        <button type="submit"
                                                                                                                                                            data-toggle="modal" data-target={"#delete_modal" + id}
                                                                                                                                                            className="btn btn-danger mr-2 py-2 mt-2">Delete</button>
                                                                                                                                                    </div>
                                                                                                                                                }
                                                                                                                                            </div>

                                                                                                                                        </div>
                                                                                                                                    </div>
                                                                                                                                </td>
                                                                                                                            </tr>
                                                                                                                        </tbody>
                                                                                                                    </table>
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                            <div className="modal fade" id={"renew_modal" + id} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                                                                                <div className="modal-dialog" role="document">
                                                                                                                    <div className="modal-content">
                                                                                                                        <div className="modal-header">
                                                                                                                            <h5 className="modal-title" id="exampleModalLabel">Subscription Renew Form #{i.subscription_id}</h5>
                                                                                                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                                                                                <span aria-hidden="true">&times;</span>
                                                                                                                            </button>
                                                                                                                        </div>
                                                                                                                        <div className="renew-modal-padd">
                                                                                                                            <div>
                                                                                                                                <div className="form-group mb-2">
                                                                                                                                    <label for="exampleInputEmail1">Transaction Id</label>
                                                                                                                                    <input type="text" onChange={(e) => on_change_fun(e)} name="tr_id" value={renew.form.tr_id} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                                                                                                                </div>

                                                                                                                                <div className="form-group mb-2">
                                                                                                                                    <label for="exampleInputEmail1">Payment By</label>
                                                                                                                                    <select type="text" onChange={(e) => on_change_fun(e)}
                                                                                                                                        name="payment_type" className="form-control">
                                                                                                                                        <option value="0">Account Transfer</option>
                                                                                                                                        <option value="1">Razor Pay</option>
                                                                                                                                    </select>

                                                                                                                                </div>


                                                                                                                                <div className="form-group">
                                                                                                                                    <label for="exampleInputPassword1">Note</label>
                                                                                                                                    <textarea onChange={(e) => on_change_fun(e)} name="note" value={renew.form.note} className="form-control" rows="5"></textarea>
                                                                                                                                </div>

                                                                                                                                <button type="submit" onClick={() => submit_renew_form(i.id)} className="btn btn-primary px-3 py-2 mb-2">Submit</button>
                                                                                                                            </div>
                                                                                                                        </div>

                                                                                                                        <div className="modal-footer">

                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>

                                                                                                            <div className="modal fade" id={"delete_modal" + id} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                                                                                <div className="modal-dialog" role="document">
                                                                                                                    <div className="modal-content">
                                                                                                                        <div className="modal-header">
                                                                                                                            <h5 className="modal-title" id="exampleModalLabel">Subscription Id: #{i.subscription_id}</h5>
                                                                                                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                                                                                <span aria-hidden="true">&times;</span>
                                                                                                                            </button>
                                                                                                                        </div>
                                                                                                                        <div className="renew-modal-padd text-danger">


                                                                                                                            Are You Sure Want To Delete {i.subscription_id}!

                                                                                                                            <div className="col-md-12 mt-3">
                                                                                                                                <button onClick={() => delete_subscription(i.id)} name="myc" value="delete" className="btn btn-danger px-3 py-2">Delete</button>
                                                                                                                            </div>

                                                                                                                        </div>
                                                                                                                        <div className="modal-footer">

                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>

                                                                                                        </>


                                                                                                        :
                                                                                                        ''
                                                                                                    }
                                                                                                </>
                                                                                            ))}

                                                                                            {state.data.results.length == 0 ?
                                                                                                <tr className="odd">
                                                                                                    <td className="">No Data Found!</td>

                                                                                                </tr>
                                                                                                :
                                                                                                ''
                                                                                            }


                                                                                        </>
                                                                                        :
                                                                                        <>
                                                                                            <tr className="odd">
                                                                                                <td className="">No Data Found!</td>

                                                                                            </tr>
                                                                                        </>
                                                                                    }

                                                                                </>
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
                            {console.log(state.data)}


                        </div>
                      
                    </div>
                </div>
                </div>
                </div>
            </div>
            <DashboardFooter />



        </>
    )
}

export default UserSubscription