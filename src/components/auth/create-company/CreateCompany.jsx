import React from "react";
import { Banner, Logo } from "../../../assets/images";
import { Link } from "react-router-dom";

const CreateCompany = () => {
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
                <h3>Create Company</h3>
              </div>
            </div>
            <div className="card-body">
              <div className="create-form-main">
                <div className="form-inputs">
                  <label className="form-label">
                    Company Name<i>*</i>
                  </label>
                  <input
                    type="text"
                    name="company-name"
                    className="form-control"
                    placeholder="Enter company name"
                  />
                </div>
                <div className="form-inputs">
                  <label className="form-label">
                    Super Admin Name<i>*</i>
                  </label>
                  <input
                    type="text"
                    name="super-admin-name"
                    className="form-control"
                    placeholder="Enter super admin name"
                  />
                </div>

                <div className="form-inputs">
                  <label className="form-label">
                    User Name<i>*</i>
                  </label>
                  <div class="inputwth-icon">
                  <input
                    type="text"
                    name="user-name"
                    className="form-control"
                    placeholder="Enetr user name"
                  />
                  <div className="input-icon">
                  <span className="useravlbl-chk"><i class="fa-solid fa-circle-check"></i></span>
                    <span className="usernotavlbl-chk" style={{ display: 'none' }}><i class="fa-solid fa-circle-xmark"></i></span>
                  </div>
                  </div>
                </div>

                <div className="form-inputs">
                  <label className="form-label">
                    License Key<i>*</i>
                  </label>
                  <input
                    type="number"
                    name="license-key"
                    className="form-control"
                    placeholder="Enter license key"
                  />
                </div>

                <div className="form-btn">
                  <Link to="/create-unit" className="btn primary-btn">
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
  );
};

export default CreateCompany;
