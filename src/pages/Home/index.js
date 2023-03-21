import React from "react";
import { Navbar } from "../../components/index";
import SignIn from "../SignIn";

const Home = () => {
  const token = sessionStorage.getItem("token");
  let isAuthenticated = false;
  if (token !== null) {
    isAuthenticated = true;
  }
  return (
    <>
      {isAuthenticated ? (
        <div className="bg-rainblue-100">
          <Navbar />
          <h1 className="my-6 text-center text-3xl font-bold text-white">
            Home
          </h1>
        </div>
      ) : (
        <SignIn />
      )}
    </>
  );
};

export default Home;
