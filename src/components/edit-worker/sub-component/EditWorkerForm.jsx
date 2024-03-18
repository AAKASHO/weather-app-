import React from 'react'

const EditWorkerForm = () => {
  return (
    <>
 <div className="card">
            <div className="card-body">
              <div className="create-form-main">
                <div className="form-inputs">
                  <label className="form-label">
                    Worker Name<i>*</i>
                  </label>
                  <input
                    type="text"
                    name="worker-name"
                    className="form-control"
                    placeholder="Enter worker name"
                  />
                </div>
                <div className="form-inputs">
                  <label className="form-label">
                    Phone No.<i>*</i>
                  </label>
                  <input
                    type="number"
                    name="phonee"
                    className="form-control"
                    placeholder="Enter phone no."
                  />
                </div>

                <div className="form-inputs">
                  <label className="form-label">
                    Option<i>*</i>
                  </label>
                  <input
                    type="text"
                    name="option"
                    className="form-control"
                    placeholder="Enter options"
                  />
                </div>

                <div className="form-btn">
                <button className="btn secondary-btn">
                   Cancel
                  </button>
                  <button className="btn primary-btn">
                   Update
                  </button>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default EditWorkerForm