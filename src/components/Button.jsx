import React from "react";

const Button = ({ styles }) => (
  <button type="button" onclick={buttonclicked} className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Read Now
  </button>
);

const buttonclicked = () => {
  window.open("www.viz.com/shonenjump/chapters/kaiju-no-8");
}

export default Button;
