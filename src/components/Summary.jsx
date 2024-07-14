import React, { useRef, useEffect } from 'react';
import '../styles/BookingSummary.css';
import Footer from "./Footer";
import html2pdf from "html2pdf.js";
import emailjs from 'emailjs-com';
import { useNavigate } from "react-router-dom";

const Summary = ({ overAllState, setOverAllState, userData, setUserData, setWhatsappMsg }) => {

    const navigate = useNavigate();
    const formRef = useRef();

    // useEffect(() => {
    //     if (performance.getEntriesByType('navigation')[0].type === 'reload') {
    //       navigate('/');
    //     }
    // }, [navigate]);
    //
    useEffect(() => {
        if(overAllState === null) {
            navigate('/');
        }
    }, [overAllState, navigate]);

    const generateBookingSummaryText = (data) => {
        const msg =  `
        Booking Summary:
        
        Zero Taxi
        
        TRIP DETAILS
        ------------------
        Trip Date: ${data.pickTime}
        Trip Type: ${data.tripType}
        Vehicle Type: ${data.carType}
        Trip Amount: Estimate: ${data.price - 400} + Driver Bata: 400
        
        ADDRESS DETAILS
        ------------------
        Pickup Time: ${data.pickTime}
        Pickup Address: ${data.pickUpAddress}
        Drop Address: ${data.dropOffAddress}
        
        CUSTOMER DETAILS
        ------------------
        Customer Name: ${data.name} ${data.lastName}
        Email Id: ${data.email}
        Mobile No: ${data.phone}
        Address: ${data.address}, ${data.zipcode}
        `

        const terms =  `
        TERMS AND CONDITIONS
        ------------------
        Minimum running must be 100 Kms for Drop trips.
        Driver Batta Rs. 400. [Rs. 600 for above 400 kms]
        Waiting Charges Rs. 150 per hour.
        Night charge of Rs.200 is applicable for trips between 11 pm to 5 am.
        Luggage allowed is 30 kg for sedan and 60 kg for MUV. If the limit is exceeded, an additional charge of Rs.300 will apply under the driver's guidance.
        Only 1 (Pickup & drop) points are allowed. More than that charges will be applicable. (Optional)
        Toll fees, Inter-State Permit charges (if any) are extra.
        
        Note: Kindly verify the bill amount on our app or booking link, and then you can settle the trip amount with the driver. If you need any clarification or assistance regarding the bill amount, please contact us at 7999222000 (available 24/7).
    `;
        setWhatsappMsg(msg);
        return msg + terms;
    };




    function handleInvoiceDownload() {
        const invoice = document.getElementById('booking-summary');
        const opt = {
            margin: 0.1,
            filename: 'invoice.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 1.7 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().from(invoice).set(opt).save();
    }

    async function handleBooking() {
        if(userData) {
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

            response = await response.json();
        }

        // Generate the formatted booking summary text

        const bookingSummaryText = generateBookingSummaryText(overAllState);

        const templateParams = {
            booking_summary: bookingSummaryText,
            user_name: overAllState.name,
            user_email: overAllState.email
        };

        emailjs.send('service_9xjmzqf', 'template_hgiteq8', templateParams, 'fjNGl4fwZtpvtiI0h')
            .then((result) => {
                console.log(result.text);
                alert("Booking summary sent to your email!");
                navigate('/booking-confirmation');
            }, (error) => {
                console.log(error.text);
                alert("An error occurred, Please try again");
                navigate('/');
            });
    }

    const data = overAllState;
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

    if(!data) {
        return null;
    }

    return (
        <>
            <div className="booking-summary" id="booking-summary">
                <h2 style={{ fontSize: '30px', color: 'black' }}>Booking Summary</h2>
                <br />
                <h1 style={{ color: "black" }}>Zero Taxi</h1>
                <br />
                <br />
                <table>
                    <tbody>
                    <tr className="title">
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
                    <tr className="title">
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
                    <tr className="title">
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
                        <td>{data.address}</td>
                    </tr>
                    <tr className="title">
                        <th colSpan="2">TERMS AND CONDITIONS</th>
                    </tr>
                    <tr>
                        <th colSpan="2" style={{ textAlign: 'left', padding: ' 10px 30px' }}>Minimum running must be 100 Kms for Drop trips.</th>
                    </tr>
                    <tr>
                        <th colSpan="2" style={{ textAlign: 'left', padding: ' 10px 30px' }}>Driver Batta Rs. 400. [Rs. 600 for above 400 kms]</th>
                    </tr>
                    <tr>
                        <th colSpan="2" style={{ textAlign: 'left', padding: ' 10px 30px' }}>Waiting Charges Rs. 150 per hour.</th>
                    </tr>
                    <tr>
                        <th colSpan="2" style={{ textAlign: 'left', padding: ' 10px 30px' }}>Night charge of Rs.200 is applicable for trips between 11 pm to 5 am.</th>
                    </tr>
                    <tr>
                        <th colSpan="2" style={{ textAlign: 'left', padding: ' 10px 30px' }}>Luggage allowed is 30 kg for sedan and 60 kg for MUV. If the limit is exceeded, an additional charge of Rs.300 will apply under the driver's guidance.</th>
                    </tr>
                    <tr>
                        <th colSpan="2" style={{ textAlign: 'left', padding: ' 10px 30px' }}>Only 1 (Pickup & drop) points are allowed. More than that charges will be applicable. (Optional)</th>
                    </tr>
                    <tr>
                        <th colSpan="2" style={{ textAlign: 'left', padding: ' 10px 30px' }}>Toll fees, Inter-State Permit charges (if any) are extra.</th>
                    </tr>
                    <tr>
                        <th colSpan="2" style={{ fontWeight: 'bold' }}>[Note: Kindly verify the bill amount on our app or booking link, and then you can settle the trip amount with the driver. If you need any clarification or assistance regarding the bill amount, please contact us at 7999222000 (available 24/7).</th>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className="button-div">
                <button className="invoice-button" onClick={handleInvoiceDownload}>
                    <span> Download Invoice
                    </span>
                </button>
                <button className="invoice-button" onClick={handleBooking}>
                    <span> Confirm Booking
                    </span>
                </button>
            </div>

            <Footer />
       </>
    );
};

export default Summary;
