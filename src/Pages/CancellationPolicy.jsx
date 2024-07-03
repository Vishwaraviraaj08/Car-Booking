import Footer from "../components/Footer";



function CancellationPolicy() {
    return (
        <>
            
                
            <div className="about-main__text" style={{padding: "110px 5% 0"}}>
            <h2>Drop Taxi Cancellation Policy</h2>
                <p style={{fontSize: "2rem"}}>
                Your trips booked through DropTaxi can be cancelled. You may cancel your booking 24 hours before your scheduled journey.
                <br />
                <br />
                There are no cancellation fees except in such cases where the Taxi has already arrived at the customers location. In such cases, Rs.300 as a One-time cancellation fee has to be paid to driver.
                <br />
                <br />
                Aside from the cancellation of your booking, you can also modify your planned time, type of vehicle, and destination. However, the journey can't be adjusted within 8 hours of your booking.
                <br />
                <br />
                You can request amendments to a booking made earlier only if the request is made 8 hours before the pick-up time. There are no changes that will be made within 8 hours of the time of pick-up time. In cases where amendments requested on cab type, the cab type requested is subject to availability. If a customer is a no-show where the customer has not informed DropTaxi of the changes on his schedule 8 hours before the pick-up, no refunds will happen. The amendments can be done by contacting the support team of DropTaxi on 7-999-222-000 and mention the booking ID No for references.
                </p>
            </div>
            
            <Footer />
        </>
    )
}

export default CancellationPolicy;