import React, { useState } from "react";
import styles from "./styles.module.css";
import Cloud from "@/svgs/cloud";
import Document from "@/svgs/document";
import CheckBox from "@/svgs/checkbox";
import Button from "../button";

const Upload = ({ placeholder }: { placeholder: string }) => {
  type Selected = {
    [key: string]: any;
  };
  const [file, setFile] = useState<Selected>({});
  const [uploaded, setUploaded] = useState("Not Uploaded");
  const bytesToMegaBytes = (bytes: any) => (bytes / (1024 * 1024)).toFixed(2);
  return uploaded === "Uploading" ? (
    <div className={styles.uploadingWrapper}>
      <div className={styles.uploadingContainer}>
        <Document />
        <div>
          <h3>{file?.name}</h3>
          <p>{bytesToMegaBytes(file?.size)} MB</p>
        </div>
      </div>
    </div>
  ) : uploaded === "Uploaded" ? (
    <div className={styles.uploadedContainer}>
      <div className={styles.uploadedWrapper}>
        <div className={styles.uploadingContainer}>
          <Cloud />
          <div>
            <h3>{file?.name}</h3>
            <p>{bytesToMegaBytes(file?.size)} MB</p>
          </div>
        </div>
        <div className={styles.circle1}>
          <CheckBox />
        </div>
      </div>
      <label>
        <input type="file" />
        Replace
      </label>
    </div>
  ) : (
    <div className={styles.uploadContainer}>
      <p>{placeholder}</p>
      <div className={styles.uploadWrapper}>
        <div className={styles.circle}>
          <Cloud />
        </div>
        <div className={styles.uploadCont}>
          <label>
            <input
              type="file"
              onChange={(e: any) => {
                setFile(e.target.files[0]);
                setUploaded("Uploaded");
              }}
            />
            Click to upload
          </label>
          <p>JPEG, PNG, PDF (Max file 2mb)</p>
        </div>
      </div>
    </div>
  );
};

export default Upload;
