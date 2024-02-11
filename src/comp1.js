import React from 'react';
import './comp1.css'
import Comp2 from "./comp2";

function Comp1() {
    return (
        <div>
            <div className="bg-main">
                <header>
                    <nav>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex' }}>
                            <li style={{ marginRight: '20px' }}><a href="#" style={{ color: '#fff', textDecoration: 'none',fontStyle:'Atkinson Hyperlegible,sans_serif' }}>Technology</a></li>
                            <li style={{ marginRight: '20px' }}><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Products</a></li>
                            <li style={{ marginRight: '20px' }}><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Company</a></li>
                        </ul>
                    </nav>
                    <img width='20%' height='25%' src={require('./Assets/parseLogo.png')}/>
                    <nav>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex' }}>
                            <li style={{ marginRight: '20px' }}><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Resources</a></li>
                        </ul>
                    </nav>
                    <div style={{width:'20%',height:'4%'}}>
                    <button className="gradient-border-button atkn" style={{background:'black',borderRadius:'10px',fontSize:'14px',width:'100%',height:'100%'}} >Connect with a <br/>single-cell expert</button>
                    </div>
                </header>
                <div  style={{display:'flex',flexDirection:'column',alignItems:'start',marginTop:'4%'}}>
                    <div className="deviceText" style={{display:'flex',flexDirection:'column',alignItems:'start',marginLeft:'8%'}}>
                        <p className="mpls" style={{fontFamily:'M PLUS 2,sans-serif',color:'white',fontSize:'16px'}}>MORE CELLS, MORE SAMPLES, MORE CLARITY</p>
                        <h1 className="mpls" style={{fontFamily:'M PLUS 2,sans-serif',fontSize:'60px',fontWeight:'800',color:'white'}}>Smash the limits
                        </h1>
                        <h1 className="mpls" style={{fontFamily:'M PLUS 2,sans-serif',fontSize:'60px',fontWeight:'800',color:'white'}}>
                            of single-cell
                        </h1>
                        <h1 className="mpls" style={{fontFamily:'M PLUS 2,sans-serif',fontSize:'60px',fontWeight:'800',color:'white'}}>sequencing
                        </h1>
                    </div>
                    <div style={{display:'flex',flexDirection:'column',alignItems:'start',marginLeft:'8%',marginTop:'2%'}}>
                        <p className="mpls" style={{color:'white',fontSize:'18px'}}>Combinatorial barcoding technology strips away the limitations</p>
                        <p className="mpls" style={{color:'white',fontSize:'18px'}}>and frustrations of yesterday’s single-cell approach. It ditches</p>
                        <p className="mpls" style={{color:'white',fontSize:'18px'}}>the specialized instrument, freeing you to pursue</p>
                        <p className="mpls" style={{color:'white',fontSize:'18px'}}>unprecedented discoveries. Unleash the potential of single cell.</p>
                    </div>
                    <div className="navBtn" style={{display:'flex',flexDirection:'row',alignItems:'start',marginLeft:'8%',marginTop:'2%',marginBottom:'4%',width:'47%',padding:'2px'}}>
                            <button className="gradient-border-button mpls" style={{background:'rgba(0, 0, 0, 1)',fontSize:'15px',fontWeight:'700',width:'80%',height:'100%'}} >Break boundaries with combinatorial barcoding</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Comp1;






