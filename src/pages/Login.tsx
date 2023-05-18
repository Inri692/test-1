import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/login", {
        email: "eve.holt@reqres.in",
        password: password,
      })
      .then((response) => {
        setToken(response.data.token);
        setError("");
        localStorage.setItem("token", response.data.token);
        navigate("/profile");
      })
      .catch((error) => {
        setError("Invalid email or password");
      });
  }

  return (
    <div className="flex w-full h-screen bg-white">
      <div className="flex flex-col w-full h-screen">
        <div
          className="w-full h-full bg-no-repeat bg-cover opacity-80"
          style={{
            backgroundImage: `url(https://png.pngtree.com/background/20220724/original/pngtree-download-background-biru-keren-dan-kosong-picture-image_1739255.jpg)`,
          }}
        ></div>
      </div>
      <div className="relative flex flex-col w-full h-screen ">
        <div className="flex h-screen justify-center items-center">
          <div className="flex flex-col justify-center w-[400px]">
            <form
              onSubmit={handleSubmit}
              className="w-full mx-auto rounded-2xl bg-[#FFCE07] p-8 px-8 h-[480px] shadow-2xl"
            >
              <h2 className="text-4xl text-black text-center font-bold">
                Login
              </h2>
              {error && <p className="text-red-500 mb-5">{error}</p>}

              <div className="flex flex-col py-2">
                <label className="font-semibold text-black">Email</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-black"
                  type="email"
                  value={"eve.holt@reqres.in"}
                  placeholder="eve.holt@reqres.in"
                />
              </div>
              <div className="flex flex-col py-2">
                <label className="font-semibold text-black">Password</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  value={password}
                  className="p-2 rounded-lg bg-white mt-2 border-2 focus:outline-none text-black"
                  placeholder="Password"
                />
              </div>

              <button
                type="submit"
                className="w-[90%] text-lg flex m-auto my-5 py-2 capitalize bg-[#967E76]  hover:bg-[#FFCE07] border-none shadow-lg text-white font-semibold rounded-lg btn"
              >
                login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
