"use client";
import { setCountries } from "@/reduxtoolkit/slice/countries";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./styles.module.css";
import Flag from "@/svgs/flag";
import CaretDown from "@/svgs/caretDown";
import Image from "next/image";
import CaretUp from "@/svgs/caretUp";
import OutsideClick from "../outside-click";
import Search from "@/svgs/search";
import Input from "../input";

const PhoneNumber = ({ type, action, placeholder }: { type: boolean; action?: any; placeholder: string }) => {
  type Selected = {
    [key: string]: any;
  };
  const [state, setState] = useState(false);
  const [country, setCountry] = useState([]);
  const [selectedcountry, setSelectedCountry] = useState<Selected>({
    idd: { root: "+2", suffixes: ["34"] },
    flags: { svg: "https://flagcdn.com/ng.svg", alt: "The flag of Nigeria is composed of three equal vertical bands of green, white and green." },
    currencies: {
      NGN: {
        name: "Nigerian Naira",
      },
    },
  });

  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    const getCountries = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const countries = await response.json();
      dispatch(setCountries(countries));
      setCountry(countries);
    };
    getCountries();
  }, []);
  const newCountries = [...country];

  return (
    <div className={styles.phoneNumber}>
      <div
        className={styles.phoneFlag}
        onClick={() => {
          setState(!state);
          setSearch("");
        }}>
        <div>
          <Image src={selectedcountry?.flags.svg} alt={selectedcountry?.flags?.alt} width={16} height={12} />
          {type ? <p>{selectedcountry?.currencies === undefined || null ? "" : Object.keys(selectedcountry?.currencies)[0]}</p> : null}
        </div>
        {state ? <CaretUp /> : <CaretDown />}
      </div>
      {type ? null : (
        <p>
          {selectedcountry?.idd?.root}
          {selectedcountry?.idd?.suffixes === undefined ? "" : selectedcountry.idd.suffixes[0]}
        </p>
      )}
      {/* <input type="number" placeholder={placeholder} onInput={action} /> */}
      <Input placeholder={placeholder} type="number" action={action} />
      <OutsideClick
        onClickOutside={() => {
          setState(false);
          setSearch("");
        }}>
        {state ? (
          <div className={styles.phoneDropdown}>
            <div className={styles.phoneSearch}>
              <Search />
              <input
                type="text"
                placeholder="Enter a country"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </div>
            {newCountries
              ?.sort((a: any, b: any) => a?.name?.common.localeCompare(b?.name?.common))
              ?.filter((items: any) => items?.name?.common.toLowerCase().includes(search.toLowerCase()))
              ?.map((item: any, index: any) => {
                return (
                  <div
                    className={styles.phoneDropdownSingle}
                    key={index}
                    onClick={() => {
                      setSelectedCountry(item);
                      setState(false);
                    }}>
                    <div>
                      <Image src={item?.flags.svg} alt={item?.flags?.alt} width={20} height={15} />
                      <p>{item?.name?.common}</p>
                    </div>
                    <p>
                      {type ? (
                        item?.currencies === undefined || null ? (
                          ""
                        ) : (
                          Object.keys(item?.currencies)[0]
                        )
                      ) : (
                        <>
                          {item?.idd?.root}
                          {item?.idd?.suffixes === undefined ? "" : item.idd.suffixes[0]}
                        </>
                      )}
                    </p>
                  </div>
                );
              })}
          </div>
        ) : null}
      </OutsideClick>
    </div>
  );
};

export default PhoneNumber;
