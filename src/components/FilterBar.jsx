import React from "react";
import { useState } from "react";

const FilterBar = ({ filter, setFilter }) => {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  return (
    <select
      defaultValue={filter}
      onChange={(e) => setFilter(e.target.value)}
      className="px-4 py-2 rounded shadow bg-elements"
    >
      <option selected hidden disabled>
        Filter by region
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
