import React from "react";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import logo from "./logo.svg";
import "./App.css";
import "./styles/bootstrap.css";
import "./styles/index.scss";
import Logo from "./imgs/pic-19.png";
import LogoWight from "./imgs/pic-17.png";
import History from "./imgs/pic-18.png";
import Earth from "./imgs/pic-24.png";
import Tree from "./imgs/pic-25.png";
import PersonPlus from "./imgs/pic-26.png";
import Team from "./imgs/pic-32.png";
import Model from "./imgs/pic-27.png";
import Profits from "./imgs/pic-41.png";
import Circle1 from "./imgs/pic-48.png";
import Circle2 from "./imgs/pic-47.png";
import Circle3 from "./imgs/pic-46.png";
import Circle4 from "./imgs/pic-45.png";
import Circle5 from "./imgs/pic-44.png";
import ScrollAnimation from "react-animate-on-scroll";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="container">
          <div className="headerWrapper">
            <div className="logo">
              <a href="">
                <img height="50" src={Logo} />
              </a>
            </div>
            <div className="menu">
              <ul className="list-unstyled list-inline">
                <li>
                  <Link
                    activeClass="active"
                    to="aboutUs"
                    spy={true}
                    smooth={true}
                    duration={500}

                    // onSetActive={this.handleSetActive}
                  >
                    About US
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="OurGoals"
                    spy={true}
                    smooth={true}
                    duration={500}

                    // onSetActive={this.handleSetActive}
                  >
                    Goals and Missions
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="BUSINESS_MODEL"
                    spy={true}
                    smooth={true}
                    duration={500}

                    // onSetActive={this.handleSetActive}
                  >
                    Business Model
                  </Link>
                </li>

                <li>
                  <Link
                    activeClass="active"
                    to="lifCircle"
                    spy={true}
                    smooth={true}
                    duration={500}

                    // onSetActive={this.handleSetActive}
                  >
                    Life circle{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    activeClass="active"
                    to="profits"
                    spy={true}
                    smooth={true}
                    duration={500}

                    // onSetActive={this.handleSetActive}
                  >
                    How to make Profits
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="Products"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <a href="">Team </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="section1">
        <div className="container">
          <div className="content">
            <div className="img">
              <ScrollAnimation animateIn="animate__tada">
                <img src={LogoWight} />
              </ScrollAnimation>
            </div>

            <h1>CROWD GROWING</h1>
            <div>
              <h3>Business Presentation</h3>
              <p>Reading time: approx. 5 min</p>
            </div>
          </div>
        </div>
      </div>
      <Element name="aboutUs" className="aboutUs">
        <div className="container">
          <div className="left">
            <h2>About Us</h2>
            <p>
              Crowd Growing is an association of influential investors and
              investment groups from Europe and South East Asia, who share the
              goal to become market leader in the global CBD market. Through our
              collected years’ of experience investing in this market, we have
              developed and structured a unique concept that enables us to
              achieve profits on a much faster basis than many of our
              competitors in this field. Together with our cooperation partners
              this concept has been tested and perfected over the past 2 years
              and is now ready to be offered in this form to the global market.
              Each and every one of our partners is a global player with many
              years of experience in the growing and distribution of CBD
              products. Based on that, we can assure on the one hand a great end
              product and on the other a professional business execution from an
              investors point of view
            </p>
          </div>
          <div className="right">
            <div className="img">
              <img src={Team} />
            </div>
          </div>
        </div>
      </Element>

      <Element name="OurGoals" className="OurGoals">
        <div className="container">
          <div className="content">
            <div className="text-box">
              <h2>Our Goals and Vision</h2>
              <p>
                We strongly believe, that business development and strategic
                planning are always the key to success.{" "}
              </p>
              <p>
                Therefore, we would summarize the goals and vision of Crowd
                Growing in the following 3 points:
              </p>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="img">
                  <img width="150" src={Earth} />
                  <p>Sustainability combined with profitability</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="img">
                  <img width="150" src={Tree} />
                  <p>
                    Create value through perfect execution of business tasks
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="img">
                  <img width="150" src={PersonPlus} />
                  <p>
                    Improve people’s health by supporting the global
                    distribution of CBD
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
      <Element
        name="BUSINESS_MODEL"
        className="
BUSINESS_MODEL"
      >
        <div className="container">
          <div className="content">
            <div className="left">
              <h2>Business Model</h2>
              <p>
                Crowd Growing is based on a strategy and philosophy that has
                been put in place together with our strategic cooperation
                partners in the field of growth and distribution of medical
                cannabis.
                <br />
                In an exclusive first funding stage, Crowd Growing managed to
                accumulate approximately 10 million USD in venture capital from
                high net worth individuals and investors. This allowed us to
                create a state of the art cannabis manufacturing strategy.
                <br />
                The fundament of this successful strategy lays in the
                simplification of repeating processes in order to achieve the
                best possible outcome. <br />
                After numerous tests and trials we managed to create a one of a
                kind growing cycle, a socalled “Growing Street”. This cycle
                distinguish itself, that we plant new plants and harvest old
                plants on a daily basis. For that reason, we established
                different working groups, each specialized on only a few tasks,
                which are repeated continuously on a daily basis.
              </p>
            </div>
            <div className="right">
              <div className="img">
                <img src={Model} />
              </div>
            </div>
          </div>
        </div>
      </Element>

      <Element name="lifCircle" className="lifCircle">
        <div className="container">
          <div>
            <h2>Life Cycle of a Plant </h2>
            <p>
              Our growing street is divided into 5 steps. Each one of those
              steps strictly has its own working group assigned.
            </p>
          </div>
          <div className="circleContainer ">
            <div className=" circle circle1">
              <div className="vertical" />
              <div className="horizontal" />
              <img src={Circle1} />
              <div className="textBox stepOne">
                <h6>Step 1–Cuttings</h6>
                <div>
                  Preparation of own feminized genetics focus on good look,
                  smell and taste
                </div>
                <div>
                  Selection of good and stable genetic Processing of seedlings
                  or clones of the mother plants
                </div>
              </div>
            </div>
            <div className=" circle circle2">
              <img src={Circle2} />
              <div className="vertical" />
              <div className="horizontal" />

              <div className="textBox  stepFour">
                <h6>Step 2–Vegetation</h6>
                <div>
                  Growth of the plant until the flowering start (18h light /6h
                  dark) – Process time: 4-5 weeks
                </div>
              </div>
            </div>

            <div className=" circle circle3">
              <div className="vertical" />
              <div className="horizontal" />
              <img src={Circle3} />
              <div className="textBox stepThree">
                <h6>Step 3–Flowering</h6>
                <div>
                  After 4-5 weeks lightning gets switched to 12h light/ 12h dark
                  in order to transform the plant into the flowering stage. This
                  process takes 3-4 weeks
                </div>
              </div>
            </div>

            <div className=" circle circle4">
              <div className="vertical" />
              <div className="horizontal" />
              <img src={Circle4} />
              <div className="textBox stepFour">
                <h6>Step 4–Harvesting drying, trimming</h6>
                <div>
                  After this previous 8 week process, the harvesting time
                  begins. The whole harvest is processed and completed within
                  one day
                </div>
                <div>
                  Drying and fermenting of the flowers in a vacuum closed drying
                  chamber.
                </div>
              </div>
            </div>
            <div className=" circle circle5">
              <img src={Circle5} />
              <div className="vertical" />
              <div className="horizontal" />
              <div className="textBox stepThree">
                <h6>Step 5–Packaging and sale</h6>
                <div>
                  Before the product can be distributed a laboratory test is
                  required.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>

      <Element name="profits" className="profits">
        <div className="container">
          <div className="left">
            <h2>How to make Profit with Us </h2>
            <p>
              The big advantage for customers of Crowd Growing is that they can
              easily profit from the cannabis market. Crowd Growing enables them
              to profit with the same leverage that normally only big investors
              in this market have, as they provide the necessary infrastructure.
              Crowd Growing provides the complete chain of logistics and hosts
              the customers‘ equipment. This provides each customer the
              opportunity to become a part of a big player in this market
              without the need of their own products, facilities or expertise.
            </p>
          </div>
          <div className="right">
            <div className="img">
              <img src={Profits} />
            </div>
          </div>
        </div>
      </Element>

      <Element name="Products" className="Products">
        <div className="container">
          <div className="content">
            <div className="left">
              <h2>Products</h2>
              <p>
                We have decided to create the lowest possible entry barrier for
                new customers. Therefore we can guarantee that even with the
                smallest investment, profit will be generated. <br />
                Starting with an investment in growing equipment from 100$ you
                will be considered as a beginner. From a 1,000$ investment you
                will be considered as an Advanced and starting from 2,500$ you
                will be considered as a Professional. Nevertheless, which amount
                a customer invests, he will have a monthly profit of up to
                8-10%.
                <br />
                Starting from 10,000$ you will be considered as a Founder.
                Founders earn 8-10% per month+ an extra 1-3% monthly profit
                share of the entire harvest from the past month. While the
                profits are shared on a weekly basis, the 1-3% extra profit
                share for our founders are shared always at the end of every
                month.
              </p>
              <div>
                *Please note, that you are purchasing growing equipment, which
                is not bound to any interest rates or guaranteed profits.
                <br />
                <br />
                **Please note, that the profits may vary due to different
                quality of the harvested product, different sales price, etc
              </div>
            </div>
            <div className="right d-flex flex-column">
              <div class=" Starter investTypes">
                <div class="pricing card-group flex-column flex-md-row mb-1">
                  <div class="card card-pricing border-0 bg-white text-center mb-1">
                    <div class="card-body px-lg-12">
                      <div class="row">
                        <div class="col-12">
                          <h4 class="text-uppercase ls-1 text-dark py-3 mb-0 text-center">
                            Starter
                          </h4>
                        </div>
                      </div>
                      <div
                        class="display-2 text-dark text-center"
                        // style="font-size: 1rem;"
                      >
                        <div class="pricesLine mt-4">
                          <div class="linContainer">
                            <div class="startPrice">$100</div>
                            <div class="endPrice">$999</div>
                            <div class="leftTube Tube">
                              <i class="far fa-check-circle"></i>
                            </div>
                            <div class="centralLine"></div>
                            <div class="rightTube Tube">
                              <i class="far fa-check-circle"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-left text">
                        Monthly profit 8% – 10% <br /> Weekly profit share
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class=" Advanced investTypes">
                <div class="pricing card-group flex-column flex-md-row mb-1 ">
                  <div class="card card-pricing border-0 bg-white text-center mb-1">
                    <div class="card-body px-lg-12">
                      <div class="row">
                        <div class="col-12">
                          <h4 class="text-uppercase ls-1 text-dark py-3 mb-0 text-center">
                            Advanced
                          </h4>
                        </div>
                      </div>
                      <div
                        class="display-2 text-dark text-center"
                        // style="font-size: 1rem;"
                      >
                        <div class="pricesLine mt-4">
                          <div class="linContainer">
                            <div class="startPrice">1,000$ </div>
                            <div class="endPrice">2,499$ </div>
                            <div class="leftTube Tube">
                              <i class="far fa-check-circle"></i>
                            </div>
                            <div class="centralLine"></div>
                            <div class="rightTube Tube">
                              <i class="far fa-check-circle"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-left text">
                        Monthly profit 8% – 10% <br /> Weekly profit share
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class=" Pro investTypes">
                <div class="pricing card-group flex-column flex-md-row mb-1">
                  <div class="card card-pricing border-0 bg-white text-center mb-1">
                    <div class="card-body px-lg-12">
                      <div class="row">
                        <div class="col-12">
                          <h4 class="text-uppercase ls-1 text-dark py-3 mb-0 text-center">
                            Professional
                          </h4>
                        </div>
                      </div>
                      <div
                        class="display-2 text-dark text-center"
                        // style="font-size: 1rem;"
                      >
                        <div class="pricesLine mt-4">
                          <div class="linContainer">
                            <div class="startPrice">2,500$</div>
                            <div class="endPrice">9,999$</div>
                            <div class="leftTube Tube">
                              <i class="far fa-check-circle"></i>
                            </div>
                            <div class="centralLine"></div>
                            <div class="rightTube Tube">
                              <i class="far fa-check-circle"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="text-left text ">
                        Monthly profit 8% – 10% <br /> Weekly profit share
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class=" Founder investTypes">
                <div class="pricing card-group flex-column flex-md-row mb-3">
                  <div class="card card-pricing border-0 bg-white text-center mb-1">
                    <div class="card-body px-lg-12">
                      <div class="row">
                        <div class="col-12">
                          <h4 class="text-uppercase ls-1 text-dark py-3 mb-0 text-center">
                            Founder
                          </h4>
                        </div>
                      </div>
                      <div
                        class="display-2 text-dark text-center"
                        // style="font-size: 1rem;"
                      >
                        <div class="pricesLine mt-4">
                          <div class="linContainer">
                            <div class="startPrice">10,000$</div>
                            <div class="endPrice">100,000$</div>
                            <div class="leftTube Tube">
                              <i class="far fa-check-circle"></i>
                            </div>
                            <div class="centralLine"></div>
                            <div class="rightTube Tube">
                              <i class="far fa-check-circle"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-left text">
                        Monthly profit 8% – 10% <br />
                        Weekly profit share <br />
                        extra 1% – 3% monthly
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </div>
  );
}

export default App;
