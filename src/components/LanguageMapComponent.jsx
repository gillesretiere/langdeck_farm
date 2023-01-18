import React,{Component} from 'react'
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";


function geoJson ({countries}) {
    // code here    
    return;
}

class LanguageMapComponent extends Component {

    constructor(props) {
        super(props);
      }

    componentDidMount() {
        // ... chart code goes here ...
        let root = am5.Root.new(`mapdiv${this.props.language.language_uid}`);
        let countries = this.props.language.language_countries;
        console.log(countries);
        let ctry_name = "NAME"
        let features = [];
        for (var i = 0, len = countries.length; i < len; i++) {
            let xy = countries[i]["xy_coordinates"].split(",");
            let vk_xy=[];
            xy[0] = Number(xy[0]);
            xy[1] = Number(xy[1]);
            vk_xy.push(xy[1],xy[0]);
            let doc = {
                        "type": "Feature",
                        "properties": {
                        "name": `${countries[i]["country_name_fr"]}`
                        },
                        "geometry": {
                        "type": "Point",
                        "coordinates": vk_xy
                        }
                    }
            features.push(doc);  
        };

        let country_points = {
            "type": "FeatureCollection",
            "features" : features};

        console.log(country_points)
        
        root.setThemes([
            am5themes_Animated.new(root)
          ]);
          
        let chart = root.container.children.push(am5map.MapChart.new(root, {
            panX: "translateX",
            projection: am5map.geoMercator(),
            padding: "10px"
        }));

        let polygonSeries = chart.series.push(
            am5map.MapPolygonSeries.new(root, {
              geoJSON: am5geodata_worldLow,
              fill: am5.color(0xdddddd),
              fillOpacity: 0.1,
              stroke: am5.color(0xffffff),
              exclude: ["AQ"]
            })
          );
        
        polygonSeries.mapPolygons.template.states.create("hover",
            {
            fill: am5.color(0x297373),
            stroke: am5.color(0x297373)
            });

        polygonSeries.mapPolygons.template.setAll({
            tooltipText: "{name}",
            templateField: "polygonSettings",
        });








        let cities = {
            "type": "FeatureCollection",
            "features": [{
              "type": "Feature",
              "properties": {
                "name": `${ctry_name}`
              },
              "geometry": {
                "type": "Point",
                "coordinates": [70, 30]
              }
            }, {
              "type": "Feature",
              "properties": {
                "name": "Bangladesh"
              },
              "geometry": {
                "type": "Point",
                "coordinates": [90, 24]
              }
            }, {
              "type": "Feature",
              "properties": {
                "name": "Inde"
              },
              "geometry": {
                "type": "Point",
                "coordinates": [77, 20]
              }
            }]
          };

          let pointSeries = chart.series.push(
            am5map.MapPointSeries.new(root, {
              geoJSON: country_points
            })
          );


          pointSeries.bullets.push(function() {
            return am5.Bullet.new(root, {
              sprite: am5.Circle.new(root, {
                radius: 5,
                fill: am5.color(0xffba00)
              })
            });
          });


        this.root = root;
    }
  
    componentDidUpdate(oldProps) {
        console.log("Updated")

      }

    componentWillUnmount() {
      if (this.root) {
        this.root.dispose();
      }
    }
  
    render() {
      return (
        <div id={`mapdiv${this.props.language.language_uid}`}>Map</div>
      );

    }
  }
export default LanguageMapComponent