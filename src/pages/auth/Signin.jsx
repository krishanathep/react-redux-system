import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSignIn } from "react-auth-kit";
import { Link, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import axios from "axios";

export default function Signin() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const signIn = useSignIn();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const REACT_APP_API =
    "https://full-stack-app.com/laravel_auth_jwt_api/public/api/auth/login";

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await axios.post(REACT_APP_API, data).then((res) => {
        const token = res.data.access_token;

        if (token != null) {
          if (
            signIn({
              token: res.data.access_token,
              authState: res.data.user,
              expiresIn: 60,
              tokenType: "Bearer",
            })
          ) {
            navigate("/");
          }
        } else {
          console.log("เกิดข้อผิดพลาด!!!");
        }
      });
    } catch (error) {
      console.log(error.response.data);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data,
      });
      reset({
        email: "",
        password: "",
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading === true) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="content-wrapper d-flex align-items-center auth px-0">
            <div className="row w-100 mx-0">
              <div className="col-lg-4 mx-auto">
                <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                  <div className="brand-logo">
                    <img src="../../assets/images/logo.svg" alt="logo" />
                  </div>
                  <h4>Hello! let's get started</h4>
                  <h6 className="font-weight-light">Sign in to continue.</h6>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        id="exampleInputEmail1"
                        placeHolder="Username"
                        {...register("email", { required: true })}
                      />
                      {errors.email && (
                        <p className="text-danger">
                          This username field is required
                        </p>
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        id="exampleInputPassword1"
                        placeHolder="Password"
                        {...register("password", { required: true })}
                      />
                      {errors.password && (
                        <p className="text-danger">
                          This password field is required
                        </p>
                      )}
                    </div>
                    <div className="mt-3">
                      <button
                        type="submit"
                        className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                      >
                        SIGN IN
                      </button>
                    </div>
                    {/* <div className="my-2 d-flex justify-content-between align-items-center">
                      <div className="form-check">
                        <label className="form-check-label text-muted">
                          <input type="checkbox" className="form-check-input" />
                          Keep me signed in
                        </label>
                      </div>
                      <a href="#" className="auth-link text-black">
                        Forgot password?
                      </a>
                    </div>
                    <div className="mb-2">
                      <button
                        type="button"
                        className="btn btn-block btn-facebook auth-form-btn"
                      >
                        <i className="mdi mdi-facebook mr-2"></i>Connect using
                        facebook
                      </button>
                    </div> */}
                    <div className="text-center mt-4 font-weight-light">
                      Don't have an account?{" "}
                      <Link to={'/auth/signup'} className="text-primary">
                        Create
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
