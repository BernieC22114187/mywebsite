import React, {useState} from 'react'

import ExperienceCss from "./Experience.module.css"
const Experience = () => {
  const [isOpen, setIsOpen] = useState([false, true])
    return (

    <div className = {ExperienceCss.wholepage}>
        <span className = {isOpen[0] ? ExperienceCss.fullBubble : ExperienceCss.bubble}
        onClick={()=>{
            
            setIsOpen([!isOpen[0], isOpen[1]])
        }}>
            <div>Bernie Chen</div>
        </span>
        {/* <span className = {isOpen[1] ? ExperienceCss.fullBubble : ExperienceCss.bubble}
        onClick={()=>{
            setIsOpen([isOpen[0], !isOpen[1]])
        }}
        >
            <div>
                Frontend
            </div>
        </span> */}
    </div>
  )
}

export default Experience