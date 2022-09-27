import React from 'react'

function SelectPlace() {
  return (
    <div className="h-100 main_board  container-fluid">
    <div className="main_body">
      <div className="card_body container mt-5">
            <div className="place_location p-4">
              <div className="search_locate py-2">
              <div className='search_grp rounded-2 d-flex align-items-center justify-content-between py-1 px-lg-2'>
                <div>
                  <svg className='mx-1' width='24px' height='24px' viewBox='0 0 24 24' version='1.1' >
                      <g id='页面-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
                          <g id='File' transform='translate(-960.000000, 0.000000)'>
                              <g id='search_line' transform='translate(960.000000, 0.000000)'>
                                  <rect id='矩形' fill-rule='nonzero' x='0' y='0' width='24' height='24'></rect>
                                  <path d='M10.5,2 C5.80558,2 2,5.80558 2,10.5 C2,15.1944 5.80558,19 10.5,19 C12.4869,19 14.3146,18.3183 15.7619,17.176 L19.4142,20.8283 C19.8047,21.2188 20.4379,21.2188 20.8284,20.8283 C21.2189,20.4378 21.2189,19.8046 20.8284,19.4141 L17.1761,15.7618 C18.3183,14.3145 19,12.4868 19,10.5 C19,5.80558 15.1944,2 10.5,2 Z M4,10.5 C4,6.91015 6.91015,4 10.5,4 C14.0899,4 17,6.91015 17,10.5 C17,14.0899 14.0899,17 10.5,17 C6.91015,17 4,14.0899 4,10.5 Z' id='形状' fill='#09244BFF'>
                      </path></g></g></g>
                      </svg>
                      <input type='text' placeholder='Search'  />
                      </div>
                      <svg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' >
                        <g id='页面-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'><g id='Arrow' transform='translate(-144.000000, 0.000000)' fillRule='nonzero'>
                          <g id='arrow_right_line' transform='translate(144.000000, 0.000000)'>
                        <rect id='矩形' x='0' y='0' width='24' height='24'></rect>
                        <path d='M14.7071,5.63616 L20.3639,11.293 C20.7545,11.6835 20.7545,12.3167 20.3639,12.7072 L14.7071,18.3641 C14.3166,18.7546 13.6834,18.7546 13.2929,18.3641 C12.9023,17.9736 12.9023,17.3404 13.2929,16.9499 L17.2426,13.0001 L4,13.0001 C3.44772,13.0001 3,12.5524 3,12.0001 C3,11.4478 3.44772,11.0001 4,11.0001 L17.2426,11.0001 L13.2929,7.05037 C12.9023,6.65984 12.9023,6.02668 13.2929,5.63616 C13.6834,5.24563 14.3166,5.24563 14.7071,5.63616 Z' id='路径'
                       fill='#09244BFF'></path></g></g></g></svg>
                  </div>
              </div>

              <div className="place_filter d-flex align-items-center justify-content-end">
                      <div className="place_pill rounded-pill text-center px-3 mx-2">
                      Restaurent 
                      </div>
                      <div className="place_pill rounded-pill text-center px-3  mx-2">
                      Restaurent 
                      </div>
                      <div className="place_pill rounded-pill text-center px-3  mx-2">
                      Restaurent 
                      </div>
                      <div className="place_pill rounded-pill text-center px-3  mx-2">
                      Restaurent 
                      </div>
                      <div className="place_pill rounded-pill text-center px-3  mx-2">
                      Restaurent 
                      </div>
              </div>

              <div className="row mt-5">
                <div className="col-9">
                <iframe id="ggmap" width="100%" height="350" title="myFrame" src="https://maps.google.com/maps?q=colombo&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                      frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>
                <div className="col-3 text-center ">
                      <h5>Select a distrcit </h5>
                      {/* <div  */}
                      <button className="btn district_btn py-0 my-4 mx-auto d-flex align-items-center justify-content-center">Distrcit 3</button>
                      <button className="btn district_btn py-0 my-4 mx-auto d-flex align-items-center justify-content-center">Distrcit 3</button>
                      <button className="btn district_btn py-0 my-4 mx-auto d-flex align-items-center justify-content-center">Distrcit 3</button>
                </div>
              </div>

            </div>
        </div>
        </div>
        </div>
  )
}

export default SelectPlace