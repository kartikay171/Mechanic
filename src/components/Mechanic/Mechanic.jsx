import Form from "react-bootstrap/Form";
import best from "../../img/1st.webp";
import pick from "../../img/pick.jpg";
import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import { Link } from "@mui/material";

const Mechanic = () => {
  // const history = useHistory();
  return (
    <>
      {/* 1 part start */}
      <div
        class="card shadow p-3 mb-5 bg-body rounded"
        style={{ width: "30rem" }}
      >
        <div class="card-body">
          <h5 class="card-title">Go Mechanic</h5>
          <div class="container" style={{ textAlign: "center" }}>
            <div class="row">
              <div class="col mechanicText">
                <img src={best} style={{ width: "30px" }} />
                <p>Best Price</p>
              </div>
              <div class="col mechanicText">
                <img src={pick} style={{ width: "30px" }} />
                <p>Free Pickup & Drop</p>
              </div>
              <div class="col mechanicText">
                <img src={best} style={{ width: "30px" }} />
                <p>Genuine Spares</p>
              </div>
              <div class="col mechanicText">
                <img src={pick} style={{ width: "30px" }} />
                <p>Expert Workmanship</p>
              </div>
            </div>
          </div>
          <div class="card">
            <Link to="/MechanicManu">
              <div class="card-body changes">Select your Cars Details</div>
            </Link>
          </div>
          <div class="card">
            <div class="card-body">
              Enter Your Mobile Number
              {/* <input placeholder="Enter Your Mobile Number" /> */}
            </div>
          </div>
        </div>
      </div>
      {/* 1 part end  */}

      {/* 2 part start */}
      {/* <div
        class="card shadow p-3 mb-5 bg-body rounded"
        style={{ width: "30rem" }}
      >
        <div class="card-body">
          <div class="row">
            <div class="col-lg-11">
              <h5 class="card-title">Select manufacturer</h5>
            </div>
            <div class="col-lg-1">X</div>
          </div>

          <div class="card">
            <div class="card-body">Search Cars</div>
          </div>
          <p>Maruti</p>
          <p>Hyundai</p>
          <p>Honda</p>
          <p>Tata</p>
          <p>Ford</p>
        </div>
      </div> */}

      {/* 3 part start */}
      {/* <div
        class="card shadow p-3 mb-5 bg-body rounded"
        style={{ width: "30rem" }}
      >
        <div class="card-body">
          <div class="row">
            <div class="col-lg-11">
              <h5 class="card-title">Select Brand</h5>
            </div>
            <div class="col-lg-1">X</div>
          </div>

          <div class="card">
            <div class="card-body">Search Model</div>
          </div>
          <p>Swift</p>
          <p>Wagnor</p>
          <p>Baleno</p>
        </div>
      </div> */}

      {/* 4 part start */}
      {/* <div
        class="card shadow p-3 mb-5 bg-body rounded"
        style={{ width: "30rem" }}
      >
        <div class="card-body">
          <div class="row">
            <div class="col-lg-11">
              <h5 class="card-title">Select Fuel Type</h5>
            </div>
            <div class="col-lg-1">X</div>
          </div>

          <div class="card">
            <div class="card-body">Search Fuel Type</div>
          </div>
          <p>Petrol</p>
          <p>CNG</p>
          <p>Diesel</p>
        </div>
      </div> */}
      {/* 4 part end */}
    </>
  );
};
export default Mechanic;
