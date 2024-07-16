import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

export default function Signup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const REACT_APP_API =
    "https://full-stack-app.com/laravel_auth_jwt_api/public/api/auth/register";

  const onSubmit = async (data) => {
    try {
      await axios.post(REACT_APP_API, data).then((res) => {
        console.log(res);
        navigate("/auth/signin");
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data,
      });
    }
  };

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
                  <h4>New here?</h4>
                  <h6 className="font-weight-light">
                    Signing up is easy. It only takes a few steps
                  </h6>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        id="exampleInputUsername1"
                        placeHolder="Name"
                        {...register("name", { required: true })}
                      />
                       {errors.name && <p className="text-danger">This field is required</p>}
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        class="form-control form-control-lg"
                        id="exampleInputEmail1"
                        placeHolder="Email"
                        {...register("email", { required: true })}
                      />
                       {errors.email && <p className="text-danger">This field is required</p>}
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        class="form-control form-control-lg"
                        id="exampleInputPassword1"
                        placeHolder="Password"
                        {...register("password", { required: true })}
                      />
                       {errors.password && <p className="text-danger">This field is required</p>}
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        class="form-control form-control-lg"
                        id="exampleInputPassword1"
                        placeHolder="Retype password"
                        {...register("password_confirmation", { required: true })}
                      />
                       {errors.password_confirmation && <p className="text-danger">This field is required</p>}
                    </div>
                    <div className="mb-4">
                      <div className="form-check">
                        <label className="form-check-label text-muted">
                          <input type="checkbox" className="form-check-input" />
                          I agree to all Terms & Conditions
                        </label>
                      </div>
                    </div>
                    <div className="mt-3">
                      <button
                        class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                        type="submit"
                      >
                        SIGN UP
                      </button>
                    </div>
                    <div className="text-center mt-4 font-weight-light">
                      Already have an account?{" "}
                      <Link to={'/auth/signin'} className="text-primary">
                        Login
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
