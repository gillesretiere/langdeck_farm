import React from 'react'
import { Link } from "react-router-dom"
import { useContext } from "react";
import { cardContext } from "../App";

const VocaSelCard = ({vocabulary_item}) => {
    let {vocabulary_unit, }=vocabulary_item

  return (
<section data-theme="dark">
  <div className="box">
        <div className="flex flex-row justify-start items-center divide-x divide-gray-200 p-3">
            <span className="pr-2 text-xl">{vocabulary_unit}</span>
        </div>
  </div>
</section>  
  )
}

export default VocaSelCard