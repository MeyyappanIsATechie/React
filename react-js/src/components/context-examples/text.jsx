//import React from 'react'

import { useContext } from "react"
import { GlobalContext } from "../../context"

const Text = () => {
    const {theme} = useContext(GlobalContext);

    //console.log(getStateFromGlobalContext);
  return (
    <h1 style={{fontSize: theme === 'light'? '50px':'100px', backgroundColor: theme === 'light'? 'white':'black', color: theme === 'light'? 'black':'white'}}> Meyyappan R</h1>
  )
}

export default Text
