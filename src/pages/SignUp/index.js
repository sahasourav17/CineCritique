import React, { useState } from "react";
import { Button, Input } from "../../components/index";
import { publicPost } from "../../utilities/apiCaller";
// import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  //   const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    } catch (err) {
      setMessage("Please Try Again!");
    }
    setEmail("");
    setName("");
    setPassword("");
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
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button label="Signup" />
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
