import Footer from "@/components/footer";
import Hero from "@/components/hero";
import React from "react";
import styles from "./styles.module.css";
import Layout from "@/utils/layout";
import Image from "next/image";
import Link from "next/link";

const Team = () => {
  return (
    <>
      <Hero text="Meet the Architects of Innovation" title="Our Exceptional Team" bg="./images/team.png" />
      <Layout>
        <div className={styles.teamBody}>
          <Image src="./images/team1.png" width={1280} height={933} alt="Team 1" />
          <div className={styles.teamCards}>
            <div>
              <h2>Wale Y. Oriola, ESQ</h2>
              <p>Advisor</p>
            </div>
            <Link href={`/bio/Wale`}>View Profile</Link>
          </div>
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default Team;
