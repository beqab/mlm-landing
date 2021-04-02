import React from "react";
import { useHistory } from "react-router";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import ScrollAnimation from "react-animate-on-scroll";

import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import logo from "./logo.svg";
import LogoW from "./imgs/svges/crowd_growing_logowhite.svg";
import "./App.css";
import "./styles/bootstrap.css";
import "./styles/index.scss";
import classnames from "classnames";
import Logo from "./imgs/pic-19.png";
import About1 from "./imgs/svges/icons3-01.svg";
import About2 from "./imgs/svges/icons3-02.svg";
import About3 from "./imgs/svges/icons3.svg";
import twtC from "./imgs/svges/twtC.svg";
import twt from "./imgs/svges/twt.svg";
import youtC from "./imgs/svges/youtC.svg";
import yout from "./imgs/svges/yout.svg";
import logowhite from "./imgs/svges/crowd_growing_logowhite.svg";
import Market1 from "./imgs/imgs/market1.png";
import strategy1 from "./imgs/imgs/strategy1.png";
import strategy2 from "./imgs/imgs/strategy2.png";
import strategy3 from "./imgs/imgs/strategy3.png";
import strategy4 from "./imgs/imgs/strategy4.png";
import strategy5 from "./imgs/imgs/strategy5.png";
import location3 from "./imgs/imgs/location3.png";
import location4 from "./imgs/imgs/location4.png";
import seo3 from "./imgs/imgs/seo.png";
import RoadMap4 from "./imgs/svges/roadMap.svg";

import Group2 from "./imgs/svges/crowd_growing_logowhite.svg";
import ttt1 from "./imgs//svges/esss.png";
import ttt11 from "./imgs/imgs/fk1.png";
import ttt22 from "./imgs/imgs/fk2.png";

import LogoWight from "./imgs/pic-17.png";
import History from "./imgs/pic-18.png";
import Earth from "./imgs/pic-24.png";
import Tree from "./imgs/pic-25.png";
import PersonPlus from "./imgs/pic-26.png";
import Team from "./imgs/pic-32.png";
// import Team from "./imgs/newImgs/Untitled-2-05.png";

import "animate.css/animate.min.css";

import TreeProdact from "./imgs/pic-17.png";
// import Seo from "./imgs/seo.svg";
import { useForm } from "react-hook-form";

import axios from "axios";
import Registration from "./components/register";
import ResetPassword from "./components/resetPassword";
import ChangePassword from "./components/changePassword";

import { withRouter, Route, Switch, Link as RouteLink } from "react-router-dom";
import Footer from "./components/footer/footer";
import RoadMap from "./components/pages/roadmep/roadMap";
import Terms from "./components/text/Terms";
import Risk from "./components/text/Rank";
import Police from "./components/text/police";

import HostingPlans from "./components/pages/hostingPlans/hostingPlans";
import Affiliate from "./components/pages/Affiliate/Affiliate";
import Faq from "./components/pages/faq/faq";
import Ambassador from "./components/pages/Ambassador/Ambassador";
import Bonus from "./components/pages/Bonus/Bonus";
import Bonus2 from "./components/pages/Bonus/Bonus2";
import Locations from "./components/pages/Locations/Locations";
import Legal from "./components/pages/Legal/legal";

import Location1 from "./imgs/location1.jpg";
import Location2 from "./imgs/location2.jpg";
import { Carousel } from "react-responsive-carousel";

