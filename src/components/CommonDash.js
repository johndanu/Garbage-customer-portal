import React from "react";

function CommonDash() {
  return (
    <div className="h-100 main_board  container-fluid">
      <div className="main_body">
        <div className="card_body container mt-5">
          <div className="">
            <div className="w-100 mb-4">
              <img src="/sidebar/Rectangle 512.png" alt="bg_image" />
            </div>

            <div className="row">
              <div className="col-8">
                <div className="upcoming py-2 text-center px-3">
                  <h3>Upcoming Events</h3>
                  <div className="event  my-2  shadow-sm rounded-3 w-100"></div>
                  <div className="event  my-2 shadow-sm rounded-3 w-100"></div>
                  <div className="event  my-2 shadow-sm rounded-3 w-100"></div>
                </div>

                <div className="shortage">
                  <div className="row">
                    <div className="col-6 p-3 d-flex align-items-center justify-content-center ">
                      <button className="short_btn border-0 p-2">
                        Emergency Numbers
                      </button>
                    </div>
                    <div className="col-6 p-3 d-flex align-items-center justify-content-center">
                      <button className="short_btn border-0 p-2">
                        Emergency Numbers
                      </button>
                    </div>
                    <div className="col-6 p-3 d-flex align-items-center justify-content-center">
                      <button className="short_btn border-0 p-2">
                        Emergency Numbers
                      </button>
                    </div>
                    <div className="col-6 p-3 d-flex align-items-center justify-content-center">
                      <button className="short_btn border-0 p-2">
                        Emergency Numbers
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="frame">
                  <div className="frame_head text-center py-2">
                    <h4>Bin Location</h4>
                  </div>

                  <div className="p-3">
                    <iframe
                      id="ggmap"
                      width="100%"
                      height="200"
                      title="myFrame"
                      src="https://maps.google.com/maps?q=colombo&t=&z=13&ie=UTF8&iwloc=&output=embed"
                      frameborder="0"
                      scrolling="no"
                      marginheight="0"
                      marginwidth="0"
                    ></iframe>
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

export default CommonDash;
