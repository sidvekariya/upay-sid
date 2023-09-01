import React from "react";
import styles from "../styles/wrapper.module.css";

const Wrapper = ({ children, background }) => {
    return (
        <div
            className={`${styles.wrapper} ${
                background === "white" ? styles.white : styles.green
            }`}
        >
            <div className={styles.content}>{children}</div>
        </div>
    );
};

export default Wrapper;
