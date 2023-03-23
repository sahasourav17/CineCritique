import React, { useState } from "react";
import { toast } from "react-toastify";
import { Button, Input } from "../../components/index";
import { publicPost } from "../../utilities/apiCaller";
import { NavLink, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      try {
        const response = await publicPost(
          "/user/signup",
          JSON.stringify({
            name: name,
            email: email,
            password: password,
          })
        );
        setMessage(response.message);

        toast.success("🦄 Account created! Please login", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate("/signin");
      } catch (err) {
        setMessage("Please Try Again!");
        console.log("Error");
        setEmail("");
        setName("");
        setPassword("");
      }
    } else {
      setMessage("Password didn't match");
      setPassword("");
      setConfirmPassword("");
    }
  };
  return (
    <>
      <div className="flex h-screen w-full items-center bg-rainblue-50">
        <div className="m-4 w-full rounded bg-white p-8 shadow-lg md:mx-auto md:max-w-sm">
          <span className="mb-4 block w-full text-center text-xl font-bold">
            CineCritique
          </span>
          <form onSubmit={handleSubmit}>
            <Input
              label="Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter username"
            />
            <Input
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
            <Input
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
            <Input
              label="Verify Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-type your password"
            />
            <p className="mb-2 text-left text-sm text-red-600">{message}</p>
            <Button label="Create Account" />
            <hr class="my-3 h-1 w-full rounded border-0 bg-gray-200 dark:bg-gray-700"></hr>
            <p className="text text-teal-500 mt-2  text-center text-sm">
              Already have an account?
              <NavLink className="pl-1 text-rainblue-100" to="/signin">
                Login
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
