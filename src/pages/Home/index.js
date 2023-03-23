import React, { useState } from "react";
import { Navbar, Footer } from "../../components/index";
import Moviecard from "../../components/Moviecard";
import { publicGet } from "../../utilities/apiCaller";
import SignIn from "../SignIn";

const Home = () => {
  const [movieName, setMovieName] = useState("");
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const token = sessionStorage.getItem("token");
  let isAuthenticated = false;
  if (token !== null) {
    isAuthenticated = true;
  }

  const handleSearch = async (e) => {
    e.preventDefault();
    if (movieName !== null) {
      try {
        setIsLoading(true);
        const endpoint = "/movie/name/" + movieName;
        const response = await publicGet(endpoint);
        if (response.data.status === 200) {
          setData(response.data.data);
        }
      } catch (err) {
        alert("Movie not found!");
      }
      setIsLoading(false);
      setMovieName("");
    }
  };
  return (
    <>
      {isAuthenticated ? (
        <>
          <div className="bg-rainblue-100">
            <Navbar />
            <h1 className="my-6 text-center text-3xl font-bold text-white">
              Home
            </h1>
            <form
              className=" flex items-center justify-center p-2"
              onSubmit={handleSearch}
            >
              <input
                className="text-medium border-b border-b-white bg-rainblue-100 placeholder-white caret-white focus:outline-none"
                type="text"
                placeholder="Type movie name"
                value={movieName}
                onChange={(e) => setMovieName(e.target.value)}
              />
              <button className="bg-white pr-2 pl-2 font-bold uppercase">
                Search
              </button>
            </form>
          </div>
          {data && <Moviecard data={data} />}
          {isLoading && (
            <div className="flex items-center justify-center pt-20">
              <div
                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              >
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Loading...
                </span>
              </div>
            </div>
          )}
          <Footer />
        </>
      ) : (
        <SignIn />
      )}
    </>
  );
};

export default Home;
