import React, { useState, useEffect } from 'react'
import Sidebar from '../../parts/Sidebar';
import DashboardFooter from '../../parts/DashboardFooter';
import './account.scss'

const ZerodhaForm = (props) => {
  return (
    <>

      <div className='bord-design'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-3'>
              <Sidebar user={props.user} />
            </div>
            <div className='col-lg-9'>
              <div className="main-panel">

                <div className="content-wrapper">
                  <h3 className='card-title'>Zerodha Is Coming Soon</h3>

                </div>

              </div>
            </div>
          </div>
        </div>
        <DashboardFooter />
      </div>





    </>
  )
}

export default ZerodhaForm