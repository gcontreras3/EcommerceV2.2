import React from 'react'
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import images from './images'
import './Slider.css'

export default function Slider() {
    const [width, setWidth] = useState(0);
    const carousel = useRef();
    
    useEffect(()=>{
        
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);
  return (
    <div className="slider">
        <motion.div ref={carousel} className="carousel" 
        whileTap={{cursor: "grabbing"}}>
            <motion.div drag="x" 
            dragConstraints={{right: 0, left: -width}} 
            className="inner-carousel">
                {images.map(image =>{
                    return(
                    <motion.div className="item" key={images}>
                        <img src={image} alt="" />
                    </motion.div>
                    );
                })}
            </motion.div>
        </motion.div>
    </div>
  )
}
