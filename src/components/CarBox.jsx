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
                                <span>Year</span>
                                <span>{car.year}</span>
                            </div>

                            <div className="pick-description__table__col">
                                <span>Doors</span>
                                <span>{car.doors}</span>
                            </div>



                            <div className="pick-description__table__col">
                                <span>AC</span>
                                <span>{car.AC}</span>
                            </div>

                            <div className="pick-description__table__col">
                                <span>Capacity</span>
                                <span>{car.capacity}</span>
                            </div>

                            <div className="pick-description__table__col">
                                <span>Fuel</span>
                                <span>{car.fuel}</span>
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
