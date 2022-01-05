import React, { Component } from 'react'

import A from './img/Ant-Man.png';

import './css/style.css'

export default class Card extends Component {
    render() {
        
        return (
            <div>
    <div className="container">
        
        <ul id="autoWidth" className="cs-hidden">
 
            <li className="item-a">
      
                <div className="box">
                    <p className="marvel">MARVEL</p>
          
                    <img src={A} alt="any" className="model" />
                    
                    <div className="details">
                    
                        {/* <img src="img/AntMan-logo.png" class="logo" width="100px" style="height: auto;"> */}
                        
                        <p>Bruce Bayne invite deadpool to kill the enemy how make distrub bat To the Kill The Anymens How MaKE him will be ie.</p>
                    </div>

                </div>
            </li>
            <li className="item-a">
      
                <div className="box">
                    <p className="marvel">MARVEL</p>
          
                    <img src={A} alt="nothing" className="model" />
                    
                    <div className="details">
                    
                        {/* <img src="img/AntMan-logo.png" class="logo" width="100px" style="height: auto;"> */}
                        
                        <p>Bruce Bayne invite deadpool to kill the enemy how make distrub bat To the Kill The Anymens How MaKE him will be ie.</p>
                    </div>

                </div>
            </li>
            
        </ul>


        </div>

    </div>
      
        )
    }
}
