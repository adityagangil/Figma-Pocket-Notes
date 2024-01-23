import React, { useEffect, useState } from "react";
import styles from "./homepage.module.css";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Landing } from "../../components/landing/Landing";
import { SingleGroup } from "../../components/singleGroup/SingleGroup";
import { useSelector } from "react-redux";

export default function HomePage() {
  const [active, setActive] = useState(false);
  const [windowWith, setWindowWith] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setWindowWith(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const a = useSelector((note) => note.note);
  console.log(a);

  return (
    <div className={styles.container}>
      <div
        className={styles.left_container}
        style={{ display: active && windowWith < 720 && "none" }}
      >
        <Sidebar active={active} setActive={setActive} />
      </div>

      {!active ? (
        <div className={styles.right_container}>
          <Landing />
        </div>
      ) : (
        (active || windowWith > 719) && (
          <div
            className={styles.right_container}
            style={{ display: active && "block" }}
          >
            <SingleGroup active={active} setActive={setActive} />
          </div>
        )
      )}
    </div>
  );
}
