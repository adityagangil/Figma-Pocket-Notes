import styles from "./singleGroup.module.css";
import sendIcon from "../../assets/icons/send-icon.svg";
import sendColorIcon from "../../assets/icons/send-colorful-icon.svg";
import backIcon from "../../assets/icons/back-arrow.svg";
import { SingleNote } from "../singleNote/SingleNote";
import { useSelector, useDispatch } from "react-redux";
import { changeCurrentActiveGroup, createNote } from "../../redux/noteSlice";
import { useState } from "react";

export const SingleGroup = ({ active, setActive }) => {
  const { currentActiveGroup, groups } = useSelector((note) => note.note);
  const dispatch = useDispatch();

  const newGrp = groups.filter((grp) => grp.id === currentActiveGroup);

  const [content, setContent] = useState("");

  const handleCreateNote = () => {
    if (!content) {
      return;
    }

    dispatch(createNote({ content, groupId: newGrp[0].id }));
    setContent("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.groupName}>
        <div
          className={styles.backArrow}
          onClick={() => {
            setActive(false);
            dispatch(changeCurrentActiveGroup(null));
          }}
        >
          <img src={backIcon} alt="" />
        </div>
        <div
          className={styles.img_circle}
          style={{ backgroundColor: newGrp[0].groupColor }}
        >
          <p>{newGrp[0].groupShortName}</p>
        </div>

        <h4>{newGrp[0].groupName}</h4>
      </div>

      <div className={styles.allNotes}>
        {newGrp[0].notes?.length === 0 && <p>No Notes to display!</p>}

        {newGrp[0].notes?.map((note) => (
          <SingleNote key={note.id} note={note} groupId={newGrp[0].id} />
        ))}
      </div>

      <form className={styles.message_container}>
        <textarea
          className={styles.message}
          rows="6"
          placeholder="Enter your text here..."
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />

        {content ? (
          <img
            onClick={handleCreateNote}
            src={sendColorIcon}
            alt="Send"
            className={styles.sendIcon}
          />
        ) : (
          <img src={sendIcon} alt="Send" className={styles.sendIcon} />
        )}
      </form>
    </div>
  );
};
