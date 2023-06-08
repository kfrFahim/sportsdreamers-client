import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { TbFidgetSpinner } from "react-icons/tb";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const SignUp = () => {

  const {createUser , signInWithGoogle,setLoading,updateUserProfile, loading} = useContext(AuthContext);
 

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";




  const {
    register,
    handleSubmit,
    watch,
    reset ,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data)
    createUser(data.email, data.password)
   .then(result => {
    console.log(result.user);
    updateUserProfile(data.name , data.photoURL)
    .then(()=>{
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Sign Up Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    })
    navigate(from, { replace: true });
   }
    )
    setLoading(false);
    reset()
  };


  //  Gooogle Login
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Sign Up Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.message);
        setLoading(false);
      });
  };


  const password = watch("password", "");





  return (
    <div>

<Helmet>
        <title>SportsDremars || SignUp</title>
      </Helmet>

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-1/2">
            <img
              src="https://apps.sportsmarkit.com/images/sportsmarkit-login-pic.svg"
              alt=""
            />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-100 text-gray-900">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Name"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                />
                {errors.name && (
                  <span className="text-red-500">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                />
                {errors.email && (
                  <span className="text-red-500">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input
                  type="text"
                  {...register("PhotoURL", { required: true })}
                  
                  placeholder="PhotoURL"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                />
                {errors.email && (
                  <span className="text-red-500">PhotoURL is required</span>
                )}
              </div>
              <div className="form-control">
                <label>Password</label>
                <input
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                  type="password"
                  placeholder="password"
                  {...register("password",{required: "Password is required", minLength: {value: 6,message: "Password must have at least 6 characters"
                      }, pattern:/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                    }
                  )}
                />
                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
              </div>

              <div className="form-control">
                <label>Confirm Password</label>
                <input
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                  type="password"
                  placeholder="confirm password"
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                    validate: (value) =>
                      value === password || "The passwords do not match",
                  })}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500">{errors.confirmPassword.message}</p>
                )}
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="bg-rose-500 w-full rounded-md py-3 text-white"
                >
                  {loading ? (
                    <TbFidgetSpinner
                      className="mx-auto animate-spin"
                      size={24}
                    ></TbFidgetSpinner>
                  ) : (
                    "Continue"
                  )}
                </button>
              </div>
            </form>

            <div className="flex items-center pt-4 space-x-1">
              <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
              <p className="px-3 text-sm dark:text-gray-400">
                Login with social accounts
              </p>
              <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            </div>

            <div
              onClick={handleGoogleSignIn}
              className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
            >
              <FcGoogle size={32} />

              <p>Continue with Google</p>
            </div>
            <p className="px-6 text-sm text-center text-gray-400">
              Already have an account?{" "}
              <Link
                to="/login"
                className="hover:underline hover:text-rose-500 text-gray-600"
              >
                Login
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
