import React, { useEffect } from 'react';
import Tone from './t1.png'
import Ttwo from './t2.png'
import Tthree from './t3.png'

const Training = () => {



    return (
        <>
           <div className='algotraining-section'>
                <div className='container'>
                    <div class="heading">
                        <h2 class="about-heading text-center ">Trainings</h2>

                        <p className='text-headingline'>Want to learn how to algo-trade? Go from basics too advanced in 8 weeks. Predict the profitability of any trading stratergy , create & test your own stratergies. Build For Non-Programers. Get BSE Certification. Structured Learning Path</p>
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
                                            {/* <div class="line-bar ">
                                        </div> */}
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
                                            {/* <div class="line-bar ">
                                        </div> */}
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
                                            {/* <div class="line-bar ">
                                        </div> */}
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
            </div>
        </>
    )
}

export default Training