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
import classnames from 'classnames'
import Logo from "./imgs/pic-19.png";
import LogoWight from "./imgs/pic-17.png";
import History from "./imgs/pic-18.png";
import Earth from "./imgs/pic-24.png";
import Tree from "./imgs/pic-25.png";
import PersonPlus from "./imgs/pic-26.png";
import Team from "./imgs/pic-32.png";
import Model from "./imgs/pic-27.png";
import Profits from "./imgs/pic-1711.png";
// import Profits from "./imgs/pic-41.png";
import Circle1 from "./imgs/pic-48.png";
import Circle2 from "./imgs/pic-47.png";
import Circle3 from "./imgs/pic-46.png";
import Circle4 from "./imgs/pic-45.png";
import Circle5 from "./imgs/pic-44.png";
import VideoSrc from "./imgs/videoSection.mp4";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import { useForm } from "react-hook-form";
import axios   from "axios";
import Registration from "./components/register"



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
  const [token, setToken] = React.useState(null);
  const [registerSuccessModal, setRegisterSuccessModal] = React.useState(false);
  const [regAuthModal, setRegAuthModal] = React.useState(false);
  const [serverError, setServerError] = React.useState(null);
  
  
  React.useEffect(() => {
   const token =    localStorage.getItem("token")
   if(token) {
    setToken(token)
   }
  }, []);

  const onSubmitLogin = (data) => {
    console.log(data, "onSubmit");

    axios.post('/api/login',data ).then(res => {
       if(res.data.access_token){
      localStorage.setItem("token", res.data.access_token )
      console.log(res.data, "rrress")
      setToken(res.data.access_token)
      setRegAuthModal(null)
      window.location.href = "http://crowd-growing.com/"
       }
       else{
      
        setServerError("incorrect user or password")
       }
    })  
      .catch((err) => {
          console.log(err.response);
          if(err.response && err.response.data){
          setServerError(err.response.data && err.response.data.message);

          }
          else{
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
    setServerError(null)
  }

  return (
    <div className="App">

      {
        registerSuccessModal &&  <div className="rt-container">
        <div className="col-rt-12">
            <div className="Scriptcontent">
            
<div id='card' className="animated fadeIn">
<div id='upper-side'>
  

    <h3 id='status'>
    Success
  </h3>
</div>
<div id='lower-side'>
  <p id='message'>
    Congratulations, your account has been successfully created.
  </p>
  <a href="#" onClick={() =>{ 
    setRegisterSuccessModal(false)
    setRegAuthModal("login")}}  id="contBtn">login now</a>
</div>
</div>
      
         
      </div>
  </div>
  </div>
      }


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
                  <div className="row">
                    <div className="col-lg-12">
                      <form
                      onSubmit={handleSubmit(onSubmitLogin)}
                        id="login-form"
                        action="https://phpoll.com/login/process"
                        method="post"
                        role="form"
                        style={{
                          display: regAuthModal === "login" ? "block" : "none",
                        }}
                      >
                        {serverError &&  <div className="text-center" style={{color: "red"}}>
                          {serverError}
</div> }
                       
                        <div className="form-group is-invalid">
                          <input
                            type="text"
                            name="email"
                            id="username"
                            tabindex="1"
                          
                            placeholder="Username"
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

{/* <input
          type="text"
          placeholder="username"
          name="userName"
          className={classnames("auth_input", {
            "auth_input-error": errors.userName,
          })}
          ref={register({
            required: true,
          })}
          onChange={oninputChange}
          id="userName"
        /> */}
                        </div>
                        <div className="form-group">
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
          password is  required
        </div>
                        </div>

                        <div className="form-group">
                          <div className="row">
                            <div className="col-sm-6 col-sm-offset-3">
                              <button  className="form-control btn btn-login"> Log In</button>
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
                        <div className="form-group">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="text-center">
                                {/* <a
                                  href="https://phpoll.com/recover"
                                  tabindex="5"
                                  className="forgot-password"
                                >
                                  Forgot Password?
                                </a> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                       <Registration regAuthModal={regAuthModal} setRegAuthModal={(d) => setRegAuthModal(d)} setRegisterSuccessModal={(d) => setRegisterSuccessModal(d)} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="header">
        <div className="container">
          <div className="headerWrapper">
            <div className="logo">
              <a href="">
                <img height="50" src={Logo} />
              </a>
            </div>
            <div
              onClick={() => setBurgerMenu(!burgerMenu)}
              className="d-block d-lg-none burger pr-3 "
            >
              <i className="fas fa-bars "></i>
            </div>
            <div
              className={
                !burgerMenu
                  ? "menu  d-lg-block"
                  : "menu openBurgerMenu d-lg-block"
              }
            >
              <ul className="list-unstyled list-inline">
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
                    onClick={() => setBurgerMenu(false)}
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
                    onClick={() => setBurgerMenu(false)}
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
                    onClick={() => setBurgerMenu(false)}
                  >
                    Products
                  </Link>
                </li>
                <li>
                  {
                    !token ?  <a
                    onClick={(e) => {
                      e.preventDefault();
                      setRegAuthModal("register");
                    }}
                    className="navBtn"
                    href=""
                  >
                    Register Now
                  </a> :  <a
                    onClick={(e) => {
                      e.preventDefault();
                      localStorage.removeItem("token")
                      setToken(null)
                    }}
                    className="navBtn"
                    href=""
                  >
                    logout
                  </a>
                  }
                  

                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="section1">
        <video loop muted autoPlay className="d-none d-lg-block" id="myVideo">
          <source src={VideoSrc} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <div className="container">
          <div className="content">
            <div className="img">
              <ScrollAnimation animateOnce={true} animateIn="flipInY">
                <img src={LogoWight} />
              </ScrollAnimation>
            </div>
            <ScrollAnimation animateOnce={true} animateIn="animate__backInLeft">
              <h1 className="text-center">CROWD GROWING</h1>
            </ScrollAnimation>

            <ScrollAnimation
              animateOnce={true}
              animateIn="animate__backInRight"
            >
              <div></div>
            </ScrollAnimation>
            {/* <iframe
              width="560"
              height="315"
              style={{ maxWidth: "100%" }}
              src="https://www.youtube.com/embed/w77zPAtVTuI?autoplay=1;controls=0&amp;start=8;"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              autoplay
            ></iframe> */}
          </div>
        </div>
      </div>
      <Element name="aboutUs" className="aboutUs">
        <div className="container">
          <ScrollAnimation animateOnce={true} animateIn="animate__fadeInUp">
            <div className="left">
              <h2>About Us</h2>
              <p>
                Crowd Growing is an association of influential investors and
                investment groups from Europe and South East Asia, who share the
                goal to become market leader in the global CBD market. Through
                our collected years’ of experience investing in this market, we
                have developed and structured a unique concept that enables us
                to achieve profits on a much faster basis than many of our
                competitors in this field. Together with our cooperation
                partners this concept has been tested and perfected over the
                past 2 years and is now ready to be offered in this form to the
                global market. Each and every one of our partners is a global
                player with many years of experience in the growing and
                distribution of CBD products. Based on that, we can assure on
                the one hand a great end product and on the other a professional
                business execution from an investors point of view
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateOnce={true} animateIn="animate__zoomIn">
            <div className="right">
              <div className="img">
                <img src={Team} />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </Element>

      <Element name="OurGoals" className="OurGoals">
        <div className="container">
          <div className="content">
            <ScrollAnimation animateOnce={true} animateIn="animate__fadeInUp">
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
            </ScrollAnimation>
            <div className="row">
              <div className="col-md-4">
                <ScrollAnimation
                  animateOnce={true}
                  animateIn="animate__zoomInDown"
                >
                  <div className="img">
                    <img width="150" src={Earth} />
                    <p>Sustainability combined with profitability</p>
                  </div>
                </ScrollAnimation>
              </div>

              <div className="col-md-4">
                <ScrollAnimation
                  animateOnce={true}
                  delay={500}
                  animateIn="animate__zoomInDown"
                >
                  <div className="img">
                    <img width="150" src={Tree} />
                    <p>
                      Create value through perfect execution of business tasks
                    </p>
                  </div>
                </ScrollAnimation>
              </div>

              <div className="col-md-4">
                <ScrollAnimation
                  delay={1000}
                  animateOnce={true}
                  animateIn="animate__zoomInDown"
                >
                  <div className="img">
                    <img width="150" src={PersonPlus} />
                    <p>
                      Improve people’s health by supporting the global
                      distribution of CBD
                    </p>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </Element>
      <Element name="BUSINESS_MODEL" className="BUSINESS_MODEL">
        <div className="container">
          <div className="content ">
            <ScrollAnimation animateOnce={true} animateIn="animate__fadeInUp">
              <div className="left">
                <h2>Business Model</h2>
                <p>
                  Crowd Growing is based on a strategy and philosophy that has
                  been put in place together with our strategic cooperation
                  partners in the field of growth and distribution of medical
                  cannabis.
                  <br />
                  In an exclusive first funding stage, Crowd Growing managed to
                  accumulate approximately 10 million USD in venture capital
                  from high net worth individuals and investors. This allowed us
                  to create a state of the art cannabis manufacturing strategy.
                  <br />
                  The fundament of this successful strategy lays in the
                  simplification of repeating processes in order to achieve the
                  best possible outcome. <br />
                  After numerous tests and trials we managed to create a one of
                  a kind growing cycle, a socalled “Growing Street”. This cycle
                  distinguish itself, that we plant new plants and harvest old
                  plants on a daily basis. For that reason, we established
                  different working groups, each specialized on only a few
                  tasks, which are repeated continuously on a daily basis.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateOnce={true}
              animateIn="animate__rotateInDownRight"
            >
              <div className="right">
                <div className="img">
                  <img src={Model} />
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </Element>

      <Element name="lifCircle" className="lifCircle">
        <div className="container">
          <ScrollAnimation animateOnce={true} animateIn="animate__fadeInUp">
            <div>
              <h2>Life Cycle of a Plant </h2>
              <p>
                Our growing street is divided into 5 steps. Each one of those
                steps strictly has its own working group assigned.
              </p>
            </div>
          </ScrollAnimation>
          <div className="circleContainer ">
            <div className=" circle circle1">
              <ScrollAnimation
                animateOnce={true}
                animateIn="animate__slideInLeft"
              >
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
              </ScrollAnimation>
            </div>

            <div className=" circle circle2">
              <ScrollAnimation
                animateOnce={true}
                delay={300}
                animateIn="animate__slideInUp"
              >
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
              </ScrollAnimation>
            </div>

            <div className=" circle circle3">
              <ScrollAnimation
                animateOnce={true}
                delay={600}
                animateIn="animate__slideInDown"
              >
                <div className="vertical" />
                <div className="horizontal" />
                <img src={Circle3} />
                <div className="textBox stepThree">
                  <h6>Step 3–Flowering</h6>
                  <div>
                    After 4-5 weeks lightning gets switched to 12h light/ 12h
                    dark in order to transform the plant into the flowering
                    stage. This process takes 3-4 weeks
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            <div className=" circle circle4">
              <ScrollAnimation
                animateOnce={true}
                delay={900}
                animateIn="animate__slideInUp"
              >
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
                    Drying and fermenting of the flowers in a vacuum closed
                    drying chamber.
                  </div>
                </div>
              </ScrollAnimation>
            </div>
            <div className=" circle circle5">
              <ScrollAnimation
                animateOnce={true}
                delay={1200}
                animateIn="animate__slideInDown"
              >
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
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </Element>

      <Element name="profits" className="profits">
        <div className="container">
          <ScrollAnimation animateOnce={true} animateIn="animate__fadeInUp">
            <div className="left">
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
            </div>
          </ScrollAnimation>
          <div className="right">
            <ScrollAnimation animateOnce={true} animateIn="animate__zoomIn">
              <div className="img">
                <img src={Profits} />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </Element>

      <Element name="Products" className="Products">
        <div className="container">
          <div className="content">
            <ScrollAnimation animateOnce={true} animateIn="animate__fadeInUp">
              <div className="left">
                <h2>Products</h2>
                <p>
                  We have decided to create the lowest possible entry barrier
                  for new customers. Therefore we can guarantee that even with
                  the smallest investment, profit will be generated. <br />
                  Starting with an investment in growing equipment from 100$ you
                  will be considered as a beginner. From a 1,000$ investment you
                  will be considered as an Advanced and starting from 2,500$ you
                  will be considered as a Professional. Nevertheless, which
                  amount a customer invests, he will have a monthly profit of up
                  to 8-10%.
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
            </ScrollAnimation>

            <div className="right d-flex flex-column">
              <ScrollAnimation
                animateOnce={true}
                animateIn="animate__slideInRight"
              >
                <div className=" Starter investTypes">
                  <div className="pricing card-group flex-column flex-md-row mb-1">
                    <div className="card card-pricing border-0 bg-white text-center mb-1">
                      <div className="card-body px-lg-12">
                        <div className="row">
                          <div className="col-12">
                            <h4 className="text-uppercase ls-1 text-dark py-3 mb-0 text-center">
                              Starter
                            </h4>
                          </div>
                        </div>
                        <div
                          className="display-2 text-dark text-center"
                          // style="font-size: 1rem;"
                        >
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
                        <div className="text-left text">
                          Monthly profit 8% – 10% <br /> Weekly profit share
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" Advanced investTypes">
                  <div className="pricing card-group flex-column flex-md-row mb-1 ">
                    <div className="card card-pricing border-0 bg-white text-center mb-1">
                      <div className="card-body px-lg-12">
                        <div className="row">
                          <div className="col-12">
                            <h4 className="text-uppercase ls-1 text-dark py-3 mb-0 text-center">
                              Advanced
                            </h4>
                          </div>
                        </div>
                        <div
                          className="display-2 text-dark text-center"
                          // style="font-size: 1rem;"
                        >
                          <div className="pricesLine mt-4">
                            <div className="linContainer">
                              <div className="startPrice">1,000$ </div>
                              <div className="endPrice">2,499$ </div>
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
                        <div className="text-left text">
                          Monthly profit 8% – 10% <br /> Weekly profit share
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" Pro investTypes">
                  <div className="pricing card-group flex-column flex-md-row mb-1">
                    <div className="card card-pricing border-0 bg-white text-center mb-1">
                      <div className="card-body px-lg-12">
                        <div className="row">
                          <div className="col-12">
                            <h4 className="text-uppercase ls-1 text-dark py-3 mb-0 text-center">
                              Professional
                            </h4>
                          </div>
                        </div>
                        <div
                          className="display-2 text-dark text-center"
                          // style="font-size: 1rem;"
                        >
                          <div className="pricesLine mt-4">
                            <div className="linContainer">
                              <div className="startPrice">2,500$</div>
                              <div className="endPrice">9,999$</div>
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

                        <div className="text-left text ">
                          Monthly profit 8% – 10% <br /> Weekly profit share
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" Founder investTypes">
                  <div className="pricing card-group flex-column flex-md-row mb-3">
                    <div className="card card-pricing border-0 bg-white text-center mb-1">
                      <div className="card-body px-lg-12">
                        <div className="row">
                          <div className="col-12">
                            <h4 className="text-uppercase ls-1 text-dark py-3 mb-0 text-center">
                              Founder
                            </h4>
                          </div>
                        </div>
                        <div
                          className="display-2 text-dark text-center"
                          // style="font-size: 1rem;"
                        >
                          <div className="pricesLine mt-4">
                            <div className="linContainer">
                              <div className="startPrice">10,000$</div>
                              <div className="endPrice">100,000$</div>
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
                        <div className="text-left text">
                          Monthly profit 8% – 10% <br />
                          Weekly profit share <br />
                          extra 1% – 3% monthly
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </Element>
      <footer className="footer page-footer font-small special-color-dark pt-4">
        <a href="">
          <img height="50" src={Logo} />
        </a>
        <ul className="list-unstyled list-inline text-center">
          <li className="list-inline-item">
            <a className="btn-floating btn-fb mx-1 waves-effect waves-light">
              <i className="fab fa-facebook-f"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-tw mx-1 waves-effect waves-light">
              <i className="fab fa-twitter"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-gplus mx-1 waves-effect waves-light">
              <i className="fab fa-google-plus-g"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-li mx-1 waves-effect waves-light">
              <i className="fab fa-linkedin-in"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-dribbble mx-1 waves-effect waves-light">
              <i className="fab fa-dribbble"> </i>
            </a>
          </li>
        </ul>

        <div className="footer-copyright text-center py-3">
          © 2020 Copyright:
          <a href="https://crowdgrowing.com/"> crowdgrowing.com </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
