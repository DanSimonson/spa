import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { listMessages, updateMessage } from "../../actions/messageActions";
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
  //const [newReservation, setNewReservation] = useState({});
  const dispatch = useDispatch();
  // const messageList = useSelector((state) => state.messageList);
  // const { loading, error, messages } = messageList;
  let newReservation;

  if (reservations) {
    tempLastName = foundReservation.lastName;
    tempFirstName = foundReservation.firstName;
    tempMsg = foundReservation.message;
    tempPhone = foundReservation.phone;
    tempEmail = foundReservation.email;
  }
  useEffect(() => {
    loadData();
  }, [tempLastName, tempFirstName, tempMsg, tempPhone, tempEmail]);

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

  const changeReservation = () => {
    return {
      _id: foundReservation._id,
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email,
      message: msg,
    };
  };

  //history.push('/showMessages')
  const handleChange = (event) => {};
  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log("event: ", event);
    // changeReservation({
    //   _id: foundReservation._id,
    //   firstName: firstName,
    //   lastName: lastName,
    //   phone: phone,
    //   email: email,
    //   message: msg,
    // });
    newReservation = {
      _id: foundReservation._id,
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email,
      message: msg,
    };
    // setNewReservation({
    //   _id: foundReservation._id,
    //   firstName: firstName,
    //   lastName: lastName,
    //   phone: phone,
    //   email: email,
    //   message: msg,
    // });
    // dispatch(
    //   updateMessage({
    //     _id: foundReservation._id,
    //     firstName: firstName,
    //     lastName: lastName,
    //     phone: phone,
    //     email: email,
    //     message: msg,
    //   })
    // );
    //reset fields
    setFirstName("");
    setLastName("");
    setPhone("");
    setEmail("");
    setMsg("");
    //close modal
    toggle();
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
                  onChange={(event) => setLastName(event.target.value)}
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
                  onChange={(event) => setFirstName(event.target.value)}
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
                  onChange={(event) => setPhone(event.target.value)}
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
                  onChange={(event) => setEmail(event.target.value)}
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
                  onChange={(event) => setMsg(event.target.value)}
                  value={msg}
                />
              </FormGroup>
              <div className="mb-3 mt-3 text-right">
                <Button
                  onClick={() =>
                    props.changeReservation({
                      _id: foundReservation._id,
                      firstName: firstName,
                      lastName: lastName,
                      phone: phone,
                      email: email,
                      message: msg,
                    })
                  }
                  type="submit"
                  color="warning"
                  size="lg"
                >
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
