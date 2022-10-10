import React from "react";
import { useNavigate } from "react-router-dom";
const table_array = [1, 2, 3, 4, 5, 6, 7, 8];

function Vs02() {
  const navigate = useNavigate();

  function viewSummary() {
    navigate("/frame3");
  }
  function viewSchedule() {
    navigate("/frame2");
  }
  return (
    <div className="h-100 container-fluid">
      <div className="main_body">
        <div className="card_body shedule_table container mt-5">
          <div className="mt-5 schedules d-flex align-items-center justify-content-between ">
            <div onClick={viewSchedule} className="schedule clickable h6 mb-0 py-2 title_tab text-center">
              Schedule
            </div>
            <div onClick={viewSummary} className="summary clickable h6 mb-0 py-2 title_tab text-center">
              Summary
            </div>
          </div>
          <div className="card table_card py-3 px-4">
            <h5 className="add_title text-center">Summary</h5>
            <table class="table summary table-bordered">
              <thead class="table-light">
                <tr>
                  <th>Road Name</th>
                  <th>Once a day</th>
                  <th>Alternative days</th>
                  <th>Thrice a week</th>
                  <th>Twice a week</th>
                </tr>
              </thead>
              <tbody>
                {table_array.map((item, index) => (
                  <tr>
                    <td>Seevali lane (address) </td>
                    <td className="text-center">
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
                            id="System"
                            transform="translate(-144.000000, -48.000000)"
                            fill-rule="nonzero"
                          >
                            <g
                              id="check_circle_fill"
                              transform="translate(144.000000, 48.000000)"
                            >
                              <rect
                                id="矩形"
                                x="0"
                                y="0"
                                width="24"
                                height="24"
                              ></rect>
                              <path
                                d="M12,2 C17.5228,2 22,6.47715 22,12 C22,17.5228 17.5228,22 12,22 C6.47715,22 2,17.5228 2,12 C2,6.47715 6.47715,2 12,2 Z M15.5354,8.38136 L10.5856,13.3311 L8.46431,11.2098 C8.07379,10.8193 7.44063,10.8193 7.0501,11.2098 C6.65958,11.6003 6.65958,12.2335 7.0501,12.624 L9.80782,15.3817 C10.2374,15.8113 10.9339,15.8113 11.3635,15.3817 L16.9496,9.79557 C17.3401,9.40505 17.3401,8.77188 16.9496,8.38136 C16.5591,7.99083 15.9259,7.99083 15.5354,8.38136 Z"
                                id="形状"
                                fill="#2AC670FF"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </td>
                    <td className="text-center">
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
                            id="System"
                            transform="translate(-144.000000, -48.000000)"
                            fill-rule="nonzero"
                          >
                            <g
                              id="check_circle_fill"
                              transform="translate(144.000000, 48.000000)"
                            >
                              <rect
                                id="矩形"
                                x="0"
                                y="0"
                                width="24"
                                height="24"
                              ></rect>
                              <path
                                d="M12,2 C17.5228,2 22,6.47715 22,12 C22,17.5228 17.5228,22 12,22 C6.47715,22 2,17.5228 2,12 C2,6.47715 6.47715,2 12,2 Z M15.5354,8.38136 L10.5856,13.3311 L8.46431,11.2098 C8.07379,10.8193 7.44063,10.8193 7.0501,11.2098 C6.65958,11.6003 6.65958,12.2335 7.0501,12.624 L9.80782,15.3817 C10.2374,15.8113 10.9339,15.8113 11.3635,15.3817 L16.9496,9.79557 C17.3401,9.40505 17.3401,8.77188 16.9496,8.38136 C16.5591,7.99083 15.9259,7.99083 15.5354,8.38136 Z"
                                id="形状"
                                fill="#2AC670FF"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </td>
                    <td className="text-center">
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
                            id="System"
                            transform="translate(-144.000000, -48.000000)"
                            fill-rule="nonzero"
                          >
                            <g
                              id="check_circle_fill"
                              transform="translate(144.000000, 48.000000)"
                            >
                              <rect
                                id="矩形"
                                x="0"
                                y="0"
                                width="24"
                                height="24"
                              ></rect>
                              <path
                                d="M12,2 C17.5228,2 22,6.47715 22,12 C22,17.5228 17.5228,22 12,22 C6.47715,22 2,17.5228 2,12 C2,6.47715 6.47715,2 12,2 Z M15.5354,8.38136 L10.5856,13.3311 L8.46431,11.2098 C8.07379,10.8193 7.44063,10.8193 7.0501,11.2098 C6.65958,11.6003 6.65958,12.2335 7.0501,12.624 L9.80782,15.3817 C10.2374,15.8113 10.9339,15.8113 11.3635,15.3817 L16.9496,9.79557 C17.3401,9.40505 17.3401,8.77188 16.9496,8.38136 C16.5591,7.99083 15.9259,7.99083 15.5354,8.38136 Z"
                                id="形状"
                                fill="#2AC670FF"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </td>
                    <td className="text-center">
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
                            id="System"
                            transform="translate(-144.000000, -48.000000)"
                            fill-rule="nonzero"
                          >
                            <g
                              id="check_circle_fill"
                              transform="translate(144.000000, 48.000000)"
                            >
                              <rect
                                id="矩形"
                                x="0"
                                y="0"
                                width="24"
                                height="24"
                              ></rect>
                              <path
                                d="M12,2 C17.5228,2 22,6.47715 22,12 C22,17.5228 17.5228,22 12,22 C6.47715,22 2,17.5228 2,12 C2,6.47715 6.47715,2 12,2 Z M15.5354,8.38136 L10.5856,13.3311 L8.46431,11.2098 C8.07379,10.8193 7.44063,10.8193 7.0501,11.2098 C6.65958,11.6003 6.65958,12.2335 7.0501,12.624 L9.80782,15.3817 C10.2374,15.8113 10.9339,15.8113 11.3635,15.3817 L16.9496,9.79557 C17.3401,9.40505 17.3401,8.77188 16.9496,8.38136 C16.5591,7.99083 15.9259,7.99083 15.5354,8.38136 Z"
                                id="形状"
                                fill="#2AC670FF"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vs02;
