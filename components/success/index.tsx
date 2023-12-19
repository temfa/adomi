import React from "react";
import styles from "./styles.module.css";
import Button from "../button";
import Check from "@/svgs/check";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { clearPartnerPage } from "@/reduxtoolkit/slice/partnerPage";
import { clearStartupPage } from "@/reduxtoolkit/slice/startupPage";

const Success = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <div className={styles.successContainer}>
      <div className={styles.successWrapper}>
        <div className={styles.first}>
          <div className={styles.second}>
            <div className={styles.third}>
              <Check />
            </div>
          </div>
        </div>
        <div className={styles.successText}>
          <h2>Submission successful!</h2>
          <p>Thank you for expressing your interest in partnering with Adomi Capital & Advisory. Our team will review your application and reach out to you shortly.</p>
        </div>
      </div>
      <div
        onClick={() => {
          dispatch(clearPartnerPage());
          dispatch(clearStartupPage());
          if (dispatch(clearPartnerPage()) && dispatch(clearStartupPage())) {
            router.push("/");
          }
        }}>
        <Button buttonText="Close" active={true} type="Primary" />
      </div>
    </div>
  );
};

export default Success;
