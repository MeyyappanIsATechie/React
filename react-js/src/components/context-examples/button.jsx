//import React from 'react'

import { useContext } from "react"
import { GlobalContext } from "../../context"

const Button = () => {

    const {handleChangeThemeOnButtonClick} = useContext(GlobalContext);
  return (
    <button onClick={handleChangeThemeOnButtonClick}>change theme</button>
  )
}

export default Button
