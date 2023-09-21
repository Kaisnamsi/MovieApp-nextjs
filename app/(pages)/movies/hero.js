"use client";

import { useState } from "react";
import Image from "next/image";
import playButton from "../../assets/images/play_button.svg";
import { AiOutlineSearch } from "react-icons/ai";
import "react-datetime-picker/dist/DateTimePicker.css";
import { useDispatch } from "react-redux";
import { updateSearchResults } from "@/redux/features/moviesQuery-slice";

export default function MoviesHome() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `https://821f21ea-3d75-4b17-bac5-f8a0fc587ad2.mock.pstmn.io/specific_movie_theater?theater_name=${searchQuery}&d_date=${selectedDate}`
    );

    if (response.ok) {
      const data = await response.json();
      dispatch(updateSearchResults(data.data));
    }
  };

  return (
    <>
      <div className="container hero-container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-4 d-flex justify-content-center">
            <Image
              className="hero-image-logo"
              priority
              src={playButton}
              alt="Play Button Logo"
            />
          </div>
          <div className="col">
            <div className="h3 text-white hero-header-resp">
              Search your movies here!
            </div>
            <form onSubmit={handleSubmit}>
              <div className="search-movie-form pcari-form mt-2">
                <div className="row g-2 gy-3">
                  <div className="col-md-8">
                    <div className="input-group">
                      <span className="input-group-text">
                        <AiOutlineSearch size={21} />
                      </span>
                      <input
                        required
                        value={searchQuery}
                        onChange={(e) => {
                          setSearchQuery(e.target.value);
                        }}
                        type="text"
                        className="form-control "
                        placeholder="Search by theatre...."
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <input
                      required
                      type="date"
                      className="form-control"
                      value={selectedDate}
                      onChange={(e) => {
                        setSelectedDate(e.target.value);
                      }}
                    />
                  </div>

                  <div className="col-md-6">
                    <button type="submit" className="btn pcari-button">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
