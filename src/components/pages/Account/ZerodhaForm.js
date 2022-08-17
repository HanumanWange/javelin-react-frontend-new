import React, { useState, useEffect } from 'react'
import Sidebar from '../../parts/Sidebar';
import DashboardFooter from '../../parts/DashboardFooter';
import './account.scss'

const ZerodhaForm = (props) => {
  const [show, setShow] = useState(false)
  return (
    <>

  
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
          <h3>Zerodha Is Coming Soon</h3>

        </div>
        <DashboardFooter />
      </div>
      </div>
    </>
  )
}

export default ZerodhaForm