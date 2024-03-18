import React from 'react'
import { Banner, Logo } from '../../../assets/images'
import { Link } from 'react-router-dom'

const CreateUnit = () => {
  return (
    <>
    <div class="create-form" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="create-wraper">
        <div className="create-wraper-inner">
          <div class="create-logo">
            <img alt="Logo" src={Logo} />
          </div>
          <div className="card create-card">
            <div className="card-header">
              <div className="card-title">
                <h3>Create Unit</h3>
              </div>
            </div>
            <div className="card-body">
            <div className="create-form-main">
                <div className="form-inputs">
                  <label className="form-label">
                  Org/Unit Name<i>*</i>
                  </label>
                  <input
                    type="text"
                    name="urg/unit-name"
                    className="form-control"
                    placeholder="Enter org/unit name"
                  />
                </div>
                <div className="form-inputs">
                  <label className="form-label">
                    Industry<i>*</i>
                  </label>
                  <input
                    type="text"
                    name="industrye"
                    className="form-control"
                    placeholder="Enter industry name"
                  />
                </div>

                <div className="form-inputs">
                  <label className="form-label">
                  Location<i>*</i>
                  </label>
                  <input
                    type="text"
                    name="location"
                    className="form-control"
                    placeholder="Enetr apartment/location"
                  />
                </div>


                <div className="form-btn">
                  <Link to="/org-master" className="btn primary-btn">
                    Create
                  </Link>
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


export default CreateUnit