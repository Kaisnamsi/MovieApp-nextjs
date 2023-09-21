"use client";

import { useState } from "react";
import Image from "next/image";
import playButton from "../../assets/images/play_button.svg";
import { AiOutlineSearch } from "react-icons/ai";
import "react-datetime-picker/dist/DateTimePicker.css";
import { useDispatch } from "react-redux";
import { updateSearchResults } from "@/redux/features/moviesQuery-slice";

function formatDate(dateString) {
  // Convert the input date string to a JavaScript Date object
  const dateObject = new Date(dateString);

  // Extract year, month, day, hour, minute, and second components
  const year = dateObject.getFullYear();
  const month = String(dateObject.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(dateObject.getDate()).padStart(2, "0");
  const hour = String(dateObject.getHours()).padStart(2, "0");
  const minute = String(dateObject.getMinutes()).padStart(2, "0");
  const second = String(dateObject.getSeconds()).padStart(2, "0");

  // Create the desired date string in the format "yyyy-mm-dd hh:mm:ss"
  const formattedDate = `${year}-${month}-${day} ${hour}:${minute}:${second}`;

  return formattedDate;
}

export default function MoviesHome2() {
  const [name, setName] = useState("");
  const [initialDate, setInitialDate] = useState(new Date());
  const [afterDate, setAfterDate] = useState(new Date());

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const initial = formatDate(initialDate);
    const after = formatDate(afterDate);

    const response = await fetch(
      `https://821f21ea-3d75-4b17-bac5-f8a0fc587ad2.mock.pstmn.io/timeslot?theater_name=${name}&time_start=${initial}&time_end=${after}`
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
                  <div className="col-md-12">
                    <div className="input-group">
                      <span className="input-group-text">
                        <AiOutlineSearch size={21} />
                      </span>
                      <input
                        required
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        type="text"
                        className="form-control "
                        placeholder="Theater name"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <input
                      required
                      type="datetime-local"
                      className="form-control"
                      value={initialDate}
                      onChange={(e) => {
                        setInitialDate(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      required
                      type="datetime-local"
                      className="form-control"
                      value={afterDate}
                      onChange={(e) => {
                        setAfterDate(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <button className="btn pcari-button">Search</button>
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
