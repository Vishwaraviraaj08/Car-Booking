import React, {useRef} from 'react';
import '../styles/BookingSummary.css';
import Footer from "./Footer"; // Create this CSS file for styling
import html2pdf from "html2pdf.js";
import {useNavigate} from "react-router-dom";







const Summary = ({ overAllState, setOverAllState, userData }) => {

    const navigate = useNavigate();


    function handleInvoiceDownload() {
        const invoice = document.getElementById('booking-summary');
        const opt = {
            margin: 0.1,
            filename: 'invoice.pdf',
            image: {type: 'jpeg', quality: 0.98},
            html2canvas: {scale: 1.7},
            jsPDF: {unit: 'in', format: 'a4', orientation: 'portrait'}
        };
        html2pdf().from(invoice).set(opt).save();
    }

    async function handleBooking() {
        alert("Booking Confirmed");

        // POST http://localhost:8888/user/addhistory HTTP/1.1
        // Content-Type: application/json

        // {
        //     "id": "66858ebacfd411801e8d613b",
        //     "history": {
        //         "tripType": "two way",
        //         "carType": "sedan",
        //         "pickTime": "2024-01-05",
        //         "dropTime": "2023-01-06",
        //         "name": "Sukhress",
        //         "lastName": "Warun",
        //         "phone": "09789858295",
        //         "age": "20",
        //         "email": "sukhresswarun@gmail.com",
        //         "address": "No.9 , F6 , Ruby Enclave Flats , Kullakarai street",
        //         "city": "Chennai",
        //         "zipcode": "600045",
        //         "distance": 27619,
        //         "price": 760,
        //         "pickUpAddress": "37MC+P5G, Poongavanapuram, Chennai, Tamil Nadu 600003, India",
        //         "dropOffAddress": "Tambaram (தாம்பரம்), East Tambaram Railway Station Road, West Tambaram, Tambaram, East Tambaram, Tambaram, Chennai, Tamil Nadu 600045, India"
        //     }
        // }
        let response = await fetch('https://car-booking-api.netlify.app/user/addhistory', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: userData._id,
                history: overAllState
            })
        });

        if(response.status !== 200) {
            alert("Booking Failed");
            return;
        }
        response = await response.json();
        

//     EmailJS


        navigate('/booking-confirmation')
    }




    const data =   overAllState  ;
    console.log(data);
    // const data = {
    //     tripType: "one-way",
    //     carType: "Sedan",
    //     pickTime: "11-Jul-2024 00:15",
    //     dropTime: "11-Jul-2024 02:30",
    //     name: "Ms. L",
    //     lastName: "L",
    //     phone: "1234567890",
    //     age: "35",
    //     email: "s.sankarking.s@gmail.com",
    //     address: "123 Main St",
    //     city: "Cityname",
    //     zipcode: "12345",
    //     distance: 100,
    //     price: 52300,
    //     pickUpAddress: "ykjnlk",
    //     dropOffAddress: "ygbuhnjm"
    // }



    return (
        <>
            <div className="booking-summary" id={"booking-summary"}>
                <h2 style={{fontSize: '30px', color: 'black'}}>Booking Summary</h2>
                <br/>
                <h1 style={{color: "black"}}>Zero Taxi</h1>
                <br/>
                <br/>
                <table>
                    <tbody>
                    <tr className={"title"}>
                        <th colSpan="2">TRIP DETAILS</th>
                    </tr>
                    <tr>
                        <td>Trip Date</td>
                        <td>{data.pickTime}</td>
                    </tr>
                    <tr>
                        <td>Trip Type</td>
                        <td>{data.tripType}</td>
                    </tr>
                    <tr>
                        <td>Vehicle Type</td>
                        <td>{data.carType}</td>
                    </tr>
                    <tr>
                        <td>Trip Amount</td>
                        <td> Estimate : {data.price - 400} + Driver Bata : 400</td>
                    </tr>
                    <tr className={"title"}>
                        <th colSpan="2">ADDRESS DETAILS</th>
                    </tr>
                    <tr>
                        <td>Pickup Time</td>
                        <td>{data.pickTime}</td>
                    </tr>
                    <tr>
                        <td>Pickup Address</td>
                        <td>{data.pickUpAddress}</td>
                    </tr>
                    <tr>
                        <td>Drop Address</td>
                        <td>{data.dropOffAddress}</td>
                    </tr>
                    <tr className={"title"}>
                        <th colSpan="2">CUSTOMER DETAILS</th>
                    </tr>
                    <tr>
                        <td>Customer Name</td>
                        <td>{data.name}</td>
                    </tr>
                    <tr>
                        <td>Email Id</td>
                        <td>{data.email}</td>
                    </tr>
                    <tr>
                        <td>Mobile No</td>
                        <td>{data.phone}</td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td>{data.address}, {data.zipcode}</td>
                    </tr>
                    <tr className={"title"}>
                        <th colSpan="2">TERMS AND CONDITIONS</th>
                    </tr>
                    <tr>
                        <th colSpan="2" style={{textAlign: 'left', padding: ' 10px 30px'}}>Minimum running must be 100
                            Kms for Drop trips.
                        </th>
                    </tr>
                    <tr>
                        <th colSpan="2" style={{textAlign: 'left', padding: ' 10px 30px'}}>Driver Batta Rs. 400. [Rs.
                            600 for above 400 kms]
                        </th>
                    </tr>
                    <tr>
                        <th colSpan="2" style={{textAlign: 'left', padding: ' 10px 30px'}}>Waiting Charges Rs. 150 per
                            hour.
                        </th>
                    </tr>
                    <tr>
                        <th colSpan="2" style={{textAlign: 'left', padding: ' 10px 30px'}}>Night charge of Rs.200 is
                            applicable for trips between 11 pm to 5 am.
                        </th>
                    </tr>
                    <tr>
                        <th colSpan="2" style={{textAlign: 'left', padding: ' 10px 30px'}}>Luggage allowed is 30 kg for
                            sedan and 60 kg for MUV. If the limit is exceeded, an additional charge of Rs.300 will apply
                            under the driver's guidance.
                        </th>
                    </tr>
                    <tr>
                        <th colSpan="2" style={{textAlign: 'left', padding: ' 10px 30px'}}>Only 1 (Pickup & drop) points
                            are allowed. More than that charges will be applicable. (Optional)
                        </th>
                    </tr>
                    <tr>
                        <th colSpan="2" style={{textAlign: 'left', padding: ' 10px 30px'}}>Toll fees, Inter-State Permit
                            charges (if any) are extra.
                        </th>
                    </tr>

                    <tr>
                        <th colSpan="2" style={{fontWeight: 'bold'}}>[Note: Kindly verify the bill amount on our app or
                            booking link, and then you can settle the trip amount with the driver.If you need any
                            clarification or assistance regarding the bill amount, please contact us at 7999222000
                            (available 24/7).
                        </th>
                    </tr>

                    </tbody>
                </table>
            </div>
            <div className={"button-div"}>
                <button className={"invoice-button"} onClick={handleInvoiceDownload}>
                <span> Download Invoice
                </span>
                </button>
                <button className={"invoice-button"} onClick={handleBooking}>
                <span> Confirm Booking
                </span>
                </button>
            </div>

            <Footer/>
        </>
    );
};

export default Summary;
