import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { getRegion } from "../utils/getRegion";

const Detail = ({ selectedCountry, countries, setSelectedCountry }) => {
  const [countryMap, setCountryMap] = useState({});

  // Create the country map when countries data changes
  useEffect(() => {
    const map = {};
    countries.forEach((country) => {
      map[country.name.common.toLowerCase()] = country;
    });
    setCountryMap(map);
  }, [countries]);

  const findCountryOptimized = (countryName) => {
    return countryMap[countryName.toLowerCase()];
  };

  const getBorderCountryNames = (borderCodes) => {
    if (!borderCodes || borderCodes.length === 0) return [];

    return borderCodes.map((code) => {
      const borderCountry = countries.find((country) => country.cca3 === code);
      return borderCountry ? borderCountry.name.common : code;
    });
  };

  if (!selectedCountry) {
    return (
      <div className="py-10 text-center">
        <p>No country selected</p>
      </div>
    );
  }

  const borderCountryNames = getBorderCountryNames(selectedCountry.borders);

  return (
    <div className="px-10">
      <button
        className=" shadow-xl shadow-black bg-elements   py-1 rounded-md flex items-center 
            hover:shadow-lg transition-shadow duration-300 my-14 cursor-pointer"
        onClick={() => setSelectedCountry(null)}
      >
        <FontAwesomeIcon className="pr-2" icon={faArrowLeft} />
        Back
      </button>
      <div
        className="flex flex-col md:flex-row items-start md:items-start 
                      space-y-6 md:space-x-6 md:space-y-0  gap-10"
      >
        <img
          src={
            selectedCountry.flags?.svg || "https://via.placeholder.com/320x213"
          }
          alt="Country Flag"
          className="flex-1 w-full  h-auto bg-cover md:w-1/3 shadow-lg"
          width={400}
          height={267}
        />
        <div className=" md:w-2/3 flex flex-col gap-10 flex-1">
          <h2 className="text-2xl fontBoldest ">
            {selectedCountry.name?.common || "Unknown Country"}
          </h2>
          <div className="xl:flex gap-4 justify-between flex-wrap ">
            <div className="">
              <p className="mb-2">
                <strong>Native Name:</strong>{" "}
                {selectedCountry.name.official || "N/A"}
              </p>
              <p className="mb-2">
                <strong>Population:</strong>{" "}
                {selectedCountry.population.toLocaleString() || "N/A"}
              </p>
              <p className="mb-2">
                <strong>Region:</strong>{" "}
                {getRegion(selectedCountry.subregion) || "N/A"}
              </p>
              <p className="mb-2">
                <strong>Sub Region:</strong>{" "}
                {selectedCountry.subregion || "N/A"}
              </p>
              <p className="mb-2">
                <strong>Capital:</strong> {selectedCountry.capital || "N/A"}
              </p>
            </div>
            <div className="">
              <p className="mb-2">
                <strong>Top Level Domain:</strong>{" "}
                {selectedCountry.tld || "N/A"}
              </p>
              <p className="mb-2">
                <strong>Currencies:</strong>{" "}
                {selectedCountry.currencies
                  ? Object.values(selectedCountry.currencies)
                      .map((c) => c.name)
                      .join(", ")
                  : "N/A"}
              </p>
              <p className="mb-2">
                <strong>Languages:</strong>{" "}
                {selectedCountry.languages
                  ? Object.values(selectedCountry.languages).join(", ")
                  : "N/A"}
              </p>
            </div>
          </div>

          <div className=" xl:flex xl:items-center gap-4 mt-6 ">
            <h2 className="fontBold ">Border Countries:</h2>
            {borderCountryNames.length > 0 ? (
              <ul className="flex flex-wrap gap-2">
                {borderCountryNames.map((borderName, index) => (
                  <li key={index} className="cursor-pointer ">
                    <button
                      className="bg-elements cursor-pointer px-3 py-1 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
                      onClick={() =>
                        setSelectedCountry(findCountryOptimized(borderName))
                      }
                    >
                      {borderName}
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No border countries</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
