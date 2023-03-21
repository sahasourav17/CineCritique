import React, { useRef } from "react";
import { publicPost } from "../../utilities/apiCaller";

function SignIn() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input ref={emailRef} type="email" id="email" />
        <br />
        <label htmlFor="password">Password</label>
        <input ref={passwordRef} type="password" id="password" />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default SignIn;
