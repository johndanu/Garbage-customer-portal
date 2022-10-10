import React from "react";
import { useNavigate } from "react-router-dom";
function Agr() {
  const navigate = useNavigate();

  function next() {
    navigate("/frame5");
  }
  return (
    <div className="h-100  container-fluid">
      <div className="main_body">
        <div className="card_body container mt-5">
          <div className="card req_card mx-auto shadow my-5 px-4">
            <h5 className="req_title py-3 text-center add_title">
              Additional Garbage Collection Request
            </h5>
            <div className="req_form">
              <h5 className="fancy_title">Details of Applicant :</h5>
              <div className="input_grp mb-3">
                <label for="Name" className="fw-bold form-label">
                  Name :
                </label>
                <br />
                <input
                  id="Name"
                  type="text"
                  className="px-2 py-1 form-control"
                  placeholder="Name"
                />
              </div>
              <div className="input_grp mb-3">
                <label for="Division" className="fw-bold form-label">
                  Address / Location where we need to collect your garbage :
                </label>
                <br />
                <input
                  id="Division"
                  type="text"
                  className="px-2 py-1 form-control"
                  placeholder="Division"
                />
              </div>
              <div className=" row mb-3">
                <div className="col-6 pe-3 input_grp ">
                  <label for="date" className="fw-bold form-label">
                    Date :
                  </label>
                  <br />
                  <input
                    type="text"
                    id="date"
                    className="px-2 py-1 form-control"
                    placeholder="Date"
                  />
                </div>
                <div className="col-6 ps-3 input_grp">
                  <label for="phone" className="fw-bold form-label">
                    Contact Number :
                  </label>
                  <br />
                  <input
                    id="phone"
                    type="text"
                    className="px-2 py-1 form-control"
                    placeholder="Contact Number"
                  />
                </div>
              </div>
              <div className="input_grp mb-3">
                <label for="address" className="fw-bold form-label">
                  Email Address :
                </label>
                <br />
                <input
                  id="address"
                  type="text"
                  className="px-2 py-1 form-control"
                  placeholder="Enter your email address"
                />
              </div>

              <h5 className="fancy_title">Material Details :</h5>
              <label className="fw-bold form-label">
                What types of materials you have ?
              </label>
              <br />
              <div className="px-3 mb-3 d-flex align-items-center justify-content-start">
                <div className="input_grp me-4">
                  <input
                    id="plas"
                    class="form-check-input mt-0"
                    type="checkbox"
                    value=""
                    aria-label="Checkbox for following text input"
                  />
                  <lable fro="plas" className="lh-base ms-2">
                    Plastic{" "}
                  </lable>
                </div>
                <div className="input_grp me-4">
                  <input
                    id="glass"
                    class="form-check-input mt-0"
                    type="checkbox"
                    value=""
                    aria-label="Checkbox for following text input"
                  />
                  <lable for="glass" className="lh-base ms-2">
                    Glass{" "}
                  </lable>
                </div>
                <div className="input_grp me-4">
                  <input
                    id="organic"
                    class="form-check-input mt-0"
                    type="checkbox"
                    value=""
                    aria-label="Checkbox for following text input"
                  />
                  <lable for="organic" className="lh-base ms-2">
                    Organic{" "}
                  </lable>
                </div>
              </div>

              <div className="input_grp mb-3">
                <label for="quantity" className="fw-bold form-label">
                  Approximate weight :
                </label>
                <br />
                <input
                  id="quantity"
                  type="text"
                  className="px-2 py-1 form-control"
                  placeholder="Quantity"
                />
              </div>
              <div className="input_grp mb-3">
                <label for="quantity" className="fw-bold form-label">
                  Additional Information (Optional) :
                </label>
                <br />
                <input
                  id="quantity"
                  type="text"
                  className="px-2 py-1 form-control"
                  placeholder="Additional Information"
                />
              </div>
            </div>

            <div className="bottom w-100 text-center mt-2">
              <button onClick={next} className=" btn primary_btn proceed_btn mx-auto py-1 mb-3 ">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agr;
