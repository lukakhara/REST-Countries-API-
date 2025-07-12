import Header from "./components/Header";
import "./styles/style.css";
import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import Card from "./components/Card";
import Detail from "./components/Detail";


function App() {
 useEffect(() => {
  fetch("https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags,languages,currencies,subregion,borders,tld")
    .then(response => response.json())
    .then(allCountries => {
      const countryMap = {};
      allCountries.forEach(country => {
        countryMap[country.cca3] = country.name.common;
      });
    
      const enhancedCountries = allCountries.map(country => ({
        ...country,
        borderNames: country.borders 
          ? country.borders.map(code => countryMap[code] || code)
          : []
      }));
      
      setCountries(enhancedCountries);
    });
}, []);
  
 

  const [darkMode, setDarkMode] = useState(false);
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  

  console.log("selectedCountry " + selectedCountry);

  // Filter countries based on the selected region
    const filteredCountries = countries.filter((country) => {
      const matchesCountryName = country.name.common.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRegion = filter === "all" || country.region === filter;
       return matchesRegion && matchesCountryName;
    });

  
  console.log(searchTerm)

  return (
    <div data-theme={darkMode} className="bg-background text-text min-h-screen">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
       <Detail selectedCountry={selectedCountry} countries={countries}/>
      <div className="xl:flex xl:space-between xl:items-center xl:justify-between
       px-4 xl:px-10">
          <SearchBar setSearchTerm={setSearchTerm}/>
          <FilterBar setFilter={setFilter}/>
      </div>
      <Card filteredCountries={filteredCountries} setSelectedCountry={setSelectedCountry}/>
     
    </div>
  );
}

export default App;
