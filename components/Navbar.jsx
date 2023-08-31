import React from "react";
import Wrapper from "./Wrapper";
import localFont from "next/font/local";

const myFont = localFont({ src: "../fonts/Nexa Bold.otf" });

const Navbar = () => {
    return (
        <Wrapper>
            <div style={myFont.style}>navbar</div>
        </Wrapper>
    );
};

export default Navbar;
