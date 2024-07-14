import React from 'react';
import '../styles/CarTypes.css';
import sedan from "./../images/car-sedan-new.webp";
import suv from "./../images/car-xylo-new.webp";
import innova from "./../images/car-innova-new.jpg";
import Footer from "./Footer";

const CarTypes = ({ setShowCarTypes, distance, tripType, travelTime, setCarType}) => {

    function getPrice(carType){
        let minDistance = Math.max(130, distance/1000);
        if (tripType === "two-way") {
            minDistance = 2 * minDistance;
        }

        const carRate = carType === "sedan" ? 13 : carType === "xylo" ? 17 : 18;
        const price = Math.ceil((minDistance) * carRate) + 300;
        return price;
    }

    return (
        <div className="overlay">
            <div className="overlay-content">
                <div className="close-btn" onClick={()=>{setShowCarTypes(false)}}>×</div>
                <div className="car-types-container" style={{display:"flex", gap:'50px', alignItems:'center', justifyContent:'center', margin:'50px auto'}} >

                    {/*sedan*/}
                    <div className="card">
                        <div className="card-header">
                            <img src={sedan} alt="Profile"  style={{height: '220px', width: '370px'}}/>
                        </div>
                        <div className="card-body">
                            <h2 className="name">Sedan</h2>
                            <div className="bio">

                            </div>
                        </div>
                        <div style={{margin: '5px auto',alignItems: 'center', justifyContent: 'center', width:'70%', border: '3px solid black', padding:'15px', background:'lightyellow', textAlign:'center'}}>
                            <h2>Trip Estimation</h2>
                            <h1>Fare : ₹ {getPrice("sedan")}</h1>
                            <div style={{textAlign:'left', margin:'10px auto'}}>
                            <p>Total Distance : {(distance/1000).toFixed(2)}</p>
                            <p>Total Duration: {travelTime}</p>
                            <p>Driver Allowance : Included*</p>
                            </div>
                            
                        </div>
                        <div className="card-footer" style={{alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
                            <button className="car-type-btn" onClick={(e) => {
                                e.preventDefault();
                                setCarType("sedan")
                                setShowCarTypes(false)
                            }}>Select</button>
                        </div>
                    </div>

                    {/*zylo*/}
                    <div className="card">
                        <div className="card-header">
                            <img src={suv} alt="Profile" className={"car-image zylo"} style={{height: '220px', width: '370px'}}/>
                        </div>
                        <div className="card-body">
                            <h2 className="name">MUV - Zylo</h2>
                            <div className="bio">

                            </div>
                        </div>
                        <div style={{margin: '5px auto',alignItems: 'center', justifyContent: 'center', width:'70%', border: '3px solid black', padding:'15px', background:'lightyellow', textAlign:'center'}}>
                            <h2>Trip Estimation</h2>
                            <h1>Fare : ₹ {getPrice("xylo")}</h1>
                            <div style={{textAlign:'left', margin:'10px auto'}}>
                            <p>Total Distance : {(distance/1000).toFixed(2)}</p>
                            <p>Total Duration: {travelTime}</p>
                            <p>Driver Allowance : Included*</p>
                            </div>
                            
                        </div>
                        <div className="card-footer" style={{alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
                            <button className="car-type-btn" onClick={(e) => {
                                e.preventDefault();
                                setCarType("xylo")
                                setShowCarTypes(false)
                            }}>Select</button>
                        </div>
                    </div>

                    {/*innova*/}
                    <div className="card" style={{display: 'flex', flexDirection: 'column'}}>
                        <div className="card-header">
                            <img src={innova} alt="Profile" className={"car-image innova"} style={{height: '220px', width: '370px'}}/>
                        </div>
                        <div className="card-body">
                            <h2 className="name">MUV - Innova</h2>
                            <div className="bio">

                            </div>
                        </div>
                        <div style={{margin: '5px auto',alignItems: 'center', justifyContent: 'center', width:'70%', border: '3px solid black', padding:'15px', background:'lightyellow', textAlign:'center'}}>
                            <h2>Trip Estimation</h2>
                            <h1>Fare : ₹ {getPrice("innova")}</h1>
                            <div style={{textAlign:'left', margin:'10px auto'}}>
                            <p>Total Distance : {(distance/1000).toFixed(2)}</p>
                            <p>Total Duration: {travelTime}</p>
                            <p>Driver Allowance : Included*</p>
                            </div>
                            
                        </div>
                        <div className="card-footer" style={{alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
                            <button className="car-type-btn" onClick={(e) => {
                                e.preventDefault();
                                setCarType("innova")
                                setShowCarTypes(false)
                            }}>Select</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CarTypes;
