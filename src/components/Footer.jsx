import React from "react";
import "./Footer.css";

export default function Footer(props) {
  return (
    <div className="foot footer ">

      <h1><i className="bi bi-c-circle p-2"></i>{props.note}</h1>
      <div>
        <a href="https://github.com/" rel="noopener"><i className="bi bi-github fs-3 p-2"></i> {props.note1}</a>
        <a href="https://www.linkedin.com/" rel="noopener"><i className="bi bi-linkedin fs-3 p-2"></i>{props.note2}</a>
      </div>
      
    </div>
  );
}