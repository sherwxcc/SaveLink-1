import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

const LinkForm = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tagInputList, setTagInputList] = useState([0]);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [tag, setTag] = useState([]);

  // Modal toggle & reset
  const toggle = () => {
    setIsOpen((prev) => !prev);
    setName("");
    setUrl("");
    setTag([]);
    setTagInputList([0]);
  };

  // Append new input box onClick
  const appendInput = () => {
    let newInput = tagInputList.length;
    setTagInputList((prev) => prev.concat(newInput));
  };

  // Set tag array onChange
  const handleChangeTag = (index, val) => {
    let tagCopy = [...tag];
    tagCopy[index] = val;
    setTag(tagCopy);
    console.log("tagCopy: ", tagCopy);
  };

  // Set local storage when form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    let existingLinks = localStorage.getItem("link");
    let link = { name, url, tag };
    existingLinks = existingLinks ? JSON.parse(existingLinks) : [];
    existingLinks.push(link);
    localStorage.setItem("link", JSON.stringify(existingLinks));

    props.addLink();

    toggle();
  };

  return (
    <div>
      <div className="text-center">
        <Button onClick={toggle} className="btn-mint py-0 px-2">
          Add link
        </Button>
      </div>
      {isOpen ? (
        <Modal isOpen={isOpen} toggle={toggle} className="modal-main">
          <ModalHeader>ADD NEW LINKS</ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <label>Name:</label>
              <input
                type="text"
                value={name}
                className="form-control my-1"
                onChange={(e) => setName(e.currentTarget.value)}
                required
              />
              <br />

              <label>Link:</label>
              <input
                type="url"
                value={url}
                className="form-control mt-1"
                onChange={(e) => setUrl(e.currentTarget.value)}
                required
              />
              <br />

              <label>Tags:</label>
              {tagInputList.map((item, index) => (
                <input
                  type="text"
                  key={index}
                  className="form-control mt-1"
                  onChange={(e) =>
                    handleChangeTag(index, e.currentTarget.value)
                  }
                  required
                />
              ))}

              <div>
                <Button
                  onClick={appendInput}
                  className="btn-modal py-0 px-2 my-2"
                >
                  Add Tagbox
                </Button>
              </div>
              <div>
                <Button type="submit" className="btn-modal py-0 px-2 my-2">
                  Save
                </Button>
                <Button onClick={toggle} className="btn-modal py-0 px-2 m-2">
                  Back
                </Button>
              </div>
            </form>
          </ModalBody>
        </Modal>
      ) : null}
    </div>
  );
};

export default LinkForm;
