import React, { useContext, useEffect } from "react";
import { HeaderStyle, View, Time } from "../styles/Header.style";
import { FaHandPointLeft } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import Timer from "./Timer";
import Question from "./Question";
import { TimeContext } from "./Questions";


function Header() {
 const time=useContext(TimeContext);

  return (
    <div>
      <HeaderStyle>
        <Link to="/highscore">
            View HighScores
            <FaHandPointLeft size={20} />
         </Link>
        <Time>
          Time: {time}

        
        </Time>
   
      </HeaderStyle>
    
    </div>
  );
}

export default Header;
