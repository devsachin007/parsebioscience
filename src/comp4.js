import React, {useRef} from 'react';
import './comp4.css'
function Comp4() {
    const containerRef = useRef(null);

    const scrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft -= 100;
        }
    };

    const scrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft += 100;
        }
    };
    return (
        <div style={{marginTop:'5%',display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'start',marginLeft:'10%'}}>
            <div style={{display:'flex',flexDirection:'row'}}>
                <div><h2 style={{color:'rgba(85, 0, 136, 1)',fontStyle:'M PLUS 2, sans-serif',fontSize:'36px',fontWeight:'bolder'}}>Not sure? The proof is in the datasets</h2></div>
                {/*<div style={{display:'flex',justifyContent:'center'}}><a href='#' style={{ textDecoration: 'underline',color:'rgba(85, 0, 136, 1)',borderBottom:'rgba(85, 0, 136, 1)'}}>Browse Full Datasets</a></div>*/}
            </div>
            <div className="scroll-container"  style={{display:'flex', flexDirection:'column',justifyContent:'start',alignItems:'start',overflowX: 'auto', whiteSpace: 'nowrap'}} ref={containerRef}>
                <div  style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:'2%'}}>
                    <img width="40%" src={require('./Assets/comp4Card.png')} style={{ marginRight: '3%' }}/>
                    <img width="40%" src={require('./Assets/comp4Card.png')} style={{ marginRight: '3%' }}/>
                    <img width="40%" src={require('./Assets/comp4Card.png')} style={{ marginRight: '3%' }}/>
                </div>
            </div>
            <div style={{display:'inline-flex',marginTop:'2%'}}>
                <button  onClick={scrollLeft} style={{backgroundColor: 'white',
                    borderRadius: '50%',
                    outlineColor:'rgba(245, 240, 248, 1)',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    margin: '0 10px',
                    border: 'none',
                    outline: 'none',}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(85, 0, 136, 1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-left">
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                </button>
                <button  onClick={scrollRight} style={{backgroundColor: 'rgba(245, 240, 248, 1)',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    margin: '0 10px',
                    border: 'none',
                    outline: 'none',}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(85, 0, 136, 1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Comp4