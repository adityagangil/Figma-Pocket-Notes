import styles from "./singleGroup.module.css";
import sendIcon from "../../assets/icons/send-icon.svg";

export const SingleGroup = () => {
  return (
    <div className={styles.container}>
      <div className={styles.groupName}>
        <div className={styles.img_circle}>
          <p>MN</p>
        </div>

        <h4>My Notes</h4>
      </div>

      <div>Notes</div>

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
