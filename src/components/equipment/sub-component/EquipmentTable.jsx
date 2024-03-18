import React from "react";
import { Link } from "react-router-dom";
const EquipmentTable = () => {
  const WorkersData = [
    {
        equipmentName: "Equipment 1",
      equipmentType: "Lorem impsum dolo",
    },
    {
        equipmentName: "Equipment 2",
      equipmentType: "Lorem impsum dolo",
    },
    {
        equipmentName: "Equipment 3",
      equipmentType: "Lorem impsum dolo",
    },
  ];

  return (
    <>
      <div className="card card-table">
        <div className="card-body">
          <div className="responsive-table">
            <table className="table table-row-dashed">
              <thead>
                <tr>
                  <th className="w-200px text-start">Equipment Name</th>
                  <th className="w-150px text-start">Equipment Type</th>
                  <th className="w-150px text-end"></th>
                </tr>
              </thead>
              <tbody className="">
                {WorkersData.map((item, idx) => {
                  return (
                    <tr key={item.orderId} className="">
                      <td className="text-start">
                        <span>{item.equipmentName}</span>
                      </td>
                      <td className="text-start">
                        <span className="">{item.equipmentType}</span>
                      </td>
                      <td className="text-end">
                        <div className="action-main">
                          <div className="action-inner">
                            <div class="svcrd-togl">
                              <div class="tgl-sld">
                                <label>
                                  <input type="checkbox" />
                                  <span>
                                    <i></i>
                                  </span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="action-inner">
                            <div class="action-btn">
                              <Link to="/" className="edit-action">
                                <svg
                                  width="20"
                                  height="19"
                                  viewBox="0 0 20 19"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.1667 1.69036C14.3856 1.47149 14.6454 1.29787 14.9314 1.17942C15.2173 1.06097 15.5238 1 15.8334 1C16.1429 1 16.4494 1.06097 16.7353 1.17942C17.0213 1.29787 17.2812 1.47149 17.5 1.69036C17.7189 1.90923 17.8925 2.16906 18.011 2.45503C18.1294 2.741 18.1904 3.04749 18.1904 3.35702C18.1904 3.66655 18.1294 3.97305 18.011 4.25902C17.8925 4.54498 17.7189 4.80482 17.5 5.02369L6.25002 16.2737L1.66669 17.5237L2.91669 12.9404L14.1667 1.69036Z"
                                    stroke="#00CC83"
                                    stroke-width="1.66667"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              </Link>
                            </div>
                          </div>
                          <div className="action-inner">
                            <div class="action-btn">
                              <span className="trash-action">
                                <svg
                                  width="18"
                                  height="20"
                                  viewBox="0 0 18 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M1.5 4.99984H3.16667M3.16667 4.99984H16.5M3.16667 4.99984V16.6665C3.16667 17.1085 3.34226 17.5325 3.65482 17.845C3.96738 18.1576 4.39131 18.3332 4.83333 18.3332H13.1667C13.6087 18.3332 14.0326 18.1576 14.3452 17.845C14.6577 17.5325 14.8333 17.1085 14.8333 16.6665V4.99984H3.16667ZM5.66667 4.99984V3.33317C5.66667 2.89114 5.84226 2.46722 6.15482 2.15466C6.46738 1.8421 6.89131 1.6665 7.33333 1.6665H10.6667C11.1087 1.6665 11.5326 1.8421 11.8452 2.15466C12.1577 2.46722 12.3333 2.89114 12.3333 3.33317V4.99984M7.33333 9.1665V14.1665M10.6667 9.1665V14.1665"
                                    stroke="#00CC83"
                                    stroke-width="1.66667"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};


export default EquipmentTable