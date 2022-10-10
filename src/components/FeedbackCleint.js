import React from 'react'
import { useNavigate } from "react-router-dom";

function FeedbackCleint() {
  const navigate = useNavigate();

  function submit() {
    navigate("/frame5");
  }
  return (
    <div className="h-100  container-fluid">
    <div className="main_body">
      <div className="card_body container mt-5">
        <div className="card req_card p-3 mx-auto shadow my-3 px-4">
          <h6 className='text-start '>Date :This date should add to the database automatically</h6>
          <h5 className="req_title py-3 text-center add_title">
          Feedback form for garbage collection serviece in your location          </h5>
          <div className="req_form">
            {/* <h5 className="fancy_title">Details of Applicant :</h5> */}
            <div className="input_grp mb-3">
              <label for="Name" className="fw-bold form-label">
              Name* :
              </label>
              <br />
              <input
                id="Name"
                type="text"
                className="px-2 py-1 form-control"
                placeholder="Name"
              />
            </div>

            <label for="address" className="fw-bold form-label">Address / Location *  :</label><br/>
            <div id='address' className="input_grp ps-4 mb-3">
              <label for="area" className="fw-bold form-label">
              Main Area(Select your main area) *:
              </label>
              <select
                id="area"
                className="px-2 py-1 form-select"
              >
                <option selected hidden disabled >Main Area</option>
                <option>place1</option>
                <option>place1</option>
              </select>

              <label for="local" className="fw-bold form-label">
              Lane/Location(select your lane or location)*:
              </label>
              <br/>
              <select
                id="local"
                className="px-2 py-1 form-select"
              >
                <option selected hidden disabled >Should display all the locations according to the above selected main area</option>
                <option>place2</option>
                <option>place2</option>
              </select>
            </div>

            <div className="input_grp mb-3">
              <label for="address" className="fw-bold form-label">
              Comment (about garbage collection  service in your lane/location)*:
              </label>
              <br />
              <textarea
                id="address"
                type="text"
                className="px-2 py-1 comment_area form-control"
              ></textarea>
            </div>
          </div>

          <div className="bottom w-100 text-center mt-2">
            <button onClick={submit} className=" btn primary_btn proceed_btn mx-auto py-1 mb-3 ">
            Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FeedbackCleint