import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  
  const renderLinks = links.map((link) => {
    return (
      <a key={link} href={`#${link}`} alt={link}>
        {link}
      </a>
    );
  });

  return <nav>{renderLinks}</nav>;
}

export default NavBar;

