import React from 'react';
import './nav2.css'
function Nav2() {
    return (
        <div style={{marginLeft:'7%',marginTop:'2%',padding:'10px'}}>
            <div className="nav2head">
                <p className="texts" style={{fontSize:'16px',fontWeight:'500'}}>
                    EXPERIENCE HIGHER QUALITY DATA
                </p>
                <h1 className="texts" style={{fontWeight:'800',fontSize:'48px',color:'rgba(85, 0, 136, 1)'}}>
                    The power of clear results
                </h1>
            </div>
            <div style={{display:'flex', flexDirection:'row'}}>
                <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',margin:'4%'}}>
                    <img width='80%' height='80%'  src={require('./Assets/nav2Icon.png')}/>
                </div>
                <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',margin:'4%'}}>
                    <div className="texts" style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        <p style={{color:'rgba(85, 0, 136, 1)',fontSize:'36px'}}>Reveal more biology with</p>
                        <h1 style={{color:'rgba(85, 0, 136, 1)',fontSize:'36px',fontWeight:'bolder'}}>unmatched data quality</h1>
                    </div>
                    <div style={{display:"flex",flexDirection:'column',alignItems:'start'}}>
                        <h1 className="texts" style={{color:'rgba(82, 82, 82, 1)',fontSize:'18px'}}>
                            Sensitivity is just the start as Evercode™
                        </h1>
                        <h1 className="texts" style={{color:'rgba(82, 82, 82, 1)',fontSize:'18px'}}>
                            combinatorial barcoding repeatedly produces results
                        </h1>
                        <h1 className="texts" style={{color:'rgba(82, 82, 82, 1)',fontSize:'18px'}}>
                            untainted with ambient RNA.
                        </h1>
                    </div>
                    <div  style={{display:"flex",width:'auto',height:'20%',marginTop:'4%'}}>
                        <button className="gradient-border-button mpls" style={{background:'rgba(0, 0, 0, 1)',fontSize:'15px',fontWeight:'700',height:'80%'}} >Discover the technology</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nav2;