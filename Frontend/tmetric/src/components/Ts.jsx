import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
  } from '@chakra-ui/react'
  import { GoGraph } from "react-icons/go";
import { GrEmptyCircle, GrIntegration } from "react-icons/gr";
import { AiFillFolder } from "react-icons/ai";
import { BiBuildings, BiAlarmOff, BiUserCircle } from "react-icons/bi";
import { RiPagesLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { SiMicrosoftteams } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { Link } from 'react-router-dom';

function Ts() {
  return (
    <div style={{width:"225px",background:"rgb(246,247,248"}}>
        <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box style={{ fontWeight: "600", fontSize: "15px", marginLeft: "10px",marginRight:"110px" }}>Analyze
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
{/* Reviewed for: fw16_117 and fw17_0415: I see You have passed different config to Accordion panel, you can create one comp and pass this dynamic config to it*/}
    <AccordionPanel pb={4}>
        <div style={{display:"flex",gap:"10px",marginLeft:"30px"}}>
            <span><GoGraph /></span>
            <span style={{margin:"-3px 0 0 0px"}}>Reports</span>
        </div>
        <div style={{display:"flex",gap:"10px",margin:" 13px 0 0 30px"}}>
            <span><GrEmptyCircle /></span>
            <span style={{margin:"-3px 0 0 0px"}}>Activity</span>
        </div>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box style={{ fontWeight: "600", fontSize: "15px", marginLeft: "10px",marginRight:"110px" }}>Manage
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
        <div style={{display:"flex",gap:"10px",marginLeft:"30px"}}>
            <span><AiFillFolder /></span>
          <Link to='/app/project'><span style={{margin:"-3px 0 0 0px"}}>Projects</span></Link>
        </div>
        <div style={{display:"flex",gap:"10px",margin:" 13px 0 0 30px"}}>
            <span><BiBuildings/></span>
            <span style={{margin:"-3px 0 0 0px"}}>Client</span>
        </div>
        <div style={{display:"flex",gap:"10px",marginLeft:"30px",marginTop:"13px"}}>
            <span><RiPagesLine/></span>
            <span style={{margin:"-3px 0 0 0px"}}>Invoices</span>
        </div>
        <div style={{display:"flex",gap:"10px",margin:" 13px 0 0 30px"}}>
            <span><BiAlarmOff/></span>
            <span style={{margin:"-3px 0 0 0px"}}>Time Off</span>
        </div>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box style={{ fontWeight: "600", fontSize: "15px", marginLeft: "10px",marginRight:"110px" }}>Workspace
        </Box>
        <AccordionIcon style={{marginLeft:"-22px"}} />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <div style={{display:"flex",gap:"10px",marginLeft:"30px"}}>
            <span><FiSettings/></span>
            <span style={{margin:"-3px 0 0 0px"}}>Settings</span>
        </div>
        <div style={{display:"flex",gap:"10px",margin:" 13px 0 0 30px"}}>
            <span><BiUserCircle/></span>
            <span style={{margin:"-3px 0 0 0px"}}>Members</span>
        </div>
        <div style={{display:"flex",gap:"10px",marginLeft:"30px",marginTop:"13px"}}>
            <span><SiMicrosoftteams/></span>
            <span style={{margin:"-3px 0 0 0px"}}>Teams</span>
        </div>
        <div style={{display:"flex",gap:"10px",margin:" 13px 0 0 30px"}}>
            <span><GrIntegration/></span>
            <span style={{margin:"-3px 0 0 0px"}}>Integration</span>
        </div>
        <div style={{display:"flex",gap:"10px",margin:" 13px 0 0 30px"}}>
            <span><MdSubscriptions/></span>
            <span style={{margin:"-3px 0 0 0px"}}>Subscription</span>
        </div>

    </AccordionPanel>
  </AccordionItem>
</Accordion>
<div>
        <div style={{ display: "flex", gap: 10, marginTop: "30px",marginLeft:"20px" }}>
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
              alt=""
              style={{ width: 50, height: 50, borderRadius: "50%" }}
            />
          </div>
          <div style={{ textAlign: "left", color: "grey",marginTop:"0px" }}>
            <p>My Company</p>
            <p style={{ fontSize: "20px", color: "black",marginTop:"-5px" }}>ervrrbv</p>
          </div>
        </div>
        <div>
          <button style={{fontWeight:"bold", border:"1px solid black",borderRadius:"5px", height:"30px",width:"70px",margin:"10px 0 0 75px"}}>Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Ts
