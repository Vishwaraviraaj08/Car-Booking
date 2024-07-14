import React from 'react';
import '../styles/CarTypes.css';
import sedan from "./../images/car-sedan-new.webp";
import suv from "./../images/car-xylo-new.webp";
import innova from "./../images/car-innova-new.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";



const CarTypes = () => {
    return (
        <>
        <div className={"car-types-container"} style={{display:"flex", gap:'50px', alignItems:'center', justifyContent:'center', margin:'50px auto'}} >

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
                <div className="card-footer"
                     style={{alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
                    <button className="car-type-btn">Select</button>
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
                <div className="card-footer"
                     style={{alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
                    <button className="car-type-btn">Select</button>
                </div>
            </div>



            {/*innova*/}
            <div className="card">
                <div className="card-header">
                    <img src={innova} alt="Profile" className={"car-image innova"} style={{height: '220px', width: '370px'}}/>
                </div>
                <div className="card-body">
                    <h2 className="name">MUV - Innova</h2>
                    <div className="bio">

                    </div>
                </div>
                <div className="card-footer"
                     style={{alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
                    <button className="car-type-btn">Select</button>
                </div>
            </div>



        </div>
            <Footer/>
        </>

    );
};

export default CarTypes;
