import React, { Component } from "react";
import { Link } from "react-router-dom";
class Banner extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div
        className="banner-area banner-area-1 banner-area-bg"
        style={{ background: "url(" + publicUrl + "assets/img/banner/1.png)" }}
      > 
        <div className="container">
          <div className="banner-area-inner">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="banner-inner text-center">
                  <p>
                    QUICK & ADEQUATE
                  </p>
                  <div className="line" />
                  <h2>Hey,Find Your Perfect Space</h2>
                </div>
              </div>
              <div className="col-lg-8 mt-4">
                <form className="main-search-inner">
                  <div className="row custom-gutters-10">
                    <div className="col-md-3">
                      <div className="single-select-inner">
                        <select defaultValue={0}>
                          <option value={0}>Loctaion</option>
                          <option value={1}>Ntinda</option>
                          <option value={2}>Bukoto</option>
                          <option value={3}>Kikoni</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="single-select-inner">
                        <select defaultValue={0}>
                          <option value={0}>Property</option>
                          <option value={1}>Apartments</option>
                          <option value={3}>Hostel</option>
                          <option value={2}>Commercial</option>
                          <option value={3}>Villas</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="single-select-inner">
                        <select defaultValue={0}>
                          <option value={0}>Price</option>
                          <option value={1}>UGX.(150-500) K</option>
                          <option value={2}>UGX.(550-950) K</option>
                          <option value={3}>UGX.(1-2) M</option>
                          <option value={3}>UGX.(2-4) M</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <Link
                        className="btn btn-base w-100"
                        to="/property-for-sale"
                      >
                        <i className="fa fa-search mr-1" /> Search
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
