import React from 'react'
import { useContext } from "react";
import { cardContext } from "../App";
import { Link } from "react-router-dom"

const HeaderThemeCard = () => {
    const menuItems = useContext(cardContext);
    // console.log(menuItems.language.language_uid)    
    // console.log(translator)
  return (
    <>
    <div className="grid grid-cols-2">
  <div className="box">
        <div className="flex flex-row justify-start items-center divide-x divide-gray-200 p-3">
          <span className="pr-2 flex justify-center">{menuItems.theme.theme}</span>
        </div>
  </div>
  </div>
    </>
  )
}

export default HeaderThemeCard