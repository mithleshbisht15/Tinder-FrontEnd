import React from "react";
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';

function Header()
{
    return(
       <div className="header">
        
           <PersonIcon fontSize="large" className="header_icon"/>
       
        <img className="header_logo"
         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKrcyas9iSLtChkzWxg6DrOPbnKMkesG5_ig&usqp=CAU"
         alt="img"/>

           <ForumIcon fontSize="large" className="header_icon"/>

       </div>
    );
}

export default Header;