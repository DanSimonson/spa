import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { listMessages } from "../../actions/messageActions";
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

//initial values
let tempLastName = "";
let tempFirstName = "";
let tempMsg = "";
let tempPhone = "";
let tempEmail = "";

const ModalForm = (props) => {
  const { buttonLabel, className, openModal, reservations, foundReservation } =
    props;
  console.log("ModalForm props: ", props);
  const [modal, setModal] = useState(false);
  const [firstName, setFirstName] = useState(tempLastName);
  const [lastName, setLastName] = useState(tempLastName);
  const [msg, setMsg] = useState(tempMsg);
  const [phone, setPhone] = useState(tempPhone);
  const [email, setEmail] = useState(tempEmail);
  // if(msgs){
  //   let ms = localStorage
  // }
  let ms = localStorage.getItem("msgs");
  if (ms) {
  }
  //let msgs = localStorage.getItem(msgs);
  //console.log("msgs: ", msgs["0"]["0"]);

  if (reservations) {
    let index;
    for (let i = 0; i < reservations.length; i++) {
      if (reservations[i]._id === foundReservation) {
        index = Number.parseInt(i);
        tempLastName = reservations[index].lastName;
        tempFirstName = reservations[index].firstName;
        tempMsg = reservations[index].message;
        tempPhone = reservations[index].phone;
        tempEmail = reservations[index].email;
      }
    }
  }
  useEffect(() => {
    // if (
    //   lastName !== "" &&
    //   firstName !== "" &&
    //   msg !== "" &&
    //   phone !== "" &&
    //   email !== ""
    // ) {
    //   loadData();
    // }
    loadData();
  }, [tempLastName, tempFirstName, tempMsg, phone, email]);

  const loadData = () => {
    setLastName(tempLastName);
    setFirstName(tempFirstName);
    setMsg(tempMsg);
    setPhone(tempPhone);
    setEmail(tempEmail);
  };

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

  const handleChange = (event) => {
    //setLastName();
    // setForm({
    //   ...form,
    //   [event.target.name]: event.target.value,
    // });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  /*** end methods ***/

  return (
    <div>
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
                  value={lastName}
                />
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
                  placeholder="firstName"
                  onChange={handleChange}
                  value={firstName}
                />
              </FormGroup>
              <FormGroup>
                <Label
                  style={{
                    color: "#fff",
                  }}
                  for="phone"
                  className="mt-3"
                >
                  Phone
                </Label>
                <Input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Phone"
                  onChange={handleChange}
                  value={phone}
                />
              </FormGroup>
              <FormGroup>
                <Label
                  style={{
                    color: "#fff",
                  }}
                  for="email"
                  className="mt-3"
                >
                  Email
                </Label>
                <Input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="email"
                  onChange={handleChange}
                  value={email}
                />
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
                  value={msg}
                />
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
