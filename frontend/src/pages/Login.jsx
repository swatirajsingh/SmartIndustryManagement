
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Temporary Login
    if (email === "admin@smart.com" && password === "123456") {
      alert("Login Successful!");
      navigate("/dashboard");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-xl p-8 w-96">
        <h1 className="text-3xl font-bold text-center mb-6">
          Smart Industry Login
        </h1>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-500 mt-4">
          Demo Login
          <br />
          Email: admin@smart.com
          <br />
          Password: 123456
        </p>
      </div>
    </div>
  );
}

export default Login;
