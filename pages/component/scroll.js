import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function scroll() {
  return (
    <>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://image.cnbcfm.com/api/v1/image/106349589-1579720435046gettyimages-1192592454.jpeg?v=1579721288&w=630&h=354&ffmt=webp"
            alt="First slide"
            style={{height:400}}    
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://image.cnbcfm.com/api/v1/image/106349589-1579720435046gettyimages-1192592454.jpeg?v=1579721288&w=630&h=354&ffmt=webp"
            alt="Second slide"
            style={{height:400}}
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="https://image.cnbcfm.com/api/v1/image/106349589-1579720435046gettyimages-1192592454.jpeg?v=1579721288&w=630&h=354&ffmt=webp"
            alt="Third slide"
            style={{height:400}}
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
