import React, { Component } from 'react'
import "./Home.css"
import ImageSlider from './ImageSlider'

export default class Home extends Component{
    render(){
        return(
            <div className="Home">
                <h1 className="Home-h">Bienbenidos a dallas Amigos  </h1>

                <ImageSlider/>
          </div>
        )
    }
} 