import "./rightbar.css";
import {Users} from "../../dummyData";
import Online from "../online/Online"

export default function Rightbar({profile}) {



  const HomeRightbar = () =>{
    return(
      <>
      <div className="birthdayContainer">
            <img className="birthdayImg" src= "assets/random/gift.png" alt="" />
            <span className="birthdayText">
              <b>Baaba Naato</b> and <b>3 others friends</b> have birthday today
            </span>
      </div>
          <img className="rightbarAd" src="assets/random/advert.png" alt=""/>
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightbarFriendList">
            {Users.map((u)=>(
              <Online key={u.id} user={u}/>
            ))}
          </ul>
          
      </>
    )
  }

  const ProfileRightbar = () =>{
    return(
    <>
    <h4 className="rightbarTitle">User information</h4>
    <div className="rightbarInfo">
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">Lives at:</span>
        <span className="rightbarInfoValue">Techiman</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">From:</span>
        <span className="rightbarInfoValue">Bontrase</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">District:</span>
        <span className="rightbarInfoValue">Awutu Senya</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">Region:</span>
        <span className="rightbarInfoValue">Central</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">Relationship:</span>
        <span className="rightbarInfoValue">Single</span>
      </div>
    </div>
    <h4 className="rightbarTitle">User Friends</h4>
    <div className="rightbarFollowings">
      <div className="rightbarFollowing">
        <img src="assets/random/americo.webp" alt="" className= "rightbarFollowingImg"/>
         <span className="rightbarFollowingName">Paul jackson</span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/random/womanplus.jpg" alt="" className= "rightbarFollowingImg"/>
         <span className="rightbarFollowingName">Eva Muchan</span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/random/green.jpg" alt="" className= "rightbarFollowingImg"/>
         <span className="rightbarFollowingName">Rose Holm</span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/random/mybro.webp" alt="" className= "rightbarFollowingImg"/>
         <span className="rightbarFollowingName">Kofi Iroko</span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/random/woman.jpg" alt="" className= "rightbarFollowingImg"/>
         <span className="rightbarFollowingName">Leslie Ford</span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/random/coatman.png" alt="" className= "rightbarFollowingImg"/>
         <span className="rightbarFollowingName">Ivan Scott</span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/random/coatman.png" alt="" className= "rightbarFollowingImg"/>
         <span className="rightbarFollowingName">Ivan Scott</span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/random/coatman.png" alt="" className= "rightbarFollowingImg"/>
         <span className="rightbarFollowingName">Ivan Scott</span>
      </div>
    </div>
    </>
    )
    
    
    
    
  }

  return (
    <div className="rightbar">
        <div className="rightbarWrapper">
          {profile ? <ProfileRightbar/> : <HomeRightbar/>}

        </div>
    </div>
  )
}
