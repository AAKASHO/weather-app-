import React from "react";

const ChatBox = () => {
  return (
    <>
      <div className="card chat-card">
        <div className="chat-main">
          <div className="chat-rgtsec">
            <div className="chat-detail">
              <div className="chat-header">
                <div className="back-arrow">
                  <svg
                    width="21"
                    height="16"
                    viewBox="0 0 21 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.62502 7.16001C0.232298 7.54832 0.228725 8.18148 0.617039 8.5742L6.94499 14.974C7.3333 15.3667 7.96646 15.3703 8.35918 14.982C8.7519 14.5936 8.75547 13.9605 8.36716 13.5678L2.74232 7.87907L8.431 2.25423C8.82372 1.86592 8.8273 1.23276 8.43898 0.840041C8.05067 0.447319 7.41751 0.443746 7.02479 0.83206L0.62502 7.16001ZM1.32248 8.87108L20.0132 8.97655L20.0245 6.97658L1.33377 6.87111L1.32248 8.87108Z"
                      fill="#ffffff"
                    />
                  </svg>
                </div>
                <div className="chathead-userdtl">
                  <h2>Ai Chat</h2>
                </div>
              </div>
              <div className="msginbox-sec">
                <ul>
                  <li className="msg-reciver">
                    <div className="card">
                      <div className="msg-descrp">
                        <p>Hello ! How can I Help you?</p>
                      </div>
                      <div className="msgdate">
                        <p>11:35 AM</p>
                      </div>
                    </div>
                  </li>
                  <li className="msg-sender">
                    <div className="card">
                      <div className="msg-descrp">
                        <p>I want to know brief in your Plans</p>
                      </div>
                      <div className="msgdate">
                        <p>11:36 AM</p>
                      </div>
                    </div>
                  </li>
                  <li className="msg-reciver">
                    <div className="card">
                      <div className="msg-descrp">
                        <p>Sure</p>
                      </div>
                      <div className="msgdate">
                        <p>11:37 AM</p>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="chat-footer">
                  <div className="chatftr-main">
                    <div className="chat-typinput">
                      <input type="text" placeholder="Write a message..." />
                    </div>
                    <div className="moremenu-chtbtn">
                      <div className="send-btnmain">
                        <span className="send-icon">
                          <svg
                            width="25"
                            height="28"
                            viewBox="0 0 32 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M3.18336 3.4249L4.76166 12.5001H14.5C15.3284 12.5001 16 13.1716 16 14.0001C16 14.8285 15.3284 15.5001 14.5 15.5001H4.76166L3.18336 24.5752L27.8588 14.0001L3.18336 3.4249ZM1.97749 14.0001L0.12735 3.36174C-0.0222196 2.50172 0.256064 1.6227 0.873322 1.00544C1.64889 0.229883 2.81852 0.00462335 3.82666 0.436683L30.6314 11.9244C31.4616 12.2803 32 13.0967 32 14.0001C32 14.9034 31.4616 15.7199 30.6314 16.0758L3.82666 27.5634C2.81852 27.9956 1.64889 27.7702 0.873322 26.9948C0.256064 26.3774 -0.02222 25.4984 0.12735 24.6384L1.97749 14.0001Z"
                              fill="#ffffff"
                            />
                          </svg>
                        </span>
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
};

export default ChatBox;
