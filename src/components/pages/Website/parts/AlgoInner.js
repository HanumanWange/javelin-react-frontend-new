import React, { useEffect, useState } from 'react'
import AxiosCall from '../../../AxiosCall'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Spinner from '../../../parts/Spinner';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import imgone from "./img1.jpg"
import imgtwo from "./img2.jpg"
import imgthree from "./img3.jpg"
import usericon from "./profile.png"


const AlgoInner = ({ user }) => {
    const [state, setState] = useState({
        data: {}
    })

    const [query, setQuery] = useState('0')

    const [loading, setLoading] = useState(false)


    async function load_data(val = query) {
        setLoading(true)

        await AxiosCall({ method: 'get', url: `${user.url}/api/strategie/?search=${val}` }).then(resp => {
            if (resp.response == true) {
                setState({ data: resp.bknd_data })
            }
            setLoading(false)
        })

    }

    function search_algo(e) {
        load_data(e.target.value)
        setQuery(e.target.value)

    }



    useEffect(() => {
        let mounted = true;

        if (mounted) {
            load_data()

        }

        return () => (mounted = false);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        // slidesToShow: 4,
        // slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 2500,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,

                    dots: true
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <>
            <ToastContainer />

            <div className='container'>


                <div className="slider-javlin box-j-sliderBox">
                    <div className='heading one' >
                        <h2 className="about-heading text-center ">Javlin
                            {query == '0' ?
                                " " + 'Alice ' : " " + "Zerodha "}
                            Products</h2>
                        <div className='line-bar mx-auto' ></div>
                    </div>
                    <div className='dropbox-design mb-4 px-4'>
                        {/* <div className="broker-section d-flex align-items-center">
                            <p className=' algo-list'>Select Broker</p>
                            <select className='form-control form-size'
                                onChange={(e) => search_algo(e)}
                            >
                                {query == '0' ?
                                    <>
                                        <option value="0" selected >Alice Blue</option>
                                        <option value="1">Zerodha</option>
                                    </>
                                    :
                                    <>
                                        <option value="0" >Alice Blue</option>
                                        <option selected value="1">Zerodha</option>
                                    </>
                                }
                            </select>
                        </div> */}
                    </div>
                    <div>
                        <div className='row' >
                            <div className=' col-lg-4 col-md-6'>
                                <div className="j-sliderBox ">
                                    <div className="card algo-card rounded shadow-sm border">
                                        <div className='card-img'>
                                            <img className='w-100' src={imgone} />
                                        </div>
                                        <div className="card-body my-card text-center "   >
                                            <h3 className="card-title heading mb-3 ">
                                               Delta
                                            </h3>
                                            <div className="d-flex text-icon flex-row justify-content-center align-items-center my-3">
                                                <img className='img-icon' src={usericon} />
                                                <span className="text-capitalize mx-3 test-text"><b>
                                                   - 25
                                                </b></span>
                                            </div>
                                            <h5 className=' test-text'> ROI - <span className='text-success'>34.25%</span></h5>




                                            <Link to={"/trading/"}
                                                className="btn button mt-2">Know
                                                More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=' col-lg-4 col-md-6'>
                                <div className="j-sliderBox ">
                                    <div className="card algo-card rounded shadow-sm border">
                                        <div className='card-img'>
                                            <img className='w-100' src={imgtwo} />
                                        </div>
                                        <div className="card-body my-card text-center "   >
                                            <h3 className="card-title heading mb-3 ">
                                               Theta
                                            </h3>
                                            <div className="d-flex text-icon flex-row justify-content-center align-items-center my-3">
                                                <img className='img-icon' src={usericon} />
                                                <span className="text-capitalize mx-3 test-text"><b>
                                                    test
                                                </b></span>
                                            </div>
                                            <h5 className=' test-text'> ROI - <span className='text-success'>34.25%</span></h5>




                                            <Link to={"/trading/"}
                                                className="btn button mt-2"> Comming Soon</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6'>
                                <div className="j-sliderBox ">
                                    <div className="card algo-card rounded shadow-sm border">
                                        <div className='card-img'>
                                            <img className='w-100' src={imgthree} />
                                        </div>
                                        <div className="card-body my-card text-center "   >
                                            <h3 className="card-title heading mb-3 ">
                                              Beta
                                            </h3>
                                            <div className="d-flex text-icon flex-row justify-content-center align-items-center my-3">
                                                <img className='img-icon' src={usericon} />
                                                <span className="text-capitalize mx-3 test-text"><b>
                                                    test
                                                </b></span>
                                            </div>
                                            <h5 className=' test-text'> ROI - <span className='text-success'>34.25%</span></h5>
                                            <Link to={"/trading/"}
                                                className="btn button mt-2">Comming Soon</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>





                        {/* {state.data && state.data.results && state.data.results.map((i, id) => {
                        console.log('called')
                        return (
                            <div className="col-12 col-md-4 col-lg-3 p-0 mt-4" key={id}>
                                        <div className="card algo-card rounded shadow-sm border">
                                            <img src={user.url + i.algos[0].cover_image}
                                                className="card-img-top border text-dark" alt="No Data" />
                                            <div className="card-body my-card">
                                                <h3 className="card-title text-info mb-3 ">
                                                    {i.name}
                                                </h3>
                                                <h5 className='text-dark'> ROI - <span className='text-success'>34.25%</span></h5>
                                                <div className="d-flex flex-row justify-content-start align-items-center my-3">
                                                    <i className="fa fa-user text-capitalize pr-2"></i>
                                                    <span className="text-capitalize"><b>
                                                        {i.all_user}
                                                    </b></span>
                                                </div>



                                                <Link to={"/trading/" + i.id}
                                                    className="btn btn-info btn-font mt-2">Know
                                                    More</Link>
                                            </div>
                                        </div>
                                    </div>
                        )
                    })} */}
                        {/* <div>
                            <h3>1</h3>
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                        <div>
                            <h3>5</h3>
                        </div> */}

                    </div>

                    {/* {state.data.results ?
                    <>
                        {loading ?
                            <Spinner />
                            :
                            <Slider {...settings}>
                                <div>
                                {state.data.results.map((i, id) => (

                                    <div className="col-12 col-md-4 col-lg-3 p-0 mt-4" key={id}>
                                        <div className="card algo-card rounded shadow-sm border">
                                            <img src={user.url + i.algos[0].cover_image}
                                                className="card-img-top border text-dark" alt="No Data" />
                                            <div className="card-body my-card">
                                                <h3 className="card-title text-info mb-3 ">
                                                    {i.name}
                                                </h3>
                                                <h5 className='text-dark'> ROI - <span className='text-success'>34.25%</span></h5>
                                                <div className="d-flex flex-row justify-content-start align-items-center my-3">
                                                    <i className="fa fa-user text-capitalize pr-2"></i>
                                                    <span className="text-capitalize"><b>
                                                        {i.all_user}
                                                    </b></span>
                                                </div>



                                                <Link to={"/trading/" + i.id}
                                                    className="btn btn-info btn-font mt-2">Know
                                                    More</Link>
                                            </div>
                                        </div>
                                    </div>

                                ))}
                                </div>
                                <>
                                    {state.data.results.length == 0 ?
                                        <div className="col-12 col-md-4 col-lg-3 p-0 mt-4">
                                            <div className="card algo-card">

                                                <div className="card-body my-card">
                                                    <h3 className="card-title mb-3 text-danger">Comming Soon!</h3>

                                                </div>
                                            </div>
                                        </div>
                                        :
                                        ''}
                                </>
                            </Slider>
                        }

                    </>
                    :
                    <Spinner />} */}








                </div>
            </div>
        </>
    )
}

export default AlgoInner