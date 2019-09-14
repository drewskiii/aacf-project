import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import styles from './hover.module.scss'

import controller from "../images/controller.png"
import food from "../images/food.png"
import mountain from "../images/mountain.png"

const Hover = () => {
    // TODO use react-router-bootstrap for effecient routing
    return (
        <div className = {styles.body}>
            <div className ={styles.container}>
                <div className = {styles.card}>
                    <div className = {[styles.face, styles.face1].join(' ')}>
                        <div className = {styles.content}>
                            <img src = {controller}></img>
                            <h3>Event 1</h3>
                        </div>
                    </div>
                    <div className = {[styles.face, styles.face2].join(" ")}>
                        <div className = {styles.content}>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Ratione hic nihil illo optio expedita earum</p>
                            <a href = "#">More Details</a>
                        </div>
                    </div>
                </div>
                <div className = {styles.card}>
                    <div className = {[styles.face, styles.face1].join(' ')}>
                        <div className = {styles.content}>
                            <img src = {food}></img>
                            <h3>Event 2</h3>
                        </div>
                    </div>
                    <div className = {[styles.face, styles.face2].join(' ')}>
                        <div className = {styles.content}>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Ratione hic nihil illo optio expedita earum</p>
                            <a href = "#">More Details</a>
                        </div>
                    </div>
                </div>
                <div className = {styles.card}>
                    <div className = {[styles.face, styles.face1].join(' ')}>
                        <div className = {styles.content}>
                            <img src = {mountain}></img>
                            <h3>Event 3</h3>
                        </div>
                    </div>
                    <div className = {[styles.face, styles.face2].join(' ')}>
                        <div className = {styles.content}>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Ratione hic nihil illo optio expedita earum</p>
                            <a href = "#">More Details</a>
                        </div>
                    </div>
                </div>
        </div>
        </div>    
    )
}

export default Hover