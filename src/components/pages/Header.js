import React, { useContext} from "react";
import { HeaderStyle, Time } from "../styles/Header.style";
import { FaHandPointLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TimeContext } from "./Questions";

function Header() {
  const time = useContext(TimeContext);

  return (
    <div>
      <HeaderStyle>
        <Link to="/highscore">
          View HighScores
          <FaHandPointLeft size={20} />
        </Link>
        <Time>Time: {time}</Time>
      </HeaderStyle>
    </div>
  );
}

export default Header;
