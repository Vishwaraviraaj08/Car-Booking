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

function App() {
    return (
        <>
            <Navbar/>
            <PhoneIcon/>
            <Routes>
                <Route path="place-finder" element={<PlaceFinder/>}/>
                <Route index path="/" element={<Home/>}/>
                <Route path="about" element={<About/>}/>
             
                <Route path="contact" element={<Contact/>}/>
                <Route path="luggage-policy" element={<LuggagePolicy/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<Register/>}/>
                <Route path={"faq"} element={<Faq />} />
                <Route path={"terms"} element={<Terms />} />
                <Route path="cancellation-policy" element={<CancellationPolicy />} />
                <Route path="refund-policy" element={<RefundPolicy />} />


            </Routes>
        </>
    );
}

export default App;
