import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import GoogleLogin from "../components/login-registration/GoogleLogin";
import axios from "axios";

export default function Register() {
  const { CreateUser } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const email = data.email; 
      const role = data.role;
      const status = role === "buyer" ? "approved" : "pending";
      const wishlist = [];

      const userData = {email, role, status, wishlist}

       CreateUser(data.email, data.password).then(() =>{
        axios.post("http://localhost:4000/users", userData).then(res=>{
           console.log(res);     
        })
      })
      console.log(userData);
      // Add navigation to another page if needed
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
              deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && <p className="text-red-500 text-sm font-light">Email is required</p>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", { required: true, minLength: 6 })}
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-500 text-sm font-light">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500 text-sm font-light">Password must have at least 6 characters</p>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Conferm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Conferm password"
                  className="input input-bordered"
                  {...register("confirmPassword", {
                    required: true,
                    validate: (value) => {
                      if (watch("password") != value) {
                        return "Your passwords do not match";
                      }
                    },
                  })}
                />
                {errors.confirmPassword && <p className="text-red-500 text-sm font-light">Password must match</p>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Role</span>
                </label>
                <select className="select select-bordered w-full max-w-xs" {...register("role", { required: true })}>
                  <option value={"buyer"}>Buyer</option>
                  <option value={"seller"}>Seller</option>
                </select>
                {errors.role && <p className="text-red-500 text-sm font-light">You must select a role</p>}
              </div>

              <div className="form-control mt-4">
                <button type="submit" className="btn btn-primary">
                  Sign up
                </button>
              </div>

              <GoogleLogin />

              <div className="text-center">
                <p className="text-xs font-thin">
                  Have an account?
                  <Link to={"/login"} className="text-primary">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
