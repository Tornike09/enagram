"use client";

import { JSX, useState } from "react";
import { DoubleArrowIcon } from "@/public/icons/DoubleArrowIcon";
import styles from "./TextField.module.scss";

export const TextField = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [diff1, setDiff1] = useState<JSX.Element[]>([]);
  const [diff2, setDiff2] = useState<JSX.Element[]>([]);
  const [textCont, setTextCont] = useState<boolean>(false);

  const compareTexts = (base: string, compare: string) => {
    const maxLength = Math.max(base.length, compare.length);
    const result: JSX.Element[] = [];

    for (let i = 0; i < maxLength; i++) {
      const charBase = base[i] || "";
      const charCompare = compare[i] || "";

      if (charBase !== charCompare) {
        result.push(
          <span
            key={i}
            className={
              charBase !== " " && charCompare !== " " ? styles.success : ""
            }
          >
            {charBase}
          </span>
        );
      } else {
        result.push(<span key={i}>{charBase}</span>);
      }
    }
    return result;
  };

  const handleCompare = () => {
    if (text1 && text2) {
      setDiff1(compareTexts(text1, text2));
      setDiff2(compareTexts(text2, text1));
      setTextCont(true);
    }
  };

  const returnToField = () => {
    setTextCont(false);
  };

  console.log(text1, diff1);

  return (
    <div className={styles.fieldWrapper}>
      <div className={styles.textareas}>
        {textCont ? (
          <div onClick={returnToField} className={styles.comparedTexts}>
            {diff1}
          </div>
        ) : (
          <textarea
            className={styles.textField}
            value={text1}
            onChange={(e) => setText1(e.target.value)}
            placeholder="დაიწყე წერა..."
          />
        )}
        <DoubleArrowIcon />
        {textCont ? (
          <div onClick={returnToField} className={styles.comparedTexts}>
            {diff2}
          </div>
        ) : (
          <textarea
            className={styles.textField}
            value={text2}
            onChange={(e) => setText2(e.target.value)}
            placeholder="დაიწყე წერა..."
          />
        )}
      </div>
      <button
        onClick={handleCompare}
        className={text1 && text2 ? styles.active : ""}
      >
        შედარება
      </button>
    </div>
  );
};
