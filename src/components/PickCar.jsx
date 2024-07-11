import { useState } from "react";
import CarBox from "./CarBox";
import { CAR_DATA } from "./CarData";

function PickCar() {
  const [active, setActive] = useState("FirstCar");
  const [colorBtn, setColorBtn] = useState("btn1");

  const btnID = (id) => {
    setColorBtn(colorBtn === id ? "" : id);
  };

  const coloringButton = (id) => {
    return colorBtn === id ? "colored-button" : "";
  };

  return (
    <>
      <section className="pick-section">
        <div className="container">
          <div className="pick-container">
            <div className="pick-container__title">
              <h3>Vehicle Models</h3>
              <h2>Our Car fleet</h2>
              <p>
                Choose from a variety of our amazing vehicles to Book for your
                next adventure or business trip
              </p>
            </div>
            <div className="pick-container__car-content">
              {/* pick car */}
              <div className="pick-box">
                <button
                  className={`${coloringButton("btn1")}`}
                  onClick={() => {
                    setActive("FirstCar");
                    btnID("btn1");
                  }}
                >
                  Sedan
                </button>
                <button
                  className={`${coloringButton("btn2")}`}
                  id="btn2"
                  onClick={() => {
                    setActive("SecondCar");
                    btnID("btn2");
                  }}
                >
                  MUV-Xylo
                </button>
                <button
                  className={`${coloringButton("btn3")}`}
                  id="btn3"
                  onClick={() => {
                    setActive("ThirdCar");
                    btnID("btn3");
                  }}
                >
                  MUV-Innova
                </button>
                {/*<button*/}
                {/*  className={`${coloringButton("btn4")}`}*/}
                {/*  id="btn4"*/}
                {/*  onClick={() => {*/}
                {/*    setActive("FourthCar");*/}
                {/*    btnID("btn4");*/}
                {/*  }}*/}
                {/*>*/}
                {/*  Innova*/}
                {/*</button>*/}
              </div>

              {active === "FirstCar" && <CarBox data={CAR_DATA} carID={0} />}
              {active === "SecondCar" && <CarBox data={CAR_DATA} carID={1} />}
              {active === "ThirdCar" && <CarBox data={CAR_DATA} carID={2} />}
              {/*{active === "FourthCar" && <CarBox data={CAR_DATA} carID={3} />}*/}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PickCar;
