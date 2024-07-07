import React, { useState, useRef, useEffect } from 'react';
import '../styles/History.css';

const collapsibleData = [
    {
        title: 'Painting details',
        content: 'As all of our paintings, "Cyclone", is hand-made by one of our artists. High quality oil and acrylic paint and cotton canvas are used making the painting sturdy, capable of keeping the same color vibrancy for decades.'
    },
    {
        title: 'Shipping info',
        content: 'We ship all paintings world-wide, free of charge. We are partnered with major carriers like DHL, UPS, and FedEx. Due to the hand-painting and drying process, all orders are processed within 10 business days.'
    },
    {
        title: 'Love it or return it',
        content: "100% Satisfaction Guaranteed. Get a full refund or a painting re-do if you find that your art piece didn't meet your expectations, or you were anyhow dissatisfied with it."
    }
];

function CollapsibleTab({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.style.height = isOpen ? `${contentRef.current.scrollHeight}px` : '0px';
        }
    }, [isOpen]);

    return (
        <div className={`collapsibles-wrapper ${isOpen ? 'collapsible-tab__open' : ''}`}>
            <button type="button" className="collapsible-trigger-btn" onClick={toggleOpen}>
                {title}
            </button>
            <div className="collapsible-content" ref={contentRef}>
                <div className="collapsible-content__inner">
                    <p>{content}</p>
                </div>
            </div>
        </div>
    );
}

function App() {
    return (
        <div className={"history-container"}>
            <h1 style={{textAlign:'center', margin:'3rem auto 6rem auto', fontSize:'30px'}}> Previous Booking History</h1>
        <div className="collapsible-tabs__wrapper">
            {collapsibleData.map((item, index) => (
                <CollapsibleTab key={index} title={item.title} content={item.content} />
            ))}
        </div>
        </div>
    );
}

export default App;
