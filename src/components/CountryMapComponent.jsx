import React,{Component, useState, useRef} from 'react'
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import * as am5plugins_exporting from "@amcharts/amcharts5/plugins/exporting";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import CountryCardMini from "../components/CountryCardMini"



class CountryMapComponent extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
          country: ""
        };

        this.dataContextId = React.createRef();
        this.delta = this.delta.bind(this);
      }


    delta = () => {
      this.setState({
        country: this.state.country
      });
      console.log("delta");
    }

    handleClick = (id) => {
        console.log('Click happened');
        let BASE_URL = "http://141.94.204.108:8000/countries"
        fetch(`${BASE_URL}/${id}`)
        .then(response=>response.json())
        .then(json=>{
            console.log("handleClick : "+json);
        }) 
    };

    componentDidMount() {
      // ... chart code goes here ...

      let root = am5.Root.new(`chartdiv${this.props.country.country_iso2}`);
      console.log(this.dataContextId);

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
            // currentComponent.setState({ country: json });
        }) 
        console.log(chart.series._values[0]._dataItems[0].dataContext.id);
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
        <div className="country-map-map" id={`chartdiv${this.props.country.country_iso2}`}> </div>
          <div className="map-filler">
            <div className="country-map-card"><CountryCardMini country={this.props.country}></CountryCardMini></div>
          </div>
        </div>
      );

    }
  }
export default CountryMapComponent