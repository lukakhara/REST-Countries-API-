import React from "react";


const Card = ({ filteredCountries,setSelectedCountry }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-12 ">
      {filteredCountries.map((country, index) => (
        <div
          key={index}
          className="bg-elements  rounded-md shadow-md
        hover:shadow-lg transition-shadow  cursor-pointer translate-y-0 hover:-translate-y-1"
            onClick={() => setSelectedCountry(country)}
        >
          <img
            src={country.flags.svg}
            alt={country.name.common}
            className="w-full h-32 object-cover  rounded-t-md mb-4 "
          />
          <div className="px-4 pb-4">
                <h2 className="fontBoldest py-4 text-lg">{country.name.common}</h2>
                <p className="fontBold">
                    Population:{" "}
                    <span className="fontRegular">{country.population.toLocaleString()}</span>
                </p>
                <p className="fontBold">
                    Region: <span className="fontRegular">{country.region}</span>
                </p>
                <p className="fontBold pb-2">
                    Capital: <span className="fontRegular">{country.capital}</span>
                </p>
          </div>
         
        </div>
      ))}
    </div>
  );
};

export default Card;
