import React from 'react'

const CountryDetailMap = ({country, setUpdatedCountry}) => {
 let {country_uid, region_uid, country_name_en, country_name_fr, country_name_native, country_iso2, country_national_flag, country_summary, country_region_fr, country_languages} = country   

 const handleClick = (event) => {
    setUpdatedCountry("rus");
    console.log(event.target.value);
    event.preventDefault();
  };
  
  return (
    <div><h1 onClick={handleClick}>{country_name_fr}</h1>CountryDetailMap</div>
  )
}

export default CountryDetailMap