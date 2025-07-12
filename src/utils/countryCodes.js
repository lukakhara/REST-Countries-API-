
export const getCountryNameFromCode = (code, countries) => {
  const country = countries.find(c => c.cca3 === code);
  return country ? country.name.common : code; // Return code if not found
};