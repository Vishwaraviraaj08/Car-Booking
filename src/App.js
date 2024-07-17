import "../src/dist/styles.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Navbar from "../src/components/Navbar";
import { Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact";
import LuggagePolicy from "./components/LuggagePolicy";
import Login from "./components/Login";
import Register from "./components/Register";
import Faq from "./Pages/Faq";
import Terms from "./Pages/Terms";
import CancellationPolicy from "./Pages/CancellationPolicy";
import RefundPolicy from "./Pages/RefundPolicy";
import PhoneIcon from "./components/PhoneIcon";
import WhatsAppIcon from "./components/whatsAppIcon";
import {useState, useEffect} from "react";
import Summary from "./components/Summary";
import BookingConfirmation from "./components/BookingConfirmation";
import History from "./components/History";
import CarTypes from "./components/CarTypes";
import ScrollToTop from "./components/ScrollToTop";


function App() {
    const [overAllState, setOverAllState] = useState(null);
    const [userData, setUserData] = useState(null);
    const [whatsappMsg, setWhatsappMsg] = useState("");

    useEffect(() => {
        const prevData = sessionStorage.getItem('userData');
        if (prevData) {
            setUserData(JSON.parse(prevData));
        }
      }, []);

    return (
        <>
            <Navbar userData={userData} setUserData={setUserData}/>
            <PhoneIcon/>
            <ScrollToTop />
            <Routes>
                <Route index path="/" element={<Home overAllState={overAllState} setOverAllState={setOverAllState} />}/>
                <Route path="about" element={<About/>}/>

                <Route path={"summary"} element={<Summary overAllState={overAllState} setOverAllState={setOverAllState} userData={userData} setUserData={setUserData} setWhatsappMsg={setWhatsappMsg}/>}/>
                <Route path={"booking-confirmation"} element={<BookingConfirmation whatsappMsg={whatsappMsg}/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="luggage-policy" element={<LuggagePolicy/>}/>
                <Route path="login" element={<Login userData={userData} setUserData={setUserData}/>}/>
                <Route path="register" element={<Register/>}/>
                <Route path={"faq"} element={<Faq />} />
                <Route path={"terms"} element={<Terms />} />
                <Route path="cancellation-policy" element={<CancellationPolicy />} />
                <Route path="refund-policy" element={<RefundPolicy />} />
                <Route path={"/history"} element={<History userData={userData} setUserData={setUserData}/>}/>
                <Route path={"/cartypes"} element={<CarTypes/>}/>

            </Routes>
            <WhatsAppIcon/>
            
        </>
    );
}

export default App;
