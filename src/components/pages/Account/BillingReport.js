import React, { useState, useEffect } from 'react';
import AxiosCall from '../../AxiosCall';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from '../../parts/Sidebar';
import DashboardFooter from '../../parts/DashboardFooter';

const AlgoSubscriptionList = (props) => {

    const [loading, setLoading] = useState(true)

    const [state, setState] = useState({
        data: {}
    })

    function show_overview(id) {
        let update = state.data

        state.data.results[id].overview = !state.data.results[id].overview

        setState({
            data: update
        })
    }




    async function load_data() {
        await AxiosCall({
            method: 'get', url: `${props.user.url}/api/billing-report/`,
            is_auth: true
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
        
        return () => (mounted = false);
      }, []);



    // useEffect(() => {

    //     let mounted = true

    //     if(mounted){
    //         load_data()

    //     }

    //     return () => {
    //         mounted = false
            
    //     }


    // }, [])


    const [show, setShow] = useState(false)


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
               
             </div>s



            <div className="main-panel">


                <div className="content-wrapper">


                    <div className="row">

                        <div className="col-md-12 grid-margin stretch-card">

                            <div className="card">
                                <div className="card-body">
                                    <p className="card-title">Billing Report</p>
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
                                                                            colspan="1" aria-label="Quote#" style={{ width: "110px" }}>
                                                                            Report Id#
                                                                        </th>
                                                                        <th className="sorting_asc" tabindex="0"
                                                                            aria-controls="example" rowspan="1" colspan="1"
                                                                            aria-label="Product: activate to sort column descending"
                                                                            aria-sort="ascending" style={{ width: "124px" }}>
                                                                            Subscription Id
                                                                        </th>
                                                                        <th className="sorting" tabindex="0" aria-controls="example"
                                                                            rowspan="1" colspan="1"
                                                                            aria-label="Business type: activate to sort column ascending"
                                                                            style={{ width: "148px" }}>Amount</th>
                                                                        <th className="sorting" tabindex="0" aria-controls="example"
                                                                            rowspan="1" colspan="1"
                                                                            aria-label="Policy holder: activate to sort column ascending"
                                                                            style={{ width: "141px" }}>Payment Type</th>

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


                                                                    {state.data.results ?

                                                                        state.data.results.map((i, id) => (
                                                                            <>

                                                                                <tr className="odd" key={id}>
                                                                                    <td className="">#{i.tr_id}</td>
                                                                                    <td className="sorting_1">
                                                                                        #{i.subscription_detail.subscription_id}
                                                                                    </td>
                                                                                    <td>
                                                                                        ₹ {i.subscription_detail.algo.amount}
                                                                                    </td>
                                                                                    <td>
                                                                                        {i.payment_type == 0 ? "Account Transfer"
                                                                                            :
                                                                                            "Razor Pay"
                                                                                        }
                                                                                    </td>

                                                                                    <td>
                                                                                        {i.status == 0 ?
                                                                                            <>
                                                                                                <div className="progress progress-md">

                                                                                                    <div className={"progress-bar progress-bar-striped bg-warning"}
                                                                                                        role="progressbar"
                                                                                                        style={{ width: "100%" }}
                                                                                                        aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
                                                                                                    </div>


                                                                                                </div>
                                                                                                <div className="d-flex justify-content-between mt-2">
                                                                                                    <small>Pending</small>

                                                                                                </div>
                                                                                            </>
                                                                                            : i.status == 1 ?
                                                                                                <>
                                                                                                    <div className="progress progress-md">

                                                                                                        <div className={"progress-bar progress-bar-striped bg-success"}
                                                                                                            role="progressbar"
                                                                                                            style={{ width: "100%" }}
                                                                                                            aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
                                                                                                        </div>


                                                                                                    </div>
                                                                                                    <div className="d-flex justify-content-between mt-2">
                                                                                                        <small>Success</small>

                                                                                                    </div>
                                                                                                </>
                                                                                                :
                                                                                                <>
                                                                                                    <div className="progress progress-md">

                                                                                                        <div className={"progress-bar progress-bar-striped bg-danger"}
                                                                                                            role="progressbar"
                                                                                                            style={{ width: "100%" }}
                                                                                                            aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
                                                                                                        </div>

                                                                                                    </div>
                                                                                                    <div className="d-flex justify-content-between mt-2">
                                                                                                        <small>Reject</small>

                                                                                                    </div>
                                                                                                </>
                                                                                        }



                                                                                    </td>
                                                                                    <td>
                                                                                    {new Date(i.created_at).toDateString()}
                                                                                    </td>
                                                                                    <td className=" details-control"
                                                                                        onClick={() => show_overview(id)}
                                                                                    ></td>
                                                                                </tr>

                                                                                {i.overview ?
                                                                                    <tr key={id}>
                                                                                        <td colspan="8">
                                                                                            <table cellpadding="5" cellspacing="0" border="0"
                                                                                                style={{ width: "100%" }}>
                                                                                                <tbody>
                                                                                                    <tr className="expanded-row">
                                                                                                        <td colspan="8" className="row-bg">
                                                                                                            <div>
                                                                                                                <div
                                                                                                                    className="">
                                                                                                                    <div className="cell-hilighted">
                                                                                                                        <div
                                                                                                                            className="d-flex mb-2">
                                                                                                                           
                                                                                                                            <div
                                                                                                                                className="mr-2 min-width-cell">
                                                                                                                                
                                                                                                                                <p>Note</p>
                                                                                                                                <p className="text-light"> 
                                                                                                                                {i.note}
                                                                                                                                </p>
                                                                                                                            </div>
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
                                                                                    :
                                                                                    ''
                                                                                }



                                                                            </>

                                                                        ))

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
                {/* {console.log(state.data)} */}

            </div>
        </div>                                                        
        </>
    )
}

export default AlgoSubscriptionList