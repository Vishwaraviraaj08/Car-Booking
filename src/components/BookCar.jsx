import React, { useEffect,  useState } from 'react';
import { LoadScript, Autocomplete } from '@react-google-maps/api';
import sedan from '../images/car-sedan-new.webp';
import suv from '../images/car-xylo-new.webp';
import innova from '../images/car-innova-new.jpg';
import etios from '../images/cars-big/car-sedan.png';
import MapView from "./MapView";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";


const libraries = ['places'];


function BookCar({ overAllState, setOverAllState}) {
  const [modal, setModal] = useState(false); //  class - active-modal

  // booking car
  const [tripType, setTripType] = useState(''); // ['one-way', 'round-trip'
  const [carType, setCarType] = useState('');
  const [pickUp, setPickUp] = useState(null);
  const [dropOff, setDropOff] = useState(null);
  const [pickTime, setPickTime] = useState('');
  const [dropTime, setDropTime] = useState('');
  const [carImg, setCarImg] = useState('');

  // modal infos
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipcode, setZipCode] = useState('');
  const [distance, setDistance] = useState(null);
  const [travelTime, setTravelTime] = useState(null);
  const [price, setPrice] = useState(null);
  const navigate = useNavigate();
  const [pickUpTime, setPickUpTime] = useState('');
  const [dropOffTime, setDropOffTime] = useState('');



  useEffect(() => {
    let minDistance = Math.max(130, distance/1000);
    if (tripType === "two-way") {
      minDistance = 2 * minDistance;
    }

    const carRate = carType === "sedan" ? 13 : carType === "xylo" ? 17 : 18;
    const price = Math.ceil((minDistance) * carRate) + 400;
    setPrice(price);
  },[distance])


  const [dropShowMap, setDropShowMap] = useState(false);
  const [pickShowMap, setPickShowMap] = useState(false);
  const [dropLocation, setDropLocation] = useState(null);
  const [pickLocation, setPickLocation] = useState(null);

  const [pickAddress, setPickAddress] = useState('');
  const [dropAddress, setDropAddress] = useState('');

  const updateAddress = async (location) => {
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=AIzaSyANlHK0u60OeB61jRC-wdpY_djhheq3P98`);
    const data = await response.json();
    if (data.results && data.results[0]) {
      return data.results[0].formatted_address;
    }
  };
  

  function dropHandleMapView() {
    setDropShowMap(true);
  }


  function pickHandleMapView() {
    setPickShowMap(true);
  }

  useEffect(() => {
    if(pickLocation) {
      updateAddress(pickLocation).then((address) => {
        setPickAddress(address);
      });
    }

    if(dropLocation) {
      updateAddress(dropLocation).then((address) => {
        setDropAddress(address);
      });
    }
  }, [dropLocation, pickLocation]);

  useEffect(() => {

      if (pickLocation && dropLocation) {
          const origin = pickLocation;
          const destination = dropLocation;
  
          const service = new window.google.maps.DistanceMatrixService();
          service.getDistanceMatrix(
              {
                  origins: [origin],
                  destinations: [destination],
                  travelMode: 'DRIVING',
              },
              (response, status) => {
                  if (status === 'OK') {
                      const result = response.rows[0].elements[0];
                      if (result.status === 'OK') {
                        const distance = result.distance.value; // Distance in meters
                        const duration = result.duration.value; // Duration in seconds


                        // Convert duration to user-friendly format (e.g., minutes or hours)
                        const formattedDuration = calculateTravelTime(duration);

                        // Update state with calculated values
                        setDistance(distance);
                        setTravelTime(formattedDuration); // distance in meters
                      } else {
                          alert('Error calculating distance: ' + result.status);
                      }
                  } else {
                      alert('Error calculating distance: ' + status);
                  }
              }
          );
      }

// Function to convert duration to user-preferred unit (example)
    function calculateTravelTime(durationInSeconds) {
      const minutes = durationInSeconds / 60;
      const hours = minutes / 60;

      // Choose the relevant unit based on your app's requirements
      return `${hours.toFixed(1)} hr`; // Or `${minutes.toFixed(0)} min`
    }

  }, [pickLocation, dropLocation])

  // taking value of modal inputs
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleAge = (e) => {
    setAge(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleZip = (e) => {
    setZipCode(e.target.value);
  };

  // open modal when all inputs are fulfilled
  const openModal = (e) => {
    e.preventDefault();
    const errorMsg = document.querySelector('.error-message');
    if (
        !pickUp ||
        !dropOff ||
        pickTime === '' ||
        dropTime === '' ||
        carType === ''
    ) {
      errorMsg.style.display = 'flex';
    } else {
      setModal(!modal);
      const modalDiv = document.querySelector('.booking-modal');
      modalDiv.scroll(0, 0);
      errorMsg.style.display = 'none';
    }
  };

  // disable page scroll when modal is displayed
  useEffect(() => {
    if (modal === true) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [modal]);

  // confirm modal booking
  const confirmBooking = (e) => {
    e.preventDefault();
    setModal(!modal);
    const doneMsg = document.querySelector('.booking-done');
    doneMsg.style.display = 'flex';

    const value = {
        tripType: tripType,
        carType: carType,
        pickTime: pickTime + ' ' + pickUpTime,
        dropTime: dropTime + ' ' + dropOffTime,
        name: name,
        lastName: lastName,
        phone: phone,
        age: age,
        email: email,
        address: address,
        city: city,
        zipcode: zipcode,
        distance: Math.ceil(distance/1000),
        price: price,
        pickUpAddress: pickAddress,
        dropOffAddress: dropAddress
    }
    setOverAllState(value);

    setTimeout(() => {
      navigate('/summary');
    }, 500);
  };

  // taking value of booking inputs
  const handleCar = (e) => {
    setCarType(e.target.value);
    setCarImg(e.target.value);
  };

  const handlePickTime = (e) => {
    setPickTime(e.target.value);
  };

  const handleDropTime = (e) => {
    setDropTime(e.target.value);
  };

  // based on value name show car img
  let imgUrl;
  switch (carImg) {
    case 'Sedan':
      imgUrl = sedan;
      break;
    case 'SUV':
      imgUrl = suv;
      break;
    case 'Etios':
      imgUrl = etios;
      break;
    case 'Innova':
      imgUrl = innova;
      break;
    default:
      imgUrl = '';
  }

  // hide message
  const hideMessage = () => {
    const doneMsg = document.querySelector('.booking-done');
    doneMsg.style.display = 'none';
  };

  return (<>
        <style>
          {
            `
            /* Add this to your Login.css file */
.tooltip {
    position: relative;
    display: inline-block;
}

.tooltip .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: #555;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    padding: 10px;
    position: absolute;
    z-index: 1;
    bottom: 125%; /* Position above the icon */
    left: 50%;
    margin-left: -60px;
    opacity: 0;
    transition: opacity 0.3s;
}

