import React, {useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { format } from 'date-fns'
import { enGB } from 'date-fns/locale'
import { DatePickerCalendar, useDateInput } from 'react-nice-dates';
import 'react-nice-dates/build/style.css';
import '../css/calender.css';


function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [date, setDate] = useState()
  const inputProps = useDateInput({
    date,
    format: 'yyyy-MM-dd',
    locale: enGB,
    onDateChange: setDate

  })
  var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  var d = new Date(date)
  var month = d.getUTCMonth() + 1; //months from 1-12
  var day = d.getUTCDate()+1;
  var year = d.getUTCFullYear();
  var newdate = day + "/" + month + "/" + year + " , "+days[ d.getDay() ];


  return (
    <div className="calender container-fluid">

      <div className=" row">
        <div className="col-lg-4 div2 ">
          <div className="box">
            <p><span className="sp">The selected date is</span> {date && format(date, 'dd MMM yyyy', { locale: enGB })}</p>
            <div className="mid_box">
              <input className='input' {...inputProps}/>
              <button className="btn_c" onClick={handleShow}>
                Submit
              </button></div>
            <br />
            <br />
            <blockquote><p class="quotation">
            No doubt one may quote history to support any cause, as the devil quotes scripture.</p>
              <footer>— Learned Hand</footer>
            </blockquote>

          </div></div>

        <div className="col-lg-8 div1">

          <div className="container">
            <div className="caln">
              <DatePickerCalendar date={date}  onDateChange={setDate} locale={enGB} /></div></div>
      <div className="foo floating">
      <a href="/compose"><p className="edited_a"><i class="fas fa-pen-fancy"></i></p></a></div>

      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{newdate}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>

    </div>

  </div>
  );
}

export default Example;
