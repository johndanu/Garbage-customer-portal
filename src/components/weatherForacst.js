import React from "react";

function WeatherForacst() {
  return (
    <div className="h-100  container-fluid">
    <div className="main_body">
      <div className="weather_page">
      <div className="card_body container mt-5">
      <div className="weather ">
        <div className="ms-md-5">
          <div className="display-1">
            05:34 <span className="display-6">AM</span>
          </div>
          <div className="display-6 mb-3">Thursday, 24 June</div>
          <div className="card fs-6 weather_card p-3 rounded-3">
            <div className="d-flex  fw-light align-items-center justify-content-between">
              <div className="fw-light">Humidity</div>
              <div>90%</div>
            </div>
            <div className="d-flex  fw-light align-items-center justify-content-between">
              <div className=" fw-light">Pressure</div>
              <div>90%</div>
            </div>
            <div className="d-flex fw-light align-items-center justify-content-between">
              <div className=" fw-light">Wind Speed</div>
              <div>90%</div>
            </div>
            <div className="d-flex  fw-light align-items-center justify-content-between">
              <div className=" fw-light">Sunrise</div>
              <div>06:44am</div>
            </div>
            <div className="d-flex fw-light align-items-center justify-content-between">
              <div className=" fw-light">Sunset</div>
              <div>06:44pm</div>
            </div>
          </div>
        </div>

        <div className="day_weather p-4">
          <div className="d-flex my-4 align-items-center justify-content-start flex-wrap">
            <div className="big_wtr_card pe-1">
              <div className="p-4 card d-flex align-items-center justify-content-center">
                <div className="card_img_div">
                  <img src="/logo512.png" alt="cloud" />
                </div>
                <div className="wtr_details">
                  <div className="wtr_day rounded-pill p-1 text-center">
                    Thursday
                  </div>
                  <div className="text-wrap temp">Night - 25.9C</div>
                  <div className="text-wrap temp">Night - 25.9C</div>
                </div>
              </div>
            </div>

            <div className="small_wtr_card px-2">
              <div className="p-4 card text-center">
                <div className="wtr_day rounded-pill text-center p-1">
                  Thursday
                </div>
                <div className="card_img_div my-4">
                  <img src="/logo512.png" alt="cloud" />
                </div>
                <div className="wtr_details ">
                  <div className="text-wrap temp">Night - 25.9C</div>
                  <div className="text-wrap temp">Night - 25.9C</div>
                </div>
              </div>
            </div>

            <div className="small_wtr_card px-2">
              <div className="p-4 card text-center">
                <div className="wtr_day rounded-pill text-center p-1">
                  Thursday
                </div>
                <div className="card_img_div my-4">
                  <img src="/logo512.png" alt="cloud" />
                </div>
                <div className="wtr_details">
                  <div className="text-wrap temp">Night - 25.9C</div>
                  <div className="text-wrap temp">Night - 25.9C</div>
                </div>
              </div>
            </div>

            <div className="small_wtr_card px-2">
              <div className="p-4 card text-center">
                <div className="wtr_day rounded-pill text-center p-1">
                  Thursday
                </div>
                <div className="card_img_div my-4">
                  <img src="/logo512.png" alt="cloud" />
                </div>
                <div className="wtr_details ">
                  <div className="text-wrap temp">Night - 25.9C</div>
                  <div className="text-wrap temp">Night - 25.9C</div>
                </div>
              </div>
            </div>

            <div className="small_wtr_card px-2">
              <div className="p-4 card text-center">
                <div className="wtr_day rounded-pill text-center p-1">
                  Thursday
                </div>
                <div className="card_img_div my-4">
                  <img src="/logo512.png" alt="cloud" />
                </div>
                <div className="wtr_details ">
                  <div className="text-wrap temp">Night - 25.9C</div>
                  <div className="text-wrap temp">Night - 25.9C</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default WeatherForacst;
