import React, { useState, useRef, useEffect } from 'react';
import '../styles/History.css';
import Footer from './Footer';

function CollapsibleTab({ item }) {
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
                {item.pickTime}
            </button>
            <div className="collapsible-content" ref={contentRef}>
                <div className="collapsible-content__inner">
                    <table border = "1" style={{ borderCollapse: 'collapse', fontSize: '1.5rem'}} className='history-table'>

                    {
                        Object.keys(item).filter((ele) => (ele != '_id')).map((key, index) => {
                            return (
                                <tr>
                                    <td style={{padding: '5px', width: '30%'}}>{key}</td>
                                    <td style={{padding: '5px'}}>{item[key]}</td>
                                </tr>
                            );                                    
                            })
                    }
                    </table>
                </div>
            </div>
        </div>
    );
}

function History({userData, setUserData}) {

    useEffect(() => {
        const prevData = sessionStorage.getItem('userData');
        if (prevData) {
            setUserData(JSON.parse(prevData));
        }
      }, []);

    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            // You can await here
            const response = await fetch('https://car-booking-api.netlify.app/user/gethistory', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id:  userData._id}),
            });
            setData(await response.json());
            
        }
        fetchData();

    }, [userData]);

    return (
        <>
            <div className={"history-container"}>
                {!data && <h1 style={{textAlign:'center', margin:'3rem auto 6rem auto', fontSize:'30px'}}> Loading... </h1>}
                {data && data.history.length === 0 && <h1 style={{textAlign:'center', margin:'3rem auto 6rem auto', fontSize:'30px'}}> No Previous Bookings Found </h1>}
                {data && data.history.length !== 0 && <>
                    <h1 style={{textAlign:'center', margin:'3rem auto 6rem auto', fontSize:'30px'}}> Previous Booking History</h1>
                    <div className="collapsible-tabs__wrapper">
                        {data.history.slice().reverse().map((item, index) => (
                            <CollapsibleTab key={index} item={item} />
                        ))}
                    </div>
                </>}
            </div>
            <Footer />
        </>
    );
}

export default History;
