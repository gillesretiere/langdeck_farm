import { Link } from "react-router-dom"
import CountryCardHeader from "../components/CountryCardHeader"

/*https://shaquillegalimba.medium.com/how-to-import-multiple-images-in-react-1936efeeae7b*/
require.context('../assets/images', false, /\.(png|jpe?g|svg)$/)

function importAll(r) {
  let images = {};
   r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images
 }
const AllImages = importAll(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/));

const CountryCard = ({country}) => {
      
    return (
      <div className="shadow-lg p-1 flex flex-col bg-FarmWhite card">
      <CountryCardHeader country={country}></CountryCardHeader>
      </div>
      
  )
}
export default CountryCard