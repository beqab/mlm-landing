import React from "react";
import AmbassadorImg from "../../../imgs/ambasador.svg";
import Bonus3 from "../../../imgs/bonus3.svg";
import Bonus4 from "../../../imgs/bonus4.svg";
import Bonus5 from "../../../imgs/bonus5.svg";
import Bonus6 from "../../../imgs/bonus6.svg";
import Bonus7 from "../../../imgs/bonus7.svg";
import Gift1 from "../../../imgs/gift1.svg";
import Gift2 from "../../../imgs/gift2.svg";
import Gift3 from "../../../imgs/gift3.svg";
import Gift4 from "../../../imgs/gift4.svg";
import Gift5 from "../../../imgs/gift5.svg";

const Bonus = () => {
  return (
    <div className="pageContainer bonusPage ">
      <div className="container ">
        <div className="row">
          <div className="col-12 ">
            <h2 className="mt-0">Rank Advancement Bonuses</h2>
          </div>
        </div>
        <div className="row conusCardWrapper p-2 py-3">
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <div className="bonusCard purple ">
              <div className="img">
                <img src={Bonus3} />
              </div>
              <div className="text ">
                <span>Rank</span>
                <div>1M Club</div>
                <span>Prize</span>
                <div>Maledives Dream Holiday</div>
              </div>
            </div>
            <div className="bonusImg mt-3">
              <img src={Gift1} />
            </div>
          </div>
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <div className="bonusCard purple">
              <div className="img">
                <img src={Bonus3} />
              </div>
              <div className="text">
                <span>Rank</span>
                <div>2,5M Club</div>
                <span>Prize</span>
                <div>Car Program</div>
              </div>
            </div>
            <div className="bonusImg mt-3">
              <img src={Gift4} />
            </div>
          </div>
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <div className="bonusCard purple">
              <div className="img">
                <img src={Bonus4} />
              </div>
              <div className="text">
                <span>Rank</span>
                <div>5M Club</div>
                <span>Prize</span>
                <div>Car Program Platinum</div>
              </div>
            </div>
            <div className="bonusImg mt-3">
              <img src={Gift5} />
            </div>
          </div>
        </div>
        <div className="row conusCardWrapper  p-2 py-3 mt-3">
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <div className="bonusCard green">
              <div className="img">
                <img src={Bonus6} />
              </div>
              <div className="text">
                <span>Rank</span>
                <div>10M Club</div>
                <span>Prize</span>
                <div>Ferrari 488 Spyder </div>
              </div>
            </div>
            <div className="bonusImg mt-3">
              <img src={Gift3} />
            </div>
          </div>
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <div className="bonusCard green">
              <div className="img">
                <img src={Bonus7} />
              </div>
              <div className="text">
                <span>Rank</span>
                <div>50M Club</div>
                <span>Prize</span>
                <div>Luxury Villa Dubai</div>
              </div>
            </div>
            <div className="bonusImg mt-3">
              <img src={Gift2} />
            </div>
          </div>
        </div>
        <p style={{ fontSize: "20px" }} className="mt-3">
          In order to participate from this Rank Advancement Bonuses you need to
          have a personal Investment Status of a Founder.
        </p>
      </div>
    </div>
  );
};

export default Bonus;
