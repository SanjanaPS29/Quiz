import React, { useContext} from "react";
import { HeaderStyle, Time ,HeaderLeft} from "../styles/Header.style";
import { FaHandPointLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TimeContext } from "./Questions";

function Header() {
  const time = useContext(TimeContext);

  return (
    <div>
      <HeaderStyle>
        <HeaderLeft>
          <div>
        <Link to="/highscore">
          View HighScores
          </Link>
          </div>
          <div style={{paddingTop:10, paddingLeft:5 }}>
          <FaHandPointLeft size={20} />
          </div>
          </HeaderLeft>
         
        <Time>Time: {time}</Time>
      </HeaderStyle>
    </div>
  );
}

export default Header;
