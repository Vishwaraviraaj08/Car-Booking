import "../src/dist/styles.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Navbar from "../src/components/Navbar";
import { Route, Routes } from "react-router-dom";
import Models from "./Pages/Models";
import TestimonialsPage from "./Pages/TestimonialsPage";
import Team from "./Pages/Team";
import Contact from "./Pages/Contact";
import PlaceFinder from "./Pages/PlaceFInder";
import LuggagePolicy from "./components/LuggagePolicy";
import Login from "./components/Login";
import Register from "./components/Register";
import Faq from "./Pages/Faq";
import Terms from "./Pages/Terms";
import CancellationPolicy from "./Pages/CancellationPolicy";
import RefundPolicy from "./Pages/RefundPolicy";
import PhoneIcon from "./components/PhoneIcon";
import {useState} from "react";
import Summary from "./components/Summary";
import BookingConfirmation from "./components/BookingConfirmation";
import History from "./components/History";
import ProfileMenu from "./components/ProfileMenu";


function App() {
    const [overAllState, setOverAllState] = useState(null);
    const [userData, setUserData] = useState(null);

    return (
        <>
            <Navbar userData={userData}/>
            <PhoneIcon/>
            <Routes>
                <Route index path="/" element={<Home overAllState={overAllState} setOverAllState={setOverAllState} />}/>
                <Route path="about" element={<About/>}/>

                <Route path={"summary"} element={<Summary overAllState={overAllState} setOverAllState={setOverAllState} />}/>
                <Route path={"booking-confirmation"} element={<BookingConfirmation/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="luggage-policy" element={<LuggagePolicy/>}/>
                <Route path="login" element={<Login userData={userData} setUserData={setUserData}/>}/>
                <Route path="register" element={<Register userData={userData} setUserData={setUserData}/>}/>
                <Route path={"faq"} element={<Faq />} />
                <Route path={"terms"} element={<Terms />} />
                <Route path="cancellation-policy" element={<CancellationPolicy />} />
                <Route path="refund-policy" element={<RefundPolicy />} />
                <Route path={"/history"} element={<History/>}/>
                <Route path={"/profile"} element={<ProfileMenu/>}/>


            </Routes>
        </>
    );
}

export default App;
