import React from "react";
import { useState } from "react";
import {getRegion} from "../utils/getRegion";

const FilterBar = ({ filter, setFilter }) => {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  return (
    <select
      defaultValue={filter}
      onChange={(e) => setFilter(e.target.value)}
      className="w-[70%] max-w-[200px] px-4 py-4 rounded shadow bg-elements mb-4 xl:mb-0 "
    >
      <option selected hidden disabled >
        Filter by Region
      </option>
      {regions.map((region) => (
        <option key={region} value={region}>
          {region}
        </option>
      ))}
    </select>
  );
};

export default FilterBar;
