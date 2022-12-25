import React from 'react'

const ChartCountryLanguages = ({language}) => {
    let {language_name_fr} = language
    return (
        <div>{language_name_fr}</div>
    )
}

export default ChartCountryLanguages