import React,{Component} from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

class AmChart extends Component {
    componentDidMount() {
      let root = am5.Root.new("chartdiv");
  
      // ... chart code goes here ...
// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
    am5themes_Animated.new(root)
  ]);
  
  // Create the map chart
  // https://www.amcharts.com/docs/v5/charts/map-chart/
  var chart = root.container.children.push(
    am5map.MapChart.new(root, {
      panX: "rotateX",
      panY: "translateY",
      projection: am5map.geoEquirectangular()
    })
  );
  
   // Create series for background fill
  // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/#Background_polygon
  var backgroundSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {}));
  backgroundSeries.mapPolygons.template.setAll({
    fill: root.interfaceColors.get("alternativeBackground"),
    fillOpacity: 0,
    strokeOpacity: 0
  });
  
  // Add background polygon
  // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/#Background_polygon
  backgroundSeries.data.push({
    geometry: am5map.getGeoRectangle(90, 180, -90, -180)
  });
  
  // Create main polygon series for countries
  // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
  var polygonSeries = chart.series.push(
    am5map.MapPolygonSeries.new(root, {
      geoJSON: am5geodata_worldLow
    })
  );
  
  // Create line series for trajectory lines
  // https://www.amcharts.com/docs/v5/charts/map-chart/map-line-series/
  var lineSeries = chart.series.push(am5map.MapLineSeries.new(root, {}));
  lineSeries.mapLines.template.setAll({
    stroke: root.interfaceColors.get("alternativeBackground"),
    strokeOpacity: 0.3
  });
  
  // Create point series for markers
  // https://www.amcharts.com/docs/v5/charts/map-chart/map-point-series/
  var pointSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));
  var colorset = am5.ColorSet.new(root, {});
  
  pointSeries.bullets.push(function () {
    var container = am5.Container.new(root, {});
  
    var circle = container.children.push(
      am5.Circle.new(root, {
        radius: 4,
        tooltipY: 0,
        fill: colorset.next(),
        strokeOpacity: 0,
        tooltipText: "{title}"
      })
    );
  
    var circle2 = container.children.push(
      am5.Circle.new(root, {
        radius: 4,
        tooltipY: 0,
        fill: colorset.next(),
        strokeOpacity: 0,
        tooltipText: "{title}"
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
  
    return am5.Bullet.new(root, {
      sprite: container
    });
  });
  
  var cities = [
    {
      title: "Copenhagen",
      latitude: 55.6763,
      longitude: 12.5681
    },
  ];
  
  for (var i = 0; i < cities.length; i++) {
    var city = cities[i];
    addCity(city.longitude, city.latitude, city.title);
  }
  
  function addCity(longitude, latitude, title) {
    pointSeries.data.push({
      geometry: { type: "Point", coordinates: [longitude, latitude] },
      title: title
    });
  }
  
  // Make stuff animate on load
  chart.appear(1000, 100);      
  
      this.root = root;
    }
  
    componentWillUnmount() {
      if (this.root) {
        this.root.dispose();
      }
    }
  
    render() {
      return (
        <div id="chartdiv" style={{ width: "100%"}}></div>
      );
    }
  }

  export default AmChart