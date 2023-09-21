"use client";

import DefaultCard from "@/app/components/defaultCard";
import { useSelector } from "react-redux";

export default function MoviesContent({ filterType, onFilterChange }) {
  const searchResults = useSelector(
    (state) => state.moviesqueryReducer.value.searchResults
  );

  function onClickFilterTheater(e) {
    e.preventDefault();
    onFilterChange("theater");
  }

  function onClickFilterTime(e) {
    e.preventDefault();
    onFilterChange("time");
  }

  return (
    <>
      <div className="main-content">
        <div className="container">
          {/* Content Header */}
          <div className="row">
            <div className="col d-flex justify-content-between align-items-center">
              <div className="h3 text-white">Search Results</div>
              <div className="h5 filter-tags text-end d-flex">
                <a
                  className={`me-3 ${
                    filterType === "theater" ? "choosen-filter" : ""
                  }`}
                  href=""
                  onClick={onClickFilterTheater}
                >
                  Search by Theater
                </a>

                <a
                  className={`${filterType === "time" ? "choosen-filter" : ""}`}
                  href=""
                  onClick={onClickFilterTime}
                >
                  Search by Time Slot
                </a>
              </div>
            </div>
          </div>
          {/* Content */}
          <div className="row mt-4">
            <div className="col">
              {/* Content Row */}
              <div className="row g-3">
                {searchResults &&
                  searchResults.length != 0 &&
                  searchResults.map((movie) => {
                    return (
                      <div
                        className="col-xl-4 col-md-6"
                        key={movie["Movie_ID"]}
                      >
                        <DefaultCard
                          genre={movie.Genre}
                          title={movie.Title}
                          duration={movie.Duration}
                          views={movie.Views}
                          bgImage={movie.Poster}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
