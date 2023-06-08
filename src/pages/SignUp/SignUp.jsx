import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { TbFidgetSpinner } from 'react-icons/tb';
import { AuthContext } from '../../providers/AuthProvider';
import { useForm } from "react-hook-form";

const SignUp = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

     const {loading} = useContext(AuthContext)

     return (
          <div>
               <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left w-1/2">
      <img src="https://apps.sportsmarkit.com/images/sportsmarkit-login-pic.svg" alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form  onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" {...register("name",{ required: true })} name='name' placeholder="Name" className="input input-bordered" />
          {errors.name && <span className='text-red-500'>This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" {...register("email",{ required: true })} name='email' placeholder="email" className="input input-bordered" />
          {errors.email && <span className='text-red-500'>This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" {...register("password",{ required: true })} placeholder="password" className="input input-bordered" />
          {errors.password && <span className='text-red-500'>This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" {...register("confirm-password",{ required: true })} placeholder="confirm password" className="input input-bordered" />
          {errors.confirm-password && <span className='text-red-500'>This field is required</span>}
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
          //     onClick={handleGoogleSignIn}
              className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
            >
              <FcGoogle size={32} />

              <p>Continue with Google</p>
            </div>
            <p className="px-6 text-sm text-center text-gray-400">
              Don't have an account yet?{" "}
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