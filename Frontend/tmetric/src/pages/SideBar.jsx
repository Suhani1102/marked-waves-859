
import React, { useEffect, useRef, useState } from "react";
import styles from '../Styles/sidebar.module.css'
import { BiTask } from "react-icons/bi";
import Ts from "../components/Ts";
import { Link } from "react-router-dom";

// Reviewed for: fw16_117 and fw16_016 - Avoid SVGs like this, put them in assets and use.
function SideBar({showAdd}) {
    const sidebarRef = useRef(null);
    const [barToggle, setBarToggle] = useState(true);
    const [time, setTime] = useState(true);
    const [task, setTask] = useState(false);
    useEffect(() => {
      if (barToggle) {
        addBodyPadding();
      } else {
        removeBodyPadding();
      }
  
      return removeBodyPadding;
    }, [barToggle]);

    function addBodyPadding() {
      document.body.style.paddingLeft =
        sidebarRef.current.getBoundingClientRect().width + "px";
    }
    
    function removeBodyPadding() {
      document.body.style.paddingLeft = "0";
    }
    const sBar = (n) => {
      if (n === "task") {
        setTask(true);
        setTime(false);
      } else if (n === "time") {
        setTask(false);
        setTime(true);
      }
    };
    return (
      <>
        <button
          onClick={() => {
            setBarToggle(!barToggle);
          }}
          className={styles.toggler}
        >
          {barToggle ? (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.74609 8L9.74609 13L11 11.7539L7.24609 8L11 4.24609L9.74609 3L4.74609 8Z"
                fill="%2334393D"
              />
            </svg>
          ) : (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 3H15V5H1V3ZM9 7H1V9H9V7ZM15 11H1V13H15V11Z"
                fill="%2334393D"
              />
            </svg>
          )}
        </button>
        <div>
          <div
            ref={sidebarRef}
            className={styles.sidebar}
            style={{
              left: barToggle ? 0 : "-240px",
            }}
          >
            <img
              style={{
                height: "40px",
                marginTop: "10px",
                marginLeft: "10px",
                marginBottom: "20px",
              }}
              src="https://app.tmetric.com/images/tmetric_logo_and_text.svg"
              alt=""
            ></img>
  
            <div
              className={time ? styles.selecteddiv : styles.normaldiv}
              onClick={() => sBar("time")}
            >
              <img
                style={{ height: "25px" }}
                alt=""
                src={
                  time
                    ? "https://tmetric.com/media/2p4n4oyc/icon-timer-blue.svg"
                    : "https://tmetric.com/media/qojb5snq/icon-timer-gray.svg"
                }
              />
              <Link to='/app/timemanage'><span>Time</span></Link>            
            </div>
            <div
              className={task ? styles.selecteddiv : styles.normaldiv}
              onClick={() => sBar("task")}
            >
              <BiTask style={{ fontSize: "25px" }} />
              <Link to='/app/task'><span>Tasks</span></Link>
            </div>
            <hr></hr>
            <Ts showAdd={showAdd} />
          </div>
        </div>
      </>
    );
  };
export default SideBar
