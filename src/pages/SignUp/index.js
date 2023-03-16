import React, { useRef } from "react";
import { publicPost } from "../../utilities/apiCaller";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const idRef = useRef();
  const nameRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await publicPost(
        "/user/signup",
        JSON.stringify({
          id: idRef.current.value,
          name: nameRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value,
        })
      );
      console.log(response.data.status);
    } catch (err) {
      console.log("Some error occured during signing up: ", err.message);
    }
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="Id">id</label>
          <input ref={idRef} type="number" id="id" />
          <br />
          <label htmlFor="name">Name</label>
          <input ref={nameRef} type="text" id="name" />
          <br />
          <label htmlFor="email">Email</label>
          <input ref={emailRef} type="email" id="email" />
          <br />
          <label htmlFor="password">Password</label>
          <input ref={passwordRef} type="password" id="password" />
          <br />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
