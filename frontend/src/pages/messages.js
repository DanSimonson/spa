import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import styled from "styled-components";
import { createMessage } from "../actions/messageActions";

import axios from "axios";
import {
  Button,
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
import * as Validate from "../components/validation/validate";
//100vh
const BodyWrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(https://res.cloudinary.com/dmglopmul/image/upload/v1610711005/projectPhotos/spa-business/massagetables.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const initialFormState = {
  lastName: "",
  firstName: "",
  phone: "",
  email: "",
  startDate: "",
  endDate: "",
  message: "",
};

let errorMsg;

function Message() {
  const [form, setForm] = useState(initialFormState);
  const [submitted, setSubmitted] = useState(false);
  const history = useHistory();
  const [lastNameInValid, setLastNameInValid] = useState(false);
  const [firstNameInValid, setFirstNameInValid] = useState(false);
  const [phoneInValid, setPhoneInValid] = useState(true);
  const [emailInValid, setEmailInValid] = useState(true);
  const [inValidDate, setInValidDate] = useState(false);
  const [messageInValid, setMessageInValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState([]);
  const dispatch = useDispatch();

  /****Methods****/

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleCancel = () => {
    //redirect the page
    history.push("/");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let errorFound;
    errorMsg = Validate.EditForm({
      firstName: form.firstName,
      lastName: form.lastName,
      phone: form.phone,
      email: form.email,
      message: form.message,
    });

    setErrorMessage(errorMsg);
    for (let i = 0; i < errorMsg.length; i++) {
      console.log("errorMsg[i].valid", errorMsg[i].valid);
      if (errorMsg[i].valid !== true) {
        errorFound = true;
      }
    }
    if (errorFound === true) {
      //do nothing and fix error on form
    } else {
      let firstName = form.firstName;
      let lastName = form.lastName;
      let phone = form.phone;
      let email = form.email;
      let message = form.message;
      dispatch(createMessage(firstName, lastName, phone, email, message));
      history.push("/");
      setForm(initialFormState);
    }
  };

  /****end Methods***/

  /****rendering****/
  return (
    <>
      <div className="header" id="myHeader">
        <Navbar />
      </div>
      <BodyWrap className="wrapStyle">
        <Container>
          <h1
            className="text-center"
            style={{
              color: "#6a0dad",
              textShadow: "2px 2px 2px #000",
            }}
          >
            Send Message
          </h1>
          <Form
            name="sendMessageForm"
            inverse
            style={{
              backgroundColor: "#6a0dad",
              borderColor: "#FFFF00",
              borderRadius: "8px",
            }}
            onSubmit={handleSubmit}
          >
            <Col sm="12" md={{ size: 6, offset: 3 }}>
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
                <span style={{ color: "red", zIndex: 2 }}>
                  {errorMsg && `${errorMsg[1].msg}`}{" "}
                </span>
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
                <span style={{ color: "red", zIndex: 2 }}>
                  {errorMsg && `${errorMsg[0].msg}`}{" "}
                </span>
              </FormGroup>
              <FormGroup>
                <Label style={{ color: "#fff" }} for="phone" className="mt-3">
                  Phone
                </Label>
                <Input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Phone Number"
                  onChange={handleChange}
                  value={form.phone}
                ></Input>
                <span style={{ color: "red", zIndex: 2 }}>
                  {errorMsg && `${errorMsg[2].msg}`}{" "}
                </span>
              </FormGroup>
              <FormGroup>
                <Label style={{ color: "#fff" }} for="email" className="mt-3">
                  Email
                </Label>
                <Input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                  onChange={handleChange}
                  value={form.email}
                ></Input>
                <span style={{ color: "red", zIndex: 2 }}>
                  {errorMsg && `${errorMsg[3].msg}`}{" "}
                </span>
              </FormGroup>
              {/*<FormGroup>
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
                {!inValidDate ? null : (
                  <Label style={{ color: "red" }}>
                    Input format must be mm/dd/yyy
                  </Label>
                )}
              </FormGroup>*/}
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
                <span style={{ color: "red", zIndex: 2 }}>
                  {errorMsg && `${errorMsg[4].msg}`}{" "}
                </span>
              </FormGroup>
              <div className="mb-3 mt-3 text-right">
                <Button type="submit" color="warning" size="lg">
                  Submit
                </Button>{" "}
                <Button
                  onClick={handleCancel}
                  className="ml-2 mt-3 mb-3"
                  color="warning"
                  size="lg"
                >
                  Cancel
                </Button>
              </div>
            </Col>
          </Form>
        </Container>
      </BodyWrap>
      <Footer />
    </>
  );
}

export default Message;
