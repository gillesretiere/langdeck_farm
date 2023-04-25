import React from 'react'
import { Link } from "react-router-dom"
import { useContext } from "react";
import { cardContext } from "../App";

const ThemeSelCard = ({theme_item}) => {
    let {theme}=theme_item

  return (
<section data-theme="dark">
  <div className="box">
        <div className="flex flex-row justify-start items-center divide-x divide-gray-200 p-3">
            <span className="pr-2 text-xl">{theme}</span>
        </div>
  </div>
</section>  
  )
}

export default ThemeSelCard