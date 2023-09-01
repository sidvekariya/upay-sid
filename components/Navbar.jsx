import React from "react";
import styles from "../styles/navbar.module.css";
import Wrapper from "./Wrapper";
import Image from "next/image";
import logo from "../public/images/navbar-images/upayLogo.svg";
import { AiOutlineUserAdd } from "react-icons/ai";
import { HiOutlineBars3BottomRight } from "react-icons/hi";

import localFont from "next/font/local";
import { Mulish } from "@next/font/google";
const mulish = Mulish({ subsets: ["latin"] });
const nexaBold = localFont({ src: "../fonts/Nexa Bold.otf" });
const nexaRegular = localFont({ src: "../fonts/Nexa Regular.otf" });

const Navbar = () => {
    return (
        <Wrapper background="green">
            <div className={styles.navbar}>
                <div className={styles.logoText}>
                    <Image className={styles.upayLogo} src={logo} alt="logo" />
                    <div style={mulish.style} className={styles.text}>
                        upay
                    </div>
                </div>
                <ul className={styles.ul}>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Pricing</li>
                    <li>About Us</li>
                    <li>Contact</li>
                </ul>
                <div
                    style={nexaRegular.style}
                    className={styles.loginAndSignup}
                >
                    <div className={styles.login}>Log in</div>
                    <div className={styles.signupLogo}>
                        <div className={styles.signUp}>Sign up</div>
                        <div className={styles.logo}>
                            <AiOutlineUserAdd />
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Navbar;
