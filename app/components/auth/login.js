"use client";

import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ReCAPTCHA from "react-google-recaptcha";

import { useAuth } from "@/app/hooks/auth";

export default function LoginModal(props) {
  const { login } = useAuth({
    middleware: "guest",
  });

  const currentUser = useSelector((state) => state.authReducer.value);

  useEffect(() => {
    if (currentUser.isAuth) {
      props.onHide();
      setUsername("");
      setPassword("");
      setRecaptcha(false);
    }
  }, [, currentUser]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [recaptcha, setRecaptcha] = useState(false);
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState([]);

  const { toggleForgotPasswordModal, toggleRegisterModal, ...others } = props;

  function onChangeCaptcha(value) {
    if (value) {
      setErrors(null);
    }
    setRecaptcha(value);
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log({
      username,
      password,
    });

    if (recaptcha) {
      setErrors(null);
      login({
        username,
        password,
        setErrors,
        setStatus,
      }).then(() => {
        props.onHide();
        setUsername("");
        setPassword("");
        setRecaptcha(false);
      });
    } else {
      setErrors("Please click on the Recaptcha!");
    }
  };

  return (
    <>
      <Modal
        {...others}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        contentClassName="pcari-modal"
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col">
              <form id="loginForm" onSubmit={handleLogin}>
                <div className="mb-3">
                  <input
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                    type="text"
                    className="form-control"
                    placeholder="Username"
                  />
                </div>
                <div className="mb-3">
                  <input
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <div className="mb-4 d-flex justify-content-center align-items-center">
                  <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                    onChange={onChangeCaptcha}
                    theme="dark"
                  />
                </div>
                {errors && (
                  <div
                    className="mb-2 text-red text-center justify-content-center fw-bold"
                    style={{ color: "red" }}
                  >
                    {errors}
                  </div>
                )}
                <div className="mb-2">
                  {/* <div
                    className="mb-2 text-center hover-click"
                    onClick={(e) => {
                      e.preventDefault();
                      props.toggleForgotPasswordModal();
                    }}
                  >
                    Forgot Password
                  </div> */}
                  <button
                    className="pcari-button mb-3"
                    style={{ width: "100%", borderRadius: "10px" }}
                  >
                    Login
                  </button>
                  <div className="text-center">
                    <span className="text-white me-2">Not a member?</span>
                    <span
                      className="hover-click"
                      onClick={(e) => {
                        e.preventDefault();
                        props.toggleRegisterModal();
                      }}
                    >
                      Sign Up Now
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
