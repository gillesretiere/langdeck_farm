import React from 'react'
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5geodata_data_countries from "@amcharts/amcharts5-geodata/data/countries";
import am5geodata_data_countries2 from "@amcharts/amcharts5-geodata/data/countries2";


const CountryMapChart = ({country}) => {
  let {country_uid, country_iso2, country_name_fr} = country

  var  MyGlobalObject={}

  function CreateMyChart(IdDivForDrawChart, ctry){
     
      if(MyGlobalObject[IdDivForDrawChart]){   //check if exist chart dispose that
         MyGlobalObject[IdDivForDrawChart].dispose()
      }
      var  root = am5.Root.new("chartdiv");
      // ... some code
      var chart = root.container.children.push(am5map.MapChart.new(root, {
        panX: "translateX",
        projection: am5map.geoMercator()
      }));
      var polygonSeries = chart.series.push(
        am5map.MapPolygonSeries.new(root, {
          geoJSON: am5geodata_worldLow,
          fill: am5.color(0x88ac9b),
          stroke: am5.color(0xffffff),
          exclude: ["AQ"]
        })
      );
 
      polygonSeries.mapPolygons.template.setAll({
        tooltipText: "{name}",
        templateField: "polygonSettings"
      });
 
      polygonSeries.data.setAll([{
        id: ctry,
        polygonSettings: {
          fill: am5.color(0xff0000)
        }
      },
      ])
       MyGlobalObject[IdDivForDrawChart]=root     // store chart in global object
  }

  //CreateMyChart(`chartdiv${country_iso2}`,{country_iso2});
  CreateMyChart("chartdiv",{country_iso2});

  return (
    <div>
        <div class="chartdiv" id={`chartdiv${country_iso2}`}></div>
        {country_name_fr}
    </div>
   
  )
}

export default CountryMapChart
