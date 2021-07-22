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

const initialFormState = {
  lastName: "",
  firstName: "",
  phone: "",
  email: "",
  message: "",
};
let tempLastName = "";
let tempFirstName = "";
const ModalForm = (props) => {
  const { buttonLabel, className, openModal, reservations, foundReservation } =
    props;
  const [modal, setModal] = useState(false);
  //from sendMessage
  const [form, setForm] = useState(initialFormState);
  const [submitted, setSubmitted] = useState(false);
  const history = useHistory();
  const [lastNameInValid, setLastNameInValid] = useState(false);
  const [firstNameInValid, setFirstNameInValid] = useState(false);
  const [inValidDate, setInValidDate] = useState(false);
  const [messageInValid, setMessageInValid] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState(tempLastName);
  //   const [email, setEmail] = useState(reservations[0].email);
  //   const [address, setAddress] = useState(reservations[0].message);
  //   const [phone, setPhone] = useState(reservations[0].phone);
  //let msg = localStorage.getItem("messages");

  if (reservations) {
    //console.log("reservations[0]", reservations[0]);
    // if (reservations[0]) {
    //   console.log("reservations[0].lastName: ", reservations[0].lastName);
    //   console.log("reservations[0]._id: ", reservations[0]._id);
    //   tempLastName = reservations[0].lastName;
    // }
    let index;
    for (let i = 0; i < reservations.length; i++) {
      if (reservations[i]._id === foundReservation) {
        index = Number.parseInt(i);
        tempLastName = reservations[index].lastName;
      }
    }
    // let index = 3;
    // if (reservations[index]) {
    //   console.log(
    //     "reservations[index].lastName: ",
    //     reservations[index].lastName
    //   );
    //   console.log("reservations[index]._id: ", reservations[index]._id);
    //   tempLastName = reservations[index].lastName;
    // }
  }
  useEffect(() => {
    if (lastName !== "") {
      loadData();
    }
  }, [tempLastName]);

  const loadData = () => {
    setLastName(tempLastName);
  };
  //console.log("reservations: ", reservations);
  // const dispatch = useDispatch();
  // const messageList = useSelector((state) => state.messageList);
  //const { loading, error, messages } = messageList;
  // if (reservations[0]) {
  //   const [firstName, setFirstName] = useState(reservations[0].firstName);
  //   const [lastName, setLastName] = useState(reservations[0].lastName);
  //   const [email, setEmail] = useState(reservations[0].email);
  //   const [address, setAddress] = useState(reservations[0].message);
  //   const [phone, setPhone] = useState(reservations[0].phone);
  // }

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
    //setForm(foundReservation);
    //console.log("reservations: ", reservations);
    //console.log("foundReservation: ", foundReservation);
    //load data into form input fields
    //if (reservations) {
    //if (reservations[0]) {
    // let i = 0;
    // for (i = 0; i < reservations.length; i++) {
    //   if (foundReservation === reservations[i]._id) {
    //     console.log("reservation id: ", reservations[i]._id);
    //     let myFormState = {
    //       lastName: reservations.lastName,
    //       firstName: reservations.firstName,
    //       phone: reservations.phone,
    //       email: reservations.email,
    //       message: reservations.message,
    //     };
    //     setForm(myFormState);
    //   }
    // }
    //}
    //}
  }, [foundReservation, reservations]);

  const handleChange = (event) => {
    //setLastName();
    // setForm({
    //   ...form,
    //   [event.target.name]: event.target.value,
    // });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    //let validForm = validateForm();
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
  // const validateForm = () => {
  //   let lastName = document.forms["sendMessageForm"]["lastName"].value;
  //   let firstName = document.forms["sendMessageForm"]["firstName"].value;
  //   let startDate = document.forms["sendMessageForm"]["startDate"].value;
  //   let message = document.forms["sendMessageForm"]["message"].value;
  //   if (lastName === "") {
  //     setLastNameInValid(true);
  //     return false;
  //   } else {
  //     if (firstName === "") {
  //       setLastNameInValid(false);
  //       setFirstNameInValid(true);
  //       return false;
  //     } else {
  //       if (startDate === "") {
  //         setLastNameInValid(false);
  //         setFirstNameInValid(false);
  //         setInValidDate(true);
  //         return false;
  //       } else {
  //         if (!validateDate(startDate)) {
  //           setInValidDate(true);
  //           return false;
  //         } else {
  //           if (message === "") {
  //             setInValidDate(false);
  //             setMessageInValid(true);
  //             return true;
  //           } else {
  //             setMessageInValid(false);
  //           }
  //         }
  //       }
  //     }
  //   }
  //   return true;
  // };
  // function validateDate(testdate) {
  //   var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
  //   return date_regex.test(testdate);
  // }
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
              {/* <FormGroup>
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
              </FormGroup> */}
              {/* <FormGroup>
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
              </FormGroup> */}
              {/* <FormGroup>
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
              </FormGroup> */}
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
