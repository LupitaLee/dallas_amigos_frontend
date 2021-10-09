import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from 'react-bootstrap'
import "./ImageSlider.css"

export class ImageSlider extends Component {
    render() {
        return (
            <div className="ImageSlider">
                    <Carousel>
            <Carousel.Item>
                <img className="ImageSlider-img"
                // className="d-block w-100"
                src="https://media.istockphoto.com/photos/springtime-dallas-skyline-texas-picture-id904756574?b=1&k=20&m=904756574&s=170667a&w=0&h=5PaOsBPqUXBc8A2rj1xsqVmlJxBqeVzB_bAA-yNuk2M="
                
                height="300" width="1200" 
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Dallas - FTW </h3>
                <p>business and more</p>
                
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="ImageSlider-img"
                // className="d-block w-100"
                src="https://media.istockphoto.com/photos/mexican-style-slow-cooked-beef-stew-birria-de-res-served-with-lime-picture-id1215883056?b=1&k=20&m=1215883056&s=170667a&w=0&h=VgjA3q3tdpRyYcCUj9BBx8gwasSx_vquS_EWtD19wJA="
                height="300" width="1200"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Come find your favorite Restaurant</h3>
                <p>the spanish Comunity</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="ImageSlider-img"
                // className="d-block w-100"
                src="https://media.istockphoto.com/photos/pouring-coffee-with-smoke-on-a-cup-with-breads-or-bun-croissant-and-picture-id1222408833?b=1&k=20&m=1222408833&s=170667a&w=0&h=ymDnHemsNQBFPFEE9_3t9eZAXw4HN8ixL9lC1obeuEA="
                height="300" width="1200"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Un Chocolate Caliente </h3>
                <p>en el frio se antoja un pan calientito</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
            </div>
        )
    }
}

export default ImageSlider
