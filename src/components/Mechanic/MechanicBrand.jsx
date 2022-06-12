import Form from "react-bootstrap/Form";
import best from "../../img/1st.webp";
import pick from "../../img/pick.jpg";
import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import { Link } from "@mui/material";

const MechanicBrand = () => {
  // const history = useHistory();
  return (
    <>
      {/* 3 part start */}
      <div
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
          <Link to="/MechanicFuel">
            <p>Swift</p>
            <p>Wagnor</p>
            <p>Baleno</p>
          </Link>
        </div>
      </div>
    </>
  );
};
export default MechanicBrand;
