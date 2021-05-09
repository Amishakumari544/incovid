import React from "react";
import { set, useForm } from "react-hook-form";
import axios from "axios";
import {Link,useHistory} from "react-router-dom";
// import { useAlert } from "react-alert";
import "./form.css";
function DualForm(props) {
  let history = useHistory();
  var lat = "";
  var lon = "";
  if (props.coords) {
    lat = props.coords.latitude;
    lon = props.coords.longitude;
  } // watch input value by passing the name of it
  // location object
 
  //   const alert = useAlert();

  // console.log(props.coords.latitude);
  console.log(props);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const {
    register: register2,
    errors: errors2,
    handleSubmit: handleSubmit2,
  } = useForm({
    mode: "onBlur",
  });
  const registrationSubmit = (data) => {
    data.lat = lat;
    data.lon = lon;
    axios
      .post("https://incovid.herokuapp.com/hospital", data)
      .then((res) => {
        console.log(res);
        if (res.data.success === 1) {
          alert.show(res.data.message);
        } else {
          alert.show(res.data.message);
        }
    // if(res.data.success===0)
        
    })
    .catch((error) => {
      console.log(error);
    });
  };
 

  const loginSubmit = (data) => {
    axios
      .post("https://incovid.herokuapp.com/hospital/login", data)
      .then((res) => {
        console.log(res);
        if (res.data.success === 1) {
          //   alert.show(res.data.message);
          props.history.push("/dashboard");
        } else {
          //   alert.show(res.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
        // props.history.push("/dashboard");
      });
  };
  const handlenav = () =>{
   history.push("/dashboard");
  }



  // console.log(props.props.longitude);
  //  !props.isGeolocationAvailable ? (
  //   <div>Your browser does not support Geolocation</div>
  // ) : !props.isGeolocationEnabled ? (
  //   <div>Geolocation is not enabled</div>
  // ) : props.coords ?
  return (
    <div className="container register">
      <div className="row">
        <div className="col-md-3 register-left">
          <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
          <h3 className="mb-3">Welcome</h3>
          <h3>CovidJSR!</h3>
        </div>
        <div className="col-md-9 register-right">
          <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="home-tab"
                data-toggle="tab"
                href="#home"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Register
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="login-tab"
                data-toggle="tab"
                href="#login"
                role="tab"
                aria-controls="login"
                aria-selected="false"
              >
                Login
              </a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <h3 className="register-heading">Register</h3>
              <form
                key={2}
                onSubmit={handleSubmit(registrationSubmit)}
                autoComplete="off"
              >
                <div className="row register-form">
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name *"
                        value=""
                        {...register2("username", { required: true })}
                      />
                        {errors.username && (
                    <small className="text-danger">
                      This field is required
                    </small>
                  )}
                  <small id="emailHelp" class="form-text text-muted">   
                  </small>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Hospital Name*"
                        value=""
                        {...register2("hos_name", { required: true })}
                      />
                        {errors.hos_name && (
                    <small className="text-danger">
                      This field is required
                    </small>
                  )}
                  <small id="emailHelp" class="form-text text-muted">
               
                  
                  </small>
                  
                    </div>
                   
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Available ICU Bed *"
                        name="a_icu"
                        value=""
                        {...register2("a_icu", { required: true })}
                      />
                        {errors.a_icu && (
                    <small className="text-danger">
                      This field is required
                    </small>
                  )}
                  <small id="emailHelp" class="form-text text-muted">
                 </small>
                  </div>
                  
                  <div className="form-group">
                      <input
                        type="text"
                        minlength="10"
                        maxlength="10"
                        name="a_covid"
                        className="form-control"
                        placeholder="Available Covid Bed *"
                        value=""
                        {...register2("a_covid", { required: true })}
                      />
                        {errors.username && (
                    <small className="text-danger">
                      This field is required
                    </small>
                  )}
                  <small id="emailHelp" class="form-text text-muted">
                   
                  
                  </small>
                  
                    </div>
                    <div className="form-group">
                          <input
                            type="number"
                            name="mobile"
                            className="form-control"
                            placeholder="Contact Number"
                            {...register2("mobile", { required: true })}
                          />
                   </div>
                   <div className="form-group">
                          <input
                            type="number"
                            name="pincode"
                            className="form-control"
                            value=""
                            placeholder="Pincode *"
                            {...register2("pincode", { required: true })}
                          />
                            {errors.pincode && (
                    <small className="text-danger">
                      This field is required
                    </small>
                  )}
                  <small id="emailHelp" class="form-text text-muted">
                  </small> 
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password *"
                        value=""
                        {...register2("", { required: true })}
                      />
                        {errors.username && (
                    <small className="text-danger">
                      This field is required
                    </small>
                  )}
                  <small id="emailHelp" class="form-text text-muted">
                   
                  
                  </small>
                  
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="addr"
                        className="form-control"
                        placeholder="Hospital Address *"
                        value=""
                        {...register2("addr", { required: true })}
                      />
                        {errors.addr && (
                    <small className="text-danger">
                      This field is required
                    </small>
                  )}
                  <small id="emailHelp" class="form-text text-muted">
                  </small>
                    </div>
                    <div className="form-group">
                      <input
                        type="number"
                        name="a_oxy"
                        className="form-control"
                        placeholder="Available Oxygen *"
                        value=""
                        {...register2("a_oxy", { required: true })}
                      />
                        {errors.a_oxy && (
                    <small className="text-danger">
                      This field is required
                    </small>
                  )}
                  <small id="emailHelp" class="form-text text-muted">
                   
                  
                  </small>
                  
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="t_oxy"
                        className="form-control"
                        placeholder="Total Oxygen *"
                        value=""
                        {...register2("t_oxy", { required: true })}
                      />
                        {errors.t_oxy && (
                    <small className="text-danger">
                      This field is required
                    </small>
                  )}
                  <small id="emailHelp" class="form-text text-muted">
                   
                  
                  </small>
                  
                    </div>
                    <div className="form-group">
                      <select className="form-control">
                        <option className="hidden" selected disabled>
                          Is Covid Hospital or Not
                        </option>
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </div>
                   
                    <button
                      onClick={handlenav}
                      className="btnRegister"
                      value="Register"
                    >Register</button>
            
                  </div>
                </div>
              </form>
            </div>



            {/* LOGIN */}

            
            
            <div
              className="tab-pane fade show"
              id="login"
              role="tabpanel"
              aria-labelledby="login-tab"
            >
              <h3 className="register-heading">Login</h3>
              <form
                key={2}
                onSubmit={handleSubmit2(loginSubmit)}
                autoComplete="off"
              >
                <div className="row register-form">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email *"
                        value=""
                        {...register2("username", { required: true })}
                      />
                        {errors.username && (
                    <small className="text-danger">
                      This field is required
                    </small>
                  )}
                  <small id="emailHelp" class="form-text text-muted">
                  </small>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="password"
                        maxlength="10"
                        minlength="8"
                        className="form-control"
                        placeholder="Password *"
                        value=""
                        {...register2("username", { required: true })}
                      />
                        {errors.username && (
                    <small className="text-danger">
                      This field is required
                    </small>
                  )}
                  <small id="emailHelp" class="form-text text-muted">
                  </small>
                    </div>
                    <input
                  name="lat"
                  type="hidden"
                  defaultValue={lat}
                  {...register("lat")}
                
                />
            
                <input
                  name="lon"
                  type="hidden"
                  defaultValue={lon}
                  {...register("lon")}
                />
                    <button
                     
                      className="btnRegister"
                      value="Login"
                    >Login</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DualForm;
