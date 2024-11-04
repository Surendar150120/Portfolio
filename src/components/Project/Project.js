import React, { useState } from 'react'
import "./Project.css";
// import { Link } from "react-router-dom";


const Project = ({image, title, description, link, code}) => {
    const[show, setShow] = useState(false);
  return (
    <>
    <div className='project'
     onMouseEnter={() => setShow(true)} 
    onMouseLeave={() => setShow(false)}
    >
        { show ? (
                <div className='project__content'>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div className='project__button'>
                    <div>
                    <a href={code}>
                        <button className='project__code'>View Code</button>
                    </a>
                    </div>
                    <div>
                    <a href={link}>
                        <button className='project__ui'>Go Live</button>
                    </a>
                    </div>
                    </div>
                </div>
            ) : (
                <img src = {image} alt=""/>
            )
        }
    </div>
    </>
    
    );
};

export default Project