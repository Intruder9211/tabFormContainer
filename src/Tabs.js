import React, { useState } from "react";
import './styles.css';

function Tabs({ tabs }) {
    if (!tabs || tabs.length === 0) {
        return <div className="no-tabs">No tabs available</div>;
    }

    const [activeIndex, setActiveIndex] = useState(0);

    const handleTabClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="tabs-container">
            <div className="tab-buttons">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`tab-button ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => handleTabClick(index)}
                    >
                        {tab.title || `Tab ${index + 1}`}
                    </button>
                ))}
            </div>
            <div className="tab-content">
                {tabs[activeIndex].content || 'No content available'}
            </div>
        </div>
    );
}

export default Tabs;
