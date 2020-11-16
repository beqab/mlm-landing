import React from "react";
import Location1 from "../../../imgs/location1.jpg";
import Location2 from "../../../imgs/location2.jpg";
import Affiliate2 from "../../../imgs/affiliate2.svg";
import Affiliate3 from "../../../imgs/affiliate3.svg";

const Locations = () => {
  return (
    <div className="pageContainer Affiliate Locations">
      <div className="section11">
        <div className="container ">
          <h3 className="mb-5">Our Locations</h3>
          <p className="text-center mb-5">
            In order to diversify and thereby lower the risk of being effected
            by future cannabis regulations we are working in different countries
            and jurisdictions of Europe. As we aim to grow fast in the future we
            will strive to cooperate with additional facilities in different
            locations. Right now our main partners are located in:
          </p>

          <div className="row">
            <div className="col-sm-12 img  ">
              <h3> Spain </h3>
              <img className="w-100" src={Location1} />
              <div className="row  mt-3 ">
                <p className="mt-2 col-12 col-md-8 ">
                  Our Spanish partner facility, which we are cooperating with
                  since 2019, is located near Valencia. Right now CBD as well as
                  CBG is grown there with focus on highest quality standards.{" "}
                  <br />
                  Right now we share a total plantation area of 10.000 sq m.
                  with other business partners and already have licenses to
                  extend the growing space along the expansion of our
                  production. <br />
                  Right now raw CBD flowers are the best-selling product which
                  is distributed mainly through our large network of B2B
                  customers right now.
                </p>
                <ul className="col-12 col-md-4 pl-5 list-unstyled">
                  <li>
                    <b>Hard facts: </b>
                  </li>
                  <li>Location: Near Valencia </li>
                  <li>Growing space: 10.000 sq m. </li>
                  <li>Focus: High quality CBD and CBG Flowers </li>
                  <li>Some pictures:</li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 img  ">
              <h3>Bulgaria </h3>
              <img src={Location2} />
              <div className="row  mt-3 ">
                <p className="mt-2 col-12 col-md-8 ">
                  Our partner facility is located around 100 km away from the
                  Bulgarian capital city Sofia. Bulgaria is as well as Spain a
                  very cannabis friendly jurisdiction with a very “pro-business”
                  tax regulation. With our Bulgarian partners we work together
                  since 2018. <br /> Beside a very cannabis friendly
                  jurisdiction Bulgaria is offering cheap labor costs and is
                  therefore highly profitable for us. At the beginning of our
                  joint venture with this facility the total plantation area was
                  around 7.500 sqm. Since 2020 the total plantation space we
                  share with other business partners is around 15.000 sq. m.{" "}
                  <br /> In Bulgaria we focus on raw CBD Flowers as well as CBD
                  Oil.
                </p>
                <ul className="col-12 col-md-4 pl-5 list-unstyled">
                  <li>
                    <b>Hard facts: </b>
                  </li>
                  <li>Location: Near Sofia</li>
                  <li>Growing space: 15.000 sq m. </li>
                  <li>Focus: CBD Flowers and CBD Oil </li>
                  <li>Some pictures</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
