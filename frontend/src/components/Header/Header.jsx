import React from "react";
import Logo from "@components/Logo/Logo";
import Nav from "@components/Nav/Nav";
import "./header.css";

function Header() {
  return (
    <header>
      <Logo />
      <Nav />
    </header>
  );
}

export default Header;
