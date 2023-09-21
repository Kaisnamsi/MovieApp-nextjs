import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "@/app/hooks/auth";

import { usePathname } from "next/navigation";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import LoginModal from "./components/auth/login";
import RegisterModal from "./components/auth/register";
import ForgotPasswordModal from "./components/auth/forgotpassword";

import { BiSolidUserCircle } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";

export default function MainNavbar() {
  const { logout } = useAuth({
    middleware: "auth",
  });

  const currentUser = useSelector((state) => state.authReducer.value);

  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const [forgotPasswordModal, setForgotPasswordModal] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const pathname = usePathname();
  const isHomePage = pathname === "/home";
  const isMoviePage = pathname === "/movies";
  const isTvShowPage = pathname === "/tv";
  const isVideoPage = pathname === "/video";
  const isFAQPage = pathname === "/faq";
  const isPricingPage = pathname === "/pricing";
  const isContactUsPage = pathname === "/contact-us";

  function toggleLoginModal() {
    setLoginModal(true);
    setRegisterModal(false);
    setForgotPasswordModal(false);
  }
  function toggleRegisterModal() {
    setLoginModal(false);
    setRegisterModal(true);
    setForgotPasswordModal(false);
  }

  function toggleForgotPasswordModal() {
    setLoginModal(false);
    setRegisterModal(false);
    setForgotPasswordModal(true);
  }

  function onClickLogOut(e) {
    e.preventDefault();
    logout();
  }

  return (
    <>
      <Navbar expand="lg" className="p-0">
        <Container className="bg-transparent p-3">
          <Navbar.Brand
            className="text-white navbar-brand-text me-5"
            href="/home"
          >
            Movie Website
          </Navbar.Brand>
          <Navbar.Toggle
            className="pcari-navbar-toggle"
            aria-controls="navbarDropdown"
          />
          <Navbar.Collapse className="" id="navbarDropdown">
            <Nav fill className="me-auto text-white d-flex align-items-center">
              <Link
                className={`navbar-link text-white me-4 ${
                  isHomePage ? "active-layout" : ""
                }`}
                href="/home"
                scroll={false}
              >
                Home<div className="active-line"></div>
              </Link>

              <Link
                className={`navbar-link text-white me-4 ${
                  isMoviePage ? "active-layout" : ""
                }`}
                href="/movies"
                scroll={false}
              >
                Movies
                <div className="active-line"></div>
              </Link>
              <Link
                className={`navbar-link text-white me-4 ${
                  isTvShowPage ? "active-layout" : ""
                }`}
                href="/tv"
                scroll={false}
              >
                TV Show
                <div className="active-line"></div>
              </Link>
              <Link
                className={`navbar-link text-white me-4 ${
                  isVideoPage ? "active-layout" : ""
                }`}
                href="/video"
                scroll={false}
              >
                Video
                <div className="active-line"></div>
              </Link>
              <Link
                className={`navbar-link text-white me-4 ${
                  isFAQPage ? "active-layout" : ""
                }`}
                href="/faq"
                scroll={false}
              >
                FAQ
                <div className="active-line"></div>
              </Link>
              <Link
                className={`navbar-link text-white me-4 ${
                  isPricingPage ? "active-layout" : ""
                }`}
                href="/pricing"
                scroll={false}
              >
                Pricing
                <div className="active-line"></div>
              </Link>
              <Link
                className={`navbar-link text-white ${
                  isContactUsPage ? "active-layout" : ""
                }`}
                href="/contact-us"
                scroll={false}
              >
                Contact Us
                <div className="active-line"></div>
              </Link>
            </Nav>
            <div className="ms-auto d-flex justify-content-center align-items-center mt-bro-5 ">
              <a
                className="me-5"
                href=""
                // onClick={(e) => {
                //   e.preventDefault();
                //   setLoginModal(true);
                // }}
              >
                <BsSearch
                  className="user-circle-hover"
                  size={24}
                  fill="#fed530"
                  fontWeight={"bold"}
                />
              </a>
              {currentUser.isAuth === true ? (
                <div
                  className={`text-white hover-click dropdown ${
                    isOpen ? "show" : ""
                  }`}
                  onClick={toggleDropdown}
                >
                  <BiSolidUserCircle
                    className="user-circle-hover me-3"
                    size={48}
                    fill="#fed530"
                  />
                  <ul
                    className={`dropdown-menu dropdown-menu-dark ${
                      isOpen ? "show" : ""
                    }`}
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        TBD
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" onClick={onClickLogOut}>
                        Log Out
                      </a>
                    </li>
                  </ul>
                  <span className="fw-bold">{currentUser.username}</span>
                </div>
              ) : (
                <div
                  className="nav-link text-white hover-click"
                  // href=""
                  onClick={(e) => {
                    e.preventDefault();
                    setLoginModal(true);
                  }}
                >
                  <BiSolidUserCircle
                    className="user-circle-hover"
                    size={48}
                    fill="#fed530"
                  />
                </div>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <LoginModal
        show={loginModal}
        onHide={() => setLoginModal(false)}
        toggleRegisterModal={toggleRegisterModal}
        toggleForgotPasswordModal={toggleForgotPasswordModal}
      />
      <RegisterModal
        show={registerModal}
        onHide={() => setRegisterModal(false)}
        toggleLoginModal={toggleLoginModal}
      />
      <ForgotPasswordModal
        show={forgotPasswordModal}
        onHide={() => setForgotPasswordModal(false)}
        toggleLoginModal={toggleLoginModal}
      />
    </>
  );
}

{
  /* <svg
                className="me-3"
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <circle cx="24" cy="24" r="24" fill="#1E1E1E" />
              </svg> */
}

{
  /* <svg
                  className="user-circle-hover"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21.707 20.2932L17.168 15.7542C18.5149 14.0467 19.1585 11.889 18.967 9.72265C18.7756 7.55628 17.7636 5.54494 16.1381 4.10009C14.5126 2.65524 12.3965 1.88608 10.2226 1.94997C8.04874 2.01386 5.98143 2.90597 4.44361 4.44379C2.90579 5.98162 2.01368 8.04892 1.94979 10.2228C1.8859 12.3967 2.65505 14.5128 4.09991 16.1383C5.54476 17.7638 7.5561 18.7757 9.72247 18.9672C11.8888 19.1586 14.0465 18.5151 15.754 17.1682L20.293 21.7072L21.707 20.2932ZM10.5 17.0002C9.21444 17.0002 7.95773 16.619 6.88881 15.9048C5.81989 15.1905 4.98677 14.1754 4.4948 12.9876C4.00283 11.7999 3.87411 10.493 4.12491 9.23211C4.37571 7.97123 4.99478 6.81305 5.90382 5.904C6.81286 4.99496 7.97105 4.3759 9.23193 4.12509C10.4928 3.87429 11.7997 4.00301 12.9875 4.49498C14.1752 4.98695 15.1903 5.82007 15.9046 6.88899C16.6188 7.95791 17 9.21462 17 10.5002C16.9979 12.2235 16.3124 13.8755 15.0939 15.0941C13.8753 16.3126 12.2233 16.9981 10.5 17.0002Z"
                    fill="white"
                  />
                </svg> */
}
