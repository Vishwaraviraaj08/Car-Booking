import { useState } from "react";

function CarBox({data, carID}) {
    const [carLoad, setCarLoad] = useState(true);
    return (
        <>
            {data[carID].map((car, id) => (
                <div key={id} className="box-cars">
                    {/* car */}
                    <div className="pick-car">
                        {carLoad && <span className="loader"></span>}
                        <img
                            style={{display: carLoad ? "none" : "block"}}
                            src={car.img}
                            alt="car_img"
                            onLoad={() => setCarLoad(false)}
                        />
                    </div>
                    {/* description */}
                    <div className="pick-description">
                        <div className="pick-description__price">
                            <span>Rs. {car.price}</span>/ per km
                        </div>
                        <div className="pick-description__table">
                            <div className="pick-description__table__col">
                                <span>Model</span>
                                <span>{car.name}</span>
                            </div>

                            <div className="pick-description__table__col">
                                <span>Seats</span>
                                <span>{car.seats}</span>
                            </div>

                            <div className="pick-description__table__col">
                                <span>Luggage</span>
                                <span>{car.luggage}</span>
                            </div>



                            <div className="pick-description__table__col" style={{alignItems:'center', justifyContent:'center'}}>
                                <span>Driver's Allowance</span>
                                <span>{car.driverAllowance}</span>
                            </div>

                            <div className="pick-description__table__col">
                                <span>One Way</span>
                                <span>{car.oneWayMin}</span>
                            </div>

                            <div className="pick-description__table__col">
                                <span>Round Trip</span>
                                <span>{car.roundTripMin}</span>
                            </div>
                        </div>
                        {/* btn cta */}
                        <a className="cta-btn" href="#booking-section">
                            Reserve Now
                        </a>
                    </div>
                </div>
            ))}
        </>
    );
}

export default CarBox;
