import { AddIcon } from "@/public/icons/AddIcon";
import styles from "./Main.module.scss";
import { TextField } from "@/app/features/compare/components/TextField";

export const Main = () => {
  return (
    <div className={styles.mainContent}>
      <div className={styles.toolsCont}>
        <div>
          <select>
            <option>ქართული</option>
          </select>
          <span>
            <input type="checkbox" /> ფორმატის შენარჩუნება
          </span>
        </div>
        <div className={styles.addButton}>
          <AddIcon />
          <span>ახლის დამატება</span>
        </div>
      </div>
      <hr />
      <TextField />
    </div>
  );
};