function App() {
  const {
    register,
    handleSubmit,
    errors,
    setError,
    clearError,
    getValues,
  } = useForm();
  const [burgerMenu, setBurgerMenu] = React.useState(false);
  // const [token, setToken] = React.useState(null);
  const [registerSuccessModal, setRegisterSuccessModal] = React.useState(false);
  const [regAuthModal, setRegAuthModal] = React.useState(null);
  const [referralValue, setReferralValue] = React.useState(null);
  const [resetToken, setRestToken] = React.useState(null);
  const [serverError, setServerError] = React.useState(null);
  let history = useHistory();
  console.log(useHistory, "hhh", history);

  const [headerScroll, setHeaderScroll] = React.useState(0);
  const [roadPosition, setRoadPosition] = React.useState(1);
  const [isMobil, setIsMobil] = React.useState(false);

  React.useEffect(() => {
    console.log(history.location.search.split("=")[0]);
    if (history.location.search.split("=")[0] === "?referral") {
      setRegAuthModal("register");
      setReferralValue(history.location.search.split("=")[1]);
    }

    console.log(history, "history");

    if (history.location.pathname.includes("api/password/find/")) {
      setRegAuthModal("changePassword");
      // setRestToken(history.location.search.split("=")[1]);
    }

    window.addEventListener("scroll", (e) => {
      console.log(window.scrollY);
      if (window.scrollY > 0) {
        setHeaderScroll(true);
      } else {
        setHeaderScroll(false);
      }
    });
    // console.log(window.innerWidth, "innerwidht111");

    window.addEventListener("resize", (e) => {
      if (window.innerWidth < 992) {
        setIsMobil(true);
      } else {
        setIsMobil(false);
      }
    });
    if (window.innerWidth < 992) {
      setIsMobil(true);
    }
  }, []);

  const onSubmitLogin = (data) => {
    axios
      .post("/api/login", data)
      .then((res) => {
        if (res.data.access_token) {
          // localStorage.setItem("token", res.data.access_token )
          // console.log(res.data, "rrress")
          // setToken(res.data.access_token)
          if (res.data.user.fa_status == 1) {
            window.location.href = "http://crowd-growing.com/2fa";
          } else {
            window.location.href = "http://crowd-growing.com/user/dashboard";
            // window.location.href = 'http://crowd-growing.conm/user/dashboard';
          }

          setRegAuthModal(null);
        } else {
          setServerError("incorrect user or password");
        }
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          setServerError(err.response.data && err.response.data.message);
        } else {
          setServerError("server error :/");
        }
      });
    // setLoadaing(true);
    // login({ email: data.userName, password: data.password })
    //   .then((res) => {
    //     setLoadaing(false);
    //     dispatch(setCurrentUser(res.data.success));
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setServerError("wrong user or password");
    //     setLoadaing(false);
    //   });
  };

  const onInputChange = () => {
    setServerError(null);
  };

  const getRoadYear = () => {
    if (!isMobil) {
      if (roadPosition === 1) return 2020;
      if (roadPosition === 0) return 2017;
      return 2024;
    } else {
      if (roadPosition === 1) return 2020;
      if (roadPosition === 0) return 2019;
      if (roadPosition === -1) return 2018;
      if (roadPosition === -2) return 2017;
      if (roadPosition === 2) return 2021;
      if (roadPosition === 3) return 2022;
      if (roadPosition === 4) return 2023;
      if (roadPosition === 5) return 2024;
      return 2024;
    }
  };

  return (
    <div className="App">
      {registerSuccessModal && (
        <div className="rt-container">
          <div className="col-rt-12">
            <div className="Scriptcontent">
              <div id="card" className="animated fadeIn">
                <div id="upper-side">{/* <h3 id="status">Success</h3> */}</div>
                <div id="lower-side">
                  {registerSuccessModal === "resetPass" ? (
                    <p id="message">
                      password reset link send on you email address
                    </p>
                  ) : registerSuccessModal === "changePassword" ? (
                    <p>Password changed successfully </p>
                  ) : (
                    ""
                  )}

                  <a
                    href="#"
                    onClick={() => {
                      setRegisterSuccessModal(false);
                      // setRegAuthModal("login");
                      history.push("/");
                    }}
                    id="contBtn"
                  >
                    close
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {regAuthModal && (
        <div
          onClick={() => setRegAuthModal(false)}
          className="container registerContainer"
        >
          <div onClick={(e) => e.stopPropagation()} className="row">
            <div className="col-md-12 col-md-offset-3">
              <div className="panel panel-login">
                <div className="panel-heading">
                  <div className="row">
                    <div className="col-6">
                      <a
                        onClick={() => {
                          setRegAuthModal("login");
                        }}
                        href="#"
                        className={regAuthModal === "login" ? "active" : ""}
                        id="login-form-link"
                      >
                        Login
                      </a>
                    </div>
                    <div className="col-6">
                      <a
                        onClick={() => {
                          setRegAuthModal("register");
                        }}
                        href="#"
                        className={regAuthModal === "register" ? "active" : ""}
                        id="register-form-link"
                      >
                        Register
                      </a>
                    </div>
                  </div>
                  <hr />
                </div>
                <div className="panel-body">
                  {/* <div className="LoginHeader">
                    <img src={Logo} />
                    <h5>Crowd Growing </h5>
                  </div> */}

                  <div className="row">
                    <div className="col-lg-12">
                      {regAuthModal === "login" ? (
                        <form
                          onSubmit={handleSubmit(onSubmitLogin)}
                          id="login-form"
                          action="https://phpoll.com/login/process"
                          method="post"
                          role="form"
                        >
                          {serverError && (
                            <div
                              className="text-center"
                              style={{ color: "red" }}
                            >
                              {serverError}
                            </div>
                          )}

                          <div className="form-group is-invalid">
                            <label>Email</label>
                            <input
                              type="text"
                              name="email"
                              id="username"
                              tabindex="1"
                              placeholder="Email"
                              className={classnames("form-control", {
                                "is-invalid": errors.email,
                              })}
                              ref={register({
                                required: true,
                              })}
                              onChange={onInputChange}
                            />
                            <div className="invalid-feedback">
                              username is or email is required
                            </div>
                          </div>
                          <div className="form-group">
                            <label>Password</label>

                            <input
                              type="password"
                              name="password"
                              id="password"
                              tabindex="2"
                              className={classnames("form-control", {
                                "is-invalid": errors.password,
                              })}
                              placeholder="Password"
                              ref={register({
                                required: true,
                              })}
                              onChange={onInputChange}
                            />
                            <div className="invalid-feedback">
                              password is required
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="text-center text-right">
                                  <a
                                    href="#"
                                    onClick={() => {
                                      setRegAuthModal("resetPassword");
                                    }}
                                    tabindex="5"
                                    className="forgot-password d-block text-right mr-1"
                                  >
                                    Forgot Password?
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="form-group">
                            <div className="row">
                              <div className="col-sm-12 col-sm-offset-3">
                                <button className="w-100 mt-4 form-control btn btn-login">
                                  {" "}
                                  Log In
                                </button>
                                {/* <input
                                type="submit"
                                name="login-submit"
                                id="login-submit"
                                tabindex="4"
                                className="form-control btn btn-login"
                                value="Log InLog In"
                              /> */}
                              </div>
                            </div>
                          </div>
                        </form>
                      ) : regAuthModal === "resetPassword" ? (
                        <ResetPassword
                          setRegisterSuccessModal={(d) =>
                            setRegisterSuccessModal(d)
                          }
                          setRegAuthModal={(d) => setRegAuthModal(d)}
                          setRegisterSuccessModal={(d) =>
                            setRegisterSuccessModal(d)
                          }
                        />
                      ) : regAuthModal === "changePassword" ? (
                        <ChangePassword token={resetToken} />
                      ) : (
                        <Registration
                          defaultValue={referralValue}
                          regAuthModal={regAuthModal}
                          setRegAuthModal={(d) => setRegAuthModal(d)}
                          setRegisterSuccessModal={(d) =>
                            setRegisterSuccessModal(d)
                          }
                        />
                      )}
                    </div>
                    <a
                      href="https://t.me/crowdgrowing"
                      target="_blank"
                      className="btn-floating mx-auto  mt-4 btn  telegramLink btn-tw mx-1 waves-effect waves-light"
                    >
                      <i class="fab fa-telegram" /> Join channel
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className={classnames("header", { headerScroll })}>
        <div className="container">
          <div className="headerWrapper">
            <div className="logo">
              <RouteLink to="/">
                {/* <img height="40" src={Logo} /> */}
                <img height="40" src={LogoW} />
              </RouteLink>
            </div>
            <div
              onClick={() => setBurgerMenu(!burgerMenu)}
              className="d-block d-lg-none burger pr-3 "
            >
              <i style={{ color: "#fff" }} className="fas fa-bars " />
            </div>
            <div
              className={
                !burgerMenu
                  ? "menu  d-lg-block"
                  : "menu openBurgerMenu d-lg-block"
              }
            >
              <ul className="list-unstyled list-inline">
                {history.location.pathname === "/" ||
                history.location.pathname.includes("/api/password/find/") ||
                history.location.pathname === "/mlm-landing" ? (
                  <React.Fragment>
                    <li>
                      <Link
                        activeClass="active"
                        to="aboutUs"
                        spy={true}
                        smooth={true}
                        duration={500}
                        onClick={() => setBurgerMenu(false)}
                        // onSetActive={this.handleSetActive}
                      >
                        About Us
                      </Link>
                    </li>

                    <li>
                      <Link
                        activeClass="active"
                        to="BUSINESS_MODEL"
                        spy={true}
                        smooth={true}
                        duration={500}
                        onClick={() => setBurgerMenu(false)}
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
                        onClick={() => setBurgerMenu(false)}
                        // onSetActive={this.handleSetActive}
                      >
                        Strategy
                      </Link>
                    </li>

                    <li>
                      <Link
                        activeClass="active"
                        to="profits"
                        spy={true}
                        smooth={true}
                        duration={500}
                        onClick={() => setBurgerMenu(false)}
                        // onSetActive={this.handleSetActive}
                      >
                        {/* How to make Profits */}
                        Locations
                      </Link>
                    </li>
                  </React.Fragment>
                ) : (
                  <ul class="list-unstyled list-inline">
                    <li>
                      <a href="/">About Us</a>
                    </li>

                    <li>
                      <a href="/">Business Model</a>
                    </li>
                    <li>
                      <a href="/">STRATEGY </a>
                    </li>
                    <li>
                      <a href="/">
                        Locations
                        {/* How to make Profits */}
                      </a>
                    </li>
                    {/* <li>
                      <a href="/">Products</a>
                    </li> */}
                  </ul>
                )}
                <li>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      setRegAuthModal("register");
                    }}
                    className="navBtn"
                    href=""
                  >
                    Get Started
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* {history.location.pathname === "/" || history.location.pathname ===  "/mlm-landing" ||  } */}

      <Switch>
        <Route path="/hostingPlans" exact component={HostingPlans} />
        <Route path="/affiliate" exact component={Affiliate} />
        <Route path="/ambassador" exact component={Ambassador} />
        <Route path="/bonus" exact component={Bonus} />
        <Route path="/locations" exact component={Locations} />
        <Route path="/faq" exact component={Faq} />
        <Route path="/terms" exact component={Terms} />
        <Route path="/risk" exact component={Risk} />
        <Route path="/police" exact component={Police} />
        <Route path="/impressum" exact component={Legal} />
        <Route
          path="/"
          exact
          render={(props) => (
            <HomeSections
              {...props}
              openRegAuthModal={(d) => setRegAuthModal(d)}
              isMobil={isMobil}
              getRoadYear={getRoadYear}
              roadPosition={roadPosition}
              setRoadPosition={(d) => setRoadPosition(d)}
            />
          )}
        />

        {/* </Route> */}
        <Route
          path="/mlm-landing"
          exact
          render={(props) => (
            <HomeSections
              {...props}
              isMobil={isMobil}
              openRegAuthModal={(d) => setRegAuthModal(d)}
              getRoadYear={getRoadYear}
              roadPosition={roadPosition}
              setRoadPosition={(d) => setRoadPosition(d)}
            />
          )}
        />
        <Route
          path="/api/password/find/:token"
          exact
          render={(props) => (
            <HomeSections
              {...props}
              isMobil={isMobil}
              openRegAuthModal={(d) => setRegAuthModal(d)}
              getRoadYear={getRoadYear}
              setRoadPosition={(d) => setRoadPosition(d)}
            />
          )}
        />
      </Switch>
      <Footer />
    </div>
  );
}

