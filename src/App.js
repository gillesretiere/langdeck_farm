import Layout from "./components/Layout";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

function App() {
  var MyGlobalObject={}

  function CreateMyChart(IdDivForDrawChart){
     
     if(MyGlobalObject[IdDivForDrawChart]){   //check if exist chart dispose that
                   MyGlobalObject[IdDivForDrawChart].dispose()
              }
 
     var  root = am5.Root.new("IdDivForDrawChart");
      // ... some code
 
      MyGlobalObject[IdDivForDrawChart]=root     // store chart in global object
 }  
  return (
    <Layout>
      <div>
        This is the App
      </div>
    </Layout>
  );
}
export default App;
