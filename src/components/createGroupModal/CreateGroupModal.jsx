import { useState } from "react";
import styles from "./createGroupModal.module.css";
import { Modal } from "@mantine/core";

export const CreateGroupModal = ({ opened, open, close }) => {
  const colors = [
    "#B38BFA",
    "#FF79F2",
    "#43E6FC",
    "#F19576",
    "#0047FF",
    "#6691FF",
  ];

  const [grpTitle, setGrpTitle] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [error, setError] = useState("");

  const handleCreateGroup = (e) => {
    setError("");
    e.preventDefault();

    if (!selectedColor) {
      setError("Please select a color!");
    }

    console.log(selectedColor);
    console.log(grpTitle);
  };

  return (
    <Modal opened={opened} onClose={close} title="Create New Group" centered>
      <form className={styles.modal} onSubmit={handleCreateGroup}>
        <div className={styles.modal_input}>
          <label htmlFor="grpName">Group Name</label>
          <input
            type="text"
            id="grpName"
            placeholder="Enter Group Name"
            required
            name="grpName"
            onChange={(e) => setGrpTitle(e.target.value)}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          <div className={styles.modal_input}>
            <label htmlFor="color">Choose Color</label>
            <div className={styles.colors}>
              {colors.map((color, _) => (
                <div
                  key={_}
                  className={styles.modal_input_color}
                  style={{
                    backgroundColor: color,
                    border: selectedColor === color && "2px solid black",
                  }}
                  onClick={() => setSelectedColor(color)}
                ></div>
              ))}
            </div>
          </div>
          {error && <p className={styles.error}>{error}</p>}
        </div>

        <div className={styles.modal_btn_div}>
          <button type="submit" className={styles.modalBtn}>
            Create
          </button>
        </div>
      </form>
    </Modal>
  );
};
