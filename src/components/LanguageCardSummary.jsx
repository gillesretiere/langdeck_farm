import React from 'react'
// or less ideally
import { Link } from "react-router-dom"
import LanguageCardSummaryHeader from "../components/LanguageCardSummaryHeader";
import LanguageCardSummaryChart from "../components/LanguageCardSummaryChart";


const LanguageCardSummary = ({language}) => { 
  let {language_uid, language_name_en, language_name_native, language_iso2,language_wals_code} = language

  const handleClick = () => {
    // implementation details
  };


  return (
    <>
    <div className="bg-white">
      <div className="card-wrapper-row">  
        <div className="card-wrapper-column-left">   
          <div className="p-2 card-header card-header-l">Language Fact Sheet : {language_name_en}</div>
            <div className="container w-full h-screen flex-1 flex-col md:flex-row">  
                <div className="split basis-1/2 pr-2">
                <div className="card-h4"><p>Lorem ipsum dolor sit amet.</p><p>Et modi quis et galisum dolorem qui molestias assumenda non libero iusto sed provident dolor. 
        Id blanditiis voluptas non consequatur reprehenderit sit voluptatem aliquam et ipsa sunt ut quidem quia et pariatur unde ex atque architecto. </p>
        <p>Et commodi molestias quo eius voluptatem sed tenetur expedita et distinctio aliquid est voluptatibus sunt in error beatae aut ducimus assumenda. 
            Aut ratione tempora At sint adipisci qui impedit ipsam et totam voluptas et delectus expedita hic optio asperiores. </p></div>
                </div>        
                <div className="split basis-1/2 pl-2">
                    <div className="card-h1">{language_name_en}</div>
                    <div className="card-h2">{language_name_native}</div>
                    <hr/>
                    <div className="card-label">Code Alpha-2</div>
                    <div className="card-h3">{language_iso2}</div>
                    <hr/>
                    <div className="card-label">Code WALS</div>
                    <div className="card-h3">{language_wals_code}</div>   
                    <hr/>
                    <Link to={`/translators`}>
                        <div>Choose this language</div>
                    </Link>    
                </div>
            </div>      
        </div>
      </div>
     </div>
    </>
    )
}

export default LanguageCardSummary