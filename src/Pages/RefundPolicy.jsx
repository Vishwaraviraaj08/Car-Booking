import Footer from "../components/Footer";
import React, { useEffect } from "react";



function RefundPolicy() {
    function Example() {
  useEffect(() => {
    document.title = "One Way Taxi Refund Policy | Zero Drop Taxi;
  }, []);
    return (
        <>
            
                
            <div className="about-main__text" style={{padding: "110px 5% 0"}}>
            <h2>Zero Drop Taxi Refund Policy</h2>
            <p style={{fontSize: "2rem"}}>
                This Refund policy applicable only for Drivers who makes payments with us.
                <br />
                <br />
                Complaints like Mistakenly transferred, 2 times debited from your account etc should be addressed within 10 working days.Refunds (If Applicable)
                <br />
                <br />
                Once we get a proper Supporting document for your complaints the amount will be refunded to your bank account within 7 working days.Refunds (Not Applicable)
                <br />
                <br />
                You may not able to claim refund for your payment which has been done before 30days.Contact us
                <br />
                <br />
                You may reach us at Email:support@ZeroDropTaxi.in, Telephone: 044-44556677 and Mobile:8939998403
            </p>
            </div>
            
            <Footer />
        </>
    )
}

export default RefundPolicy;
