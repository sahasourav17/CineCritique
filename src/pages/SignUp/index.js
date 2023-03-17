import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import { publicPost } from "../../utilities/apiCaller";

const SignUp = () => {
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  //   const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({
      id: id,
      name: name,
      email: email,
      password: password,
    });
    try {
      const response = await publicPost(
        "/user/signup",
        JSON.stringify({
          id: id,
          name: name,
          email: email,
          password: password,
        })
      );
      console.log(response);
    } catch (err) {
      console.log("Some error occured during signing up: ", err);
    }
  };
  return (
    <>
      <div className="flex h-screen w-full items-center">
        <div className="m-4 w-full rounded bg-white p-8 shadow-lg md:mx-auto md:max-w-sm">
          <span className="item-center mb-4 block w-full text-xl font-bold">
            CineCritique
          </span>
          <form className="mb-4" onSubmit={handleSubmit}>
            <Input
              label="Id"
              type="number"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
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
            <button
              className="rounded bg-green-500 px-2.5 py-1 text-xs text-white hover:bg-green-600"
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
