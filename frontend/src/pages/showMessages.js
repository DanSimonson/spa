import React, { useEffect, useState } from "react";
import { listMessages } from "../actions/messageActions";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../components/navbar";
import LoadingBox from "../components/loadingBox";
import MessageBox from "../components/messageBox";
import ModalForm from "../components/modal/modalForm";
import EditForm from "../components/EditForm";
import Footer from "../components/footer";
import Axios from "axios";
import {
  ListGroup,
  ListGroupItem,
  Button,
  Spinner,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Row,
  Col,
  CardImg,
} from "reactstrap";
import styled from "styled-components";
const AddButton = styled.button`
  width: 200px
  background-color: #6a0dad;
  color: #fff;
  padding: 14px 40px;
  opacity: 1;
  transition: all 0.6s;
  &:hover {
    opacity: 0.8;
  }
`;

const ShowMessages = (props) => {
  //console.log("props: ", props);
  const { reservations } = props;
  const [openModal, setOpenModal] = useState(false);
  const [foundArray, setFoundArray] = useState([]);
  const dispatch = useDispatch();
  const messageList = useSelector((state) => state.messageList);
  const { loading, error, messages } = messageList;
  localStorage.setItem("messages", JSON.stringify(messages));
  /*** methods ***/
  useEffect(() => {
    dispatch(listMessages());
  }, []);
  const handleDelete = (_id, index) => {
    //send _id data back to parent
    //props.handleDeleteFromParent(_id, index);
  };

  const handleEdit = (id) => {
    //if open, close modal from parent
    //open modal
    setOpenModal(true);
    setFoundArray(id);
  };
  const handleClose = (modalVal) => {
    //if open, close modal from parent
    setOpenModal(false);
  };
  /*** end methods ***/
  return (
    <>
      <div className="header" id="myHeader">
        <Navbar />
      </div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          <ListGroup className="mt-4">
            {messages.map((reservation, index) => (
              <div>
                <Row>
                  <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <Card
                      body
                      inverse
                      style={{
                        backgroundColor: "#6a0dad",
                        borderColor: "#FFFF00",
                      }}
                      className="text-center"
                      key={reservation._id}
                    >
                      <CardTitle tag="h1">RESERVATION INFORMATION</CardTitle>
                      <CardTitle tag="h5">
                        Reservation ID: {reservation._id}
                      </CardTitle>
                      <CardTitle tag="h5">
                        Last Name: {reservation.lastName}
                      </CardTitle>
                      <CardTitle tag="h5">
                        First Name: {reservation.firstName}
                      </CardTitle>
                      <CardTitle tag="h5">Phone: {reservation.phone}</CardTitle>
                      <CardTitle tag="h5">Email: {reservation.email}</CardTitle>
                      {/*<CardTitle tag="h5">
                        Message Date: {reservation.startDate}
                    </CardTitle>*/}
                      <CardText tag="h2">
                        Message: {reservation.message}
                      </CardText>
                      <div>
                        <Button
                          color="warning"
                          size="lg"
                          onClick={() => handleEdit(reservation._id)}
                        >
                          Edit
                        </Button>{" "}
                        <Button
                          color="warning"
                          size="lg"
                          onClick={(event) =>
                            handleDelete(reservation._id, index)
                          }
                        >
                          Delete
                        </Button>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </div>
            ))}
          </ListGroup>
        </>
      )}
      <Footer />
      {/*{loading === true && <Footer />}*/}
      <ModalForm
        reservations={messages}
        foundReservation={foundArray}
        openModal={openModal}
        handleCloseFromParent={handleClose}
      />
      <EditForm reservations={messages} />
    </>
  );
};

export default ShowMessages;

/*{!reservations.length > 0 ? (
        <Col sm="12" md={{ size: 4, offset: 4 }}>
          <Spinner size="lg" color="info" />
        </Col>
      ) : (
        <ListGroup className="mt-4">
          {reservations.map((reservation, index) => (
            <div>
              <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                  <Card
                    body
                    inverse
                    style={{
                      backgroundColor: "#6a0dad",
                      borderColor: "#FFFF00",
                    }}
                    className="text-center"
                    key={reservation._id}
                  >
                    <CardTitle tag="h1">RESERVATION INFORMATION</CardTitle>
                    <CardTitle tag="h5">
                      Reservation ID: {reservation._id}
                    </CardTitle>
                    <CardTitle tag="h5">
                      Last Name: {reservation.lastName}
                    </CardTitle>
                    <CardTitle tag="h5">
                      First Name: {reservation.firstName}
                    </CardTitle>
                    <CardTitle tag="h5">
                      Message Date: {reservation.startDate}
                    </CardTitle>
                    <CardText tag="h2">Message: {reservation.message}</CardText>
                    <div>
                      <Button
                        color="warning"
                        size="lg"
                        onClick={() => handleEdit(reservation._id)}
                      >
                        Edit
                      </Button>{" "}
                      <Button
                        color="warning"
                        size="lg"
                        onClick={(event) =>
                          handleDelete(reservation._id, index)
                        }
                      >
                        Delete
                      </Button>
                    </div>
                  </Card>
                </Col>
              </Row>
            </div>
          ))}
        </ListGroup>
      )}
      {reservations.length > 0 && <Footer />}
      <ModalForm
        reservations={reservations}
        foundReservation={foundArray}
        openModal={openModal}
        handleCloseFromParent={handleClose}
                    />*/
//</div>
//);
