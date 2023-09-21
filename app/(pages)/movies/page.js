"use client";
import { useState } from "react";
import MoviesHome from "./hero";
import MoviesHome2 from "./hero2";
import MoviesContent from "./content";

export default function Movies() {
  const [filterType, setFilterType] = useState("theater");

  const handleFilterChange = (newFilterType) => {
    setFilterType(newFilterType);
  };

  return (
    <>
      {filterType === "theater" ? <MoviesHome /> : <MoviesHome2 />}

      <MoviesContent
        filterType={filterType}
        onFilterChange={handleFilterChange}
      />
    </>
  );
}
