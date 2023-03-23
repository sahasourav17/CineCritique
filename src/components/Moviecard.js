import React from "react";

const Moviecard = ({ data }) => {
  return (
    <>
      {data.Response === "True" ? (
        <div className="pt -4 flex--movie align-center flex flex-wrap justify-center">
          <div className="m-4 flex w-full max-w-4xl justify-between overflow-hidden rounded shadow-lg md:w-full lg:w-1/2">
            <div className="md:flex-shrink-0">
              <img className="md:w-56" src={data.Poster} alt={data.Title} />
            </div>
            <div className="bg-color-333 flex flex-grow flex-col px-8 py-4">
              <h3 className="movie--title text-2xl font-bold text-rainblue-100 md:text-2xl lg:text-2xl">
                {data.Title}
              </h3>
              <span className="movie--year text-xl lg:mb-3 lg:text-sm">
                {data.Year}
              </span>
              <div className="flex-grow">
                <span className="text-black font-semibold">Rating: </span>
                <span className="movie--year text-lg lg:mb-3 lg:text-sm">
                  {data.imdbRating}/10
                </span>
                <p className="truncate-overflow text-black text-medium mb-2 leading-snug md:text-base lg:text-base">
                  {data.Actors}
                </p>
                <p className="truncate-overflow text-black text-medium mb-2 leading-snug md:text-base lg:text-base">
                  {data.Plot}
                </p>
                <span className="text-black font-semibold">Genre: </span>
                <span className="text-rainblue-50">{data.Genre}</span>
              </div>
              <div className="button-container mb-2 flex justify-between">
                <button className="rounded bg-rainblue-50 py-2 px-2 text-sm font-semibold text-white lg:text-sm">
                  More Info
                </button>
                <button className="rounded bg-rainblue-50 py-2 px-2 text-sm font-semibold text-white lg:text-sm">
                  Review Movie
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="pt-6 text-center text-red-500">{data.Error}</p>
      )}
    </>
  );
};

export default Moviecard;
