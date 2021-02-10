import React from "react";
import youTub from "../../imgs/svges/yout.svg";
import twt from "../../imgs/svges/twt.svg";
import inst from "../../imgs/svges/inst.svg";
import fb from "../../imgs/svges/fb.svg";
import logoGrey from "../../imgs/svges/logoGrey.svg";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="newFooter py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4  col-12">
            <div className="row">
              <div className="col-6">
                <div>
                  <span>Legal</span>
                </div>

                <div>
                  <a target="_blank" href="/terms">
                    Terms and Conditions
                  </a>
                </div>
                <div>
                  <a target="_blank" href="/police">
                    Privacy Policy
                  </a>
                </div>
                <div>
                  <a target="_blank" href="/risk">
                    Risk Disclaimer
                  </a>
                </div>
                <div>
                  <a target="_blank" href="/impressum" href="#">
                    Imprint
                  </a>
                </div>
              </div>

              <div className="col-6">
                <div>
                  <span>Useful Information</span>
                </div>
                <div>
                  <a target="_blank" href="/hostingPlans">
                    Hosting Plans
                  </a>
                </div>
                <div>
                  <a target="_blank" href="/affiliate">
                    Become an Affiliate
                  </a>
                </div>
                <div>
                  <a target="_blank" href="/ambassador">
                    Become an Ambassador
                  </a>
                </div>

                <div>
                  <a target="_blank" href="/faq">
                    FAQ’s
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-4 mt-md-0   col-6 text-center d-flex align-items-center justify-content-center">
            <a
              className="px-2 d-inline-bock"
              href="https://www.facebook.com/groups/340100750743245"
              target="_blank"
            >
              <img width="23" src={fb} />
            </a>

            <a
              className="px-2 d-inline-bock "
              href="https://t.me/crowdgrowing"
              target="_blank"
            >
              <img width="23" src={twt} />
            </a>
            {/* <a className="px-2 d-inline-bock" href="">
              <img width="23" src={inst} />
            </a> */}
            <a
              className="px-2 d-inline-bock"
              href="https://www.youtube.com/channel/UCFXf8dvgTlnrfE23eTblBkQ?"
              target="_blank"
            >
              <img width="23" src={youTub} />
            </a>
          </div>
          <div className=" col-6 mt-4 mt-md-0 col-md-4 text-right d-flex align-items-center justify-content-end">
            <img height="60" src={logoGrey} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
