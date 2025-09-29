import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
const Login = () => {
const {user,login}=useContext(AuthContext)
const navigate=useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()


  const onSubmit = async(data) => {
    
    
        login(data);
        
     
  }


  useEffect(()=>{
    if (user) {
      navigate('/')
    }
  },[user,navigate])

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-base-200 p-6 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">🔑 Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="Email"
            className="input input-bordered w-full mb-3"
          />
          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
            className="input input-bordered w-full mb-3"
          />
          <button className="btn btn-primary w-full">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
