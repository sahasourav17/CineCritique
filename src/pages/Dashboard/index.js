import React from "react";
import { Footer, Navbar } from "../../components";
import { privateGet } from "../../utilities/apiCaller";
import SignIn from "../SignIn";

const Dashboard = () => {
  const token = JSON.parse(sessionStorage.getItem("token"));
  let isAuthenticated = false;

  const fetchData = async () => {
    try {
      const res = await privateGet("/user", token);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  if (token !== null) {
    isAuthenticated = true;
  }

  return (
    <>
      {isAuthenticated ? (
        <div onLoad={fetchData} className="bg-rainblue-100">
          <Navbar />
          <h1 className="my-6 text-center text-3xl font-bold text-white">
            Dashboard
          </h1>
          <Footer />
        </div>
      ) : (
        <SignIn />
      )}
    </>
  );
};

export default Dashboard;
