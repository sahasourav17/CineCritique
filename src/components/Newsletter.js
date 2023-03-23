import React from "react";

const Newsletter = () => {
  return (
    <>
      <div className="bg-rainblue-100 p-4">
        <div className=" text-white">
          <h2 className="mb-4 text-center text-xl font-medium uppercase text-white">
            Subscribe to our newsletter for more update
          </h2>
          <p className="p-1.5 text-center">
            we're here to bring you the latest updates and recommendations to
            make your movie-watching experience even better. To get personalized
            movie recommendations subscribe to our newsletter.
          </p>
        </div>
        <form className="flex items-center justify-center p-2">
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
