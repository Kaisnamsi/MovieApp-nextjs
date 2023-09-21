import Navbar from "react-bootstrap/Navbar";

import Image from "next/image";
import locationMarker from "./assets/images/location_marker.svg";
import mailIcon from "./assets/images/mail_icon.svg";
import phoneIcon from "./assets/images/phone_icon.svg";

export default function MainFooter() {
  return (
    <>
      <div className="container-fluid text-white">
        <div className="row">
          <div
            className="col-xl-5 footer-padding"
            style={{ background: "#3D3D3D" }}
          >
            <div className="row">
              <div className="col">
                <h1 className="footer-main-heading mb-5">Movie Website</h1>
                <p className="footer-main-text mb-5">
                  Lorem ipsum dolor sit amet, consec tetur adipis cing elit, sed
                  do eiusmod tempor incididunt ut labore et.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h4 className="mb-4">Join Newsletters</h4>
              </div>
            </div>
            <div className="row">
              <div className="footer-input-group">
                <input
                  type="text"
                  className="form-control footer-custom-button border-0"
                  placeholder="Insert your mail here"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn footer-button-group"
                  type="button"
                  style={{ background: "#FED530" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M11.293 4.70697L17.586 11H4V13H17.586L11.293 19.293L12.707 20.707L21.414 12L12.707 3.29297L11.293 4.70697Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="col-xl footer-padding-bottom" style={{ background: "#2E2E2E" }}>
            <div className="container-fluid">
              <div className="row">
                <div className="col">
                  <div className="container-fluid p-0 footer-row-center">
                    <div className="row g-2">
                      <div className="col-3">
                        <div className="p-3 bg-transparent text-white fw-bold">
                          Product
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="p-3 bg-transparent text-white fw-bold">
                          Media Group
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="p-3 bg-transparent text-white fw-bold">
                          Sitemap
                        </div>
                      </div>
                    </div>
                    <div className="row g-2">
                      <div className="col-3">
                        <div className="p-3 bg-transparent text-white">
                          Movies
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="p-3 bg-transparent text-white">
                          Nice Studio
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="p-3 bg-transparent text-white">
                          About
                        </div>
                      </div>
                    </div>
                    <div className="row g-2">
                      <div className="col-3">
                        <div className="p-3 bg-transparent text-white">
                          TV Show
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="p-3 bg-transparent text-white">
                          Nice News
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="p-3 bg-transparent text-white">
                          Careers
                        </div>
                      </div>
                    </div>
                    <div className="row g-2">
                      <div className="col-3">
                        <div className="p-3 bg-transparent text-white">
                          Videos
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="p-3 bg-transparent text-white">
                          Nice TV
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="p-3 bg-transparent text-white">
                          Press
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row footer-address-row">
                <div className="col">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-4 mb-2">
                        <div className="footer-address-font">
                          <Image
                            className="me-2"
                            priority
                            width={"24px"}
                            src={locationMarker}
                            alt="Location Address"
                          />
                          Gafsa, Tunisie
                        </div>
                      </div>
                      <div className="col-md-3 mb-2">
                        <div className="footer-address-font">
                          <Image
                            className="me-2"
                            priority
                            width={"24px"}
                            src={mailIcon}
                            alt="Email Address"
                          />
                          kaisnamsi@gmail.com
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="footer-address-font">
                          <Image
                            className="me-2"
                            priority
                            width={"24px"}
                            src={phoneIcon}
                            alt="Phone Number"
                          />
                          +216 386-647-3637
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
