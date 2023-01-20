import React,{Component} from 'react'
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

function geoJson (countries) {
  // code here    
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

  return (country_points);
}


class LanguageMapComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
          country_points: {},
          countries: []
        }; 
      }

    componentDidMount() {
        // ... chart code goes here ...
        let root = am5.Root.new(`mapdiv${this.props.language.language_uid}`);
        console.log("mounted");

        this.setState({country_points: {}}, function () {
          console.log(this.state.country_points);
         });
         this.setState({countries: this.props.language.language_countries}, function () {
          console.log(this.state.countries);
         });         
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

        this.chart = chart;
        this.polygonSeries = polygonSeries;
        this.root = root;
    }
  
    componentDidUpdate(oldProps) {

        if (oldProps.language.language_uid !== this.props.language.language_uid) {
          let country_points = geoJson(this.props.language.language_countries);
          this.polygonSeries.data.setAll([{
            id: this.props.language.language_uid,
            polygonSettings: {
              fill: am5.color(0xF23D3D),
            }
          }, 
          ]);   

          this.setState({country_points: country_points}, function () {
            console.log(this.state.country_points);
           });

          let pointSeries = this.chart.series.push(
            am5map.MapPointSeries.new(this.root, {
              geoJSON: country_points
            })
          );

          /*
          pointSeries.bullets.push(() => {
            return am5.Bullet.new(this.root, {
              sprite: am5.Circle.new(this.root, {
                radius: 6,
                fill: am5.color(0xFA7F08),
                fillOpacity: 0.5,
              })
            });
          });
*/
          let colorset = am5.ColorSet.new(this.root, {});

          pointSeries.bullets.push(() =>{
            var container = am5.Container.new(this.root, {});

            var circle = container.children.push(
              am5.Circle.new(this.root, {
                radius: 4,
                tooltipY: 0,
                fill: am5.color(0xF23545),
                strokeOpacity: 0,
                tooltipText: "{name}"
              })
            );

            var circle2 = container.children.push(
              am5.Circle.new(this.root, {
                radius: 4,
                tooltipY: 0,
                fill: am5.color(0xF23545),
                strokeOpacity: 0,
                tooltipText: "{name}"
              })
            );

            circle.animate({
              key: "scale",
              from: 1,
              to: 5,
              duration: 600,
              easing: am5.ease.out(am5.ease.cubic),
              loops: Infinity
            });
            circle.animate({
              key: "opacity",
              from: 1,
              to: 0,
              duration: 600,
              easing: am5.ease.out(am5.ease.cubic),
              loops: Infinity
            });

            return am5.Bullet.new(this.root, {
              sprite: container
            });
          });

          pointSeries.data.setAll({
            tooltipText: "{name}",
            title: "{name}"
          });



          console.log(pointSeries.bullets);
   /*       
function animateBullet(circle) {
  var animation = circle.animate([{ property: "scale", from: 1, to: 5 }, { property: "opacity", from: 1, to: 0 }], 1000, am4core.ease.circleOut);
  animation.events.on("animationended", function(event){
    animateBullet(event.target.object);
  })
}
*/
    pointSeries.animate({
            key: "startAngle",
            to: 180,
            loops: Infinity,
            duration: 2000,
            easing: am5.ease.yoyo(am5.ease.cubic)
          });          
      } // endif
        
    }



    componentWillUnmount() {
      if (this.root) {
        this.root.dispose();
      }
    }
  
    render() {
      return (
        <div id={`mapdiv${this.props.language.language_uid}`}></div>
      );

    }
  }
export default LanguageMapComponent