const HomeSections = (ppp) => {
  console.log(ppp, "pppppp");
  return (
    <div className="home">
      <div className="socialFixed">
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

          {/* <a
                className="px-2 d-inline-bock "
                href="https://t.me/crowdgrowing"
                target="_blank"
              >
                <img width="23" src="/assets/svges/inst.svg" />
              </a> */}
          <a
            className="px-2 d-inline-bock telegramFixed socialHover"
            href="https://t.me/crowdgrowing"
            target="_blank"
          >
            <i class="fab fa-telegram " />
            {/* <img width="23" src={twt} />
            <img className="hover" width="23" src={twtC} /> */}
          </a>

          <a
            className="px-2 d-inline-bock socialHover"
            href="https://www.youtube.com/channel/UCFXf8dvgTlnrfE23eTblBkQ?"
            target="_blank"
          >
            <img width="23" src={yout} />
            <img className="hover" width="23" src={youtC} />
          </a>
        </div>
      </div>{" "}
      <div className="section1">
        {/* <video loop muted autoPlay className=" d-lg-block" id="myVideo">
             <source src={VideoSrc} type="video/mp4" /> 
            Your browser does not support HTML5 video.
          </video> */}
        <div className="container">
          <ScrollAnimation
            animateOnce={true}
            duration={1}
            animateIn="animate__fadeIn"
          >
            <div className="content text-center">
              <div className="img">
                {/* <ScrollAnimation animateOnce={true} duration={3}  animateIn="animate__rubberBand"> */}
                <img src={LogoW} />
                {/* </ScrollAnimation> */}
              </div>

              {/* <ScrollAnimation animateOnce={true} animateIn="animate__backInLeft"> */}
              {/* <h1 className="text-center mb-4">CROWD GROWING</h1> */}
              <a
                onClick={(e) => {
                  e.preventDefault();
                  ppp.openRegAuthModal("register");
                }}
                className="navBtnInMain d-inline-block hoverScale"
                href=""
              >
                Get Started
              </a>
              {/* </ScrollAnimation> */}

              {/* <ScrollAnimation
                animateOnce={true}
                animateIn="animate__backInRight"
              > */}
              <div />
              {/* </ScrollAnimation> */}
            </div>
          </ScrollAnimation>
        </div>
      </div>
      <Element name="aboutUs" className="aboutUs">
        <div className="container">
          <ScrollAnimation animateOnce={true} animateIn="animate__fadeInUp">
            <div className="left">
              <h2>
                About us <br /> & Vision
              </h2>
              <p>
                Crowd Growing is a cannabis ecosystem based on years of
                research, development and experience. Together with experts in
                this field and the support of our cooperation partners, we have
                created a unique cultivation concept - our so-called Growing
                Street. This concept has been tested and perfected over the past
                2 years and is now ready to be offered in its current form to
                the global market.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateOnce={true} animateIn="animate__zoomIn">
            <div className="row mt-5 pt-5">
              <div className="col-12 col-md-4">
                <img
                  style={{
                    height: "133px",
                    margin: "auto",
                    display: "inherit",
                  }}
                  src={About1}
                />

                <div className="number">01</div>
                <div className="about-img">
                  <p className="mt-3">
                    Positively impact thousands of people’s health by developing
                    the highest quality of cannabis products and boost the
                    global distribution.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4">
                {" "}
                <img
                  style={{
                    height: "133px",
                    margin: "auto",
                    display: "inherit",
                  }}
                  src={About2}
                />
                <div className="number">02</div>
                <div className="about-img">
                  <p className="mt-3">
                    Give people an opportunity to easily participate in the
                    emerging market of cannabis through our business model.
                  </p>
                </div>
              </div>{" "}
              <div className="col-12 col-md-4">
                {" "}
                <img
                  style={{
                    height: "133px",
                    margin: "auto",
                    display: "inherit",
                  }}
                  src={About3}
                />
                <div className="number">03</div>
                <div className="about-img">
                  <p className="mt-3">
                    With a sustainable as well as profitable business we aim to
                    become a global market leader in the cannabis industry.
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </Element>
      <Element name="OurGoals" className="Market">
        <div className="container">
          <div className="content">
            <ScrollAnimation animateOnce={true} animateIn="animate__fadeInUp">
              <div className="text-box">
                <h2>Market</h2>
                <p>
                  The cannabis market is evolving rapidly, and after years of
                  prohibition, it is regaining increasing social acceptance.
                  <br />
                  <br />
                  As so often in the past, the US continent has been setting the
                  trend, whereby Uruguay was the first country to fully legalize
                  cannabis.
                  <br />
                  <br />
                  Following the legalization in California and Canada, the wave
                  also started to spread to Europe. Here Luxembourg was the
                  first European country to announce its plans to legalize
                  cannabis for recreational use. Investors and experts believe a
                  domino effect could follow as previously seen in North America
                  and Asia.
                </p>
                <p>
                  Therefore we would summarize our core values on which we
                  develop the business as the following:
                </p>
              </div>
            </ScrollAnimation>

            <div className="d-flex flex-column">
              <div style={{ maxWidth: "600px" }} className="m-auto">
                <ScrollAnimation
                  animateOnce={true}
                  animateIn="animate__zoomInDown"
                >
                  <img
                    style={{ marginLeft: "-40px" }}
                    className="w-100"
                    src={Market1}
                  />
                </ScrollAnimation>
              </div>

              <div style={{ maxWidth: "600px" }} className="m-auto  textCol">
                <ScrollAnimation
                  animateOnce={true}
                  delay={500}
                  animateIn="animate__zoomInDown"
                >
                  <spam style={{ color: "#2ea031", fontSize: "30px" }}>*</spam>
                  <p>
                    According to different market analyses and expert
                    statistics, the cannabis industry could reach 100 million $
                    by 2025.
                  </p>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </Element>
      <Element name="BUSINESS_MODEL" className="BUSINESS_MODEL">
        <div className="container">
          <h2>Business Model</h2>
          <div className="row d-none d-md-flex">
            <div className="col-3 d-flex align-items-center justify-content-center">
              <div className="businessImg">
                <img className="esssImg" src={ttt11} />
                {/* <span>jfadsk jdfnjkasf kjdjfas fjndjkfa</span> */}
              </div>
            </div>
            <div className="col-md-6">
              {/* <img src="https://svgshare.com/i/VJa.svg" title="" /> */}
              {/* <img className="w-100" src="../svg/esss.svg" /> */}
              <img
                style={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  // history;
                  // debugger;
                  // console.log(history);
                  // history.push("/hostingPlans");
                  window.location.replace("/hostingPlans");
                }}
                className="w-100 esssImg"
                src={ttt1}
              />
              {/* <img className="w-100" src="/assets/svges/ttt1.svg" /> */}
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center">
              <div className="businessImg">
                <img className="esssImg" src={ttt22} />
                {/* <span>jfadsk jdfnjkasf kjdjfas fjndjkfa</span> */}
              </div>
            </div>
          </div>
          <div className="row mt-5 d-flex d-md-none">
            <div className="col-12">
              <div className="businessImg m-auto pb-4">
                <img src={ttt11} />
                {/* <span>jfadsk jdfnjkasf kjdjfas fjndjkfa</span> */}
              </div>
            </div>
            <div className="col-md-5">
              <div className="row justify-content-center h-100">
                <div className="col-6 ">
                  <div className="greenBox p-3 h-100">
                    Cooperation.Investment <br />
                    in facilities/Hosting of
                    <br />
                    growing equipment
                  </div>
                </div>
                <div className="col-6">
                  <div className="row  h-100">
                    <div className="col-12    h-100 ">
                      <div
                        // style={{ height: "calc(100% - 10px)" }}
                        className="greenBox investment p-3  h-100   text-center"
                      >
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="arrow-left"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          class="svg-inline--fa fa-arrow-left fa-w-14 fa-2x"
                          style={{ top: "10px" }}
                        >
                          <path
                            fill="currentColor"
                            d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"
                            class=""
                          ></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="arrow-right"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          class="svg-inline--fa fa-arrow-right fa-w-14 fa-2x"
                          style={{ top: "35px" }}
                        >
                          <path
                            fill="currentColor"
                            d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
                            class=""
                          ></path>
                        </svg>
                        Purchase of growing equipment
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 py-4">
              <div className="greenBox businessLogo m-auto ">
                <img src={logowhite} />
              </div>
            </div>
            <div className="col-md-5">
              <div className="row justify-content-center ">
                <div className="col-6 ">
                  <div style={{ height: "72px" }} className="greenBox p-3">
                    Profit From Harvest
                  </div>
                </div>
                <div className="col-6">
                  <div className="row  h-100">
                    <div className="col-12     ">
                      <div
                        style={{ height: "72px" }}
                        className="greenBox investment p-3    text-center"
                      >
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="arrow-left"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          class="svg-inline--fa fa-arrow-left fa-w-14 fa-2x"
                          style={{ top: "10px" }}
                        >
                          <path
                            fill="currentColor"
                            d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"
                            class=""
                          ></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="arrow-right"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          class="svg-inline--fa fa-arrow-right fa-w-14 fa-2x"
                          style={{ top: "35px" }}
                        >
                          <path
                            fill="currentColor"
                            d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
                            class=""
                          ></path>
                        </svg>
                        Profit Share
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="businessImg m-auto pt-4">
                <img src={ttt22} />
                {/* <span>jfadsk jdfnjkasf kjdjfas fjndjkfa</span> */}
              </div>
            </div>
          </div>

          <div style={{ color: "#fff" }} className="row mt-5 pt-5">
            <div className="col-12  mb-4 mt-4">
              <h1>The main problems</h1>
            </div>
            <div className="col-12 col-md-4 hoverScale mb-3 mb-md-0 modelText">
              <span className="pink">01</span>
              <div>
                A large investment is needed to get started, as facilities,
                products, equipment, etc. need to be financed to launch the
                business.
              </div>
            </div>
            <div className="col-12 col-md-4 hoverScale mb-3 mb-md-0 modelText">
              <span className="pink">02</span>
              <div>
                Furthermore, many people lack the specific expertise in the
                cannabis market to be able to implement something profitable and
                functional.
              </div>
            </div>
            <div className="col-12 hoverScale col-md-4 mb-3 mb-md-0 modelText">
              <span className="pink">03</span>
              <div>
                Also difficult and varying regulations in different countries
                make it even more challenging to enter the cannabis business.
              </div>
            </div>

            <div className="col-12  mb-4 mt-5 pt-5 ">
              <h1>Our solution</h1>
            </div>
            <div className="col-12 hoverScale col-md-4 mb-3 mb-md-0 modelText">
              <span className="">01</span>
              <div>
                The big advantage for customers of Crowd Growing is that they
                can easily profit from the cannabis market. Crowd Growing
                enables them to profit with the same leverage that normally only
                big investors in this market have, as they provide the necessary
                infrastructure.
              </div>
            </div>
            <div className="col-12 hoverScale col-md-4 mb-3 mb-md-0 modelText">
              <span className="">02</span>
              <div>
                Crowd Growing provides the complete chain of logistics and hosts
                the customers‘ equipment. This provides each customer the
                opportunity to become a part of a big player in this market
                without the need of their own products, facilities or expertise.
              </div>
            </div>

            <div className="col-12 hoverScale col-md-4 mb-3 mb-md-0 modelText">
              <span>03</span>

              <div>
                Since our growing strategy is based on a certain cycle, where
                each week new plants are planted as well as old plants are
                harvested, it is possible to sell new harvests on a weekly basis
                and therefore also share profits of these sales with our
                clients.
              </div>
            </div>
          </div>
        </div>
      </Element>
      <Element name="lifCircle" className="lifCircle">
        <div className="container">
          <ScrollAnimation animateOnce={true} animateIn="animate__fadeInUp">
            <div>
              <h2>
                Growing Strategy
                <br />
                {/* <span style={{ fontWeight: "500" }}> Strategy </span> */}
              </h2>
            </div>
          </ScrollAnimation>
          <div className="row  d-none d-lg-flex strategyCrdWrapper mt-5 pt-3  ">
            <div className="strategyCrd">
              <div className="cardTitle">Step 1</div>
              <div className="cardTitle2">Cuttings</div>
              <img src={strategy1} />

              <p className="cardP mt-3">
                Preparation of own feminized genetics focus on good look, smell
                and taste
              </p>
              <p className="cardP">
                Selection of good and stable genetic Processing of seedlings or
                clones of the mother plants
              </p>
            </div>
            <div className="strategyCrd">
              <div className="cardTitle">Step 2</div>
              <div className="cardTitle2">Vegetation</div>
              <img src={strategy2} />

              <p className="cardP mt-3">
                Growth of the plant until the flowering start (18h light /6h
                dark)
                <br />
                Process time: 4-5 weeks
              </p>
            </div>
            <div className="strategyCrd">
              <div className="cardTitle">Step 3</div>
              <div className="cardTitle2">Flowering</div>
              <img src={strategy3} />

              <p className="cardP mt-3">
                After 4-5 weeks lightning gets switched to 12h light/ 12h dark
                in order to transform the plant into the flowering. This process
                takes 3-4 weeks
              </p>
            </div>
            <div className="strategyCrd">
              <div className="cardTitle">Step 4</div>
              <div className="cardTitle2">Harvesting drying, trimming</div>
              <img src={strategy4} />

              <p className="cardP mt-3">
                After this previous 8 week process, the harvesting time begins.
                The whole harvest is processed and completed within one day.
              </p>
              <p className="cardP ">
                Drying and fermenting of the flowers in vacuum closed drying
                chamber.
              </p>
            </div>
            <div className="strategyCrd">
              <div className="cardTitle">Step 5</div>
              <div className="cardTitle2">Packaging and sale</div>
              <img src={strategy5} />

              <p className="cardP mt-3">
                Before the product can be distributed a laboratory test is
                required.
              </p>
            </div>
          </div>
          {ppp.isMobil && (
            <div className="strategyCarousel">
              <Carousel infiniteLoop showArrows autoPlay>
                <div className="strategyCrd slide">
                  <div className="cardTitle">Step 1</div>
                  <div className="cardTitle2">Cuttings</div>
                  <img src={strategy1} />

                  <p className="cardP mt-3">
                    Preparation of own feminized genetics focus on good look,
                    smell and taste
                  </p>
                  <p className="cardP">
                    Selection of good and stable genetic Processing of seedlings
                    or clones of the mother plants
                  </p>
                </div>
                <div className="strategyCrd slide">
                  <div className="cardTitle">Step 2</div>
                  <div className="cardTitle2">Vegetation</div>
                  <img src={strategy2} />

                  <p className="cardP mt-3">
                    Growth of the plant until the flowering start (18h light /6h
                    dark)
                    <br />
                    Process time: 4-5 weeks
                  </p>
                </div>
                <div className="strategyCrd slide">
                  <div className="cardTitle">Step 3</div>
                  <div className="cardTitle2">Flowering</div>
                  <img src={strategy3} />

                  <p className="cardP mt-3">
                    After 4-5 weeks lightning gets switched to 12h light/ 12h
                    dark in order to transform the plant into the flowering.
                    This process takes 3-4 weeks
                  </p>
                </div>
                <div className="strategyCrd slide">
                  <div className="cardTitle">Step 4</div>
                  <div className="cardTitle2">Harvesting drying, trimming</div>
                  <img src={strategy4} />

                  <p className="cardP mt-3">
                    After this previous 8 week process, the harvesting time
                    begins. The whole harvest is processed and completed within
                    one day.
                  </p>
                  <p className="cardP ">
                    Drying and fermenting of the flowers in vacuum closed drying
                    chamber.
                  </p>
                </div>
                <div className="strategyCrd slide ">
                  <div className="cardTitle">Step 5</div>
                  <div className="cardTitle2">Packaging and sale</div>
                  <img src={strategy5} />

                  <p className="cardP mt-3">
                    Before the product can be distributed a laboratory test is
                    required.
                  </p>
                </div>
              </Carousel>
            </div>
          )}
        </div>
      </Element>
      <Element name="profits" className="profits">
        <div className="container">
          <ScrollAnimation animateOnce={true} animateIn="animate__fadeInUp">
            {/* <div className="left">
                <h2>How to make Profit with Us </h2>
                <p>
                  The big advantage for customers of Crowd Growing is that they
                  can easily profit from the cannabis market. Crowd Growing
                  enables them to profit with the same leverage that normally only
                  big investors in this market have, as they provide the necessary
                  infrastructure. Crowd Growing provides the complete chain of
                  logistics and hosts the customers‘ equipment. This provides each
                  customer the opportunity to become a part of a big player in
                  this market without the need of their own products, facilities
                  or expertise.
                </p>
              </div> */}
            <div className="pageContainer Affiliate Locations">
              <div className="section11">
                <div className="container ">
                  <h2 className="mb-2 text-left">Locations</h2>
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <p>
                        In order to diversify and thereby lower the risk of
                        being effected by future cannabis regulations we are
                        working in different countries and jurisdictions of
                        Europe. As we aim to grow fast in the future we will
                        strive to cooperate with additional facilities in
                        different locations. Before entering in to a bigger
                        cooperation and therefore make a facility one of our
                        main strategic partners, we run intense test investments
                        as well as several test grows to ensure highest quality
                        as well as professional business execution in the
                        future.
                      </p>
                      <p>Right now our main partners are located in:</p>
                    </div>
                    <div className="col-12 col-md-6">
                      <spam
                        style={{
                          color: "#2ea031",
                          fontSize: "20px",
                          lineHeight: "10px",
                        }}
                      >
                        *
                      </spam>
                      <p>
                        Other cooperation partners are located in Greece and
                        North Macedonia. We are invested with these partners and
                        are currently in the test growing stages. The
                        environment, the setup, as well as the conditions are so
                        far favorable to us, we will reveal more information as
                        soon as we have completed the testing stages.{" "}
                      </p>
                    </div>
                  </div>
                  <div className=" locationsSlider mt-5 pt-3">
                    <Carousel infiniteLoop showArrows>
                      <div className=" slide row">
                        <div className="col-12 d-none d-md-block col-md-6">
                          <img className="w-100" src={location3} />
                        </div>

                        <div className="col-12 col-md-6">
                          <img
                            className="w-100  d-block d-md-none "
                            src={location3}
                          />
                          <h2 className="text-left" style={{ color: "#fff" }}>
                            SPAIN
                          </h2>
                          <p>
                            Other cooperation partners are located in Greece and
                            North Macedonia. We are invested with these partners
                            and are currently in the test growing stages.
                          </p>
                          <p>
                            Other cooperation partners are located in Greece and
                            North Macedonia. We are invested with these partners
                            and are currently in the test growing stages.
                          </p>
                          <p>
                            Other cooperation partners are located in Greece and
                            North Macedonia. We are invested with these partners
                            and are currently in the test growing stages.
                          </p>

                          <p style={{ color: "#2ea031" }}>Hard facts:</p>
                          <p>
                            Location: Near Valencia / Growing space: 10.000 sq
                            m. Focus: High quality CBD and CBG Flowers
                          </p>
                        </div>
                      </div>
                      <div className="slide row">
                        <div className="col-12 col-md-6 d-none d-md-block ">
                          <img className="w-100 " src={location4} />
                        </div>

                        <div className="col-12 col-md-6">
                          <img
                            className="w-100 d-block d-md-none"
                            src={location4}
                          />
                          <h2 className="text-left" style={{ color: "#fff" }}>
                            BULGARIA
                          </h2>
                          <p>
                            Our partner facility is located around 100 km away
                            from the Bulgarian capital city Sofia. Bulgaria is
                            as well as Spain a very cannabis friendly
                            jurisdiction with a very “pro-business” tax
                            regulation. With our Bulgarian partners we work
                            together since 2018.
                          </p>
                          <p>
                            Beside a very cannabis friendly jurisdiction
                            Bulgaria is offering cheap labor costs and is
                            therefore highly profitable for us.
                          </p>
                          <p>
                            At the beginning of our joint venture with this
                            facility the total plantation area was around 7500
                            sqm. Since 2020 the total plantation space we share
                            with other business partners is around 15000 sq. m.
                            In Bulgaria we focus on raw CBD Flowers as well as
                            CBD Oil.
                          </p>
                          <p style={{ color: "#2ea031" }}>Hard facts:</p>
                          <p>
                            Location: Near Sofia / Growing space: 15.000 sq m.
                            Focus: CBD Flowers and CBD Oil
                          </p>
                        </div>
                      </div>
                    </Carousel>
                  </div>
                  <div className="row locationImgs d-none d-md-flex">
                    <div className="col-12 col-md-6 ">
                      {/* <img className="w-100" src={Location1} /> */}
                    </div>
                    <div className="col-12 col-md-6 ">
                      {/* <img className="w-100 " src={Location2} /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
          {/* <div className="right">
              <ScrollAnimation animateOnce={true} animateIn="animate__zoomIn">
                <div className="img">
                  <img src={Profits} />
                </div>
              </ScrollAnimation>
            </div> */}
        </div>
      </Element>
      <Element
        style={{ position: "relative" }}
        name="RoadMap"
        className="RoadMap"
      >
        <div className="container pt-5">
          <h2 className="pt-5 text-center">Roadmap</h2>
        </div>
        <div className="text-center controllers">
          <span
            onClick={() => {
              if (ppp.isMobil) {
                if (ppp.roadPosition > -2) {
                  ppp.setRoadPosition(ppp.roadPosition - 1);
                }
              } else {
                if (ppp.roadPosition > 0) {
                  ppp.setRoadPosition(ppp.roadPosition - 1);
                }
              }
            }}
          >
            <svg
              width="20"
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="arrow-alt-circle-left"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="svg-inline--fa m-2 fa-arrow-alt-circle-left fa-w-16 fa-2x"
            >
              <path
                fill={
                  ppp.roadPosition === 0 && !ppp.isMobil
                    ? "grey"
                    : ppp.isMobil && ppp.roadPosition === -2
                    ? "grey"
                    : "#2ea031"
                }
                d="M8 256c0 137 111 248 248 248s248-111 248-248S393 8 256 8 8 119 8 256zm448 0c0 110.5-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56s200 89.5 200 200zm-72-20v40c0 6.6-5.4 12-12 12H256v67c0 10.7-12.9 16-20.5 8.5l-99-99c-4.7-4.7-4.7-12.3 0-17l99-99c7.6-7.6 20.5-2.2 20.5 8.5v67h116c6.6 0 12 5.4 12 12z"
                class=""
              ></path>
            </svg>
          </span>
          <span
            onClick={() => {
              if (ppp.isMobil) {
                if (ppp.roadPosition < 5) {
                  ppp.setRoadPosition(ppp.roadPosition + 1);
                }
              } else {
                if (ppp.roadPosition < 2) {
                  ppp.setRoadPosition(ppp.roadPosition + 1);
                }
              }
            }}
          >
            <svg
              width="20"
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="arrow-alt-circle-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="svg-inline--fa pointer m-2 fa-arrow-alt-circle-right fa-w-16 fa-2x"
            >
              <path
                fill={
                  ppp.roadPosition === 2 && !ppp.isMobil
                    ? "grey"
                    : ppp.roadPosition === 5 && ppp.isMobil
                    ? "grey"
                    : "#2ea031"
                }
                d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"
                class=""
              ></path>
            </svg>
          </span>
        </div>
        <div style={{ color: "#fff" }} className="newRoadMap pb-0 mt-0 mt-md-5">
          <div className="roadYarBg">{ppp.getRoadYear()}</div>
          <img
            className={"road" + " " + "position" + ppp.roadPosition}
            src={RoadMap4}
          />
        </div>
        <ScrollAnimation
          animateOnce={true}
          animateIn="animate__fadeInUp"
        ></ScrollAnimation>
      </Element>
    </div>
  );
};

export default withRouter(App);
