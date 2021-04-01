import React, { useState, useEffect } from "react";
import axios from "axios";

import HosTingIMg from "../../../imgs/hostingPlans.svg";

const hostingPlans = () => {
  return (
    <div className="pageContainer hostingAndPlans">
      <h3>Hosting Plans</h3>

      <div className="container">
        <div className="row mb-5">
          <div className="col-md-3   investTypes  Starter">
            <div className="pricing card-group flex-column flex-md-row mb-3">
              <div
                className="card card-pricing border-0 bg-white text-center mb-4"
                style={{ minHeight: "132px" }}
              >
                <div className="card-body px-lg-12">
                  {/* <img className="freeImgs" src="/assets/ranks/logoFFF.png " /> */}
                  <div className="row">
                    <div className="col-12">
                      <h4 className="text-uppercase ls-1 text-dark py-3 mb-0 text-center">
                        Beginner
                      </h4>
                    </div>
                  </div>
                  <div className="priceRange_Line display-2 text-dark text-center">
                    <div className="pricesLine mt-4">
                      <div className="linContainer">
                        <div className="startPrice">$100</div>
                        <div className="endPrice">$999</div>
                        <div className="leftTube Tube">
                          <i className="far fa-check-circle"></i>
                        </div>
                        <div className="centralLine"></div>
                        <div className="rightTube Tube">
                          <i className="far fa-check-circle"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3   investTypes  Advanced">
            <div className="pricing card-group flex-column flex-md-row mb-3">
              <div
                className="card card-pricing border-0 bg-white text-center mb-4"
                style={{ minHeight: "132px" }}
              >
                <div className="card-body px-lg-12">
                  {/* <img className="freeImgs" src="/assets/ranks/logoFFF.png " /> */}
                  <div className="row">
                    <div className="col-12">
                      <h4 className="text-uppercase ls-1 text-dark py-3 mb-0 text-center">
                        Advanced
                      </h4>
                    </div>
                  </div>
                  <div className="priceRange_Line display-2 text-dark text-center">
                    <div className="pricesLine mt-4">
                      <div className="linContainer">
                        <div className="startPrice">$1000</div>
                        <div className="endPrice">$2499</div>
                        <div className="leftTube Tube">
                          <i className="far fa-check-circle"></i>
                        </div>
                        <div className="centralLine"></div>
                        <div className="rightTube Tube">
                          <i className="far fa-check-circle"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3   investTypes  Pro">
            <div className="pricing card-group flex-column flex-md-row mb-3">
              <div
                className="card card-pricing border-0 bg-white text-center mb-4"
                style={{ minHeight: "132px" }}
              >
                <div className="card-body px-lg-12">
                  {/* <img className="freeImgs" src="/assets/ranks/logoFFF.png " /> */}
                  <div className="row">
                    <div className="col-12">
                      <h4 className="text-uppercase ls-1 text-dark py-3 mb-0 text-center">
                        Professional
                      </h4>
                    </div>
                  </div>
                  <div className="priceRange_Line display-2 text-dark text-center">
                    <div className="pricesLine mt-4">
                      <div className="linContainer">
                        <div className="startPrice">$2500</div>
                        <div className="endPrice">$9999</div>
                        <div className="leftTube Tube">
                          <i className="far fa-check-circle"></i>
                        </div>
                        <div className="centralLine"></div>
                        <div className="rightTube Tube">
                          <i className="far fa-check-circle"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3   investTypes  Founder">
            <div className="pricing card-group flex-column flex-md-row mb-3">
              <div
                className="card card-pricing border-0 bg-white text-center mb-4"
                style={{ minHeight: "132px" }}
              >
                <div className="card-body px-lg-12">
                  {/* <img className="freeImgs" src="/assets/ranks/logoFFF.png " /> */}
                  <div className="row">
                    <div className="col-12">
                      <h4 className="text-uppercase ls-1 text-dark py-3 mb-0 text-center">
                        Founder
                      </h4>
                    </div>
                  </div>
                  <div className="priceRange_Line display-2 text-dark text-center">
                    <div className="pricesLine mt-4">
                      <div className="linContainer">
                        <div className="startPrice">$10000</div>
                        <div className="endPrice">$100000</div>
                        <div className="leftTube Tube">
                          <i className="far fa-check-circle"></i>
                        </div>
                        <div className="centralLine"></div>
                        <div className="rightTube Tube">
                          <i className="far fa-check-circle"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-8">
            <div className="row">
              <div className="col-sm-6">
                <div className="pointsList">
                  <i className="far fa-check-circle" />
                  <div> From 100$ </div>
                  <span>minimum amount </span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="pointsList">
                  <i className="far fa-check-circle" />

                  <div> Weekly </div>
                  <span>payouts </span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="pointsList">
                  <i className="far fa-check-circle" />

                  <div> Everyday </div>
                  <span>withdrawal of rewards </span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="pointsList">
                  <i className="far fa-check-circle" />

                  <div> Up to 8 – 13% profit </div>
                  <span>monthly </span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="pointsList">
                  <i className="far fa-check-circle" />

                  <div> From 50$ </div>
                  <span>minimum withdrawal </span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="pointsList">
                  <i className="far fa-check-circle" />

                  <div> 800 – 1000 days </div>
                  <span>hosting time </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <img src={HosTingIMg} />
          </div>
        </div>
        <hr />

        <div className="row pt-4 pl-3">
          <div className="col-12">
            <h5> How does it work? </h5>
            Hosting plans can be purchased starting from 100$ and paid with BTC,
            ETH or USDT. By purchasing a hosting plan, you basically invest in
            growing equipment, which is needed for the cultivation of Cannabis.
            We are hosting the equipment in our partner facilities and you
            receive a weekly profit share of the harvest. <br />
            Customers can expect a maximum return of up to 8-13% a month. After
            the expiration of the hosting contract, customers can either renew
            the plan for only 50% its initial costs or receive back 50% of the
            initial costs.
          </div>
        </div>
      </div>
    </div>
  );
};

export default hostingPlans;
