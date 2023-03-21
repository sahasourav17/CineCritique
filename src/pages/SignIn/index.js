import React, { useState } from "react";
import { toast } from "react-toastify";
import { Button, Input } from "../../components/index";
import { publicPost } from "../../utilities/apiCaller";
import { NavLink, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await publicPost(
        "/user/signin",
        JSON.stringify({
          name: name,
          password: password,
        })
      );
      if (response.message === "Signin successful") {
        localStorage.setItem("token", JSON.stringify(response.token));
        toast.success("🦄 Wow Account created! Please login", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate("/");
      }
    } catch (err) {
      setMessage("Please Try Again!");
    }
  };
  return (
    <>
      <div className="flex h-screen w-full items-center bg-rainblue-50">
        <div className="m-4 w-full rounded bg-white p-8 shadow-lg md:mx-auto md:max-w-sm">
          <span className="mb-4 block h-6 w-full text-center text-xl font-bold">
            CineCritique
          </span>
          <p className="text-green-600 mb-2 text-left text-sm">{message}</p>
          <form className="mb-4" onSubmit={handleSubmit}>
            <Input
              label="Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text text-teal-500 mb-4 text-left text-sm">
              Don't have an account?
              <NavLink className="pl-1 text-rainblue-100" to="/signup">
                Signup
              </NavLink>
            </p>
            <Button label="Sign In" />
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
