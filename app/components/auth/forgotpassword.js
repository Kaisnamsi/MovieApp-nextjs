"use client";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import ReCAPTCHA from "react-google-recaptcha";

export default function ForgotPasswordModal(props) {
  const [credential, setCredential] = useState("");

  const currentUser = useSelector((state) => state.authReducer.value);

  useEffect(() => {
    if (currentUser.isAuth) {
      props.onHide();
      setCredential("");
    }
  }, [, currentUser]);

  const { toggleLoginModal, ...others } = props;

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
          <Modal.Title id="contained-modal-title-vcenter">
            Forgot Password
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col">
              <div className="mb-3">
                <div className="text-justify">
                  We will send an email to set your new password.
                </div>
              </div>
              <form action="" id="forgotPasswordForm">
                <div className="mb-3">
                  <input
                    value={credential}
                    onChange={(e) => {
                      setCredential(e.target.value);
                    }}
                    type="text"
                    className="form-control"
                    placeholder="Username or Email"
                  />
                </div>
                <div className="mb-4 d-flex justify-content-center align-items-center">
                  <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                    // onChange={onChange}
                    theme="dark"
                  />
                </div>
                <div className="mb-2">
                  <button
                    className="pcari-button mb-3"
                    style={{ width: "100%", borderRadius: "10px" }}
                  >
                    Forgot
                  </button>
                  <div className="text-center">
                    <span
                      className="hover-click"
                      onClick={(e) => {
                        e.preventDefault();
                        props.toggleLoginModal();
                      }}
                    >
                      Back to Sign In
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
