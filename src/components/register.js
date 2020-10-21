import React from "react";
import { useForm } from "react-hook-form";
import classnames from "classnames";
import axios from "axios";
import { isEmail } from "./utils";
import { useHistory } from "react-router";

const Registration = ({
  regAuthModal,
  setRegisterSuccessModal,
  setRegAuthModal,
  defaultValue,
}) => {
  const [serverError, setServerError] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const {
    register,
    handleSubmit,
    errors,
    watch,
    setError,
    clearError,
    getValues,
  } = useForm();

  const onSubmitRegister = (data) => {
    const referral = data.referral_link;
    delete data.referral_link;
    setLoading(true);
    axios
      .post(
        "/api/register",
        {
          ...data,
        },
        {
          params: {
            referral,
          },
        }
      )
      .then((res) => {
        window.location.href = "http://crowd-growing.com/login";

        // setRegisterSuccessModal(true)
        setRegAuthModal(null);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        if (err.response && err.response.data) {
          setServerError(err.response.data);
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

  console.log(errors, "v");

  const onInputChange = () => {
    setServerError({});
  };

  let history = useHistory();
  console.log(history, "ttttttttttttttttt");
  return (
    <form
      onSubmit={handleSubmit(onSubmitRegister)}
      id="register-form"
      action="https://phpoll.com/register/process"
      method="post"
      role="form"
      style={{
        display: regAuthModal === "register" ? "block" : "none",
      }}
    >
      {loading && (
        <img
          className="loader"
          src="https://cdn.dribbble.com/users/1028334/screenshots/2874977/canalol.gif"
        />
      )}
           <div class="form-group">
             <label>Sponsor </label>
        <input
          type="text"
          name="referral_link"
          defaultValue={defaultValue}
          tabindex="1"
          class="form-control"
          placeholder="Sponsor Name"
          ref={register()}
        />
        <div class="invalid-feedback"></div>
      </div>
      <div class="form-group">
        <label>Full Name</label>
        <input
          type="text"
          name="name"
          tabindex="1"
          class="form-control"
          placeholder="Full Name"
          className={classnames("form-control", {
            "is-invalid": errors.name || serverError.name,
          })}
          ref={register({
            required: true,
            minLength: 2,
          })}
          onChange={onInputChange}
        />
        <div class="invalid-feedback">
          {serverError.name ||
            "Full Name must be at least 2 characters in length."}
        </div>
      </div>
      <div class="form-group">
        <label>Username</label>
        <input
          type="text"
          name="username"
          tabindex="1"
          class="form-control"
          placeholder="Username"
          className={classnames("form-control", {
            "is-invalid": errors.username || serverError.username,
          })}
          ref={register({
            required: true,
            minLength: 5,
          })}
          onChange={onInputChange}
        />
        <div class="invalid-feedback">
          {serverError.username ||
            "Username must be at least 5 characters in length."}
        </div>
      </div>
     
      <div class="form-group">
      <label>Email</label>
        <input
          type="email"
          name="email"
          tabindex="1"
          className={classnames("form-control", {
            "is-invalid": errors.email || serverError.email,
          })}
          placeholder="Email Address"
          ref={register({
            validate: {
              email: isEmail,
            },
            required: true,
          })}
          onChange={onInputChange}
        />
        <div class="invalid-feedback">
          {serverError.email || "wrong email format"}
        </div>
      </div>
      {/* <div class="form-group">
        <input
          type="number"
          name="phone"
          tabindex="1"
          className={classnames("form-control", {
            "is-invalid": errors.phone || serverError.phone,
          })}
          placeholder="phone"
          ref={register({
            required: true,
            minLength: 9,
          })}
          onChange={onInputChange}
        />
        <div class="invalid-feedback">
          {serverError.phone || "phone mast be minimum 9 number"}
        </div>
      </div> */}

      {/* <div class="form-group">
        <input
          type="text"
          name="username"
          tabindex="1"
          class="form-control"
          placeholder="username"
          className={classnames("form-control", {
            "is-invalid": errors.username || serverError.username,
          })}
          ref={register({
            required: true,
            minLength: 5,
          })}
          onChange={onInputChange}
        />
        <div class="invalid-feedback">
          {serverError.username ||
            "username must be at least 5 characters in length."}
        </div>
      </div> */}
 
      <div class="form-group">
        <label>Password</label>
        <input
          type="password"
          name="password"
          id="password"
          tabindex="2"
          className={classnames("form-control", {
            "is-invalid": errors.password || serverError.password,
          })}
          placeholder="Password"
          ref={register({
            required: true,
            minLength: 8,
          })}
          onChange={onInputChange}
        />
        <div class="invalid-feedback">
          {serverError.username ||
            "Password must be at least 8 characters in length."}
        </div>
      </div>

      <div class="form-group">
        <label>Re-Password</label>
        <input
          type="password"
          name="confirmPassword"
          id="password"
          tabindex="2"
          className={classnames("form-control", {
            "is-invalid": errors.confirmPassword ,
          })}
          placeholder="Re-Password"
          ref={register({
            required: true,
            minLength: 8,
            validate: {
              confirm: (value) => value === watch("password"),
             
          }
          })}
          onChange={onInputChange}
        />
       
        { errors.confirmPassword && <div className="invalid-feedback"> {  errors.confirmPassword.type === "minLength" ? 'enter minimum 8'  :  errors.confirmPassword.type === "confirm"  ? "Passwords do not match" :  "Password is required"} </div>}
   
      </div>
      <div class='checkBoxWrapper '>
      <label >
        <input   name="TandC" type="checkbox"     className={classnames("", {
            "hasError": errors.TandC ,
          })}  ref={register({
            required: true,
           
          })}/>
        <a  href="#">I agree with the T&C </a>
      </label>
      <br/>
      <label >
        <input name="Police" type="checkbox"  className={classnames("", {
            "hasError": errors.Police ,
          })}  ref={register({
            required: true,
           
          })} />
        <a href="#">I agree with the Privacy policy  </a>
      </label>
     
      <label >
        <input  name="Citizen" type="checkbox" className={classnames("", {
            "hasError": errors.Citizen ,
          })}  ref={register({
            required: true,
           
          })} />
        <span >I confirm that I’m not an US or Canadian citizen   </span>
      </label>
      </div>

      <div class="form-group">
        <div class="row">
          <div class="col-sm-12 col-sm-offset-3">
            <input
              disabled={loading}
              type="submit"
              name="register-submit"
              id="register-submit"
              tabindex="4"
              class="form-control mt-3 w-100 btn btn-register"
              value="Register Now"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default Registration;
