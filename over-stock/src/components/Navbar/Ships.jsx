import style from "./Ships.module.css"
import React from 'react'

function Ships() {
  return (
    <div className={style.ship}>
         <p style={{display:"flex"}} >ships to: <img src="https://ak1.ostkcdn.com/img/mxc/intFlag_IN.gif" alt="https://ak1.ostkcdn.com/img/mxc/intFlag_IN.gif" /> <b>INDIA</b> </p>
    </div>
  )
}

export default Ships