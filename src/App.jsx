import Header from "./components/Header";
import "./styles/style.css";
import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import Card from "./components/Card";
import Detail from "./components/Detail";
import { getRegion} from "./utils/getRegion";

function App() {

  useEffect(() => {
    document.title = 'Country Info App';
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,population,cca3,capital,flags,languages,currencies,subregion,borders,tld"
    ) 
      .then((response) => response.json())
      .then((allCountries) => {
        const countryMap = {};
        allCountries.forEach((country) => {
          countryMap[country.cca3] = country.name.common;
        });

        const enhancedCountries = allCountries.map((country) => ({
          ...country,
          borderNames: country.borders
            ? country.borders.map((code) => countryMap[code] || code)
            : [],
        }));

        setCountries(enhancedCountries);
      });
  }, []);

 

  const [darkMode, setDarkMode] = useState(false);
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);



  // Filter countries based on the selected region
  const filteredCountries = countries.filter((country) => {
    const matchesCountryName = country.name.common
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesRegion = filter === "all" || getRegion(country.subregion) === filter;
    return matchesRegion && matchesCountryName;
  });

 

  return (
    <div data-theme={darkMode} className="bg-background text-text min-h-screen   ">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      {selectedCountry ? (
        <Detail selectedCountry={selectedCountry} 
                countries={countries} 
                setSelectedCountry={setSelectedCountry} />
      ) : (
        <div className="xl:mx-18 w-[90%] mx-auto">
          <div
            className="sm:flex flex-row sm:space-between sm:items-center sm:justify-between mx-auto
           "
          >
            <SearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
            <FilterBar setFilter={setFilter} filter={filter}/>
          </div>
          <Card
            filteredCountries={filteredCountries}
            setSelectedCountry={setSelectedCountry}
          />
        </div>
      )}
    </div>
  );
}

export default App;
