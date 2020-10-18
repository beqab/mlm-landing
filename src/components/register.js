import React from  "react"
import { useForm } from "react-hook-form";
import classnames from 'classnames'
import axios from 'axios'
import {isEmail} from "./utils"

const Registration = ({regAuthModal, setRegisterSuccessModal, setRegAuthModal}) => {
  const [serverError, setServerError] = React.useState({})
  const [loading, setLoading] = React.useState(false)
    const {
        register,
        handleSubmit,
        errors,
        setError,
        clearError,
        getValues,
      } = useForm();

      const onSubmitRegister = (data) => {

    const    referral = data.referral_link
     delete data.referral_link
        setLoading(true)
        axios.post('/api/register',{
         
          ...data}, { params: {
            referral,
         
          }} ).then(res => {
          setRegisterSuccessModal(true)
          setRegAuthModal(null)
          setLoading(false)
        }).catch(err => {
          setLoading(false)
          if(err.response && err.response.data){
            setServerError(err.response.data)
          }
         
        })
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

      console.log(errors, "v")

      const onInputChange = () => {
        setServerError({})
      }


    return <form
    onSubmit={handleSubmit(onSubmitRegister)}
   id="register-form"
   action="https://phpoll.com/register/process"
   method="post"
   role="form"
   style={{
     display:
       regAuthModal === "register" ? "block" : "none",
   }}
 >
   {loading && <img className="loader" src="https://cdn.dribbble.com/users/1028334/screenshots/2874977/canalol.gif" />}
   <div class="form-group">
     <input
       type="text"
       name="name"
       
       tabindex="1"
       className={classnames("form-control", {
         "is-invalid": errors.name,
       })}
       placeholder="name"
      
       ref={register({
        minLength: 2,
            required: true,
       })}
       onChange={onInputChange}
     />
         <div class="invalid-feedback">
name mast be minimum 2   
</div>
   </div>
   <div class="form-group">
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
           {serverError.email || "wrong email format" }

</div>
   </div>
   <div class="form-group">
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
           {serverError.phone || "phone mast be minimum 9 number" }
</div>
   </div>

   <div class="form-group">
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
           {serverError.username || "username must be at least 5 characters in length." }
         
</div>
   </div>
   <div class="form-group">
     <input
       type="text"
       name="referral_link"
     
       tabindex="1"
       class="form-control"
       placeholder="referral_link"
       
       ref={register()}
     />
        <div class="invalid-feedback">
        
</div>
   </div>
   <div class="form-group">
     <input
       type="password"
       name="password"
       id="password"
       tabindex="2"
       className={classnames("form-control", {
        "is-invalid": errors.password || serverError.username,
      })}
       placeholder="Password"
       ref={register({
        required: true,
        minLength: 8,
      })}
      onChange={onInputChange}

     />
         <div class="invalid-feedback">
           {serverError.username ||  "password must be at least 8 characters in length."}
         
</div>
   </div>
 
   <div class="form-group">
     <div class="row">
       <div class="col-sm-6 col-sm-offset-3">
         <input
         disabled={loading}
           type="submit"
           name="register-submit"
           id="register-submit"
           tabindex="4"
           class="form-control btn btn-register"
           value="Register Now"
         />
       </div>
     </div>
   </div>
 </form>
}

export default Registration