import "./sidebar.css";
import {
  RssFeed,
  Chat, 
  Group, 
  HelpOutline, 
  PlayCircleFilledOutlined,  
  School, 
  Event, 
  WorkOutline, 
  Bookmark 
} from "@material-ui/icons";
// import { useState } from 'react';
import {Users} from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";




export default function Sidebar(props) {
  
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
          <h4 className="discussions">Go to Your Communities and take part in 
          Discussions for Development</h4>
          <ul className="regionsList">
             <li className="regionItem">
              <a href="ahafo.html"
              target= "_self" className="sidebarReg">Ahafo Region
              </a>
             </li>
             <li className="regionItem">
              
              < a href="ashanti.html" 
              target= "_self" className="sidebarReg">Ashanti Region</a>
             </li>
             <li className="regionItem">
              
              < a href="bono.html" 
              target= "_self" className="sidebarReg">Bono Region</a>
             </li>
             <li className="regionItem">
              
              < a href="bonoeast.html" 
              target= "_self" className="sidebarReg">Bono East Region</a>
             </li>
             <li className="regionItem">
              
              < a href="central.html" 
              target= "_self" className="sidebarReg">Central Region</a>
             </li>
             <li className="regionItem">
              
              < a href="eastern.html" 
              target= "_self" className="sidebarReg">Eastern Region</a>
             </li>
             <li className="regionItem">
              
              < a href="accra.html" 
              target= "_self" className="sidebarReg">Greater Accra Region</a>
             </li>
             <li className="regionItem">
              
              < a href="northern.html" 
              target= "_self" className="sidebarReg">Northern Region</a>
             </li>
             <li className="regionItem">
              
              < a href="northeast.html" 
              target= "_self" className="sidebarReg">North-East Region</a>
             </li>
             <li className="regionItem">
              
              <span>< a href="oti.html" 
              target= "_self" className="sidebarReg">Oti Region</a></span>
             </li>
             <li className="regionItem">
              
              < a href="savannah.html" 
              target= "_self" className="sidebarReg">Savannah Region</a>
             </li>
             <li className="regionItem">
              
              < a href="uppereast.html" 
              target= "_self" className="sidebarReg">Upper East Region</a>
             </li>
             <li className="regionItem">
              
              < a href="upperwest.html" 
              target= "_self" className="sidebarReg">Upper West Region</a>
             </li>
             <li className="regionItem">
              
              < a href="volta.html" 
              target= "_self"className="sidebarReg" >Volta Region</a>
             </li>
             <li className="regionItem">
              
              < a href="western.html" 
              target= "_self" className="sidebarReg">Western Region</a>
             </li>
             <li className="regionItem">
              
              < a href="westernnorth.html" 
              target= "_self" className="sidebarReg">Western North Region</a>
             </li>
          </ul>
          <hr className="sidebarHr"/>
        <ul className="sidebarList">
            <li className="sidebarListItem">
            <RssFeed className="sidebarIcon"/>
            <span className="sidebarListItemText">Feed</span>
            </li>
            <li className="sidebarListItem">
            <Chat className="sidebarIcon"/>
            <span className="sidebarListItemText">Chat</span>
            </li>
            <li className="sidebarListItem">
            <Bookmark className="sidebarIcon"/>
            <span className="sidebarListItemText">Bookmarks</span>
            </li>
            <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon"/>
            <span className="sidebarListItemText">Questions</span>
            </li>
            <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon"/>
            <span className="sidebarListItemText">Jobs</span>
            </li>
            <li className="sidebarListItem">
            <Event className="sidebarIcon"/>
            <span className="sidebarListItemText">Events</span>
            </li>
            <li className="sidebarListItem">
            <School className="sidebarIcon"/>
            <span className="sidebarListItemText">Courses</span>
            </li>
            <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon"/>
            <span className="sidebarListItemText">Videos</span>
            </li>
            <li className="sidebarListItem">
            <Group className="sidebarIcon"/>
            <span className="sidebarListItemText">Groups</span>
            </li>
          </ul>
          <button className="sidebarButton">Show more</button>
          <hr className="sidebarHr"/>
          <ul className="sidebarFriendsList">
            {Users.map((u)=>(
              <CloseFriend key={u.id} user={u} />
            ))}
          </ul>
        </div>
    </div>
  )
 }
 //<ul>{Users.map(u =>(<CloseFriend key={u.id} user={u}/>) )} </ul>
