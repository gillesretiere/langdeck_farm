import { Link } from "react-router-dom"
//import SimpleAudio2 from "../components/SimpleAudio2"
// require.context('../assets/images', false, /\.(png|jpe?g|svg)$/)

const RegionCard = ({region}) => {
    let {region_uid, region_name, region_name_fr, region_alpha2, region_picture} = region   
    const imgs = require.context('/public/assets/images', true,/\.(png|jpe?g|svg)$/)
    .keys()
    .map((filename) => filename.replace('./', ''));

    const mp3s = require.context('/public/assets/audios', true,/\.(mp3)$/)
    .keys()
    .map((filename) => filename.replace('./', ''));

    return (

    <div className="shadow-lg p-1 flex flex-col bg-FarmWhite card">
        <Link to={`/regionCountries/${region_uid}`}>
        <div className="text-center h-24 r-card">{region_name_fr}
        </div>
        <div className="container w-full h-screen flex-1 flex-col md:flex-row">  
          <div className="split basis-1/2 pr-2">
            <div className="r-card-img shadow-lg pt-1"><img src={region_picture}></img></div>
          </div>
          <div className="split basis-1/2 pl-2">
            <div className="card-h1">{region_name}</div>
            <div className="card-h2">{region_name_fr}</div>
            <hr/>
            <div className="card-label">Code Alpha-2</div>
            <div className="card-h3">{region_alpha2}</div>
            <hr/>
            <div className="card-label">Code Alpha-3</div>
            <div className="card-h3">{region_uid}</div>                
          </div>
        </div>   
        </Link>
        <div className="w-full h-screen flex-1 flex-col md:flex-row">
          <hr/>

{mp3s.map((record) => (
            record.substring(0,3)==region_uid ?
(<div>
        <audio controls preload="metadata">
        <source src={require(`/public/assets/audios/${record}`)} type="audio/mpeg"/>
        </audio>
</div>)
: null
  ))} 
        {/*<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus iaculis urna id volutpat lacus laoreet non curabitur. Duis at consectetur lorem donec. Posuere ac ut consequat semper viverra nam libero. Dui id ornare arcu odio ut sem nulla. Mauris commodo quis imperdiet massa tincidunt nunc. Consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat. Id nibh tortor id aliquet lectus proin. Enim nec dui nunc mattis enim ut tellus elementum. Imperdiet proin fermentum leo vel orci porta non pulvinar. Urna condimentum mattis pellentesque id nibh tortor id. Justo nec ultrices dui sapien eget mi proin sed. Condimentum vitae sapien pellentesque habitant morbi tristique. Id velit ut tortor pretium viverra suspendisse potenti nullam. Dignissim convallis aenean et tortor at risus viverra adipiscing at. Mi quis hendrerit dolor magna eget est lorem. Faucibus nisl tincidunt eget nullam non nisi est sit amet. Hendrerit dolor magna eget est. Sit amet tellus cras adipiscing.</p>    */}
        </div>   
    </div>

  )
}
export default RegionCard