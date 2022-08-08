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

    if (trade.data.status && trade.data.status != "stop") {
      return toast.error("Trade Is Running")
    }

    let update = state.form

    if (nam == "subscription") {
      if (val == "err") {
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
      if (resp.response == true) {


        setSubs({ data: resp.bknd_data })

        if (resp.bknd_data.results.length == 0) {
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



    if (id != 'start') {

      await AxiosCall({ method: 'get', url: `${props.user.url}/api/trading/${id}/`, is_auth: true }).then(resp => {
        if (resp.response == false) {
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
    if (id == "start") {
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
      if (resp.response == true) {
        if (resp.bknd_data.status == 400) {
          toast.error(resp.bknd_data.message)
        }
        else {
          if (id == "start") {
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

      <div className='bord-design'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-3'>
              <Sidebar user={props.user} />
            </div>
            <div className='col-lg-9'>
              <div className="main-panel">
                <div className="content-wrapper">



                  <div >
                    <div id="detailedReports"
                      className="carousel slide detailed-report-carousel position-static pt-2"
                      data-ride="carousel">

                      {loading ?
                        <div>

                          <div className="spinner-border mt-3" role="status">
                            <span className="sr-only">Loading...</span>
                          </div>
                          <span className="ml-3 text-danger">We Are Featching Details...</span>
                        </div>
                        :
                        <>

                          {algo.data.algo ?
                            <div className="carousel-inner">

                              <div className="carousel-item active">
                                <div className="row">
                                  <div className="col-12">
                                    <div className="">

                                      {state.form.id == "start" ?
                                        <p className="card-title">Start Trading </p>
                                        :
                                        <p className="card-title">Trading Id {state.form.id}</p>
                                      }
                                      <div className='d-flex align-items-center text-heading'>
                                        <h4 className="">#{algo.data.subscription_id}</h4>
                                        <h5 className="  mx-4 ">India</h5>
                                      </div>


                                    </div>
                                  </div>





                                  <div >
                                    <div className="row">
                                      <div className="col-md-5 ">
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
                                      <div className="col-md-7 mt-3">
                                        <div className="card">
                                          <div className="card-body">
                                            <h4 className="card-title">Trading Form</h4>

                                            <div className="forms-sample">
                                              <div className="form-group">
                                                <label for="exampleInputUsername1">Subscription</label>
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

                                              <div className="form-group">
                                                <label>Quantity</label>
                                                <input type="number"
                                                  value={state.form.qty}
                                                  onChange={(e) => on_change_fun(e)}
                                                  name="qty" className="form-control" />
                                              </div>

                                              {state.form.id == "start" ?
                                                <>
                                                  <button type="submit"
                                                    data-toggle="modal" data-target="#exampleModal"

                                                    className="btn buttondesign">Start</button>

                                                </>
                                                :
                                                !trade.data.overview ? '' :
                                                  <>
                                                    {trade.data.status == 'stop' ?
                                                      <>
                                                        <button type="submit"
                                                          data-toggle="modal" data-target="#exampleModal"
                                                          className="btn btn-success mr-2">
                                                          Start
                                                        </button>

                                                      </>
                                                      :
                                                      <>

                                                        {trade.data.status == 'squre_off' ?
                                                          ''
                                                          :
                                                          <>
                                                            <button type="submit"
                                                              onClick={() => start_trade('squre_off')}
                                                              className="btn btn-info text-light mr-2">
                                                              Squre Off
                                                            </button>

                                                          </>
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


                        </>
                      }

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
        <DashboardFooter />
      </div>





      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-danger" id="exampleModalLabel">

                Are You Sure Want To Start Trade!
              </h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body text-primary">

              Click Yes To Start Trade

            </div>
            <div class="modal-footer">

              <div className="col-md-12 mt-3">
                <button type="button" class="btn btn-success"
                  onClick={() => start_trade('start')}
                >Yes</button>

              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default StartTrade