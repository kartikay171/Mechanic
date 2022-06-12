import Form from "react-bootstrap/Form";
import best from "../../img/1st.webp";
import pick from "../../img/pick.jpg";
import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import { Link } from "@mui/material";

const MechanicManu = () => {
  // const history = useHistory();
  return (
    <>
      {/* 2 part start */}
      <div
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
          <Link to="/MechanicBrand">
            <p>Maruti</p>
            <p>Hyundai</p>
            <p>Honda</p>
            <p>Tata</p>
            <p>Ford</p>
          </Link>
        </div>
      </div>
    </>
  );
};
export default MechanicManu;
