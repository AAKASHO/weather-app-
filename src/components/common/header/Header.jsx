import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ProfilePic } from "../../../assets/images";

function Header() {
  const [showProfile, setShowProfile] = useState(false);
  const [titleActive, setTitleActive] = useState("Indore Plant");
  const [saveActive, setSaveActive] = useState("Indore Plant")
  const [showNotify, setShowNotify] = useState(false);

  const addClass = () => {
    document.body.classList.toggle("open-sidebar");
  };

  const setLocally = (e) => {
    console.log(e.currentTarget.id);
    setSaveActive(e.currentTarget.id);
  };

  const setActiveState = () => {
    setTitleActive(saveActive);
    setShowProfile(false); // Hide profile dropdown after selecting an option
  };
  return (
    <>
      <header className="header">
        <div className="main-header">
          <div className="lft-hdr">
            <div className="navmenu-hdr">
              <div class="navbar-icon" onClick={addClass}>
                <span></span>
              </div>
            </div>
            <h3>Welcome!</h3>
            <div className="fltrsrch-input">
              <label>
                <span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5 16.5L12.875 12.875M14.8333 8.16667C14.8333 11.8486 11.8486 14.8333 8.16667 14.8333C4.48477 14.8333 1.5 11.8486 1.5 8.16667C1.5 4.48477 4.48477 1.5 8.16667 1.5C11.8486 1.5 14.8333 4.48477 14.8333 8.16667Z"
                      stroke="#00CC83"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <input type="text" placeholder="Search..." />
              </label>
            </div>
          </div>
          <div className="rght-hdr">
            <div className="hdrmr-main">
              <div className="admin-prflsec">
                <div className="admnprfl-tbmain">
                  <div
                    className="admin-name"
                    onClick={() => setShowProfile((p) => !p)}
                  >
                    <p className="">
                      {titleActive}
                      <em>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.6449 2.35C12.1949 0.9 10.2049 0 7.99488 0C3.57488 0 0.00488281 3.58 0.00488281 8C0.00488281 12.42 3.57488 16 7.99488 16C11.7249 16 14.8349 13.45 15.7249 10H13.6449C12.8249 12.33 10.6049 14 7.99488 14C4.68488 14 1.99488 11.31 1.99488 8C1.99488 4.69 4.68488 2 7.99488 2C9.65488 2 11.1349 2.69 12.2149 3.78L8.99488 7H15.9949V0L13.6449 2.35Z"
                            fill="white"
                          />
                        </svg>
                      </em>
                    </p>
                  </div>
                </div>
                {showProfile && (
                  <div className="hdrmenu-drpdwn">
                    <div className="hdrmenu-drpdwn-inner">
                      <ul>
                        <li>
                          <a id="Indore Plant" className={`${saveActive === "Indore Plant" ? "active" : ""}`}  onClick={setLocally}>
                            Indore Plant
                          </a>
                        </li>
                        <li>
                          <a id="Dewas Plant"  className={`${saveActive === "Dewas Plant" ? "active" : ""}`} onClick={setLocally}>
                            Dewas Plant
                          </a>
                        </li>
                        <li>
                          <a id="Rau Plant"  className={`${saveActive === "Rau Plant" ? "active" : ""}`} onClick={setLocally}>
                            Rau Plant
                          </a>
                        </li>
                      </ul>
                      <div className="plnbtn-flex">
                        <button className="btn secondary-btn">Cancel</button>
                        <button
                          className="btn primary-btn"
                          onClick={setActiveState}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="notification-main">
                <div
                  className="notification-icon"
                  onClick={() => setShowNotify((p) => !p)}
                >
                  <span>
                    <i class="fa-solid fa-bell"></i>
                  </span>
                </div>
                {showNotify && (
                  <div className="hdrnoti-drpdwn">
                    <div className="noti-head">
                      <h3>Notification</h3>
                      {/* <p>View all</p> */}
                    </div>
                    <ul>
                      <li>
                        <div className="notihstry-dtls">
                          <h3>New Order Added</h3>
                          <p>Rahul Recently placed new order.</p>
                        </div>
                      </li>
                      <li>
                        <div className="notihstry-dtls">
                          <h3>New Order Added</h3>
                          <p>Rahul Recently placed new order.</p>
                        </div>
                      </li>
                      <li>
                        <div className="notihstry-dtls">
                          <h3>New Order Added</h3>
                          <p>Rahul Recently placed new order.</p>
                        </div>
                      </li>
                      <li>
                        <div className="notihstry-dtls">
                          <h3>New Order Added</h3>
                          <p>Rahul Recently placed new order.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div className="hdrprflbg-main">
                <div className="hdrprfl-bg">
                  <span
                    style={{ backgroundImage: `url(${ProfilePic})` }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
