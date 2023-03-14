import React from "react";

const Goto = (props) => {
  return (
    <a className=" h-7 w-7 min-w-20 bg-white rounded-full p-0.5vmin m-0vh 0.3vw" href={props.href} download={props.download}>
      {props.children}
    </a>
  );
};

export default Goto;
