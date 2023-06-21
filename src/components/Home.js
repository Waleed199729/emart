import React, { lazy, Suspense, useContext } from "react";
import Products from "./Products";
import { MyOwnName } from "../AnimatedRoutes";
import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  // const Products = lazy(() => import("./Products")); //ReactCode splitting

  const myName = useContext(MyOwnName); //my name is passing in the {waleedName} object
  debugger;
  return (
    <>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
        classNameName="hero"
      >
        <div className="card text-bg-dark border-0">
          <img
            src="/assets/bg.jpg"
            className="card-img"
            alt="Backgound"
            height="550px"
          />
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <h6>{myName}</h6>
            <div className="home_heading">
              <h5 className="transition_heading card-title display-3 fe-bolder mb-0 ">
                New SEASON ARRIVALS
              </h5>
              <p className="card-text lead fs-2">CHECK OUT THE TRENDS</p>
            </div>
          </div>
        </div>

        <Products />
        {/* <Suspense
          fallback={
            <div> Loaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaading........ </div>
          }
        >
        </Suspense> */}
      </motion.div>
    </>
  );
};

export default Home;

/////// Products.js  Component is here
