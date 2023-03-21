import React from "react";
import { Navbar } from "../../components/index";

const Home = () => {
  return (
    <>
      <div className="bg-rainblue-100">
        <Navbar />
        <h1 className="my-6 text-center text-3xl font-bold text-white">Home</h1>
      </div>
    </>
  );
};

export default Home;
