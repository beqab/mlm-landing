import React from  "react"
import { useForm } from "react-hook-form";
import classnames from 'classnames'
import axios from 'axios'
import {isEmail} from "./utils"

const Registration = ({regAuthModal}) => {
    const {
        register,
        handleSubmit,
        errors,
        setError,
        clearError,
        getValues,
      } = useForm();

      const onSubmitRegister = (data) => {
        console.log(data, "onSubmit");
    
        axios.post('/api/register',data ).then(res => {
          console.log(res, "rrress")
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
   <div class="form-group">
     <input
       type="text"
       name="name"
       id="username"
       tabindex="1"
       className={classnames("form-control", {
         "is-invalid": errors.name,
       })}
       placeholder="name"
      
       ref={register({
        minLength: 2,
            required: true,
       })}
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
        "is-invalid": errors.email,
      })}
       placeholder="Email Address"
      
       ref={register({
        validate: {
            email: isEmail,
        },
        required: true,
       })}
     />
         <div class="invalid-feedback">
wrong email format
</div>
   </div>
   <div class="form-group">
     <input
       type="number"
       name="phone"
     
       tabindex="1"
       className={classnames("form-control", {
        "is-invalid": errors.phone,
      })}
       placeholder="phone"
      
       ref={register({
         required: true,
         minLength: 9,
       })}
     />
         <div class="invalid-feedback">
phone mast be minimum 9 number
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
        "is-invalid": errors.username,
      })}
       ref={register({
         required: true,
         minLength: 4,
       })}
     />
         <div class="invalid-feedback">
         username must be at least 4 characters in length.
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
        "is-invalid": errors.password,
      })}
       placeholder="Password"
       ref={register({
        required: true,
        minLength: 6,
      })}
     />
         <div class="invalid-feedback">
         password must be at least 6 characters in length.
</div>
   </div>
 
   <div class="form-group">
     <div class="row">
       <div class="col-sm-6 col-sm-offset-3">
         <input
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