import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "./component/navBar";
import Scroll from "./component/scroll";
import About from "./about";
import Modal from "./model";
import ModelTemplet from "./modelTemplet";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Keyboard from "./Keyboard";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {/* <Navbar />
    <Scroll />
    <About /> */}
      <button onClick={() => setShowModal(true)} className="button-pop">
        Open Modal
      </button>
      <Modal onClose={() => setShowModal(false)} show={showModal} />
      <ModelTemplet />
    </>
  );
}
