"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Footer from "@/components/footer";
import Overview from "@/components/overview";
import { Sample, team } from "@/utils/data";
import Image from "next/image";

const Bio = ({ params }: { params: { slug: string } }) => {
  const [data, setData] = useState<Sample>({
    id: "",
    name: "",
    position: "",
    email: "",
    linkedin: "",
    picture: "",
    overview: [],
  });
  useEffect(() => {
    team?.filter((item) => {
      if (item.id === params.slug) {
        setData(item);
      }
      return item;
    });
  }, [params.slug]);
  return (
    <div className={styles.bioContainer}>
      <div className={styles.bioImage}>
        <Image src={data?.picture} fill alt="overview" />
        <div className={styles.bioText}>
          <div>
            <h2>{data.name}</h2>
            <p>{data.position}</p>
          </div>
        </div>
      </div>
      <Overview array={data?.overview} />
      <Footer />
    </div>
  );
};

export default Bio;
