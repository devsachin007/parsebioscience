import React from 'react';
import './App.css'

function Comp8() {
    return (
        <div style={{backgroundColor:'rgba(37, 0, 59, 1)',width:'100',height:'auto',padding:'2%'}}>
            <div style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                marginTop:'2%',
                marginBottom:'3%'
            }}>
                <h1 className="mpls" style={{fontSize:'26px',fontWeight:'bolder',color:'rgba(255, 255, 255, 1)'}}>Advancing research for 850+ Labs</h1>
            </div>
            <div  style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
            }}>
                <img width='85%' height='100%' src={require('./Assets/footerLogo.png')} alt="fireSpot"/>
            </div>
        </div>
    );
}

export default Comp8;