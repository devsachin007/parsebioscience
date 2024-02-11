import React from 'react';
import './comp6.css'; // Import the CSS file

function Comp6() {
    return (
        <div className="container" style={{marginTop:'5%',display:'flex',flexDirection:'column',alignItems:'center'}}>
            <h1 className="mpls" style={{color:'rgba(85, 0, 136, 1)',fontSize:'36px',fontWeight:'700'}}>Unlock more at Mega Scale</h1>
            <div className='cards-container'>
                <div>
                    <h2>CRISPR Detect</h2>
                    <p>Sensitive gRNA detection with gene expression<br/>in up to 1 million cells per experiment.</p>
                </div>
                <div>
                    <h2>Gene Capture</h2>
                    <p>Targeted gene panels enable scale<br/>while reducing sequencing needs.</p>
                </div>
            </div>
            {/*<div className="button-container">*/}
                {/*<button>View all products*/}
                {/*    */}
                {/*</button>*/}
            {/*    <div  style={{display:"flex", flexDirection:'row',justifyContent:'center',alignItems:'center',width:'100%',height:'20%',marginTop:'4%'}}>*/}
            {/*        <button className="gradient-border-button mpls" style={{background:'rgba(0, 0, 0, 1)',fontSize:'15px',fontWeight:'700',height:'80%'}} >View all products<svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
            {/*            <path d="M23.5 16L8.5 16" stroke="#B6007C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>*/}
            {/*            <path d="M19.5 11L23.7929 15.2929C24.1262 15.6262 24.2929 15.7929 24.2929 16C24.2929 16.2071 24.1262 16.3738 23.7929 16.7071L19.5 21" stroke="#B6007C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>*/}
            {/*        </svg>*/}
            {/*        </button>*/}
            {/*    /!*</div>*!/*/}
            {/*</div>*/}
            <button className="gradient-border-button mpls" style={{background:'rgba(0, 0, 0, 1)',fontSize:'15px',borderRadius:'5px',margin:'4%',fontWeight:'700',height:'80%',width:'20%',display:'flex',justifyContent:'space-between'}} >View all products<svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.5 16L8.5 16" stroke="#B6007C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19.5 11L23.7929 15.2929C24.1262 15.6262 24.2929 15.7929 24.2929 16C24.2929 16.2071 24.1262 16.3738 23.7929 16.7071L19.5 21" stroke="#B6007C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            </button>
        </div>
    );
}

export default Comp6;
