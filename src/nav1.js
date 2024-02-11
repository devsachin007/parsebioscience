import React from 'react';
// import './nav2.css'
function Nav1() {
    return (
        <div style={{marginLeft:'7%',marginTop:'2%',padding:'10px'}}>
            <div className="nav2head">
                <p className="texts" style={{fontSize:'16px',fontWeight:'500'}}>
                    BRING SINGLE CELL TO ANY LAB
                </p>
                <h1 className="texts" style={{fontWeight:'800',fontSize:'48px',color:'rgba(85, 0, 136, 1)'}}>
                    The freedom your lab craves
                </h1>
            </div>
            <div style={{display:'flex', flexDirection:'row'}}>
                <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',margin:'4%'}}>
                    <img width='80%' height='80%'  src={require('./Assets/nav1Icon.png')}/>
                </div>
                <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',margin:'4%'}}>
                    <div className="texts" style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        <p style={{color:'rgba(85, 0, 136, 1)',fontSize:'36px'}}>Leave droplets behind with</p>
                        <h1 style={{color:'rgba(85, 0, 136, 1)',fontSize:'36px',fontWeight:'bolder'}}>no instrument required</h1>
                    </div>
                    <div style={{display:"flex",flexDirection:'column',alignItems:'start',marginTop:'4%'}}>
                        <h1 className="texts" style={{color:'rgba(82, 82, 82, 1)',fontSize:'18px'}}>
                            Perform single-cell experiments with nothing more
                        </h1>
                        <h1 className="texts" style={{color:'rgba(82, 82, 82, 1)',fontSize:'18px'}}>
                            than a pipette and common laboratory equipment.
                        </h1>
                    </div>
                    <div  style={{display:"flex",width:'auto',height:'20%',marginTop:'4%'}}>
                            <button className="gradient-border-button mpls" style={{background:'rgba(0, 0, 0, 1)',fontSize:'15px',fontWeight:'700',height:'80%'}} >See a head-to-head comparison to droplet technology</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nav1;