import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) return setError("All fields are required.");

    try {
      const res = await fetch("https://netflix-backend-express-production.up.railway.app/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        navigate("/dashboard");
      } else {
        setError(data.message);
      }
    } catch {
      setError("Server error. Try again later.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">

      <section className="relative h-screen">

        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/af2fac72-d956-4952-8686-4d45d359d78c/web/IN-en-20250526-TRIFECTA-perspective_5db3e163-56f7-47c7-9a65-b79b9d76bf24_medium.jpg"
          alt="Netflix background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black bg-opacity-60" />


        <a href="/" className="absolute top-6 left-8 z-20">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo"
            className="h-10 sm:h-12"
          />
        </a>


        <div className="relative z-10 flex justify-center items-center h-full">
          <form onSubmit={handleSubmit} className="bg-black bg-opacity-75 p-8 rounded-md w-full max-w-md shadow-md">
            <h2 className="text-white text-3xl font-bold mb-6">Sign In</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <input
              type="email"
              placeholder="Email or mobile number"
              className="w-full p-3 mb-4 bg-[#333] text-white rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-6 bg-[#333] text-white rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded font-semibold">
              Sign In
            </button>

            <div className="flex items-center my-4">
              <hr className="flex-grow border-gray-600" />
              <span className="px-3 text-gray-400 text-sm">OR</span>
              <hr className="flex-grow border-gray-600" />
            </div>

            
            <button
              type="button"
              className="w-full mt-3 bg-gray-700 hover:bg-gray-600 text-white py-3 rounded font-semibold transition duration-200"

            >
              Use a sign-in code
            </button>



            
            <div className="flex justify-between items-center text-sm text-gray-300 mt-2">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="accent-red-600" />
                <span>Remember me</span>
              </label>
              <a href="#" className="hover:underline">Need help?</a>
            </div>

            
            <p className="text-gray-400 text-sm mt-6">
              New to Netflix?{" "}
              <a href="#" className="text-white hover:underline">
                Sign up now.
              </a>
            </p>

            
            <p className="text-gray-500 text-xs mt-4 leading-relaxed">
              This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Learn more.
              </a>
            </p>

          </form>

        </div>
      </section>


      <footer className="bg-zinc-900 text-gray-400 text-sm">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <p className="mb-6">
            Questions? Call <a href="#" className="hover:underline">000-800-919-1694</a>
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            <a href="#" className="hover:underline">FAQ</a>
            <a href="#" className="hover:underline">Help Centre</a>
            <a href="#" className="hover:underline">Terms of Use</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Cookie Preferences</a>
            <a href="#" className="hover:underline">Corporate Information</a>
          </div>
          <div>
            <select className="bg-transparent border border-gray-600 text-gray-400 px-2 py-1 rounded">
              <option>English</option>
              <option>हिन्दी</option>
            </select>
          </div>
        </div>
      </footer>
    </div>
  );
}

