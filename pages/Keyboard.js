import React, { useState, useRef } from "react";
import Keyboard, { KeyboardReactInterface } from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import { render } from "react-dom";

export default function Keyboarddemo() {
  var keyboardRef = useRef();
  const [layoutName, setLayoutName] = useState("default");
  const [input, setInput] = useState();
  const [keyboardVisibility, setKeyboardVisibility] = useState(false);

  const onChange = (input) => {
    setInput(input);
    console.log("Input changed", input);
  };

  const onKeyPress = (button) => {
    console.log("Button pressed", button);

    if (button === "{shift}" || button === "{lock}") handleShift();
  };
  const handleShift = () => {
    const layoutName = layoutName;
    setLayoutName(layoutName === "default" ? "shift" : "default");
  };

  const onChangeInput = (event) => {
    const input = event.target.value;
    setInput(input);
    keyboardRef.setInput(input);
  };

  return (
    <>
      <input
        value={input}
        placeholder={"Enter"}
        onChange={onChangeInput}
        className="input-Keyboard"
        onFocus={() => {
          setKeyboardVisibility(true);
        }}
      />
      <div className="Keyboard">
     {keyboardVisibility && <Keyboard
        keyboardRef={(r) => (keyboardRef = r)}
        layoutName={layoutName}
        onChange={onChange}
        onKeyPress={onKeyPress}
        theme={"hg-theme-default"}
        newLineOnEnter={false}
      />} 
      </div>
    </>
  );
}
