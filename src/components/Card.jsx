import React from "react";
import { getRegion } from "../utils/getRegion";

const Card = ({ filteredCountries,setSelectedCountry }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-14 gap-4
                    md:w-full  mx-auto md:mx-0">
      {filteredCountries.map((country, index) => (
        <div
          key={index}
          className="bg-elements  rounded-md shadow-md flex flex-col justify-between 
        hover:shadow-lg transition-shadow  cursor-pointer translate-y-0 hover:-translate-y-1 gap-6"
            onClick={() => setSelectedCountry(country)}
        >
          <img
            src={country.flags.svg}
            alt={country.name.common}
            width={350}
            height={153}
            className="flex-1 w-full max-h-[180px] bg-center  object-cover  rounded-t-md "
          />
          <div className=" px-6 pb-8">
                <h2 className="fontBoldest pb-4 text-lg">{country.name.common}</h2>
                <p className="fontBold">
                    Population:{" "}
                    <span className="fontRegular">{country.population.toLocaleString()}</span>
                </p>
                <p className="fontBold">
                    Region: <span className="fontRegular">{getRegion(country.subregion)}</span>
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
