import React from 'react'
import { useContext } from "react";
import { cardContext } from "../App";
import { Link } from "react-router-dom"

const HeaderTranslatorCard = () => {
    const menuItems = useContext(cardContext);
    // console.log(menuItems.language.language_uid)    
    // console.log(translator)
  return (
    <>
    <div className="grid grid-cols-2">
  <div className="box">
        <div className="flex flex-row justify-start items-center divide-x divide-gray-200 p-3">
          <span className="basis-1/3 pr-2 flex justify-center items-center"><img className="rounded-full" src={menuItems.language.flag_icon} alt="" /></span>
          <span className="basis-2/3 pr-2 flex justify-center">{menuItems.language.language_name_en}</span>
        </div>
  </div>
  </div>
    </>
  )
}

export default HeaderTranslatorCard