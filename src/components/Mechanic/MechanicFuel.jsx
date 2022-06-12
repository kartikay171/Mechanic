import Form from "react-bootstrap/Form";
import best from "../../img/1st.webp";
import pick from "../../img/pick.jpg";
import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import { Link } from "@mui/material";

const MechanicFuel = () => {
  // const history = useHistory();
  return (
    <>
      {/* 4 part start */}
      <div
        class="card shadow p-3 mb-5 bg-body rounded"
        style={{ width: "30rem" }}
      >
        <div class="card-body">
          <div class="row">
            <div class="col">
              <h5 class="card-title">Select Fuel Type</h5>
            </div>
            <Link to="/">
              <div class="col">X</div>
            </Link>
          </div>

          <div class="card">
            <div class="card-body">Search Fuel Type</div>
          </div>
          <p>Petrol</p>
          <p>CNG</p>
          <p>Diesel</p>
        </div>
      </div>
      {/* 4 part end */}
    </>
  );
};
export default MechanicFuel;
