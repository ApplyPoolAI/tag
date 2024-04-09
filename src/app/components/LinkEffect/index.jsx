import React from "react";
import styles from "./style.module.css";
import { GoArrowUpRight } from "react-icons/go";

export default function LinkEffect({ text, big = true }) {
  return (
    <span className={styles.LinkEffect} style={{ padding: big && "16px 32px" }}>
      <span className={styles.text}>
        <span>{text}</span>
        <span>{text}</span>
      </span>
      <span className={styles.icon}>
        <span>
          <GoArrowUpRight />
        </span>
        <span>
          <GoArrowUpRight />
        </span>
      </span>
    </span>
  );
}
