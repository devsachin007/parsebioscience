import React from 'react';
import './App.css'

function Comp9() {
    return (
        <div>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',marginTop:'2%'}}>
            <h1 className="mpls" style={{color:'rgba(85, 0, 136, 1)',fontWeight:'bolder',fontSize:'44px'}}>The end-to-end solution:<br/>
                from sample to insights</h1>
                <p className="mpls" style={{color:'rgba(82, 82, 82, 1)',fontSize:'18px',fontWeight:'bold',marginTop:'2%'}}>
                    Our product takes you from single-cell or single-nuclei suspension through library prep and sequencing and
                    <br/>
                    delivers immediate results via our analysis software.
                </p>
            </div>
            <div className="iconsETC">
                <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'2%'}}>
                    <img width='50%' height='' src={require('./Assets/icons.png')} alt="fireSpot"/>
                </div>
            </div>
        </div>
    );
}

export default Comp9;