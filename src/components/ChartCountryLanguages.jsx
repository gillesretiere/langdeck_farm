import React from 'react'

const ChartCountryLanguages = ({language}) => {

    let {language_name_fr, popularity, popularity_as_float} = language

    return (
        <div className="chart-wrapper"> 
            <div className="language-chart">
                <div className="language-chart-item-1">{language_name_fr}</div>
                <div className="language-chart-item-2">
                    <div className="circle centered-circle-ctry" style={popularity_as_float>0 ? 
                        {width: `${popularity_as_float*100}%`, height: `${popularity_as_float*100}%`} : 
                        {width: `5%`, height: `5%`} }>&nbsp;
                    </div>                    
                </div>
                {popularity_as_float>0 ? <div className="language-chart-item-3">{popularity}</div> : <div className="language-chart-item-3">?</div> }
            </div>
        </div>        
    )
}

export default ChartCountryLanguages
