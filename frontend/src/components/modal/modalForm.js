import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Col,
  Container,
  Row,
  FormFeedback,
  InputGroupAddon,
} from "reactstrap";
//import { ReservationContext } from "../../context/reservationContext";

const initialFormState = {
  lastName: "",
  firstName: "",
  startDate: "",
  endDate: "",
  message: "",
};

const ModalForm = (props) => {
  const {
    buttonLabel,
    className,
    openModal,
    //reservations,
    foundReservation,
  } = props;
  const [modal, setModal] = useState(false);
  //from sendMessage
  const [form, setForm] = useState(initialFormState);
  const [submitted, setSubmitted] = useState(false);
  const history = useHistory();
  const [lastNameInValid, setLastNameInValid] = useState(false);
  const [firstNameInValid, setFirstNameInValid] = useState(false);
  const [inValidDate, setInValidDate] = useState(false);
  const [messageInValid, setMessageInValid] = useState(false);
  //   const { reservations, setReservations, deleteReservation, getData } =
  //     useContext(ReservationContext);

  const toggle = () => {
    //close or open
    setModal(!modal);
    //close from parent
    props.handleCloseFromParent(modal);
  };

  useEffect(() => {
    if (openModal) {
      toggle();
    }
  }, [openModal]);

  useEffect(() => {
    setForm(foundReservation);
  }, [foundReservation]);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let validForm = validateForm();
    // if (validForm) {
    //   axios
    //     .patch(`/api/items/${foundReservation._id}`, form)
    //     .then((response) => {
    //       getData();
    //       toggle();
    //     })
    //     .catch((err) => {
    //       console.log("handleSubmit error: ", err);
    //     });
    // }
  };
  const validateForm = () => {
    let lastName = document.forms["sendMessageForm"]["lastName"].value;
    let firstName = document.forms["sendMessageForm"]["firstName"].value;
    let startDate = document.forms["sendMessageForm"]["startDate"].value;
    let message = document.forms["sendMessageForm"]["message"].value;
    if (lastName === "") {
      setLastNameInValid(true);
      return false;
    } else {
      if (firstName === "") {
        setLastNameInValid(false);
        setFirstNameInValid(true);
        return false;
      } else {
        if (startDate === "") {
          setLastNameInValid(false);
          setFirstNameInValid(false);
          setInValidDate(true);
          return false;
        } else {
          if (!validateDate(startDate)) {
            setInValidDate(true);
            return false;
          } else {
            if (message === "") {
              setInValidDate(false);
              setMessageInValid(true);
              return true;
            } else {
              setMessageInValid(false);
            }
          }
        }
      }
    }
    return true;
  };
  function validateDate(testdate) {
    var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    return date_regex.test(testdate);
  }
  /*** end methods ***/

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal
        isOpen={modal}
        modalTransition={{ timeout: 700 }}
        backdropTransition={{ timeout: 1300 }}
        toggle={toggle}
        className={className}
        size="lg"
      >
        <ModalHeader toggle={toggle}>Update Reservation</ModalHeader>
        <ModalBody>
          <Form
            name="sendMessageForm"
            inverse
            style={{
              backgroundColor: "#6a0dad",
              borderColor: "#FFFF00",
            }}
            className="rounded"
            onSubmit={handleSubmit}
          >
            <Col md="12">
              <FormGroup>
                <Label
                  style={{
                    color: "#fff",
                  }}
                  for="lastName"
                  className="mt-3"
                >
                  Last Name
                </Label>
                <Input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                  onChange={handleChange}
                  value={form.lastName}
                />
                {lastNameInValid ? (
                  <Label style={{ color: "red" }}>Input cannot be empty</Label>
                ) : null}
              </FormGroup>
              <FormGroup>
                <Label
                  style={{
                    color: "#fff",
                  }}
                  for="firstName"
                  className="mt-3"
                >
                  First Name
                </Label>
                <Input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                  onChange={handleChange}
                  value={form.firstName}
                />
                {firstNameInValid ? (
                  <Label style={{ color: "red" }}>Input cannot be empty</Label>
                ) : null}
              </FormGroup>
              <FormGroup>
                <Label
                  style={{
                    color: "#fff",
                  }}
                  for="startDate"
                  className="mt-3"
                >
                  Message Date
                </Label>
                <Input
                  type="text"
                  name="startDate"
                  id="startDate"
                  placeholder="Message Date"
                  onChange={handleChange}
                  value={form.startDate}
                />
                {inValidDate ? (
                  <Label style={{ color: "red" }}>
                    Input format must be mm/dd/yyy
                  </Label>
                ) : null}
              </FormGroup>
              <FormGroup>
                <Label
                  style={{
                    color: "#fff",
                  }}
                  for="message"
                  className="mt-3"
                >
                  Message
                </Label>
                <Input
                  type="textarea"
                  name="message"
                  id="message"
                  placeholder="Message"
                  onChange={handleChange}
                  value={form.message}
                />
                {messageInValid ? (
                  <Label style={{ color: "red" }}>Input cannot be empty</Label>
                ) : null}
              </FormGroup>
              <div className="mb-3 mt-3 text-right">
                <Button type="submit" color="warning" size="lg">
                  Submit
                </Button>{" "}
                <Button
                  onClick={toggle}
                  className="ml-2 mt-3 mb-3"
                  color="warning"
                  size="lg"
                >
                  Cancel
                </Button>
              </div>
            </Col>
          </Form>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalForm;
