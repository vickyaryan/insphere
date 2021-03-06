import React, { useEffect, useState, useRef } from "react";
import Keyboard, { KeyboardReactInterface } from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import Draggable from "react-draggable";

import ReactDOM from "react-dom";
export default function model({ show, onClose, children, title }) {
  var keyboardRef = useRef();
  const [layoutName, setLayoutName] = useState("default");
  const [input, setInput] = useState();
  const [keyboardVisibility, setKeyboardVisibility] = useState(false);
  const [inHeight, setInHeight] = useState(false);
  const [isBrowser, setIsBrowser] = useState(false);

  const onChange = (input) => setInput(input)
  // useEffect(()=>{
  //   document.addEventListener("mousedown",()=>{
  //     // setKeyboardVisibility(false);
  //   })
  // })
  const onKeyPress = (button) => {if (button === "{shift}" || button === "{lock}") handleShift()}
  const handleShift = () => setLayoutName(layoutName === "default" ? "shift" : "default")

  const onChangeInput = (event) => setInput(event.target.value);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
      <div className="StyledModalOverlay" style={{ height: inHeight ? "140%" : "100%" }}>
        <div className="StyledModal">
          <a href="#" onClick={handleCloseClick} className="StyledModalHeader">x</a>
          <h3>User Details</h3>
          <p className="subText">
            All the fields are optional but you can enrich your dataset
            contribution by providing the demographic details.
          </p>
          <hr />
          <div className="name-input">
            <label className="form-label">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-contro"
              value={input}
              onChange={onChangeInput}
              onFocus={() => {
                setKeyboardVisibility(true);
                setInHeight(true);
              }}
              //  onBlur={() => {
              //    setInHeight(false)
              //  }}
            />
            <small className="form-text">Only 12 characters allowed. (Hint: name.surname, name_surname etc.)</small>
          </div>
          <div className="py-3">
            <label className="mb-1 form-label" for="motherTongue">
              Mother Tongue
            </label>
            <select name="motherTongue" className="form-select" id="motherTongue">
              <option value="">Select Mother Tongue</option>
              <option value="Assamese">?????????????????????</option>
              <option value="Bengali">???????????????</option>
              <option value="Bodo">???????????????</option>
              <option value="Dogri">???????????????</option>
              <option value="Gujarati">?????????????????????</option>
              <option value="Hindi">???????????????</option>
              <option value="Kannada">???????????????</option>
              <option value="Kashmiri">??????????</option>
              <option value="Konkani">??????????????????</option>
              <option value="Maithili">??????????????????</option>
              <option value="Malayalam">??????????????????</option>
              <option value="Manipuri">?????????????????????</option>
              <option value="Marathi">???????????????</option>
              <option value="Nepali">??????????????????</option>
              <option value="Odia">????????????</option>
              <option value="Punjabi">??????????????????</option>
              <option value="Santali">?????????????????????</option>
              <option value="Sanskrit">???????????????????????????</option>
              <option value="Sindhi">???????????????</option>
              <option value="Tamil">???????????????</option>
              <option value="Telugu">??????????????????</option>
              <option value="Urdu">????????</option>
            </select>
          </div>

          {/****************  Age ******************* */}
          <div className="py-3">
            <label className="mb-1 form-label" for="age"> Age Group </label>
            <select name="age" className="form-select" id="age">
              <option value="">Select Age Group</option>
              <option value="upto 10">upto 10 (Kid)</option>
              <option value="10 - 30">10 - 30 (Youth)</option>
              <option value="30 - 60">30 - 60 (Adult)</option>
              <option value="60+">60+ (Senior)</option>
            </select>
          </div>

          {/* ***************************  Radio Button ****************************** */}
          <div className="py-3">
            <label className="mb-1 form-label" for="gender"> Gender </label>
            <div>
              <div className="me-8 mb-0 form-check form-check-inline">
                <input name="gender" type="radio" id="male" className="form-check-input" value="male" />
                <label title="" for="male" className="form-check-label"> Male </label>
              </div>
              <div className="me-8 mb-0 form-check form-check-inline">
                <input name="gender" type="radio" id="female" className="form-check-input" value="female" />
                <label title="" for="female" classNAme="form-check-label"> Female </label>
              </div>
              <div className="me-8 mb-0 form-check form-check-inline">
                <input name="gender" type="radio" id="others" className="form-check-input" value="" />
                <label title="" for="others" className="form-check-label"> Others </label>
              </div>
            </div>
          </div>
          <p className="py-3 mb-0"> By proceeding ahead you agree to the <a target="_blank" href="#"> Terms and Conditions</a> </p>
          {/* ***************** Button ***************** */}
          <button type="submit" className="info btn btn-primary">Done</button>
        </div>

        {keyboardVisibility && (
          <Draggable>
          <div className="Keyboard">
          <a href="#" onClick={()=>setKeyboardVisibility(false)} className="StyledModalHeader keyboard-close">x</a>
            <Keyboard
              // keyboardRef={(r) => (keyboardRef = r)}
              layoutName={layoutName}
              onChange={onChange}
              onKeyPress={onKeyPress}
              theme={"hg-theme-default"}
              newLineOnEnter={false}
            />
          </div>
          </Draggable>
        )}
      </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
}
