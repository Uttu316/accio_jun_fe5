import ListItem from "./listItem";
import styles from "./userList.module.css";

const UserList = ({ userList, onEdit, onDelete }) => {
  return (
    <div className={styles.container}>
      {userList.length === 0 && (
        <p className={styles.emptyState}>No feedback available</p>
      )}
      {userList.length !== 0 && (
        <div className={styles.list}>
          {userList.map((item, index) => (
            <ListItem
              onEdit={onEdit}
              index={index}
              onDelete={onDelete}
              userDetails={item}
              key={item.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default UserList;
