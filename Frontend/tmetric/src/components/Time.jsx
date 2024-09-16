import { Button, Checkbox, Heading } from "@chakra-ui/react";
import React from "react";
import "../Styles/time.css";
import { MdFilterList } from "react-icons/md";
import { BsChevronDown } from "react-icons/bs";
import { FaRegCalendarAlt,FaPlayCircle,FaRegStopCircle} from "react-icons/fa";

// Reviewed for: fw17_0415 - Use constants for static content or JSON file
// I see redundant code
const Time = () => {
  return (
    <div className="time-section">
      <div className="timenav">
        <div className="timenav-btn">
            <FaPlayCircle className="playbtn"/>
            <FaRegStopCircle className="stopbtn"/>
            <Heading fontSize='1.9rem' fontWeight='500'>My Time</Heading>
            <div>
                <Heading fontSize='1.9rem' fontWeight='500'>Select User or Team </Heading>
                <BsChevronDown/>
            </div>
        </div>
        <div className="timenave-calender">
            <FaRegCalendarAlt/>
        </div>
      </div>
      <div className="total-time">
        <div className="total-time-top">
          <div>
            <p>Total</p>
            <Heading fontSize={"1.8rem"}>0 min</Heading>
          </div>
          <Heading size={"md"}>...</Heading>
        </div>

        <div className="timeBar">
          <p>
            No activity is recorded for this day. Use desktop app to track user
            activity
          </p>
{/* Reviewed for: fw17_0415 - why do we have same div? Any specific reason */}
          <div className="timebar-pointer"></div>
          <div className="time-stamp">
            <div>
              <div className="point-stamp"></div>
              <p>12:00pm</p>
            </div>
            <div>
              <div className="point-stamp"></div>
              <p>12:00pm</p>
            </div>
            <div>
              <div className="point-stamp"></div>
              <p>12:00pm</p>
            </div>
            <div>
              <div className="point-stamp"></div>
              <p>12:00pm</p>
            </div>
            <div>
              <div className="point-stamp"></div>
              <p>12:00pm</p>
            </div>
            <div>
              <div className="point-stamp"></div>
              <p>12:00pm</p>
            </div>
            <div>
              <div className="point-stamp"></div>
              <p>12:00pm</p>
            </div>
            <div>
              <div className="point-stamp"></div>
              <p>12:00pm</p>
            </div>
            <div>
              <div className="point-stamp"></div>
              <p>12:00pm</p>
            </div>
            <div>
              <div className="point-stamp"></div>
              <p>12:00pm</p>
            </div>
          </div>
        </div>
      </div>
      <div className="time-task">
        <div>
          <div>
            <Checkbox padding="1rem"></Checkbox>
            <Button>Add Time Entry</Button>
            <Button>Add Break</Button>
          </div>

          <MdFilterList />
        </div>
      </div>
    </div>
  );
};

export default Time;
