import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet";

const Login = () => {
  const { loading, setLoading, signIn, signInWithGoogle, resetPassword } =
    useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [error, setError] = useState("");

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
        setLoading(false);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  //  Gooogle Login

  const handleGoogleSignIn = () => {
    signInWithGoogle().then((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      const saveUser = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
      };
      fetch("https://summer-camp-server-mu-one.vercel.app/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {
          navigate(from, { replace: true });
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setError(error.message);
        });
    });
  };

  //  handle password reset

  const handleReset = () => {
    const email = emailRef.current.value;
    resetPassword(email)
      .then(() => {
        toast.success("Please check you email");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.message);
        setLoading(false);
      });
  };

  return (
    <div className="flex items-center justify-center ">
      <Helmet>
        <title>SportsDremars || Login</title>
      </Helmet>

      <div className="w-1/2">
        <img
          src="https://apps.sportsmarkit.com/images/sportsmarkit-login-pic.svg"
          alt=""
        />
      </div>
      <div>
        {" "}
        <div className="flex justify-center items-center min-h-screen">
          <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
            <div className="mb-8 text-center">
              <h1 className="my-3 text-4xl font-bold">Log In</h1>
              <p className="text-sm text-gray-400">
                Sign in to access your account
              </p>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate=""
              action=""
              className="space-y-6 ng-untouched ng-pristine ng-valid"
            >
              <p className="ml-[40px] my-3 text-red-500">{error}</p>
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                    data-temp-mail-org="0"
                    {...register("email", { required: true })}
                  />
                </div>
                <div>
                  <div className="flex justify-between">
                    <label htmlFor="password" className="text-sm mb-2">
                      Password
                    </label>
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    required
                    placeholder="Password"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                    {...register("password", { required: true })}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-gray-500 w-full rounded-md py-3 text-white"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="space-y-1">
              <button
                onClick={handleReset}
                className="text-xs hover:underline hover:text-rose-500 text-gray-400"
              >
                Forgot password?
              </button>
            </div>
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
              Don't have an account yet?{" "}
              <Link
                to="/signup"
                className="hover:underline hover:text-rose-500 text-gray-600"
              >
                Sign up
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
