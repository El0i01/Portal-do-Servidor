import React from "react";
import './Card.css'
import { useState } from "react";
import { AnimateSharedLayout } from 'framer-motion'
const Card = (props) => {

    const [expanded, setExpanded] = useState(false)

    return (
      <AnimateSharedLayout>
        {
            expanded? (
                'expanded'
            ):
            <CompactCard param ={props} set/>
        }
      </AnimateSharedLayout>
    )
}

//Card mini

function CompactCard ({param}){
    return(
        <div className="CompactCard"
        style={{
            background : param.color.backGround,
            boxShadow: param.color.boxShadow
        }}
        >
            <div className="radialBar">
                <span>{param.title}</span>
            </div>
            <div className="detail">
                <span className="value">{param.value}</span> 
                <br />
                <span>{param.barValue}</span>
            </div>
        </div>
    )
}

export default Card  