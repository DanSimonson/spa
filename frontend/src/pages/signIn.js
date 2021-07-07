import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import LoadingBox from "../components/loadingBox";
import MessageBox from "../components/messageBox";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Signin } from "../actions/userActions";
import { useHistory } from "react-router-dom";
import "./signin.css";
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

export default function SigninPage() {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;
  const [user, setUser] = useState();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(Signin(email, password));
    setEmail("");
    setPassword("");
  };
  // const handleEmail = (e) => {
  //   setEmail(e.target.value);
  // };
  // const handlePassword = (e) => {
  //   setPassword(e.target.value);
  // };

  return (
    <>
      <Navbar />
      <div>
        <Form className="form" onSubmit={submitHandler}>
          <div>
            <h1>Sign In</h1>
          </div>
          {loading && <LoadingBox></LoadingBox>}
          {error && (
            <MessageBox variant="danger">login error {error}</MessageBox>
          )}
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="emailInput"
              placeholder="Enter email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            ></Input>
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="passwordInput"
              placeholder="Enter password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            ></Input>
          </div>
          <div>
            <label />
            <Button type="submit" color="warning" size="lg">
              Sign In
            </Button>
          </div>
          <div>
            <label />
            <div>
              New customer? <Link to="/register">Create your account</Link>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
}