.tooltip .tooltiptext::after {
    content: "";
    position: absolute;
    top: 100%; /* Arrow below the tooltip */
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
}
`
          }
        </style>





      <LoadScript googleMapsApiKey="AIzaSyANlHK0u60OeB61jRC-wdpY_djhheq3P98" libraries={libraries}>
        <section id="booking-section" className="book-section">
          {/* overlay */}
          <div
              onClick={openModal}
              className={`modal-overlay ${modal ? 'active-modal' : ''}`}
          ></div>

          <div className="container">
            <div className="book-content">
              <div className="book-content__box">
                <h2>Book a car</h2>

                <p className="error-message">
                  All fields required! <i className="fa-solid fa-xmark"></i>
                </p>

                <div style={{display: "flex", flexDirection: 'column'}}>
                  <label style={{fontSize:"16px", fontWeight:"bold"}}>
                    <i className="fa-solid fa-car"></i> &nbsp;Journey Type<b style={{color:"red"}}>*</b>
                  </label>
                  <div style={{display: "flex", gap: "20px"}} aria-required>
                    <input type={'radio'} name={'trip'} value={'one-way'}
                           onChange={(e) => setTripType(e.target.value)}/>
                    <label style={{fontSize: '15px'}} htmlFor={'one-way'}>One Way</label>
                  </div>
                  <div style={{display: "flex", gap: "20px"}}>
                    <input type={'radio'} name={'trip'} value={'round-trip'}
                           onChange={(e) => setTripType(e.target.value)}/>
                    <label style={{fontSize: '15px'}} htmlFor={'round-trip'}>Round Trip</label>
                  </div>
                </div>
                <br/>
                <br/>
                <p className="booking-done">
                  Check your email to confirm an order.{' '}
                  <i onClick={hideMessage} className="fa-solid fa-xmark"></i>
                </p>

                <form className="box-form">
                  <div className="box-form__car-type">
                    <label>
                      <i className="fa-solid fa-car"></i> &nbsp; Select Your Car
                      Type <b>*</b>
                      <div className="tooltip">
                        &nbsp;&nbsp;
                        <i className="fa-solid fa-info fa-beat-fade"></i>
                        <span className="tooltiptext">To know more about the cars, <a href={"#pick-car"} style={{color:'blue'}}>Click Here !</a></span>
                      </div>
                    </label>
                    <select value={carType} onChange={handleCar}>
                      <option>Select your car type</option>
                      <option value="sedan">Sedan</option>
                      <option value="xylo">MUV-Xylo</option>
                      <option value="innova">MUV-Innova</option>
                    </select>
                  </div>

                  <div className="box-form__car-time">
                    <label htmlFor="picktime">
                      <i className="fa-regular fa-calendar-days "></i> &nbsp;
                      Pick-up <b>*</b>
                    </label>
                    <input
                        id="picktime"
                        value={pickTime}
                        onChange={handlePickTime}
                        type="date"
                    ></input>
                  </div>

                  <div className="box-form__car-time">
                    <label htmlFor="droptime">
                      <i className="fa-regular fa-calendar-days "></i> &nbsp;
                      Drop-of <b>*</b>
                    </label>
                    <input
                        id="droptime"
                        value={dropTime}
                        onChange={handleDropTime}
                        type="date"
                    ></input>
                  </div>

                  <div className="box-form__car-type">
                    <label>
                      <i className="fa-solid fa-location-dot"></i> &nbsp; Pick-up{' '}
                      <b>*</b>
                    </label>
                    <Autocomplete
                        onLoad={(autocomplete) => setPickUp(autocomplete)}
                        onPlaceChanged={() => {
                          const place = pickUp.getPlace();
                          setPickLocation({
                            lat: place.geometry.location.lat(),
                            lng: place.geometry.location.lng()
                          });
                        }}
                    >
                      <div>
                      <input
                          type="text"
                          placeholder="Enter pick up location"
                          style={{width: '90%', padding: '1.5rem', height: '4rem', fontSize: '15px', fontWeight: "normal", fontFamily: 'sans-serif'}}
                      />
                        <i className={"fa fa-location"} style={{fontSize:"20px", paddingLeft:"6px"}} onClick={pickHandleMapView}></i>
                        {pickShowMap && <MapView showMap={pickShowMap} setShowMap={setPickShowMap} location={pickLocation} setLocation={setPickLocation}/>}
                      </div>

                    </Autocomplete>
                    <p> {pickAddress !== '' && pickAddress} </p>
                  </div>

                  <div className="box-form__car-type">
                    <label>
                      <i className="fa-solid fa-location-dot"></i> &nbsp; Drop-of{' '}
                      <b>*</b>
                    </label>
                    <Autocomplete
                        onLoad={(autocomplete) => setDropOff(autocomplete)}
                        onPlaceChanged={() => {
                          const place = dropOff.getPlace();
                          setDropLocation({
                            lat: place.geometry.location.lat(),
                            lng: place.geometry.location.lng()
                          });
                        }}
                
                    >
                      <div>
                        <input
                            type="text"
                            placeholder="Enter drop off location"
                            style={{
                              width: '90%',
                              padding: '1.5rem',
                              height: '4rem',
                              fontSize: '15px',
                              fontWeight: "normal",
                              fontFamily: 'sans-serif'
                            }}
                        />
                        <i className={"fa fa-location"} style={{fontSize: "20px", paddingLeft: "6px"}} onClick={dropHandleMapView}></i>
                        {dropShowMap && <MapView showMap={dropShowMap} setShowMap={setDropShowMap} location={dropLocation} setLocation={setDropLocation}/>}
                      </div>
                    </Autocomplete>
                    <p> {dropAddress != '' && dropAddress} </p>
                  </div>

                  <button onClick={openModal} type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* modal ------------------------------------ */}

        <div className={`booking-modal ${modal ? 'active-modal' : ''}`}>
          {/* title */}
          <div className="booking-modal__title">
            <h2>Complete Reservation</h2>
            <i onClick={openModal} className="fa-solid fa-xmark"></i>
          </div>
          {/* message */}
          <div className="booking-modal__message">
            <h4>
              <i className="fa-solid fa-circle-info"></i> Upon completing this
             booking, you will receive:
            </h4>
            <p>
              Your booking details in the mail to make a Comfortable and safe journey.
            </p>
          </div>
          {/* car info */}
          <div className="booking-modal__car-info" >
            <div className="dates-div" >
              <div className="booking-modal__car-info__dates">
                <h5>Location & Date</h5>
                <span style={{width:"100%"}}>
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <h6>Pick-Up Date & Time</h6>
                  <p>
                    {pickTime} /{' '}
                    <input type="time" className="input-time" onChange={(e) => {
                      setPickUpTime(e.target.value);
                    }}></input>
                  </p>
                </div>
              </span>
              </div>

              <div className="booking-modal__car-info__dates">
              <span>
                <i className="fa-solid fa-location-dot"></i>
                {/*<div>*/}
                {/*  <h6>Drop-Off Date & Time</h6>*/}
                {/*  <p>*/}
                {/*    {dropTime} /{' '}*/}
                {/*    <input type="time" className="input-time" onChange={(e) => {*/}
                {/*      setDropOffTime(e.target.value);*/}
                {/*    }}></input>*/}
                {/*  </p>*/}
                {/*</div>*/}

                <div>
                  <h6>Estimated Travelling Time</h6>
                  <p>
                    {travelTime}
                  </p>
                </div>


              </span>
              </div>

              <div className="booking-modal__car-info__dates">
              <span>
                <i className="fa-solid fa-calendar-days"></i>
                <div>
                  <h6>Pick-Up Location</h6>
                  <p>{pickAddress}</p>
                </div>
              </span>
              </div>

              <div className="booking-modal__car-info__dates">
              <span>
                <i className="fa-solid fa-calendar-days"></i>
                <div>
                  <h6>Drop-Off Location</h6>
                  <p>{dropAddress}</p>
                </div>
              </span>
              </div>
            </div>
            <div className="booking-modal__car-info__model" style={{justifyContent:'center', alignItems:'center', display:'flex'}}>
              <h5>
                <span>Car -</span> {carType}
              </h5>
              {carType === "sedan" && <img src={sedan} alt="car_img"/>}
              {carType === "xylo" && <img src={suv} alt="car_img"/>}
              {carType === "innova" && <img src={innova} alt="car_img"/>}
              <div style={{textAlign: 'center'}}>
                {distance && <h5>Distance &nbsp;:&nbsp; {(distance / 1000).toFixed(2)} kilometers</h5>}
              </div>

              <div style={{alignItems: 'center', justifyContent: 'center', width:'70%', border: '3px solid black', padding:'15px', background:'lightyellow', textAlign:'center'}}>
                <h2>Trip Estimation</h2>
                <h1>Fare : ₹ {price}</h1>
                <div style={{textAlign:'left', margin:'10px auto'}}>
                  <p>Total Distance : {distance}</p>
                  <p>Total Duration: {travelTime}</p>
                  <p>Selected Car : {carType}</p>
                  <p>Driver Allowance : Included*</p>
                </div>
                <h3><i>NOTE : Above estimation us exclusive of Toll Gate and State Permit Etc</i></h3>

              </div>


            </div>

          </div>
          {/* personal info */}
          <div className="booking-modal__person-info">
            <h4>Personal Information</h4>
            <form className="info-form">
              <div className="info-form__2col">
              <span>
                <label>
                  First Name <b>*</b>
                </label>
                <input
                    value={name}
                    onChange={handleName}
                    type="text"
                    placeholder="Enter your first name"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

                <span>
                <label>
                  Last Name <b>*</b>
                </label>
                <input
                    value={lastName}
                    onChange={handleLastName}
                    type="text"
                    placeholder="Enter your last name"
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>

                <span>
                <label>
                  Phone Number <b>*</b>
                </label>
                <input
                    value={phone}
                    onChange={handlePhone}
                    type="tel"
                    placeholder="Enter your phone number"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

                <span>
                <label>
                  Age <b>*</b>
                </label>
                <input
                    value={age}
                    onChange={handleAge}
                    type="number"
                    placeholder="18"
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>
              </div>

              <div className="info-form__1col">
              <span>
                <label>
                  Email <b>*</b>
                </label>
                <input
                    value={email}
                    onChange={handleEmail}
                    type="email"
                    placeholder="Enter your email address"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

                <span>
                <label>
                  Address <b>*</b>
                </label>
                <input
                    value={address}
                    onChange={handleAddress}
                    type="text"
                    placeholder="Enter your street address"
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>
              </div>

              <div className="info-form__2col">
              <span>
                <label>
                  City <b>*</b>
                </label>
                <input
                    value={city}
                    onChange={handleCity}
                    type="text"
                    placeholder="Enter your city"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

                <span>
                <label>
                  Zip Code <b>*</b>
                </label>
                <input
                    value={zipcode}
                    onChange={handleZip}
                    type="text"
                    placeholder="Enter your zip code"
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>
              </div>

              

              <div className="reserve-button" style={{display:"flex", flexDirection:'row', justifyContent:"space-between", alignItems:"center"}}>
                <div className={"booking-price"} style={{textAlign:"left", fontSize:'2rem'}}>
                  <p> Total Price : <b>&#8377; {price} * </b> </p>
                  <br/>
                  <p style={{fontSize:'1.5rem'}}> * Price with respect to kms : {price - 400} and</p>
                  <p style={{fontSize:'1.5rem'}}> * Driver's Bata : {400}</p>

                </div>
                <button onClick={confirmBooking}>Reserve Now</button>
              </div>
            </form>
          </div>
        </div>
      </LoadScript>
      </>
  );
}

export default BookCar;




