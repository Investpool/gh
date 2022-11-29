import "./topbar.css";
import {Search, Person, Chat, Notifications} from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
          <span className="logo">GhanaChat</span>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
           <Search/>
            <input placeholder="search for friend, post or video" className="searchInput"/>
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
          <span className="topbarLink">HomePage</span>
          <span className="topbarLink">TimeLine</span>
            <span className="topbarLink">Market</span>
            <span className="topbarLink">FuneralTab</span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
               <Person/>
              <span className="topbarIconBadge">12</span>
            </div>
            <div className="topbarIconItem">
               <Chat/>
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
               <Notifications/>
              <span className="topbarIconBadge">9</span>
            </div>
        </div>
        <img src="assets/persons/raf2.PNG" alt="profile pic" className="topbarImg"/>
        </div>
    </div>
  )
}

