"use client";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import ReCAPTCHA from "react-google-recaptcha";

import { useAuth } from "@/app/hooks/auth";

export default function RegisterModal(props) {
  const { register } = useAuth({
    middleware: "guest",
  });

  const currentUser = useSelector((state) => state.authReducer.value);

  useEffect(() => {
    if (currentUser.isAuth) {
      props.onHide();
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmedPassword("");
      setRecaptcha(false);
    }
  }, [, currentUser]);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmedPassword] = useState("");
  const [recaptcha, setRecaptcha] = useState(false);
  const [errors, setErrors] = useState([]);

  const { toggleLoginModal, ...others } = props;

  function onChangeCaptcha(value) {
    if (value) {
      setErrors(null);
    }
    setRecaptcha(value);
  }

  const handleRegister = async (e) => {
    e.preventDefault();

    console.log({
      username,
      email,
      password,
      password_confirmation: confirmPassword,
    });

    if (recaptcha) {
      setErrors(null);
      register({
        username,
        email,
        password,
        password_confirmation: confirmPassword,
        setErrors,
      }).then(() => {
        props.onHide();
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmedPassword("");
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
          <Modal.Title id="contained-modal-title-vcenter">Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col">
              <form
                onSubmit={handleRegister}
                id="registerForm"
                className="needs-validation"
              >
                <div className="mb-3">
                  <input
                    required
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
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                  />
                </div>
                <div className="mb-3">
                  <input
                    required
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <div className="mb-3">
                  <input
                    required
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmedPassword(e.target.value);
                    }}
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                  />
                </div>
                <div className="mb-4 d-flex justify-content-center align-items-center">
                  <ReCAPTCHA
                    required
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
                  <button
                    className="pcari-button mb-3"
                    style={{ width: "100%", borderRadius: "10px" }}
                  >
                    Register
                  </button>
                  <div className="text-center">
                    <span className="text-white me-2">
                      Already have an account?
                    </span>
                    <span
                      className="hover-click"
                      onClick={(e) => {
                        e.preventDefault();
                        props.toggleLoginModal();
                      }}
                    >
                      Sign In
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
