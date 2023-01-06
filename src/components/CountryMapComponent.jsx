import React,{Component, useState} from 'react'
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import CountryCardMini from "../components/CountryCardMini"

class CountryMapComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
          country: []
        }
        this.delta = this.delta.bind(this);
      }


    delta = () => {
      this.setState({
        country: this.state.country
      });
    }

    handleClick = (id) => {
        console.log('Click happened');
        let BASE_URL = "http://141.94.204.108:8000/countries"
        fetch(`${BASE_URL}/${id}`)
        .then(response=>response.json())
        .then(json=>{
            console.log(json);
        }) 
    };

    componentDidMount() {
      // ... chart code goes here ...

      let root = am5.Root.new(`chartdiv${this.props.country.country_iso2}`);

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

      polygonSeries.mapPolygons.template.events.on("click", function(ev) {
        polygonSeries.zoomToDataItem(ev.target.dataItem);
        polygonSeries.data.setAll([{
          id: ev.target.dataItem._settings.id,
          polygonSettings: {
            fill: am5.color(0xF23D3D)
          }
        }, 
        ]); 
        console.log(ev.target.dataItem._settings.id)
        let BASE_URL = "http://141.94.204.108:8000/countries/alpha2";
        let currentComponent = this;
        fetch(`${BASE_URL}/${ev.target.dataItem._settings.id}`)
        .then(response=>response.json())
        .then(json=>{
            console.log(json);
            // currentComponent.setState({ country: json });
        }) 

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
        <div className="map-container">
        <div className="country-map-map" id={`chartdiv${this.props.country.country_iso2}`}>
          
          {/*<div className="country-map-card"><CountryCardMini country={this.props.country}></CountryCardMini></div>*/}
        </div><div className="map-filler"><div className="country-map-card"><CountryCardMini country={this.props.country}></CountryCardMini></div></div>
        
        </div>
      );
    }
  }
export default CountryMapComponent