import { AddIcon } from "@/public/icons/AddIcon";
import styles from "./Main.module.scss";
import { TextField } from "@/app/features/compare/components/TextField";
import { AaIcon } from "@/public/icons/AaIcon";
import { DropDownIcon } from "@/public/icons/DropDownIcon";

export const Main = () => {
  return (
    <div className={styles.mainContent}>
      <div className={styles.chosenPage}>
        <div>
          <AaIcon color={"blue"} />
          <span>ტექსტის შედარება</span>
          <DropDownIcon />
        </div>
        <div className={styles.hr}></div>
      </div>
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
      <div className={styles.hr}></div>
      <TextField />
    </div>
  );
};
