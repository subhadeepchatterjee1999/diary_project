import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'react-nice-dates/build/style.css';
import '../css/compose.css'
const Compose = () => {
  var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  var d = new Date();
  var month = d.getUTCMonth() + 1; //months from 1-12
  var day = d.getUTCDate();
  var year = d.getUTCFullYear();
  var newdate = day + "/" + month + "/" + year + " , "+days[ d.getDay() ];
  return (
<div className="any">
  <div className="container">
    <div className="row">
      <div class="box2 col-sm-6">
        <h1><span className="sp">{newdate}</span></h1>
        <hr />

        <textarea name="comment" id="comment" placeholder="Type something..."></textarea>
        <div className="btn1">
          <Button  href="/"><i class="fas fa-file-export"></i>Save</Button></div>
      </div></div></div>
</div>
  )
}
export default Compose;
