import { USERS } from "../../data/user";
import UserCard from "../usercard";
import styles from "./userlist.module.css";
import studentsImg from "../../assets/students.svg";

const UserList = () => {
  return (
    <div className={styles.userList}>
      <h2 className={styles.heading}>Students</h2>
      <img className={styles.studentsImg} src={studentsImg} />
      <div className={styles.list}>
        {USERS.map((item, index) => (
          <UserCard user={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
export default UserList;
