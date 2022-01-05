import React from 'react'
import './style.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import img1 from '../assets/sec.png';
// import img2 from '../assets/three.png';
// import img3 from '../assets/four.jpg';
import { multiData }   from '../data';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';

const PreviousBtn=(props)=>{
    const { className,onClick} = props
    return(
    <div className={className} onClick={onClick}>
        <ArrowBackIos style={{color:"blue", fontSize:"30px"}}/>
    </div>
    );
}


const NextBtn=(props)=>{
    const { className,onClick} = props
    return(
    <div  className={className} onClick={onClick}>
        <ArrowForwardIos  style={{color:"blue", fontSize:"30px"}}/>
    </div>
);

};

const MultiItemCarousal = ({title}) => {

    var settings = {
       
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div style={{margin:"30px"}}>
            <h2>{title}</h2>
            <Slider 
            slidesToScroll={3}
            prevArrow={<PreviousBtn/>}
            nextArrow={<NextBtn/>}
            slidesToShow={5}
            infinite={true} {...settings}

            >
                {
                    multiData.map(item=>(
                   <Card item={item}/>
                   
                    ))
                }
               
            </Slider>
        </div>
    )
}

const Card=({item})=>{
    return(
        <div style={{textAlign:'center'}}>
            <img className="multi__image" src={item} alt=""  style={{width:"100%",height:"170px",objectFit:"contain",marginBottom:'10px'}} />
            <p style={{fontSize:"14px",padding:'2px 0'}}>TOP TRNDING TVs</p>
            <p style={{fontSize:"16px",padding:'2px 0',color:'green'}}>From ₹ 5000</p>
            <p style={{fontSize:"14px",padding:'2px 0' ,color:'gray'}}>Up To ₹2000 OFF on HDFC </p>
        </div>
    )
}

export default MultiItemCarousal
