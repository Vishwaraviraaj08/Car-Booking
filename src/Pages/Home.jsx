import Hero from "../components/Hero";
import BookCar from "../components/BookCar";
import PlanTrip from "../components/PlanTrip";
import PickCar from "../components/PickCar";
import Banner from "../components/Banner";
import ChooseUs from "../components/ChooseUs";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import React, { useEffect } from "react";

function Home({ overAllState, setOverAllState}) {
  function Example() {
  useEffect(() => {
    document.title = "Online Drop Taxi Service in South India | Zero Drop Taxi";
  }, []);
  return (
    <>
      <Hero />
      <BookCar overAllState={overAllState} setOverAllState={setOverAllState} />
      <PlanTrip />
      <PickCar />
      {/*<Banner />*/}
      <ChooseUs />
      {/*<Testimonials />*/}
      {/*<Faq />*/}
      {/*<Download />*/}
      <Footer />
    </>
  );
}

export default Home;
