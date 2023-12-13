"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import Layout from "@/utils/layout";
import Filter from "@/svgs/filter";
import { portfolio } from "@/utils/data";
import Image from "next/image";
import Add from "@/svgs/add";
import PortRight from "@/svgs/port-right";
import OverlayRight from "@/svgs/overlay-right";
import FilterPopup from "../filter-popup";

const PortfolioBody = () => {
  const [number, setNumber] = useState(4);
  const [overlay, setOverlay] = useState(false);
  const [index3, setIndex] = useState(-1);
  const [index4, setIndex4] = useState(-1);
  const [popup, setPopup] = useState(false);
  return (
    <div className={styles.portfolioBodyCont}>
      {overlay && popup ? <div className={styles.overlay}></div> : null}
      <Layout>
        <div className={styles.portfolioBodyWrapper}>
          <div className={styles.filterCont}>
            <div
              className={styles.filterBody}
              onClick={() => {
                setPopup(!popup);
                setOverlay(!overlay);
              }}>
              <p>{overlay && popup ? "Hide Filter" : "Show Filter"}</p>
              <Filter />
            </div>
            {overlay && popup ? <FilterPopup /> : null}
          </div>
          <div className={styles.portfolioBody}>
            {portfolio?.slice(0, number)?.map((item, index) => {
              return (
                <div className={styles.portfolioCont} key={index}>
                  {item?.map((items, index2) => {
                    return (
                      <div
                        className={styles.portfolioSingle}
                        key={index2}
                        onMouseOver={() => {
                          setOverlay(true);
                          setIndex(index2);
                          setIndex4(index);
                        }}
                        onMouseLeave={() => {
                          setOverlay(false);
                          setIndex(-1);
                          setIndex4(-1);
                        }}>
                        <div className={styles.portfolioImg}>
                          <Image src={items.img} alt="Portfolio Img" fill />
                        </div>
                        {overlay && index3 === index2 && index4 === index ? null : (
                          <div className={styles.portfolioSingleBody}>
                            <div>
                              <h2>{items.name}</h2>
                              <p>
                                {items.type}
                                <div></div>
                                {items.location}
                              </p>
                            </div>
                            <PortRight />
                          </div>
                        )}

                        {overlay && index3 === index2 && index4 === index ? (
                          <div className={styles.overlay}>
                            <div className={styles.overlayDetails}>
                              <p>{items.story}</p>
                              <OverlayRight />
                            </div>
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <div
            className={styles.add}
            onClick={() => {
              if (number === 4) {
                setNumber(8);
              } else {
                setNumber(4);
                window.scrollTo(0, 500);
              }
            }}>
            <h2>Show {number === 4 ? "More" : "Less"} </h2>
            <Add />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default PortfolioBody;
