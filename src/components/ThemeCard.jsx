import React from 'react'
import { Link } from "react-router-dom"


const ThemeCard = ({theme_item}) => {
    let {language_uid, theme} = theme_item;
    console.log(theme_item);
  return (
<section data-theme="dark">
  <div class="box">
    <Link to={`/translators/${language_uid}`}>
        <div className="flex flex-row justify-start items-center divide-x divide-gray-200 p-3">
            <span className="pr-2 text-xl">{theme}</span>
        </div>
    </Link>    
  </div>
</section>  
  )
}

export default ThemeCard