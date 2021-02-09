import React from "react";
import youTub from "../../imgs/svges/yout.svg";
import twt from "../../imgs/svges/twt.svg";
import inst from "../../imgs/svges/inst.svg";
import logoGrey from "../../imgs/svges/logoGrey.svg";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    //   <footer className="footer page-footer font-small special-color-dark pt-5 pb-4">
    //     <div className="container">
    //       <div className="row text-left">
    //         <div className="col-sm-4 col-12">
    //           <div className="wrapper">
    //             <h5>Contact</h5>
    //             Wolczanska no.125 <br />
    //             Lodz, <br />
    //             90-521, <br />
    //             Poland
    //           </div>
    //         </div>
    //         <div className="col-sm-4 col-12">
    //           <div className="wrapper">
    //             <h5>Legal</h5>
    //             <a target="_blank" href="/terms">
    //               Terms & Conditions
    //             </a>{" "}
    //             <br />
    //             <a target="_blank" href="/police">
    //               Privacy Policy
    //             </a>{" "}
    //             <br />
    //             <a target="_blank" href="/risk">
    //               Risk Disclaimer
    //             </a>{" "}
    //             <br />
    //             <a target="_blank" href="/impressum">
    //               Imprint
    //             </a>{" "}
    //             <br />
    //           </div>
    //         </div>
    //         <div className="col-sm-4 col-12">
    //           <div className="wrapper">
    //             <h5>Useful Information</h5>
    //             {/* <a target="_blank" href="/bonus">
    //               Rank Advanced Bonus
    //             </a> */}
    //             {/* <br /> */}
    //             <a target="_blank" href="/hostingPlans">
    //               Hosting Plans
    //             </a>
    //             <br />
    //             <a target="_blank" href="/affiliate">
    //               Become an Affiliate
    //             </a>{" "}
    //             <br />
    //             <a target="_blank" href="/ambassador">
    //               Become an Ambassador{" "}
    //             </a>{" "}
    //             <br />
    //             {/* <a target="_blank" href="/locations">
    //               Our Locations
    //             </a>{" "}
    //             <br /> */}
    //             <a target="_blank" href="/faq">
    //               FAQs
    //             </a>{" "}
    //             <br />
    //             <ul className="list-unstyled list-inline ">
    //               <li className="list-inline-item mt-0">
    //                 <a
    //                   href="https://t.me/crowdgrowing"
    //                   target="_blank"
    //                   className="btn-floating btn-tw mx-1 waves-effect waves-light"
    //                 >
    //                   <i class="fab fa-telegram" />
    //                 </a>
    //               </li>
    //               <li className="list-inline-item mt-0">
    //                 <a
    //                   href="https://www.youtube.com/channel/UCFXf8dvgTlnrfE23eTblBkQ?"
    //                   target="_blank"
    //                   className="btn-floating btn-gplus  waves-effect waves-light"
    //                 >
    //                   <i class="fab fa-youtube" />
    //                 </a>
    //               </li>
    //               <li className="list-inline-item mt-0">
    //                 <a
    //                   href="https://www.facebook.com/groups/340100750743245"
    //                   target="_blank"
    //                   className="btn-floating btn-fb  waves-effect waves-light"
    //                 >
    //                   <i className="fab fa-facebook-f"> </i>
    //                 </a>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     {/* <a href="">
    //        <img height="50" src={LogoWight} />
    //    </a>
    // */}

    //     <div className="footer-copyright text-center py-3">
    //       © 2020 Copyright:
    //       <a href="https://crowd-growing.com/"> crowd-growing.com </a>
    //     </div>
    //   </footer>
    <footer className="newFooter py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4  col-12">
            <div className="row">
              <div className="col-6">
                <div>
                  <a href="#">Contact</a>
                </div>
                <div>
                  <a href="#">Legal</a>
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
              </div>

              <div className="col-6">
                <div>
                  <a target="_blank" href="/locations">
                    Our Locations
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
                  <a target="_blank" href="/hostingPlans">
                    Hosting Plans
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
              <svg
                width="23"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="facebook"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="svg-inline--fa fa-facebook fa-w-16 fa-2x"
              >
                <path
                  fill="#6b6b6b"
                  d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                  class=""
                ></path>
              </svg>
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
