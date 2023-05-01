import React, { useRef, useLayoutEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import * as am5plugins_exporting from "@amcharts/amcharts5/plugins/exporting";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const CountryCardMap = ({country}) => {
    let {country_uid, region_uid, country_name_en, country_name_fr, country_name_native, country_iso2, country_national_flag, country_summary, country_region_fr, country_languages} = country;
    
    useLayoutEffect(() => {
        let root = am5.Root.new(`chartdiv${country_iso2}`);
    
        root.setThemes([
            am5themes_Animated.new(root)
            ]);
    
            let chart = root.container.children.push(am5map.MapChart.new(root, {
            panX: "translateX",
            projection: am5map.geoMercator(),
            padding: "10px",
            }));
    
            let polygonSeries = chart.series.push(
            am5map.MapPolygonSeries.new(root, {
                geoJSON: am5geodata_worldLow,
                fill: am5.color(0x20732D),
                stroke: am5.color(0xffffff),
                exclude: ["AQ"]
            })
            );
    

            polygonSeries.mapPolygons.template.setAll({
                tooltipText: "{name}",
                templateField: "polygonSettings"
              });
        

              console.log(`Initialisation de chartdiv${country_iso2}`)

              polygonSeries.mapPolygons.template.events.on("click", function(ev) {
                polygonSeries.zoomToDataItem(ev.target.dataItem);
                polygonSeries.data.setAll([{
                  id: ev.target.dataItem._settings.id,
                  polygonSettings: {
                    fill: am5.color(0xF23D3D)
                  }
                }, 
                ]); 
                
                let BASE_URL = "http://141.94.204.108:8000/countries/alpha2";
                fetch(`${BASE_URL}/${ev.target.dataItem._settings.id}`)
                .then(response=>response.json())
                .then(json=>{
                    console.log(json);
                    console.log("Change State in componentDidMount");
                    console.log(ev.target.dataItem.dataContext.name);
                    let el_cnfr = document.getElementById("country-name-fr");
                    el_cnfr.textContent = ev.target.dataItem.dataContext.name;
                    let el_cnnt = document.getElementById("country-name-native");
                    el_cnnt.textContent = json.country_name_native;   
                    let el_cnen = document.getElementById("country-name-en");
                    el_cnen.textContent = json.country_name_en;      
                    let el_cniso = document.getElementById("country-name-iso");
                    el_cniso.textContent = json.country_iso2;                                       
                    let el_flag = document.getElementById("country-flag");
                    el_flag.src = json.country_national_flag;
                    document.getElementById("country-languages-list").innerHTML = json.country_languages;
                    // currentComponent.setState({ country: json });
                }) 
                
              });


        root.current = root;
    
        return () => {
        console.log(`Initialisation de chartdiv${country_iso2}`)
          root.dispose();
        };
      }, []);
   
  return (
    <div className="map-container">
        <div className="country-map-map" id={`chartdiv${country_iso2}`}></div>
    </div>
  )
}

export default CountryCardMap