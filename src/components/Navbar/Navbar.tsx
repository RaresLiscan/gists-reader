import React from "react";
import StyledNavbar from "./StyledNavbar";
import logo from "../../images/logo.png";
import avatar from "../../images/avatar.png";

export default function Navbar() {
  return (
    <StyledNavbar>
      <div className="logo">
        <img src={logo} width={100} height={70} alt="logo" />
      </div>
      <div className="navigation">
        <ul className="pages">
          <li>Newsletter</li>
          <li>Latest gists</li>
        </ul>
        <div className="avatar">
          <img src={avatar} alt="avatar" width={50} height={50} />
        </div>
      </div>
    </StyledNavbar>
  );
}
