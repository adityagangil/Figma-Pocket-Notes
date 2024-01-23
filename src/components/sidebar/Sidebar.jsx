import styles from "./sidebar.module.css";
import { useDisclosure } from "@mantine/hooks";
import { CreateGroupModal } from "../createGroupModal/CreateGroupModal";

export const Sidebar = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Pocket Notes</h1>
      </div>

      <div className={styles.group_container}>
        <div className={styles.single_group}>
          <div className={styles.img_circle}>
            <p>MN</p>
          </div>

          <h4>My Notes</h4>
        </div>

        <div className={styles.single_group}>
          <div className={styles.img_circle}>
            <p>MN</p>
          </div>

          <h4>My Notes</h4>
        </div>
      </div>

      <div onClick={open} className={styles.create_group}>
        +
      </div>

      <CreateGroupModal opened={opened} open={open} close={close} />
    </div>
  );
};
