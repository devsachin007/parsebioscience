import React, { useState } from 'react';
import './comp3.css';
import Nav1 from "./nav1";
import Nav2 from "./nav2";
import Nav3 from "./nav3";
function Comp3() {
    const [selectedTab, setSelectedTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setSelectedTab(tabNumber);
    };

    return (
        <div style={{ margin: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'center', borderRadius: '5px', backgroundColor: 'rgba(219, 211, 225, 1)', marginLeft: '8%', marginRight: '8%',marginTop:'2%' }}>
                <div
                    onClick={() => handleTabClick(1)}
                    style={{
                        backgroundColor: selectedTab === 1 ? 'rgba(85, 0, 136, 1)' : 'rgba(219, 211, 225, 1)',
                        padding: '10px',
                        width: "30%",
                        margin: '10px',
                        cursor: 'pointer',
                        color: selectedTab === 1 ? 'white' : 'rgba(85, 0, 136, 1)',
                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                        borderRadius: '5px',
                    }}
                >
                    No instrument required
                </div>
                <div
                    onClick={() => handleTabClick(2)}
                    style={{
                        backgroundColor: selectedTab === 2 ? 'rgba(85, 0, 136, 1),rgba(37, 0, 59, 1)' : 'rgba(219, 211, 225, 1)',
                        padding: '10px',
                        color: selectedTab === 2 ? 'white' : 'rgba(85, 0, 136, 1),rgba(37, 0, 59, 1)',
                        margin: '10px',
                        cursor: 'pointer',
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
                        width: "30%",
                        borderRadius: '5px'

                    }}
                >
                    Unmatched data quality
                </div>
                <div
                    onClick={() => handleTabClick(3)}
                    style={{
                        backgroundColor: selectedTab === 3 ? 'rgba(85, 0, 136, 1),rgba(37, 0, 59, 1)' : 'rgba(219, 211, 225, 1)',
                        padding: '10px',
                        color: selectedTab === 3 ? 'white' : 'rgba(85, 0, 136, 1),rgba(37, 0, 59, 1)',
                        margin: '10px',
                        cursor: 'pointer',
                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                        width: "30%",
                        borderRadius: '5px'
                    }}
                >
                    Fixation of cells and nuclei
                </div>
            </div>
            <div>
                {selectedTab === 1 && <Nav1 />}
                {selectedTab === 2 && <Nav2 />}
                {selectedTab === 3 && <Nav3 />}
            </div>
        </div>
    );
}

export default Comp3;
