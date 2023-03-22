import React, { useState } from "react";
import { Navbar } from "../../components";
import { privateGet } from "../../utilities/apiCaller";
import SignIn from "../SignIn";

const Dashboard = () => {
  //   const [response, setResponse] = useState();
  const token = JSON.parse(sessionStorage.getItem("token"));
  let isAuthenticated = false;

  const fetchData = async () => {
    try {
      const res = await privateGet("/user", token);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
    // setResponse(res);
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
        </div>
      ) : (
        <SignIn />
      )}
    </>
  );
};

export default Dashboard;
