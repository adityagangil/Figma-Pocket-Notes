import styles from "./sidebar.module.css";
import { useDisclosure } from "@mantine/hooks";
import { CreateGroupModal } from "../createGroupModal/CreateGroupModal";
import { useSelector, useDispatch } from "react-redux";
import { changeCurrentActiveGroup } from "../../redux/noteSlice";

export const Sidebar = ({ active, setActive }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const dispatch = useDispatch();

  const { currentActiveGroup, groups } = useSelector((note) => note.note);

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Pocket Notes</h1>
      </div>

      <div className={styles.group_container}>
        {groups?.map((group) => (
          <div
            key={group.id}
            className={styles.single_group}
            style={{
              background:
                currentActiveGroup === group.id && "rgb(232, 232, 232)",
            }}
            onClick={() => {
              setActive(true);
              dispatch(changeCurrentActiveGroup(group.id));
            }}
          >
            <div
              className={styles.img_circle}
              style={{ backgroundColor: group.groupColor }}
            >
              <p>{group.groupShortName}</p>
            </div>

            <h4>{group.groupName}</h4>
          </div>
        ))}
      </div>

      <div onClick={open} className={styles.create_group}>
        +
      </div>

      <CreateGroupModal opened={opened} open={open} close={close} />
    </div>
  );
};
