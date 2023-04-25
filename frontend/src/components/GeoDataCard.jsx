import React from 'react'

import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

import AmChart from "../components/AmChart"

const GeoDataCard = ({language}) => {
  let {language_uid} = language 
  return (
    <div>
        GeoDataCard<AmChart key={language_uid} language={language_uid}></AmChart>
    </div>
  )
}

export default GeoDataCard