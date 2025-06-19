import React from "react";
import './Card.css'
import { useState } from "react";
import { AnimateSharedLayout } from 'framer-motion'
import {UilTimes} from '@iconscout/react-unicons'

const Card = (props) => {

    const [expanded, setExpanded] = useState(false)

    return (
      <AnimateSharedLayout>
        {
            expanded? 
                <EspandedCard param={props} setExpanded={()=>setExpanded}/>:
            <CompactCard param ={props} setExpanded={()=>setExpanded(true)}/>
        }
      </AnimateSharedLayout>
    )
}

//Card mini

function CompactCard ({param, setExpanded}){
    return(
        <div className="CompactCard"
        style={{
            background : param.color.backGround,
            boxShadow: param.color.boxShadow
        }}
        onClick={setExpanded}
        >
            <div className="radialBar">
               <span className="title">{param.title}</span>
            </div>
            <div className="detail">
                <span className="value">{param.value}</span>
                <br />
                <span className="barValue">{param.barValue}</span>
            </div>
        </div>
    )
}

//Expanded Card
Function ExpandedCard ({param, setExpanded}){
    return(
           <div className="ExpandedCard"
           style={{
                background: param.color.backGround,
                boxShadow: param.color.boxShadow,
           }}
           >
            <div>
                <UilTimes onClick={setExpanded}/>
            </div>

           </div> 
    )
}
export default Card  