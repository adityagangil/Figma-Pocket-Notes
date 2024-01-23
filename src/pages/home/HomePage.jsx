import React from "react";
import styles from "./homepage.module.css";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Landing } from "../../components/landing/Landing";
import { SingleGroup } from "../../components/singleGroup/SingleGroup";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.left_container}>
        <Sidebar />
      </div>
      {/* <div className={styles.right_container}>
        <Landing />
      </div> */}

      <div className={styles.right_container}>
        <SingleGroup />
      </div>
    </div>
  );
}
