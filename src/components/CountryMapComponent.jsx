import React,{Component} from 'react'
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

class CountryMapComponent extends Component {

    constructor(props) {
        super(props);
      }

    componentDidMount() {
      // ... chart code goes here ...
      
      let root = am5.Root.new(`chartdiv${this.props.country.country_iso2}`);
      let setUpdatedCountry = this.props.setUpdatedCountry;

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
          fill: am5.color(0x2F3D40),
          fillOpacity: 0.9,
          stroke: am5.color(0xBFBFBF),
          exclude: ["AQ"]
        })
      );
      
      /*
      chart.chartContainer.set("background", am5.Rectangle.new(root, {
        fill: am5.color(0x015958),
        fillOpacity: 0.1
      }));
      */
      polygonSeries.mapPolygons.template.setAll({
        tooltipText: "{name}",
        templateField: "polygonSettings",
      });

      polygonSeries.mapPolygons.template.events.on("click", function(ev) {
        setUpdatedCountry(ev.target.dataItem._settings.id);
      });

      // Add zoom control
      // https://www.amcharts.com/docs/v5/charts/map-chart/map-pan-zoom/#Zoom_control
      chart.set("zoomControl", am5map.ZoomControl.new(root, {}));

      // Set clicking on "water" to zoom out
      chart.chartContainer.get("background").events.on("click", function () {
          chart.goHome();
      })

      this.polygonSeries = polygonSeries;
      this.chart = chart;
      this.root = root;
      
    }
  
    componentDidUpdate(oldProps) {
        if (oldProps.country.country_iso2 !== this.props.country.country_iso2) {
            this.polygonSeries.data.setAll([{
                id: this.props.country.country_iso2,
                polygonSettings: {
                  fill: am5.color(0xF23D3D),
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
        <div className="shadow-lg border p-7">
        <div id={`chartdiv${this.props.country.country_iso2}`}> </div>
        </div>
      );

    }
  }
export default CountryMapComponent