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

const BodyWrap = styled.div`
  height: 90vh;
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
  startDate: "",
  endDate: "",
  content: "",
};

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
  const dispatch = useDispatch();

  /****Methods****/
  useEffect(() => {
    //after submitting form, clear form fields
    setForm(initialFormState);
  }, [submitted]);
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
    let validForm = validateForm();
    console.log("forms: ", form);
    dispatch(
      createMessage(
        form.firstName,
        form.lastName,
        form.phone,
        form.email,
        form.message
      )
    );
    //validForm
    let isValid = true;
    if (isValid) {
      axios
        .post(`${process.env.REACT_APP_API}/posts`, form)
        .then((response) => {
          console.log("response: ", response);
          //set boolean to clear form in useEffect hook
          setSubmitted(true);
          //redirect the page
          history.push("/");
        })
        .catch((err) => {
          console.log("handleSubmit error: ", err);
        });
    }
  };
  const validateForm = () => {
    let lastName = document.forms["sendMessageForm"]["lastName"].value;
    let firstName = document.forms["sendMessageForm"]["firstName"].value;
    let startDate = document.forms["sendMessageForm"]["startDate"].value;
    let phone = document.forms["sendMessageForm"]["phone"].value;
    let email = document.forms["sendMessageForm"]["email"].value;
    let message = document.forms["sendMessageForm"]["content"].value;
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
                {!lastNameInValid ? null : (
                  <Label style={{ color: "red" }}>Input cannot be empty</Label>
                )}
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
                {!firstNameInValid ? null : (
                  <Label style={{ color: "red" }}>Input cannot be empty</Label>
                )}
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
                  name="content"
                  id="content"
                  placeholder="Message"
                  onChange={handleChange}
                  value={form.content}
                />
                {!messageInValid ? null : (
                  <Label style={{ color: "red" }}>Input cannot be empty</Label>
                )}
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
