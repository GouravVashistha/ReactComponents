import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



import A from '../img/Ant-Man.png';

import '../css/style.css'


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}




export default class SwipeToSlide extends Component {

  render() {

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 3,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />

    };
    return (
      <div>
       
        <Slider {...settings}>
   
          <div>
            <div className="box">
              <p className="marvel">MARVEL</p>
              <img src={A} alt="" className="model" />
            <div className="details">
            <h5 className="price">Price: 440$</h5> 
            
                    
            <p>Bruce Bayne invite deadpool to kill the enemy how make distrub bat To the Kill The Anymens How MaKE him will be ie.</p>
          </div>
      </div>
          </div>
          <div>
          <div className="box">
            <p className="marvel">MARVEL</p>
          <img src={A}alt=""  className="model" />
          <div className="details">
          <h5 className="price">Price: 440$</h5> 
                    
            <p>Bruce Bayne invite deadpool to kill the enemy how make distrub bat To the Kill The Anymens How MaKE him will be ie.</p>
          </div>
          </div>
          </div>
          <div>
          <div className="box">
              <p className="marvel">MARVEL</p>
              <img src={A}alt=""  className="model" />
            <div className="details">
            <h5 className="price">Price: 440$</h5> 
            
                    
            <p>Bruce Bayne invite deadpool to kill the enemy how make distrub bat To the Kill The Anymens How MaKE him will be ie.</p>
          </div>
      </div>
          </div>
          <div>
          <div className="box">
              <p className="marvel">MARVEL</p>
              <img src={A}alt=""  className="model" />
            <div className="details">
                    
            <h5 className="price">Price: 440$</h5> 
                    
            <p>Bruce Bayne invite deadpool to kill the enemy how make distrub bat To the Kill The Anymens How MaKE him will be ie.</p>
          </div>
      </div>
          </div>
          <div>
          <div className="box">
              <p className="marvel">MARVEL</p>
              <img src={A}alt=""  className="model" />
            <div className="details">
            <h5 className="price">Price: 440$</h5>       
            
                    
            <p>Bruce Bayne invite deadpool to kill the enemy how make distrub bat To the Kill The Anymens How MaKE him will be ie.</p>
          </div>
      </div>
          </div>
          <div>
          <div className="box">
              <p className="marvel">MARVEL</p>
              <img src={A} alt="" className="model" />
            <div className="details">
                    
            <h5 className="price">Price: 440$</h5> 
                    
            <p>Bruce Bayne invite deadpool to kill the enemy how make distrub bat To the Kill The Anymens How MaKE him will be ie.</p>
          </div>
      </div>
          </div>
          <div>
          <div className="box">
              <p className="marvel">MARVEL</p>
              <img src={A} alt="" className="model" />
            <div className="details">
                    
            <h5 className="price">Price: 440$</h5> 
                    
            <p>Bruce Bayne invite deadpool to kill the enemy how make distrub bat To the Kill The Anymens How MaKE him will be ie.</p>
          </div>
      </div>
          </div>
          <div>
          <div className="box">
              <p className="marvel">MARVEL</p>
              <img src={A}alt=""  className="model" />
            <div className="details">
                    
            <h5 className="price">Price: 440$</h5> 
                    
            <p>Bruce Bayne invite deadpool to kill the enemy how make distrub bat To the Kill The Anymens How MaKE him will be ie.</p>
          </div>
      </div>
          </div>
          <div>
          <div className="box">
              <p className="marvel">MARVEL</p>
              <img src={A} alt="" className="model" />
            <div className="details">
                    
            <h5 className="price">Price: 440$</h5> 
                    
            <p>Bruce Bayne invite deadpool to kill the enemy how make distrub bat To the Kill The Anymens How MaKE him will be ie.</p>
          </div>
      </div>
          </div>
        
        </Slider>
      </div>
    );
  }
}