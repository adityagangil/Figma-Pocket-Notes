import styles from "./singleNote.module.css";

export const SingleNote = () => {
  return (
    <div className={styles.container}>
      <div className={styles.actual_note}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Pulvinar sapien et
        ligula ullamcorper malesuada proin libero nunc consequat. Viverra
        suspendisse potenti nullam ac tortor vitae purus. Egestas tellus rutrum
        tellus pellentesque eu tincidunt tortor aliquam nulla. Rutrum quisque
        non tellus orci ac auctor augue mauris augue. Integer malesuada nunc vel
        risus commodo. Urna neque viverra justo nec ultrices dui sapien.
        Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum.
        Enim eu turpis egestas pretium aenean pharetra magna. Sed egestas
        egestas fringilla phasellus faucibus scelerisque eleifend donec pretium.
        c enim diam vulputate ut.
      </div>

      <div className={styles.date_time_area}>
        <span>9 Mar 2023</span>
        <span>●</span>
        <span>10:10 AM</span>
      </div>
    </div>
  );
};
