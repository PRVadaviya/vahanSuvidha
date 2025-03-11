import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../features/Authentication/AuthSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ email, password });
    

    try {
      const response = await fetch("http://localhost:9203/User/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) { 
        console.log("Login Successful!");
        alert("Successful Sign In !");
        dispatch(login({email,isAuthenticated:true}))
        
        navigate("/"); // Redirect after successful login
      } else {
        console.error("Login Failed");
        setError("Invalid Email or Password!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Sign In
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4" method="POST">
          {/* Email Input */}
          <div>
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-gray-600">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex items-center">
            <input type="checkbox" id="keepSignedIn" className="mr-2" />
            <label htmlFor="keepSignedIn" className="text-gray-600">
              Keep me signed in
            </label>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition"
          >
            Sign In
          </button>

          {/* Forgot Password */}
          <div className="text-center mt-4">
            <Link to="/Forgotpassword" className="text-green-600 hover:underline">
              Forgot Password?
            </Link>
          </div>

          {/* Sign Up Link */}
          <div className="text-center mt-4">
            <Link to="/SignUp" className="text-green-600 hover:underline">
            have you register?
            </Link>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default Login;
