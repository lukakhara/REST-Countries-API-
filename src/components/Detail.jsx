import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Detail = ({ selectedCountry,countries }) => {
    
    if (!selectedCountry) {
    return (
      <div className="px-4 py-10 text-center">
        <p>No country selected</p>
      </div>
    );
    }


     const getBorderCountryNames = (borderCodes) => {
      if (!borderCodes || borderCodes.length === 0) return [];
      
      return borderCodes.map(code => {
        const borderCountry = countries.find(country => country.cca3 === code);
        return borderCountry ? borderCountry.name.common : code;
      });
    };

    const borderCountryNames = getBorderCountryNames(selectedCountry.borders);


    console.log("Selected Country:", selectedCountry);
  return (
    <div>
      <button
        className="my-6 ml-4 shadow-xl shadow-black bg-elements px-4 py-1 rounded-md flex items-center 
            hover:shadow-lg transition-shadow duration-300 mb-6"
      >
        <FontAwesomeIcon className="pr-2" icon={faArrowLeft} />
        Back
      </button>
      <div className="flex flex-col md:flex-row items-start md:items-start space-y-6 md:space-x-6 md:space-y-0 px-4">
        <img
          src={selectedCountry.flags?.png || "https://via.placeholder.com/320x213"}
          alt="Country Flag"
          className="w-full md:w-1/3 h-auto  shadow-lg"
        />
        <div className="md:w-2/3 flex flex-col gap-6">
          <h2 className="text-2xl fontBoldest mb-4">
            {/* {selectedCountry ? selectedCountry.region : "Country Name"} */}
             {selectedCountry.name?.common || "Unknown Country"}
          </h2>
          <div>
            <p className="mb-2">
              <strong>Native Name:</strong> {selectedCountry.name.official || "N/A"}
            </p>
            <p className="mb-2">
              <strong>Population:</strong> {selectedCountry.population.toLocaleString() || "N/A"}
            </p>
            <p className="mb-2">
              <strong>Region:</strong> {selectedCountry.region || "N/A"}
            </p>
            <p className="mb-2">
              <strong>Sub Region:</strong> {selectedCountry.subregion || "N/A"}
            </p>
            <p className="mb-2">
              <strong>Capital:</strong> {selectedCountry.capital || "N/A"}
            </p>
          </div>
          <div>
            <p className="mb-2">
              <strong>Top Level Domain:</strong> {selectedCountry.tld || "N/A"}
            </p>
            <p className="mb-2">
              <strong>Currencies:</strong>  {selectedCountry.currencies
                ? Object.values(selectedCountry.currencies)
                    .map((c) => c.name)
                    .join(", ")
                : "N/A"}
            </p>
            <p className="mb-2">
              <strong>Languages:</strong>  {selectedCountry.languages
                ? Object.values(selectedCountry.languages).join(", ")
                : "N/A"}
            </p>
          </div>
          <div>
            <h2 className="fontBold">Border Countries</h2>
       {borderCountryNames.length > 0 ? (
              <ul className="flex flex-wrap gap-2 pb-4">
                {borderCountryNames.map((borderName, index) => (
                  <li key={index}>
                    <button className="bg-elements px-3 py-1 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
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
