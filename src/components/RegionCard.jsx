import { Link } from "react-router-dom"

const RegionCard = ({region}) => {
    let {region_uid, region_name, region_name_fr, region_alpha2, region_picture} = region   
      
    return (
    <Link to={`/regionCountries/${region_uid}`}>
    <div className="shadow-lg p-1 flex flex-col bg-FarmWhite card">
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
        <div className="w-full h-screen flex-1 flex-col md:flex-row">
          <hr/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus iaculis urna id volutpat lacus laoreet non curabitur. Duis at consectetur lorem donec. Posuere ac ut consequat semper viverra nam libero. Dui id ornare arcu odio ut sem nulla. Mauris commodo quis imperdiet massa tincidunt nunc. Consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat. Id nibh tortor id aliquet lectus proin. Enim nec dui nunc mattis enim ut tellus elementum. Imperdiet proin fermentum leo vel orci porta non pulvinar. Urna condimentum mattis pellentesque id nibh tortor id. Justo nec ultrices dui sapien eget mi proin sed. Condimentum vitae sapien pellentesque habitant morbi tristique. Id velit ut tortor pretium viverra suspendisse potenti nullam. Dignissim convallis aenean et tortor at risus viverra adipiscing at. Mi quis hendrerit dolor magna eget est lorem. Faucibus nisl tincidunt eget nullam non nisi est sit amet. Hendrerit dolor magna eget est. Sit amet tellus cras adipiscing.</p>    
        </div>   
    </div>
    </Link>
  )
}
export default RegionCard