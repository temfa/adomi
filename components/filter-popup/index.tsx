import React, { useState } from "react";
import styles from "./styles.module.css";
import { filterPortfolio } from "@/utils/data";
import CaretDown from "@/svgs/caretDown";
import CaretUp from "@/svgs/caretUp";

const FilterPopup = () => {
  const [state, setState] = useState("");
  return (
    <div className={styles.filterPopup}>
      {filterPortfolio?.map((items, index) => {
        return (
          <div className={styles.filterPopupCont} key={index}>
            <div
              className={styles.filterPopupSingle}
              onClick={() => {
                if (state === items.title) {
                  setState("");
                } else {
                  setState(items.title);
                }
              }}>
              <p>{items.title}</p>
              {state === items.title ? <CaretUp /> : <CaretDown />}
            </div>
            {state === items.title ? (
              <div className={styles.filterPopupBody}>
                {items.values?.map((item, index2) => {
                  return <p key={index2}>{item}</p>;
                })}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default FilterPopup;
