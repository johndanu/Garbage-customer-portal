import React from "react";

function AgrForm() {
  return (
    <div className="h-100  container-fluid">
      <div className="main_body">
        <div className="card_body container mt-5">
          <div className="card payment_big_card mx-auto shadow my-5 px-4">
            <h5 className="req_title py-3  add_title">Payment Details :</h5>
            <div className="req_form">
              <div className="input_grp mb-3">
                <label for="Name" className="fw-bold form-label">
                  Email
                </label>
                <br />
                <input
                  id="Name"
                  type="text"
                  className="px-2 py-1 form-control"
                  placeholder="Example@youremail.com"
                />
              </div>
              <div className="input_grp mb-3">
                <label for="Division" className="fw-bold form-label">
                  Phone number
                </label>
                <br />
                <input
                  id="Division"
                  type="text"
                  className="px-2 py-1 form-control"
                  placeholder="Division"
                />
              </div>

              <div className="pay_method">
                <h6>Payment method</h6>
                <div className=" d-flex align-items-center justify-content-start mb-3">
                  <div className="card border border-2 method_card  p-3 me-3">
                    <div className="pb-3 d-flex align-items-center justify-content-between">
                      <div className="card_icons">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <g
                            id="页面-1"
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <g
                              id="Business"
                              transform="translate(-48.000000, -48.000000)"
                              fill-rule="nonzero"
                            >
                              <g
                                id="bank_card_fill"
                                transform="translate(48.000000, 48.000000)"
                              >
                                <rect
                                  id="矩形"
                                  x="0"
                                  y="0"
                                  width="24"
                                  height="24"
                                ></rect>
                                <path
                                  d="M22,10 L22,17 C22,18.6569 20.6569,20 19,20 L5,20 C3.34315,20 2,18.6569 2,17 L2,10 L22,10 Z M18,14 L15,14 C14.4477,14 14,14.4477 14,15 C14,15.5523 14.4477,16 15,16 L18,16 C18.5523,16 19,15.5523 19,15 C19,14.4477 18.5523,14 18,14 Z M19,4 C20.6569,4 22,5.34315 22,7 L22,8 L2,8 L2,7 C2,5.34315 3.34315,4 5,4 L19,4 Z"
                                  id="形状"
                                  fill="#09244BFF"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div className="card_icons">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <g
                            id="页面-1"
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <g
                              id="Business"
                              transform="translate(-432.000000, -48.000000)"
                              fill-rule="nonzero"
                            >
                              <g
                                id="copper_coin_fill"
                                transform="translate(432.000000, 48.000000)"
                              >
                                <rect
                                  id="矩形"
                                  x="0"
                                  y="0"
                                  width="24"
                                  height="24"
                                ></rect>
                                <path
                                  d="M12,2 C17.5228,2 22,6.47715 22,12 C22,17.5228 17.5228,22 12,22 C6.47715,22 2,17.5228 2,12 C2,6.47715 6.47715,2 12,2 Z M11.2929,8.46447 L8.46443,11.2929 C8.07391,11.6834 8.07391,12.3166 8.46443,12.7071 L11.2929,15.5355 C11.6834,15.9261 12.3165,15.9261 12.7071,15.5355 L15.5355,12.7071 C15.926,12.3166 15.926,11.6834 15.5355,11.2929 L12.7071,8.46447 C12.3165,8.07394 11.6834,8.07394 11.2929,8.46447 Z"
                                  id="形状"
                                  ill="#09244BFF"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="fs-6">Card</div>
                  </div>
                  <div className="card border border-2 method_card mx-3 p-3">
                    <div className="pb-3 d-flex align-items-center justify-content-between">
                      <div className="card_icons">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <g
                            id="页面-1"
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <g
                              id="Business"
                              transform="translate(-48.000000, -48.000000)"
                              fill-rule="nonzero"
                            >
                              <g
                                id="bank_card_fill"
                                transform="translate(48.000000, 48.000000)"
                              >
                                <rect
                                  id="矩形"
                                  x="0"
                                  y="0"
                                  width="24"
                                  height="24"
                                ></rect>
                                <path
                                  d="M22,10 L22,17 C22,18.6569 20.6569,20 19,20 L5,20 C3.34315,20 2,18.6569 2,17 L2,10 L22,10 Z M18,14 L15,14 C14.4477,14 14,14.4477 14,15 C14,15.5523 14.4477,16 15,16 L18,16 C18.5523,16 19,15.5523 19,15 C19,14.4477 18.5523,14 18,14 Z M19,4 C20.6569,4 22,5.34315 22,7 L22,8 L2,8 L2,7 C2,5.34315 3.34315,4 5,4 L19,4 Z"
                                  id="形状"
                                  fill="#09244BFF"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div className="card_icons">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <g
                            id="页面-1"
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <g
                              id="Business"
                              transform="translate(-432.000000, -48.000000)"
                              fill-rule="nonzero"
                            >
                              <g
                                id="copper_coin_fill"
                                transform="translate(432.000000, 48.000000)"
                              >
                                <rect
                                  id="矩形"
                                  x="0"
                                  y="0"
                                  width="24"
                                  height="24"
                                ></rect>
                                <path
                                  d="M12,2 C17.5228,2 22,6.47715 22,12 C22,17.5228 17.5228,22 12,22 C6.47715,22 2,17.5228 2,12 C2,6.47715 6.47715,2 12,2 Z M11.2929,8.46447 L8.46443,11.2929 C8.07391,11.6834 8.07391,12.3166 8.46443,12.7071 L11.2929,15.5355 C11.6834,15.9261 12.3165,15.9261 12.7071,15.5355 L15.5355,12.7071 C15.926,12.3166 15.926,11.6834 15.5355,11.2929 L12.7071,8.46447 C12.3165,8.07394 11.6834,8.07394 11.2929,8.46447 Z"
                                  id="形状"
                                  ill="#09244BFF"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="fs-6">US bank account</div>
                  </div>
                </div>
              </div>

              <div className="input_grp mb-3">
                <label for="address" className="fw-bold form-label">
                  Card holder name
                </label>
                <br />
                <input
                  id="address"
                  type="text"
                  className="px-2 py-1 form-control"
                  placeholder="Ex. Joy Lawson"
                />
              </div>

              <div className="input_grp mb-3">
                <label for="address" className="fw-bold form-label">
                  Billing address
                </label>
                <br />
                <select
                  id="address"
                  type="text"
                  className="px-2 py-1 form-select"
                  placeholder="Ex. Joy Lawson"
                >
                  <option value="place1" selected hidden disabled>
                    United States
                  </option>
                  <option value="place1">Place</option>
                  <option value="place1">Place</option>
                  <option value="place1">Place</option>
                </select>
              </div>

              <div className="row">
                <div className="col-6 pe-3">
                  <lable for="zip" className="fw-bold form-label mb-2">
                    Zip code
                  </lable>
                  <br />
                  <input
                    id="zip"
                    type="text"
                    className="px-2 ms-2 py-1 form-control"
                    placeholder="Ex. 73923"
                  />
                </div>
                <div className="col-6 px-3">
                  <lable for="zip" className="fw-bold form-label mb-2">
                    City
                  </lable>
                  <input
                    id="zip"
                    type="text"
                    className="px-2 ms-2 py-1 form-control"
                    placeholder="Ex. New York"
                  />
                </div>
              </div>

              <div className="d-flex align-items-center justify-content-start my-3">
                <div className="">
                  <input type="checkbox" className="" id="bill_address" />
                </div>
                <span className="text-muted ps-2">
                  Billing address is same as shipping
                </span>
              </div>

              <div className="bottom w-100 text-center mt-2">
                <button className=" btn primary_btn pay_confirm mx-auto py-2 mb-3 ">
                  Rs. 3200.00
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgrForm;
