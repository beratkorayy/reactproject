import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../Card/Card'
import Resume from '../Services/CV.pdf'
import { themeContext } from '../../Context';
import { useContext } from 'react'
import {motion} from 'framer-motion'

function Services() {

    const transition = {duration : 1, type: 'spring'}
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

    return (
        <div className='services' id='Services'>
            {/* leftside */}
            <div className="awesome">
                <span style={{color: darkMode? 'white': ''}}>My Awesome</span>
                <span>Services</span>
                <spane>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo,
                    <br />
                    veritatis excepturi recusandae illo repudiandae deleniti.
                </spane>
                <a href={Resume} download>

                    <button className="button s-button">Download CV</button>
                </a>
                <div className="blur s-blur" style={{ left: "20rem", width: "400px", height: "400px", background: "#ABF1FF94" }}></div>
            </div>
            {/* rightside */}
            <div className="cards">
                <motion.div 
                whileInView={{left: '36rem'}}
                initial={{right: '20%'}}
                transition={transition}
                style={{ top: "-7rem", left: "60rem" }}>
                    <Card
                        emoji={HeartEmoji}
                        heading={'Design'}
                        detail={"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
                    />
                </motion.div>
                {/* secondcard */}
                <motion.div 
                whileInView={{left: '17rem'}}
                initial={{left: '20%'}}
                transition={transition}
                style={{ top: "4rem", left: "0rem" }}>
                    <Card
                        emoji={Glasses}
                        heading={"Developer"}
                        detail={"Html, Css, JavaScript, React"}
                    />
                </motion.div>
                {/* 3rd */}
                <motion.div
                whileInView={{left: '34rem'}}
                initial={{right: '20%'}}
                transition={transition}
                style={{ top: "12rem", left: "60rem" }}>
                    <Card
                        emoji={Humble}
                        heading={"UI/UX"}
                        detail={
                            "Lorem ispum dummy text are usually use in section where are u?"
                        }
                    />
                </motion.div>
                <div className="blur s-blur2" style={{ left: "20rem", width: "400px", height: "400px", background: "var(--purple)" }}></div>
            </div>
        </div>
    )
}

export default Services