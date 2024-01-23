import styles from "./singleGroup.module.css";
import sendIcon from "../../assets/icons/send-icon.svg";
import backIcon from "../../assets/icons/back-arrow.svg";
import { SingleNote } from "../singleNote/SingleNote";

export const SingleGroup = ({ active, setActive }) => {
  return (
    <div className={styles.container}>
      <div className={styles.groupName}>
        <div className={styles.backArrow} onClick={() => setActive(false)}>
          <img src={backIcon} alt="" />
        </div>
        <div className={styles.img_circle}>
          <p>MN</p>
        </div>

        <h4>My Notes</h4>
      </div>

      <div className={styles.allNotes}>
        {Array(5)
          .fill(null)
          .map((note, _) => (
            <SingleNote key={_} />
          ))}
      </div>

      <div className={styles.message_container}>
        <textarea
          className={styles.message}
          rows="6"
          placeholder="Enter your text here..."
        />

        <img src={sendIcon} alt="Send" className={styles.sendIcon} />
      </div>
    </div>
  );
};
