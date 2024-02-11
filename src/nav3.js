import React from 'react';
import './nav3.css'
function Nav2() {
    return (
        <div style={{marginLeft:'7%',marginTop:'2%',padding:'10px'}}>
            <div className="nav2head">
                <p className="texts" style={{fontSize:'16px',fontWeight:'500'}}>
                    RUN WILD WITH EXPERIMENTS ON YOUR SCHEDULE
                </p>
                <h1 className="texts" style={{fontWeight:'800',fontSize:'48px',color:'rgba(85, 0, 136, 1)'}}>
                    Increased flexibility with sample fixation
                </h1>
            </div>
            <div style={{display:'flex', flexDirection:'row'}}>
                <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',margin:'4%'}}>
                    <img width='80%' height='80%' src={require('./Assets/nav3Icon.png')}/>
                </div>
                <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',margin:'4%'}}>
                    <div className="texts" style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        <p style={{color:'rgba(85, 0, 136, 1)',fontSize:'36px'}}>Simplify your studies with</p>
                        <h1 style={{color:'rgba(85, 0, 136, 1)',fontSize:'36px',fontWeight:'bolder'}}>fixation of cells and nuclei</h1>
                    </div>
                    <div style={{display:"flex",flexDirection:'column',alignItems:'start'}}>
                        <h1 className="texts" style={{color:'rgba(82, 82, 82, 1)',fontSize:'18px'}}>
                            Simplify planning, coordination with collaborators,
                        </h1>
                        <h1 className="texts" style={{color:'rgba(82, 82, 82, 1)',fontSize:'18px'}}>
                            and time-course experiments, while reducing lab
                        </h1>
                        <h1 className="texts" style={{color:'rgba(82, 82, 82, 1)',fontSize:'18px'}}>
                            work. All the elements of better science.
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