import React from 'react'
import { useContext } from "react";
import { cardContext } from "../App";
import ThemeCard from "../components/ThemeCard"

const HeaderComponentInfoCard = () => {
    const menuItems = useContext(cardContext);

  return (
    <div>{menuItems.component}</div>
  )
}

export default HeaderComponentInfoCard