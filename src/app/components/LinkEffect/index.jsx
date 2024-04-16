import React from "react";
import styles from "./style.module.css";
import { GoArrowUpRight } from "react-icons/go";

export default function LinkEffect({ reddot = false, text, big = true }) {
const textSplit = text.split('.');

  return (
    <span className={styles.LinkEffect} style={{ padding: big && "16px 32px" }}>
      <span className={styles.text}>
      {reddot ? <span>{textSplit[0]}<b className={styles.sec} >.</b>{textSplit[1]}</span> : <span>{text}</span>}
      {reddot ? <span>{textSplit[0]}<b className={styles.sec} >.</b>{textSplit[1]}</span> : <span>{text}</span>}
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
