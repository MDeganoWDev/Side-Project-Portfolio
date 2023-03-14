import React from "react";
import Goto from "./ui/goto";

const Navbar = () => {
  return (
    <div className="flex bg-black">
      <Goto
        href="CV Degano Matteo.pdf"
        download="CV_Degano_Matteo"
      >
        <img src="download.svg" alt="Télécharger CV" />
      </Goto>
      <Goto href="https://github.com/MDeganoWDev">
        <img src="envelope-fill.svg" alt="GitHub" />
      </Goto>
      <Goto href="https://slack.com/intl/fr-fr">
        <img src="slack.svg" alt="Slack" />
      </Goto>
      <Goto href="https://www.linkedin.com/in/matteo-degano-91b49b261/">
        <img src="linkedin.svg" alt="Linkedin" />
      </Goto>
    
    </div>
  );
};

export default Navbar;
