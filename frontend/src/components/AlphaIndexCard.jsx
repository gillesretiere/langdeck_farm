import React from 'react'
import {Link} from 'react-router-dom'
import { useContext } from "react";
import { cardContext } from "../App";

/*
require.context('../assets/audio/ai', false, /\.(mp3|mp4)$/)

function importAll(r) {
  let audios = {};
   r.keys().forEach((item, index) => { audios[item.replace('./', '')] = r(item); });
  return audios
 }
const AllIAudios = importAll(require.context('../assets/audio/ai', false, /\.(mp3|mp4)$/));

const play = ({audio}) => {
  console.log(audio)
}
*/

const AlphaIndexCard = ({alpha_index}) => {
    let {index} = alpha_index;
    console.log(alpha_index);
    const label = "Some value"
    const menuItems = useContext(cardContext);
    menuItems.component="AlphaIndexCard"


    const shoot = () => {
      menuItems.alpha_index=alpha_index
    }


  return (
    <>
<section data-theme="dark">
<Link to={`/vocabularies`}>
  <div className="box" onClick={shoot}>
        <div className="v-card flex flex-row justify-start items-center divide-x divide-gray-200 p-3">
          <span className="pr-2 flex justify-center">{index}</span>
        </div>
  </div>
  </Link>
</section>    

    </>
  )
}

export default AlphaIndexCard