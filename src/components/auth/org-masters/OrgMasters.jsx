import React, { useState } from "react";
import { Banner, Logo } from "../../../assets/images";
import { Link } from "react-router-dom";

const OrgMasters = () => {
  const [tagsObjects, setTagsObjects] = useState({
    one: [],
    two: [],
    three: [],
    four: [],
    five: [],
  });

  const addOrRemoveTag = (arrayKey, tag, action) => {
    console.log("first");
    setTagsObjects((prevTagsObjects) => {
      const updatedTagsObjects = { ...prevTagsObjects };
      if (action === "add") {
        if (updatedTagsObjects[arrayKey].length >= 10) {
          return updatedTagsObjects;
        }
        updatedTagsObjects[arrayKey] = [...updatedTagsObjects[arrayKey], tag];
      } else if (action === "remove") {
        updatedTagsObjects[arrayKey] = updatedTagsObjects[arrayKey].filter(
          (t) => t !== tag
        );
      }
      return updatedTagsObjects;
    });
  };


  const onKeyFun = (event , key) =>{
      const inputValue = event.target.value.trim();
      if (event.key === "Enter" && inputValue !== "") {
        addOrRemoveTag(key, inputValue, "add");
        event.target.value = "";
      }
  }
  return (
    <>
      <div class="create-form" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="create-wraper">
        <div className="create-wraper-inner">
        <div class="create-logo">
            <img alt="Logo" src={Logo} />
          </div>
          <div className="card create-card">
            <div className="card-header">
              <div className="card-title">
                <h3>Org Masters</h3>
              </div>
            </div>
            <div className="card-body">
              <div className="create-form-main">
                <div className="form-inputs">
                  <label className="form-label">
                    Recipes <i>*</i>
                  </label>
                  <input
                    type="text"
                    name="Date"
                    onKeyDown={(e)=> onKeyFun(e , 'one')}
                    className="form-control"
                    placeholder="Select tags here"
                  />

                  {tagsObjects.one.length !== 0 && (
                    <div className="tags-rslt">
                      {tagsObjects.one.map((item, i) => {
                        return (
                          <div className="tag-ttl" key={i}>
                            <span>{item}</span>
                            <em
                              onClick={() =>
                                addOrRemoveTag("one", item, "remove")
                              }
                            >
                              <i class="fa fa-times" aria-hidden="true"></i>
                            </em>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
                <div className="form-inputs">
                  <label className="form-label">
                  Operation Codes <i>*</i>
                  </label>
                  <input
                    type="text"
                    name="Date"
                    onKeyDown={(e)=> onKeyFun(e , 'two')}
                    className="form-control"
                    placeholder="Select tags here"
                  />

                  {tagsObjects.two.length !== 0 && (
                    <div className="tags-rslt">
                      {tagsObjects.two.map((item, i) => {
                        return (
                          <div className="tag-ttl" key={i}>
                            <span>{item}</span>
                            <em
                              onClick={() =>
                                addOrRemoveTag("two", item, "remove")
                              }
                            >
                              <i class="fa fa-times" aria-hidden="true"></i>
                            </em>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                <div className="form-inputs">
                  <label className="form-label">
                  Equipments <i>*</i>
                  </label>
                  <input
                    type="text"
                    name="Date"
                    onKeyDown={(e)=> onKeyFun(e , 'three')}
                    className="form-control"
                    placeholder="Select tags here"
                  />

                  {tagsObjects.three.length !== 0 && (
                    <div className="tags-rslt">
                      {tagsObjects.three.map((item, i) => {
                        return (
                          <div className="tag-ttl" key={i}>
                            <span>{item}</span>
                            <em
                              onClick={() =>
                                addOrRemoveTag("three", item, "remove")
                              }
                            >
                              <i class="fa fa-times" aria-hidden="true"></i>
                            </em>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>


                <div className="form-inputs">
                  <label className="form-label">
                  Items <i>*</i>
                  </label>
                  <input
                    type="text"
                    name="Date"
                    onKeyDown={(e)=> onKeyFun(e , 'four')}
                    className="form-control"
                    placeholder="Select tags here"
                  />

                  {tagsObjects.four.length !== 0 && (
                    <div className="tags-rslt">
                      {tagsObjects.four.map((item, i) => {
                        return (
                          <div className="tag-ttl" key={i}>
                            <span>{item}</span>
                            <em
                              onClick={() =>
                                addOrRemoveTag("four", item, "remove")
                              }
                            >
                              <i class="fa fa-times" aria-hidden="true"></i>
                            </em>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>


                <div className="form-inputs">
                  <label className="form-label">
                  Labor Types <i>*</i>
                  </label>
                  <input
                    type="text"
                    name="Date"
                    onKeyDown={(e)=> onKeyFun(e , 'five')}
                    className="form-control"
                    placeholder="Select tags here"
                  />

                  {tagsObjects.five.length !== 0 && (
                    <div className="tags-rslt">
                      {tagsObjects.five.map((item, i) => {
                        return (
                          <div className="tag-ttl" key={i}>
                            <span>{item}</span>
                            <em
                              onClick={() =>
                                addOrRemoveTag("five", item, "remove")
                              }
                            >
                              <i class="fa fa-times" aria-hidden="true"></i>
                            </em>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
                <div className="form-btn">
                  <Link to="/login" className="btn primary-btn">
                    Save
                  </Link>
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

export default OrgMasters;
