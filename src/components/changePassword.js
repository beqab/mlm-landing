import React from "react";
import { useForm } from "react-hook-form";
import classnames from "classnames";
import axios from "axios";
import { isEmail } from "./utils";
import { useHistory } from "react-router";

const ResetPassword = ({
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
    setError,
    watch,
    clearError,
    getValues,
  } = useForm();

  let history = useHistory();


  const onSubmitRegister = (data) => {
    setLoading(true);

    let path = history.location.pathname.replace("find", 'reset')
    
    
    axios
      .post(path, {password: data.mewPassword})
      .then((res) => {
          window.location.href = "http://crowd-growing.com/login"
        console.log(data);
        setRegisterSuccessModal("changePassword")
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

  return (
    <form
      onSubmit={handleSubmit(onSubmitRegister)}
      id="register-form"
      action="https://phpoll.com/register/process"
      method="post"
      role="form"
    >
      {loading && (
        <img
          className="loader"
          src="https://cdn.dribbble.com/users/1028334/screenshots/2874977/canalol.gif"
        />
      )}
      <label>change password</label>
      <div className="form-group">
        <input
          type="password"
          name="mewPassword"
          id="password"
          tabindex="2"
          className={classnames("form-control", {
            "is-invalid": errors.mewPassword,
          })}
          placeholder="new password"
          ref={register({
            required: true,
            minLength: 9,
          })}
          onChange={onInputChange}
        />
      { errors.mewPassword && <div className="invalid-feedback"> {  errors.mewPassword.type === "minLength" ? 'enter minimum 8'  :   "password is required"} </div>}

      </div>
      <div className="form-group">
      <label>change password</label>

        <input
          type="password"
          name="repeatPassword"
          id="password"
          tabindex="2"
          className={classnames("form-control mb-3", {
            "is-invalid": errors.repeatPassword,
          })}
          placeholder=" Repeat Password"
          ref={register({
          
          
              required: true,
              minLength: 8,
             

              validate: {
                confirm: (value) => value === watch("mewPassword"),
               
            }
          
          })}
          onChange={onInputChange}
        />
      { errors.repeatPassword && <div className="invalid-feedback"> {  errors.repeatPassword.type === "minLength" ? 'enter minimum 8'  :  errors.repeatPassword.type === "confirm"  ? "not equal" :  "password is required"} </div>}
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
              class="form-control btn btn-register w-100"
              value="CHANGE PASSWORD"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default ResetPassword;
