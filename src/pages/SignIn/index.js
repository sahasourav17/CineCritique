import React, { useState } from "react";
import { Button, Input } from "../../components/index";
import { publicPost } from "../../utilities/apiCaller";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
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
        navigate("/");
      }
    } catch (err) {
      setMessage("Please Try Again!");
    }
  };
  return (
    <>
      <div className="flex h-screen w-full items-center">
        <div className="m-4 w-full rounded bg-white p-8 shadow-lg md:mx-auto md:max-w-sm">
          <span className="mb-4 block w-full text-center text-xl font-bold">
            CineCritique
          </span>
          <p className="mb-2 text-left text-sm text-green-600">{message}</p>
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
            <p className="text mb-2 text-left text-teal-500">Create Account</p>
            <Button label="Sign In" />
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
