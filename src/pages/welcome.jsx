import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import bgImage from "../assets/welcome.jpg.jpg";
import logoImage from "../assets/logo.png";

export default function LoginPage() {
  const [form, setForm] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regFirstName, setRegFirstName] = useState("");
  const [regLastName, setRegLastName] = useState("");
  const [forgotEmail, setForgotEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Login logic with localStorage
  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin@enkonix.in" && password === "admin123") {
      navigate("/admindashboard");
      return;
    }
    // Check localStorage for registered users
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const foundUser = users.find(
      (u) => (u.email === email || u.name === email) && u.password === password
    );
    if (foundUser) {
      navigate("/home1");
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    // Check if email already exists
    if (users.some((u) => u.email === regEmail)) {
      setMessage("Email already registered. Please login.");
      setForm("login");
      setRegEmail("");
      setRegPassword("");
      setRegFirstName("");
      setRegLastName("");
      return;
    }
    // Add new user
    users.push({
      firstName: regFirstName,
      lastName: regLastName,
      email: regEmail,
      password: regPassword,
    });
    localStorage.setItem("users", JSON.stringify(users));
    setMessage("Registration successful! Please login.");
    setForm("login");
    setRegEmail("");
    setRegPassword("");
    setRegFirstName("");
    setRegLastName("");
  };

  const handleForgot = (e) => {
    e.preventDefault();
    setMessage("Password reset link sent to your email.");
    setForm("login");
    setForgotEmail("");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Logo in top left */}
      <img
        src={logoImage}
        alt="Stackly Logo"
        className="h-16 absolute top-6 left-6 z-10 bg-white bg-opacity-80 rounded-full p-2 shadow-lg"
        style={{ objectFit: "contain" }}
      />
      <div className="bg-transparent w-full max-w-md mx-4 flex flex-col items-center">
        <h2 className="text-4xl font-light text-white mb-8 mt-2 tracking-wide">Welcome to Foodify</h2>
        {message && (
          <div className="text-green-700 text-sm mb-2 text-center">{message}</div>
        )}
        {form === "login" && (
          <form onSubmit={handleLogin} className="space-y-6 w-full">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Email or Username"
                className="w-full border-b border-gray-200 bg-transparent py-3 pl-10 pr-4 text-white placeholder-gray-200 focus:outline-none focus:border-red-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <FaUser className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-300" />
            </div>
            <div className="relative mb-6">
              <input
                type="password"
                placeholder="Password"
                className="w-full border-b border-gray-200 bg-transparent py-3 pl-10 pr-4 text-white placeholder-gray-200 focus:outline-none focus:border-red-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <FaLock className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-300" />
            </div>
            {error && <div className="text-red-400 text-sm text-center">{error}</div>}
            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-md shadow-md transition"
            >
              Login
            </button>
            <div className="flex justify-end mt-2 text-sm">
              <button
                className="text-gray-200 hover:underline"
                type="button"
                onClick={() => setForm("forgot")}
              >
                Forgot Password?
              </button>
            </div>
          </form>
        )}
        {form === "register" && (
          <form onSubmit={handleRegister} className="space-y-5">
            <div className="flex gap-2">
              <div className="flex-1">
                <label className="block text-gray-700 mb-1">First Name</label>
                <input
                  type="text"
                  className="w-full border-b-2 border-gray-300 focus:border-red-500 bg-transparent py-2 pl-2 outline-none"
                  value={regFirstName}
                  onChange={(e) => setRegFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 mb-1">Last Name</label>
                <input
                  type="text"
                  className="w-full border-b-2 border-gray-300 focus:border-red-500 bg-transparent py-2 pl-2 outline-none"
                  value={regLastName}
                  onChange={(e) => setRegLastName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full border-b-2 border-gray-300 focus:border-red-500 bg-transparent py-2 pl-2 outline-none"
                value={regEmail}
                onChange={(e) => setRegEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Password</label>
              <input
                type="password"
                className="w-full border-b-2 border-gray-300 focus:border-red-500 bg-transparent py-2 pl-2 outline-none"
                value={regPassword}
                onChange={(e) => setRegPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded transition"
            >
              Register
            </button>
          </form>
        )}
        {form === "forgot" && (
          <form onSubmit={handleForgot} className="space-y-5">
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full border-b-2 border-gray-300 focus:border-red-500 bg-transparent py-2 pl-2 outline-none"
                value={forgotEmail}
                onChange={(e) => setForgotEmail(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded transition"
            >
              Send Reset Link
            </button>
          </form>
        )}
        {/* Only show Register and Forgot Password for login form, else show Back to Login */}
        {form === "login" && (
          <div className="flex justify-between mt-4 text-sm">
            <button
              className="text-red-300 hover:underline"
              onClick={() => {
                setForm("register");
                setError("");
                setMessage("");
              }}
              type="button"
            >
              Register
            </button>
          </div>
        )}
        {form !== "login" && (
          <div className="flex justify-center mt-4 text-sm">
            <button
              className="text-red-300 hover:underline"
              onClick={() => {
                setForm("login");
                setError("");
                setMessage("");
              }}
              type="button"
            >
              Back to Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}