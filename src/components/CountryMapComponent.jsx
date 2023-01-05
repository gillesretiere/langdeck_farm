import React,{Component} from 'react'
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

class Beta2 extends Component {

    constructor(props) {
        super();
      }

    componentDidMount() {
      // ... chart code goes here ...
      let root = am5.Root.new(`chartdiv${this.props.country.country_iso2}`);

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
          fill: am5.color(0x88ac9b),
          stroke: am5.color(0xffffff),
          exclude: ["AQ"]
        })
      );

      polygonSeries.mapPolygons.template.setAll({
        tooltipText: "{name}",
        templateField: "polygonSettings"
      });

      this.polygonSeries = polygonSeries;
      this.chart = chart;
      this.root = root;
    }
  
    componentDidUpdate(oldProps) {
        console.log("OldProps : " + oldProps.country.country_iso2);
        console.log("Props : " + this.props.country.country_iso2);
        console.log("polygonSeries : " + this.polygonSeries.data);
 
        if (oldProps.country.country_iso2 !== this.props.country.country_iso2) {
            this.polygonSeries.data.setAll([{
                id: this.props.country.country_iso2,
                polygonSettings: {
                  fill: am5.color(0xff0000)
                }
              }, 
              ]);       
        }
      }

    componentWillUnmount() {
      if (this.root) {
        this.root.dispose();
      }
    }
  
    render() {
      return (
        <div id={`chartdiv${this.props.country.country_iso2}`}></div>
      );
    }
  }
export default Beta2