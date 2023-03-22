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
        sessionStorage.setItem("token", JSON.stringify(response.token));
        toast.success("🦄 Login Successful", {
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
      setPassword("");
    }
  };
  return (
    <>
      <div className="flex h-screen w-full items-center bg-rainblue-50">
        <div className="m-4 w-full rounded bg-white p-8 shadow-lg md:mx-auto md:max-w-sm">
          <span className="mb-4 block h-6 w-full text-center text-xl font-bold">
            CineCritique
          </span>
          <form onSubmit={handleSubmit}>
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
            <p className="mb-2 text-left text-sm text-red-600">{message}</p>
            <Button label="Sign In" />
            <hr class="my-3 h-1 w-full rounded border-0 bg-gray-200 dark:bg-gray-700"></hr>
            <p className="text text-teal-500 mt-2  text-center text-sm">
              New to CineCritique?
              <NavLink className="pl-1 text-rainblue-100" to="/signup">
                Create Account
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
