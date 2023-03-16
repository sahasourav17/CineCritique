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
            <label className="mb-1 block text-xs" htmlFor="Id">
              Id
            </label>
            <input
              className="focus:shadow-outline w-full rounded border p-1.5 text-xs outline-none"
              ref={idRef}
              type="number"
              id="id"
            />
            <br />

            <label className="mb-1 block text-xs" htmlFor="name">
              Name
            </label>
            <input
              className="focus:shadow-outline w-full rounded border p-1.5 text-xs outline-none"
              ref={nameRef}
              type="text"
              id="name"
            />
            <br />

            <label className="mb-1 block text-xs" htmlFor="email">
              Email
            </label>
            <input
              className="focus:shadow-outline w-full rounded border p-1.5 text-xs outline-none"
              ref={emailRef}
              type="email"
              id="email"
            />
            <br />

            <label className="mb-1 block text-xs" htmlFor="password">
              Password
            </label>
            <input
              className="focus:shadow-outline mb-2 w-full rounded border p-1.5 text-xs outline-none"
              ref={passwordRef}
              type="password"
              id="password"
            />
            <br />

            <button
              className="rounded bg-green-500 px-2.5 py-1 text-sm  uppercase text-white hover:bg-green-700"
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
