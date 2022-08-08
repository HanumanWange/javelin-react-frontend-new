import React, { useEffect, useState } from 'react';
import Contact from '../../parts/Contact';
import Footer from '../../parts/Footer';
import AlgoInner from './parts/AlgoInner';
import BannerImage from './Banner-img.png'
import IconOne from './stock.png'
import AboutImg from './about-img.png'
import Training from '../../parts/Trainings';
import Aboutinner from './parts/Aboutinner';
// import Tone from './t1.png'
// import Ttwo from './t2.png'
// import Tthree from './t3.png'
import '../../../scss/Home.scss'
import Slider from "react-slick";


const Home = (props) => {


    useEffect(() => {
        let nav_btn = document.getElementById("nav_btn")
        let nav_btn_mb = document.getElementById('nav_btn_mb')
        // nav_btn.classList.add('notshow')
        // nav_btn_mb.classList.add('notshow')

    }, [])


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
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            // {
            //     breakpoint: 1199,
            //     settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1,
            //         infinite: true,
            //         dots: true
            //     }
            // },
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
    const settingsone = {
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
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            // {
            //     breakpoint: 1199,
            //     settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1,
            //         infinite: true,
            //         dots: true
            //     }
            // },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>

            <div className='banner-design'>
                <div className='banner-inner'>
                    <div className='container'>
                        <div className='row align-items-center'>
                            <div className='col-lg-6 col-md-12'>
                                <img className='w-100 banner-img' src={BannerImage} />
                            </div>
                            <div className='col-lg-5 col-md-12 mt-lg-0 mt-5 offset-lg-1'>
                                <div className='zoombox-design mx-auto'>
                                    <div className='zoominnerbox    '>
                                        <img src={IconOne} />
                                        <h4>Leading Bot on Banknifty Options</h4>
                                    </div>
                                    <div className='zoominnerbox    '>
                                        <img src={IconOne} />
                                        <h4>Regularly trading Index Options</h4>
                                    </div>
                                    <div className='zoominnerbox    '>
                                        <img src={IconOne} />
                                        <h4>Flexible to Sideways and Trending markets</h4>
                                    </div>
                                    <div className='zoominnerbox    '>
                                        <img src={IconOne} />
                                        <h4>Brave and Intuitive algo setup</h4>
                                    </div>
                                    <div className='zoominnerbox    '>
                                        <img src={IconOne} />
                                        <h4>Believed by users and always motivating results</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Aboutinner/>
            {/* <div className='aboutus'>
                <div className='container'>
                    <div className='heading'>
                        <h2 className="about-heading text-center ">About Us</h2>
                        <div className='line-bar mx-auto' ></div>
                    </div>
                    <div className='row align-items-center'>
                        <div className='col-lg-6'>
                            <img className='mb-lg-0 mb-5 w-100 '  src={AboutImg} />
                        </div>
                        <div className='col-lg-6'>
                            <div className="abouttext ">


                                <p >
                                    We are a team of dedicated Traders, Data Scientists and Developers bringing success to people in the stock market.
                                    Our product can be used with minimum knowledge about the stock market and we provide free training to make you
                                    understand our products. We are having web and app based solutions which can be managed even at workspace.
                                    <br />
                                    <br />
                                    Our team uses Price Action to trade in Equity and Derivative Markets and we believe in strategy first approach and  managing
                                    money with Proper Risk Reward Ratio (RRR)  which is the key factor in our well tested flexible strategies that accommodate both
                                    bull and bear markets. We conduct both online,offline and   hybrid  training as we strongly believe people connect is important.
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className='slider-javlin'>
                <div className='container' >
                    <AlgoInner user={props.user} />

                </div>
            </div>


            <Training/>
            {/* <div className='algotraining-section'>
                <div className='container'>
                    <div class="heading">
                        <h2 class="about-heading text-center ">Trainings</h2>

                        <p className='text-headingline'>Want to learn how to algo-trade? Go from basics too advanced in 8 weeks. Predict the profitability of any trading stratergy & create & test your own stratergies. Build For Non-Programers. Get BSE Certification. Structured Learning Path</p>
                        <div class="line-bar mx-auto"></div>
                    </div>

                    <div className='box-algotraining'>

                        <div className='col-10 mx-auto'>


                            <div className='row align-items-center'>
                                <div className='col-lg-6'>
                                    <img className='w-100' src={Tone} />
                                </div>
                                <div className='col-lg-6'>
                                    <div className='boxtrad'>
                                        <div className='headingtread'>
                                            <h4>Core Markets</h4>
                                          
                                        </div>
                                        <div className='boxmainqoon'>
                                            <div className='box-one d-flex align-items-center'>
                                                <i className=' fa fa-hand-o-right '></i>
                                                <p className='mb-0'>A Sky view of Stock Markets</p>
                                            </div>
                                            <div className='box-one d-flex align-items-center'>
                                                <i className=' fa fa-hand-o-right '></i>
                                                <p className='mb-0'>What is Fundamental Analysis</p>
                                            </div>
                                            <div className='box-one d-flex align-items-center'>
                                                <i className=' fa fa-hand-o-right '></i>
                                                <p className='mb-0'>What is Technical Analysis</p>
                                            </div>
                                            <div className='box-one d-flex align-items-center'>
                                                <i className=' fa fa-hand-o-right '></i>
                                                <p className='mb-0'>Types of Charts</p>
                                            </div>
                                            <div className='box-one d-flex align-items-center'>
                                                <i className=' fa fa-hand-o-right '></i>
                                                <p className='mb-0'>Supply and Demand Zones</p>
                                            </div>
                                            <div className='box-one d-flex align-items-center'>
                                                <i className=' fa fa-hand-o-right '></i>
                                                <p className='mb-0'>Support and Resistance</p>
                                            </div>
                                            <div className='box-one d-flex align-items-center'>
                                                <i className=' fa fa-hand-o-right '></i>
                                                <p className='mb-0'>Different Trading Methods</p>
                                            </div>
                                            <div className='box-one d-flex align-items-center'>
                                                <i className=' fa fa-hand-o-right '></i>
                                                <p className='mb-0'>World Markets Data</p>
                                            </div>
                                            <div className='box-one d-flex align-items-center'>
                                                <i className=' fa fa-hand-o-right '></i>
                                                <p className='mb-0'>Markets Psychology</p>
                                            </div>
                                        </div>
                                        <div>
                                            <a className="btn button-design" href="#">
                                                Contact
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className='row py-lg-5 my-5 align-items-center'>

                                <div className='col-lg-6 order-lg-1 order-2'>
                                    <div className='boxtrad'>
                                        <div className='headingtread'>
                                            <h4>Advance Markets</h4>
                                          
                                        </div>
                                        <div className='boxmainqoon'>
                                            <div className='box-one d-flex align-items-center'>
                                                <i className=' fa fa-hand-o-right '></i>
                                                <p className='mb-0'>Price Action</p>
                                            </div>
                                            <div className='box-one d-flex align-items-center'>
                                                <i className=' fa fa-hand-o-right '></i>
                                                <p className='mb-0'>Indicators</p>
                                            </div>
                                            <div className='box-one d-flex align-items-center'>
                                                <i className=' fa fa-hand-o-right '></i>
                                                <p className='mb-0'>Candlesticks</p>
                                            </div>
                                            <div className='box-one d-flex align-items-center'>
                                                <i className=' fa fa-hand-o-right '></i>
                                                <p className='mb-0'>Chart Patterns</p>
                                            </div>
                                            <div className='box-one d-flex align-items-center'>
                                                <i className=' fa fa-hand-o-right '></i>
                                                <p className='mb-0'>Intraday Strategy</p>
                                            </div>
                                            <div className='box-one d-flex align-items-center'>
                                                <i className=' fa fa-hand-o-right '></i>
                                                <p className='mb-0'>BTST/STBT Strategy</p>
                                            </div>
                                            <div className='box-one d-flex align-items-center'>
                                                <i className=' fa fa-hand-o-right '></i>
                                                <p className='mb-0'>CPR & Camarilla set-up

                                                </p>
                                            </div>
                                            <div className='box-one d-flex align-items-center'>
                                                <i className=' fa fa-hand-o-right '></i>
                                                <p className='mb-0'>Elliott wave $ Dow Theory</p>
                                            </div>
                                            <div className='box-one d-flex align-items-center'>
                                                <i className=' fa fa-hand-o-right '></i>
                                                <p className='mb-0'>Position Sizing</p>
                                            </div>
                                            <div className='box-one d-flex align-items-center'>
                                                <i className=' fa fa-hand-o-right '></i>
                                                <p className='mb-0'>Risk Reward Ratio</p>
                                            </div>

                                            <div className='box-one d-flex align-items-center'>
                                                <i className=' fa fa-hand-o-right '></i>
                                                <p className='mb-0'>Money Management</p>
                                            </div>
                                        </div>
                                        <div>
                                            <a className="btn button-design" href="#">
                                                Contact
                                            </a>
                                        </div>

                                    </div>
                                </div>
                                <div className='col-lg-6 order-lg-2 order-1'>
                                    <img className='w-100' src={Ttwo} />
                                </div>
                            </div>

                            <div className='row align-items-center'>
                                <div className='col-lg-6'>
                                    <img className='w-100' src={Tthree} />
                                </div>
                                <div className='col-lg-6'>
                                    <div className='boxtrad'>
                                        <div className='headingtread'>
                                            <h4>Core Markets</h4>
                                           
                                        </div>
                                        <div className='boxmainqoon'>
                                            <div className='box-one d-flex align-items-center'>
                                                <i className=' fa fa-hand-o-right '></i>
                                                <p className='mb-0'>Futures & Options basics</p>
                                            </div>
                                            <div className='box-one d-flex align-items-center'>
                                                <i className=' fa fa-hand-o-right '></i>
                                                <p className='mb-0'>Option chain Analysis</p>
                                            </div>
                                            <div className='box-one d-flex align-items-center'>
                                                <i className=' fa fa-hand-o-right '></i>
                                                <p className='mb-0'>Pay-off Graphs</p>
                                            </div>
                                            <div className='box-one d-flex align-items-center'>
                                                <i className=' fa fa-hand-o-right '></i>
                                                <p className='mb-0'>Options Scalping</p>
                                            </div>
                                            <div className='box-one d-flex align-items-center'>
                                                <i className=' fa fa-hand-o-right '></i>
                                                <p className='mb-0'>Options Writing</p>
                                            </div>
                                            <div className='box-one d-flex align-items-center'>
                                                <i className=' fa fa-hand-o-right '></i>
                                                <p className='mb-0'>Option Greeks</p>
                                            </div>
                                            <div className='box-one d-flex align-items-center'>
                                                <i className=' fa fa-hand-o-right '></i>
                                                <p className='mb-0'>Hedging</p>
                                            </div>
                                            <div className='box-one d-flex align-items-center'>
                                                <i className=' fa fa-hand-o-right '></i>
                                                <p className='mb-0'>IV levels & VIX analysis</p>
                                            </div>
                                            <div className='box-one d-flex align-items-center'>
                                                <i className=' fa fa-hand-o-right '></i>
                                                <p className='mb-0'>Gap-up & Gap-down analysis</p>
                                            </div>
                                            <div className='box-one d-flex align-items-center'>
                                                <i className=' fa fa-hand-o-right '></i>
                                                <p className='mb-0'>Customised Options Selling Strategies and adjustments</p>
                                            </div>
                                            <div className='box-one d-flex align-items-center'>
                                                <i className=' fa fa-hand-o-right '></i>
                                                <p className='mb-0'>Option Simulator</p>
                                            </div>
                                            <div className='box-one d-flex align-items-center'>
                                                <i className=' fa fa-hand-o-right '></i>
                                                <p className='mb-0'>Rule Based Trading</p>
                                            </div>
                                        </div>
                                        <div>
                                            <a className="btn button-design" href="#">
                                                Contact
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div> */}

            {/* <div className="row align-items-center justify-content-center my-4">

                <div className=" shadow p-4 pb-5 rounded">

                    <div className="col-12">

                        <h2 className="about-heading text-info">Trainings</h2>

                    </div>

                    <hr className='mb-0' />

                    <div className="about-para col-12 pb-0">

                        <p className="body-font">
                            Want to learn how to algo-trade? Go from basics too
                            advanced in 8 weeks. Predict the profitability of
                            any trading stratergy &amp; create &amp; test your own
                            stratergies. Build For Non-Programers. Get BSE
                            Certification. Structured Learning Path.
                        </p>

                    </div>

                    <div className="row px-3">

                        <div className="col-12 col-md-6 col-lg-4 pt-3">

                            <div className="shadow-sm border p-3 rounded">

                                <img style={{ width: '100%' }} src="https://img-c.udemycdn.com/course/240x135/258232_52db_7.jpg" className="mb-2 algo-train" />

                                <div className="">

                                    <div className="col-12 d-flex align-items-center justify-content-center">

                                        <h3 className='train-card-title'>Core Markets</h3>

                                    </div>

                                    <hr className='p-0 my-2' />

                                    <ul className=''>

                                        <li className='py-1'>

                                            <p className='algo-list'>A Sky view of Stock Markets</p>

                                        </li>

                                        <li className='py-1'>

                                            <p className='algo-list'>What is Fundamental Analysis</p>

                                        </li>

                                        <li className='py-1'>

                                            <p className='algo-list'>What is Technical Analysis</p>

                                        </li>

                                        <li className='py-1'>

                                            <p className='algo-list'>Types of Charts</p>

                                        </li>

                                        <div className="collapse" id="collapse">

                                            <li className='py-1'>

                                                <p className='algo-list'>Supply and Demand Zones</p>

                                            </li>

                                            <li className='py-1'>

                                                <p className='algo-list'>Support and Resistance</p>

                                            </li>

                                            <li className='py-1'>

                                                <p className='algo-list'>Different Trading Methods</p>

                                            </li>

                                            <li className='py-1'>

                                                <p className='algo-list'>World Markets Data</p>

                                            </li>

                                            <li className='py-1'>

                                                <p className='algo-list'>Markets Psychology</p>

                                            </li>

                                        </div>

                                        <div className="row d-block align-items-center" style={{ position: "relative" }}>

                                            <button className="btn btn-info btn-sm rotate-icon mt-2" data-toggle="collapse" href="#collapse" role="button" aria-expanded="false" aria-controls="collapseExample">

                                                View All

                                            </button>

                                            <a className="btn btn-success btn-sm ml-3 mt-2" href="#">

                                                Contact

                                            </a>

                                        </div>

                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4 pt-3">

                            <div className="shadow-sm border p-3 rounded">

                                <img style={{ width: '100%' }} src="https://img-c.udemycdn.com/course/240x135/258232_52db_7.jpg" className="mb-2 algo-train" />

                                <div className="">

                                    <div className="col-12 d-flex align-items-center justify-content-center">

                                        <h3 className='train-card-title'>Advance Markets</h3>

                                    </div>

                                    <hr className='p-0 my-2' />

                                    <ul className=''>

                                        <li className='py-1'>

                                            <p className='algo-list'>Price Action</p>

                                        </li>

                                        <li className='py-1'>

                                            <p className='algo-list'>Indicators</p>

                                        </li>

                                        <li className='py-1'>

                                            <p className='algo-list'>Candlesticks</p>

                                        </li>

                                        <li className='py-1'>

                                            <p className='algo-list'>Chart Patterns</p>

                                        </li>

                                        <div className="collapse" id="collapse1">

                                            <li className='py-1'>

                                                <p className='algo-list'>Intraday Strategy</p>

                                            </li>

                                            <li className='py-1'>

                                                <p className='algo-list'>BTST/STBT Strategy</p>

                                            </li>

                                            <li className='py-1'>

                                                <p className='algo-list'>CPR & Camarilla set-up</p>

                                            </li>

                                            <li className='py-1'>

                                                <p className='algo-list'>Elliott wave $ Dow Theory</p>

                                            </li>

                                            <li className='py-1'>

                                                <p className='algo-list'>Position Sizing</p>

                                            </li>

                                            <li className='py-1'>

                                                <p className='algo-list'>Risk Reward Ratio</p>

                                            </li>

                                            <li className='py-1'>

                                                <p className='algo-list'>Money Management</p>

                                            </li>

                                        </div>

                                        <div className="row align-items-center" style={{ position: "relative" }}>

                                            <button className="btn btn-info btn-sm rotate-icon-2" data-toggle="collapse" href="#collapse1" role="button" aria-expanded="false" aria-controls="collapseExample">

                                                View All

                                            </button>

                                            <a className="btn btn-success btn-sm ml-3" href="#" >

                                                Contact

                                            </a>

                                        </div>

                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4 pt-3">

                            <div className="shadow-sm border p-3 rounded">

                                <img style={{ width: '100%' }} src="https://img-c.udemycdn.com/course/240x135/258232_52db_7.jpg" className="mb-2 algo-train" />

                                <div className="">

                                    <div className="col-12 d-flex align-items-center justify-content-center">

                                        <h3 className='train-card-title'>Derivatives</h3>

                                    </div>

                                    <hr className='p-0 my-2' />

                                    <ul className=''>

                                        <li className='py-1'>

                                            <p className='algo-list'>Futures & Options basics</p>

                                        </li>

                                        <li className='py-1'>

                                            <p className='algo-list'>Option chain Analysis</p>

                                        </li>

                                        <li className='py-1'>

                                            <p className='algo-list'>Pay-off Graphs</p>

                                        </li>

                                        <li className='py-1'>

                                            <p className='algo-list'>Options Scalping</p>

                                        </li>

                                        <div className="collapse" id="collapse2">

                                            <li className='py-1'>

                                                <p className='algo-list'>Options Writing</p>

                                            </li>

                                            <li className='py-1'>

                                                <p className='algo-list'>Option Greeks</p>

                                            </li>

                                            <li className='py-1'>

                                                <p className='algo-list'>Hedging</p>

                                            </li>

                                            <li className='py-1'>

                                                <p className='algo-list'>IV levels & VIX analysis</p>

                                            </li>

                                            <li className='py-1'>

                                                <p className='algo-list'>Gap-up & Gap-down analysis</p>

                                            </li>
                                            <li className='py-1'>

                                                <p className='algo-list'>Customised Options Selling Strategies and adjustments</p>

                                            </li>

                                            <li className='py-1'>

                                                <p className='algo-list'>Option Simulator</p>

                                            </li>

                                            <li className='py-1'>

                                                <p className='algo-list'>Rule Based Trading</p>

                                            </li>

                                        </div>

                                        <div className="row align-items-center" style={{ position: "relative" }}>

                                            <button className="btn btn-info btn-sm rotate-icon-3" data-toggle="collapse" href="#collapse2" role="button" aria-expanded="false" aria-controls="collapseExample">

                                                View All

                                            </button>

                                            <a className="btn btn-success btn-sm ml-3" href="#" >

                                                Contact

                                            </a>

                                        </div>

                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div> */}

            <div className='accomation-slider'>
                <div className='container'>
                    <div className='heading'>
                        <h2 className="about-heading text-center ">About Us</h2>
                        <div className='line-bar mx-auto' ></div>
                    </div>
                    <Slider {...settingsone}>
                        <div className='ax-sliderbox'>
                            <div className='boxset'>
                                <div class="teseti-back">
                                    <div class="testimonials-photo">
                                        <img src="https://bitrixinfotech.com/assets/uploads/admin/reviews/review_1549365450.png" alt="Riyaz Hadiyavala" />
                                    </div>
                                    <div class="testimonials-name d-flex align-items-center mb-2">
                                        <h4>Darshik Vadadoriya</h4>
                                        - Faastdeal Ecom
                                    </div>
                                    <div class="testimonials-desc">
                                        <p className='mb-0'><i class="fa fa-quote-left"></i>&nbsp;&nbsp;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took &nbsp;&nbsp;<i class=" fa fa-quote-right"></i></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='ax-sliderbox'>
                            <div className='boxset'>
                                <div class="teseti-back">
                                    <div class="testimonials-photo">
                                        <img src="https://bitrixinfotech.com/assets/uploads/admin/reviews/review_1549365450.png" alt="Riyaz Hadiyavala" />
                                    </div>
                                    <div class="testimonials-name d-flex align-items-center mb-2">
                                        <h4>Darshik Vadadoriya</h4>
                                        - Faastdeal Ecom
                                    </div>
                                    <div class="testimonials-desc">
                                        <p className='mb-0'><i class="fa fa-quote-left"></i>&nbsp;&nbsp;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took &nbsp;&nbsp;<i class=" fa fa-quote-right"></i></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='ax-sliderbox'>
                            <div className='boxset'>
                                <div class="teseti-back">
                                    <div class="testimonials-photo">
                                        <img src="https://bitrixinfotech.com/assets/uploads/admin/reviews/review_1549365450.png" alt="Riyaz Hadiyavala" />
                                    </div>
                                    <div class="testimonials-name d-flex align-items-center mb-2">
                                        <h4>Darshik Vadadoriya</h4>
                                        - Faastdeal Ecom
                                    </div>
                                    <div class="testimonials-desc">
                                        <p className='mb-0'><i class="fa fa-quote-left"></i>&nbsp;&nbsp;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took &nbsp;&nbsp;<i class=" fa fa-quote-right"></i></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='ax-sliderbox'>
                            <div className='boxset'>
                                <div class="teseti-back">
                                    <div class="testimonials-photo">
                                        <img src="https://bitrixinfotech.com/assets/uploads/admin/reviews/review_1549365450.png" alt="Riyaz Hadiyavala" />
                                    </div>
                                    <div class="testimonials-name d-flex align-items-center mb-2">
                                        <h4>Darshik Vadadoriya</h4>
                                        - Faastdeal Ecom
                                    </div>
                                    <div class="testimonials-desc">
                                        <p className='mb-0'><i class="fa fa-quote-left"></i>&nbsp;&nbsp;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took &nbsp;&nbsp;<i class=" fa fa-quote-right"></i></p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </Slider>
                </div>
            </div>

            <Footer />


            <script type="text/javascript" src="/static/js/vanilla-tilt.min.js"></script>

        </>
    )
}

export default Home