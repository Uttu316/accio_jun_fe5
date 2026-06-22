import styles from "./usercard.module.css";
import {
  FaMale as MaleIcon,
  FaFemale as FemaleIcon,
  FaCity,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const UserCard = (props) => {
  const { user } = props;
  return (
    <div className={styles.card_container}>
      <img className={styles.avatar} src={user.avatar} alt={user.name} />
      <h3 className={styles.name}>{user.name}</h3>
      <div className={styles.age_gender}>
        <span className={styles.badge}>{user.age} yrs</span>
        <span
          className={
            user.gender === "male" ? styles.male_icon : styles.female_icon
          }
        >
          {user.gender === "male" ? <MaleIcon /> : <FemaleIcon />}
        </span>
      </div>
      <p className={styles.info_row}>
        <FaCity />
        {user.city}
      </p>
      <p className={styles.info_row}>
        <IoIosMail />
        {user.email}
      </p>
    </div>
  );
};

export default UserCard;
