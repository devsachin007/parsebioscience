import React from 'react';
import './comp7.css'

function Comp7() {
    return (
        <div style={{backgroundImage:'linear-gradient(to bottom left,rgba(37, 0, 59, 1),rgba(85, 0, 136, 1))',width:'100%',height:'90vh',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            {/*<div>*/}
                <div style={{width:'80%',height:'60vh',backgroundColor:'rgba(255, 255, 255, 1)',display:'flex',flexDirection:'column',borderRadius:'5px'}}>
                    <svg style={{marginLeft:'8%',marginTop:'4%'}} width="56" height="45" viewBox="0 0 56 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.165 0H0V25.1652L13.506 44.5695L23.1262 37.418L14.6823 25.1646H25.1644L25.165 0Z" fill="url(#paint0_linear_243_714)"/>
                        <path d="M55.9996 0H30.834V25.1652L44.3412 44.5695L53.9614 37.418L45.5175 25.1646H55.9996V0Z" fill="url(#paint1_linear_243_714)"/>
                        <defs>
                            <linearGradient id="paint0_linear_243_714" x1="15.7281" y1="96.8508" x2="15.7281" y2="-0.244624" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#7500BB"/>
                                <stop offset="1" stop-color="#B6007C"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_243_714" x1="46.5625" y1="96.8508" x2="46.5625" y2="-0.244624" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#7500BB"/>
                                <stop offset="1" stop-color="#B6007C"/>
                            </linearGradient>
                        </defs>
                    </svg>
                    <div style={{display:"flex",justifyContent:'start',alignItems:'start',marginLeft:'9%',flexDirection:'column',marginTop:'2%',marginBottom:'2%'}}>
                    <h2 className='mplr' style={{color:'rgba(85, 0, 136, 1)',fontSize:'27px',fontWeight:'bolder'}}>We detected rare cell types with</h2>
                    <h2  className='mplr' style={{color:'rgba(85, 0, 136, 1)',fontSize:'27px',fontWeight:'bolder'}}>Evercode’s higher sensitivity</h2>
                </div>
                    <svg width="1018" height="2" viewBox="0 0 1018 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="1.07031" x2="1018" y2="1.07031" stroke="#E9DFF0"/>
                    </svg>
                    <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',marginLeft:'8%',marginRight:'4%',marginTop:'2%'}}>
                        <div >
                            <img  width="90%" src={require('./Assets/dukenus.png')}/>
                        </div>
                        <div>
                            <img src={require('./Assets/enrico.png')}/>
                        </div>
                        <div>
                            <img src={require('./Assets/Jacques.png')}/>
                        </div>
                    </div>
                    <div>
                        <div style={{display:'flex',justifyContent:'end',alignItems:'end',marginRight:'6%'}}>
                            <button style={{backgroundColor: 'rgba(233, 223, 240, 0.5)',
                                borderRadius: '50%',
                                border:'1px rgba(233, 223, 240, 0.5)',
                                // outlineColor:'rgba(255, 255, 255, 1)',
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                cursor: 'pointer',
                                margin: '0 10px',
                                outline: 'none',}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(223, 206, 232, 1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-left">
                                    <line x1="19" y1="12" x2="5" y2="12"></line>
                                    <polyline points="12 19 5 12 12 5"></polyline>
                                </svg>
                            </button>
                            <button style={{backgroundColor: 'rgba(85, 0, 136, 1)',
                                borderRadius: '50%',
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                cursor: 'pointer',
                                margin: '0 10px',
                                border: 'none',
                                transition:'all 2s ease-in-out',
                                outline: 'none',}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(233, 223, 240, 1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            {/*button*/}
            <div>
                {/*<button className="gradient-border-button mpls" style={{background:'rgba(0, 0, 0, 1)',fontSize:'15px',borderRadius:'5px',margin:'4%',fontWeight:'700',height:'80%',width:'20%',display:'flex',justifyContent:'space-between'}} >See our 10x comparison study*/}
                {/*</button>*/}
                <button className="mpls gradient-border-button2" style={{
                    width:'100%',
                    height:'auto',
                    backgroundColor: 'rgba(117, 0, 187, 1)',
                    // borderImage:'linear-gradient(rgba(117, 0, 187, 1),rgba(223, 206, 232, 0.32))',
                    color: 'white',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    margin:'5%',
                }}>See our 10x comparison study
                </button>
            </div>
        </div>
    );
}

export default Comp7;