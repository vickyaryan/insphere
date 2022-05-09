import React, { useEffect, useState } from "react";
import Header from "./Header";
// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
// import Navbar from "./component/navBar";
// import Scroll from "./component/scroll";
// import About from "./about";
// import Modal from "./model";
// import ModelTemplet from "./modelTemplet";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Keyboard from "./Keyboard";
// import Draggable from "./draggable";
// import useCount from "./useCount";
// import Dummy from "./dummy";
export default function Home() {
  const [showModalId, setShowModalId] = useState('');
  const [dataText, setdataText] = useState("");
  const [dataTextResult, setdataTextResult] = useState("");
  const [language, setlanguage] = useState([]);
  const [showDropDown , setshowDropDown] = useState(false)
  const [slectlang1, setSlectlang1] = useState('Select language')
  const [slectlang2, setSlectlang2] = useState('')
  const request = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({task: "translation",sourceLanguage: "",targetLanguage: "",domain: "All",submitter: "All",userId: null}),
  };

  useEffect(() => {
    fetch("https://meity-auth.ulcacontrib.org/ulca/apis/v0/model/search",request)
      .then((response) => response.json()).then((data) => setlanguage(data?.data));
  }, []);


  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({modelId: showModalId,task: "translation",input: [{ source: dataText }],userId: null}),
  };

  const convert = () => {
    fetch("https://meity-auth.ulcacontrib.org/ulca/apis/v0/model/compute",requestOptions)
      .then((response) => response.json()).then((data) => setdataTextResult(data.outputText));
  }

  const SelectLAng = (item) => {
    setShowModalId(item.modelId)
    setSlectlang1(item?.languages[0]?.sourceLanguage)
    setSlectlang2(item?.languages[0]?.targetLanguage)
    setshowDropDown(!showDropDown)
    setdataText('')
  }
  return (
    <>
      <Header /> 
        <button className="dropbtn " onClick={()=>setshowDropDown(!showDropDown)}>
          <div> {slectlang1}</div> 
          <div> {slectlang2}</div>
        </button>
      {showDropDown && (
      <ul>
        {language && language?.map((item) => {return (
        <li  onClick={()=>SelectLAng(item)} >
          <div className="liLang">
            <div>{item?.languages[0]?.sourceLanguage}  </div>
            <div>{item?.languages[0]?.targetLanguage}  </div>
          </div> 
        </li>)})}
      </ul>)
      }

      <div className="header2">
        <textarea id="txtid" name="txtname" rows="4" cols="50" maxLength="200" placeholder="Write in hindi" className="textbox" value={dataText}  onChange={e => setdataText(e.target.value)}/>
        <textarea id="txtid" name="txtname" rows="4" cols="50" maxLength="200" placeholder="OutPut" className="textbox" value={dataTextResult}/>
      </div>
      <div className="textbox2"> <div onClick={convert} className="textbox1" >Submit</div></div>
      
    </>
  );
}
