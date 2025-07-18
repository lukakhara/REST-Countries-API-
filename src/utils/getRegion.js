export const getRegion = (subRegion) => {
    const mapping = {
      "Southern Asia": "Asia",
      "Western Asia": "Asia",
      "South-Eastern Asia": "Asia",
      "Eastern Asia": "Asia",
      "Central Asia": "Asia",
      "Northern Europe": "Europe",
      "Southern Europe": "Europe",
      "Western Europe": "Europe",
      "Eastern Europe": "Europe",
      "Northern Africa": "Africa",
      "Sub-Saharan Africa": "Africa",
      "Eastern Africa": "Africa",
      "Middle Africa": "Africa",
      "Southern Africa": "Africa",
      "Western Africa": "Africa",
      "Caribbean": "Americas",
      "Central America": "Americas",
      "North America": "Americas",
      "South America": "Americas",
      "Latin America and the Caribbean": "Americas",
      "Australia and New Zealand": "Oceania",
      "Melanesia": "Oceania",
      "Micronesia": "Oceania",
      "Polynesia": "Oceania",
      "Antarctica": "Antarctic",
      "Polar": "Antarctic"
    };
    return mapping[subRegion] || "Unknown";
  };

  console.log('testing' + getRegion("Southern Asia")); // Output: "Asia"