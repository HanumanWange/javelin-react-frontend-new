import React from 'react';
import DashboardFooter from '../../parts/DashboardFooter';
import Sidebar from '../../parts/Sidebar';
import AlgoInner from '../Website/parts/AlgoInner';
import './account.scss'

const AllSubscription = (props) => {
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

                  <AlgoInner user={props.user} />

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

export default AllSubscription