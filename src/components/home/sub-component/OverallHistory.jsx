import React from 'react'

const OverallHistory = () => {
  return (
    <>
       <div className='dashborad-details'>
        {/* <div class="top-heading">
           <h3>Overall History</h3>
        </div> */}
          <ul>
            <li>
            <div class="card dashcrd-bdy">
             <div className='card-body'>
             <div class="dash-flx">
              <div class="dash-content">
              <p>Total Workers</p>
              <h3>1548</h3>
              </div>
              </div>
             </div>
            </div>
            </li>
            <li>
            <div class="card dashcrd-bdy">
             <div className='card-body'>
             <div class="dash-flx">
              <div class="dash-content">
              <p>Total Items</p>
              <h3>1548</h3>
              </div>
              </div>
             </div>
            </div>
            </li>
            <li>
            <div class="card dashcrd-bdy">
             <div className='card-body'>
             <div class="dash-flx">
              <div class="dash-content">
              <p>Total Units</p>
              <h3>1548</h3>
              </div>
              </div>
             </div>
            </div>
            </li>
          </ul>
       </div> 
    </>
  )
}

export default OverallHistory