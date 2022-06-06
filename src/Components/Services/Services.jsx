import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../Card/Card'
import Resume from '../Services/CV.pdf'

function Services() {
    return (
        <div className='services'>
            {/* leftside */}
            <div className="awesome">
                <span>My Awesome</span>
                <span>Services</span>
                <spane>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo,
                    <br />
                    veritatis excepturi recusandae illo repudiandae deleniti.
                </spane>
                <a href={Resume} download>

                <button className="button s-button">Download CV</button>
                </a>
                <div className="blur s-blur" style={{left: "20rem", width: "400px", height: "400px", background: "#ABF1FF94" }}></div>
            </div>
            {/* rightside */}
            <div className="cards">
                <div style={{top: "-7rem", left: "37rem" }}>
                    <Card
                        emoji={HeartEmoji}
                        heading={'Design'}
                        detail={"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
                    />
                </div>
                {/* secondcard */}
                <div style={{top: "4rem", left: "17rem"}}>
                    <Card
                        emoji={Glasses}
                        heading={"Developer"}
                        detail={"Html, Css, JavaScript, React"}
                    />
                </div>
                {/* 3rd */}
                <div style={{top: "12rem", left: "34rem"}}>
                    <Card
                        emoji={Humble}
                        heading={"UI/UX"}
                        detail={
                            "Lorem ispum dummy text are usually use in section where are u?"
                        }
                    />
                </div>
                <div className="blur s-blur2" style={{left: "20rem", width: "400px", height: "400px", background: "var(--purple)" }}></div>
            </div>
        </div>
    )
}

export default Services