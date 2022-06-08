import React from 'react'
import './Intro.css'
import GitHub from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context';
import { useContext } from 'react'
import { motion } from 'framer-motion'

const Intro = () => {

    const transition = {duration: 2, type: 'spring'}
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{color: darkMode? 'white': ''}}>Hy! I Am</span>
                    <span>Andrew Thomas</span>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, fugit odit eius officia ex reprehenderit?</span>
                </div>
                <button className="button i-button">Hire Me</button>
                <div className="i-icons">
                    <img src={GitHub} alt="" />
                    <img src={LinkedIn} alt="" />
                    <img src={Instagram} alt="" />
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <motion.img 
                initial= {{top:'15%', left: '-28%'}}
                whileInView ={{top:'15%',left: '-8%'}}
                transition={transition}
                src={glassesimoji}
                alt=""/>



                <motion.div
                initial={{right:'-20%'}}
                whileInView={{right: '10%'}}
                transition={transition}>
                    <FloatingDiv image={crown} txt1='Web' txt2='Developer' />
                </motion.div>




                <motion.div
                initial={{top: '66.5%', left:'-27.5%'}}
                whileInView={{top: '66.5%', left: '11.5%'}}
                transition={transition}>
                    <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award' />
                </motion.div>




                {/* blur divs */}
                <div className='blur' style={{background: "rgb(238 210 255"}}></div>
                <div className='blur' style={{background: "#C1F5FF", top: '17rem', width:'21rem', height:'11rem', left:'-9rem'}}></div>
            </div>
        </div>
    )
}

export default Intro