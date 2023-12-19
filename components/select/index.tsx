import React, { useState } from "react";
import styles from "./styles.module.css";
import CaretUp from "@/svgs/caretUp";
import CaretDown from "@/svgs/caretDown";
import OutsideClick from "../outside-click";
import Checked from "@/svgs/checked";

const Select = ({ placeholder, array }: { placeholder: string; array: string[] }) => {
  const [state, setState] = useState(false);
  const [selected, setSelected] = useState("");
  return (
    <div className={styles.selectContainer}>
      <div
        className={styles.selectWrapper}
        onClick={() => {
          setState(true);
        }}>
        <div>
          <p>{placeholder}</p>
          {selected === "" ? null : <h3>{selected}</h3>}
        </div>
        {state ? <CaretUp /> : <CaretDown />}
      </div>
      <OutsideClick onClickOutside={() => setState(false)}>
        {state ? (
          <div className={styles.selectDropdown}>
            {array?.map((item: any, index: number) => {
              return (
                <div
                  className={selected === item ? styles.selectActive : styles.selectSingle}
                  key={index}
                  onClick={() => {
                    setSelected(item);
                    setState(false);
                  }}>
                  <p key={index}>{item}</p>
                  {selected === item ? <Checked /> : null}
                </div>
              );
            })}
          </div>
        ) : null}
      </OutsideClick>
    </div>
  );
};

export default Select;
