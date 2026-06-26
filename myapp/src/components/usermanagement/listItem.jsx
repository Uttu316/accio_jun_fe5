import { MdModeEdit, MdDelete } from "react-icons/md";
import styles from "./listItem.module.css";

const ListItem = ({ userDetails, onEdit, index, onDelete }) => {
  const { id, name, email, feedback, role } = userDetails;
  return (
    <div className={styles.card}>
      <h1 className={styles.name}>{name}</h1>
      <p className={styles.role}>{role}</p>
      <p className={styles.email}>{email}</p>
      <p className={styles.feedback}>{feedback}</p>
      <div className={styles.actions}>
        <button
          onClick={() => onEdit(userDetails, index)}
          className={`${styles.iconBtn} ${styles.editBtn}`}
        >
          <MdModeEdit />
        </button>
        <button
          onClick={() => onDelete(id)}
          className={`${styles.iconBtn} ${styles.deleteBtn}`}
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default ListItem;
