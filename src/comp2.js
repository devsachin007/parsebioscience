import React from 'react';
import './nav2.css'
function Comp2() {
    return (
        <div style={{backgroundColor:'rgba(245, 240, 248, 1)',}}>
        <div style={{marginLeft:'7%',padding:'10px'}}>
            <div className="nav2head" style={{marginTop:'2%'}}>
                <p className="texts" style={{fontSize:'16px',fontWeight:'500'}}>
                    REALIZE YOUR FULL SCIENTIFIC AMBITIONS
                </p>
                <h1 className="texts" style={{fontWeight:'800',fontSize:'48px',color:'rgba(85, 0, 136, 1)'}}>
                    Elevate your research
                </h1>
                <h1 className="texts" style={{color:'rgba(82, 82, 82, 1)',fontSize:'18px'}}>
                    Evercode™ combinatorial barcoding technology blows droplet-based approaches out of the water. Expand the size of
                    <br/> your experiments without the limitations of yesterday’s restraints. Get better data quality. All without the need for
                </h1>
                <h1 className="texts" style={{color:'rgba(82, 82, 82, 1)',fontSize:'18px'}}>
                    finicky hardware that’s already out of date.
                </h1>
            </div>
            <div style={{display:'flex', flexDirection:'row'}}>
                <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',margin:'4%'}}>
                    <img width='442px' height='422px' src={require('./Assets/comp2Icon.png')}/>
                </div>
                <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',margin:'4%'}}>
                    <div className="texts" style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        <p style={{color:'rgba(85, 0, 136, 1)',fontSize:'36px'}}>Blow past barriers with </p>
                        <h1 style={{color:'rgba(85, 0, 136, 1)',fontSize:'36px',fontWeight:'bolder'}}>single cell at scale</h1>
                    </div>
                    <div style={{display:"flex",flexDirection:'column',alignItems:'start'}}>
                        <h1 className="texts" style={{color:'rgba(82, 82, 82, 1)',fontSize:'18px'}}>
                            Profile from 1000 to 1 million cells or nuclei
                        </h1>
                        <h1 className="texts" style={{color:'rgba(82, 82, 82, 1)',fontSize:'18px'}}>
                            in a single experiment, offering unparalleled
                        </h1>
                        <h1 className="texts" style={{color:'rgba(82, 82, 82, 1)',fontSize:'18px'}}>
                            scientific progress.
                        </h1>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Comp2;