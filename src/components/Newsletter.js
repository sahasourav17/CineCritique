import React from "react";

const Newsletter = () => {
  return (
    <>
      <div className="bg-rainblue-100 p-3">
        <div className=" text-white">
          <h2 className="mb-2 text-center text-xl font-medium uppercase text-white md:text-lg">
            Subscribe to our newsletter for more update
          </h2>
        </div>
        <form className="flex items-center justify-center p-2 md:w-full">
          <input
            className="text-medium border-b border-b-white bg-rainblue-100 placeholder-white caret-white focus:outline-none"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email address"
          />
          <button className="bg-white pr-2 pl-2 font-bold uppercase">
            +Subscribe
          </button>
        </form>
      </div>
    </>
  );
};

export default Newsletter;
