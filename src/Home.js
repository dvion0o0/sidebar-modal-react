import React, { useContext } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import logo from "./logo.svg";

const Home = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [openSideBar, setOpenSideBar] = React.useState(false);
  return (
    <>
      <main>
        <button className="sidebar-toggle" onClick={() => setOpenSideBar(true)}>
          <FaBars />
        </button>
        <button
          className="btn"
          onClick={() => setOpenModal(true)}
          openModal={openModal}
        >
          show modal
        </button>
      </main>
      <div className={openModal ? "modal-overlay show-modal" : "modal-overlay"}>
        <div className="modal-content">
          <button
            className="close-modal-btn"
            onClick={() => setOpenModal(false)}
          >
            <FaTimes />
          </button>
        </div>
      </div>
      <aside className={openSideBar ? "sidebar show-sidebar" : "sidebar"}>
        <div className="sidebar-header">
          <img src={logo} alt="logo" />
          <button
            className="close-btn"
            onClick={() => {
              setOpenSideBar(false);
            }}
          >
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map((link) => {
            const { id, text, url, icon } = link;
            return (
              <li key={id}>
                <a href={url}>
                  {icon}
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="social-icons">
          {social.map((link) => {
            const { id, url, icon } = link;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
};

export default Home;
