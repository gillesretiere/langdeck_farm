import React from 'react'

const CountryWFBPrimary = ({wfb_facts}) => {
    if (wfb_facts) {
        console.log(wfb_facts)
        return (
            <>
                <div className="card-label">Location</div>
                <div className="card-h4">{wfb_facts.Location}</div>         
                <hr/>                
                <div className="card-label">Area</div>
                <div className="card-h4">{wfb_facts.Area.total}</div>
                <hr/>             
                <div className="card-label">Land boundaries</div>
                <div className="card-h4">{wfb_facts.Land_boundaries.border_countries}</div>         
                <hr/>                
                <div className="card-label">Climate</div>
                <div className="card-h4">{wfb_facts.Climate}</div>         
                <hr/>          
                <div className="card-label">Population</div>
                <div className="card-h4">{wfb_facts.Population}</div>         
                <hr/>                
                <div className="card-label">Ethinc groups</div>
                <div className="card-h4">{wfb_facts.Ethnic_groups}</div>         
                <hr/>             
                <div className="card-label">Languages</div>
                <div className="card-h4">{wfb_facts.Languages}</div>         
                <hr/>                
                <div className="card-label">Religions</div>
                <div className="card-h4">{wfb_facts.Religions}</div>         
                <hr/>                                              
            </>
        )
    } else {
        return (
            <>     
            </>
        )
    }
}

export default CountryWFBPrimary