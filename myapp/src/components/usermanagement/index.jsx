import { useState } from "react";
import UserForm from "./userForm";
import UserList from "./userList";
import styles from "./usermanagement.module.css";

const UserManagement = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    role: "",
    feedback: "",
  });
  const [userList, setUserList] = useState([]);

  const [editItem, setEditItem] = useState(null); //store the edit item index

  const onSave = (e) => {
    e.preventDefault();
    const userItem = {
      id: Date.now(),
      ...userData,
    };
    setUserList((curr) => [...curr, userItem]);
    setUserData({
      name: "",
      email: "",
      feedback: "",
      role: "",
    });
  };

  const onDelete = (id) => {
    const remainingItems = userList.filter((i) => i.id !== id); //pick remaining items other than given id
    setUserList(remainingItems);
  };
  const onEdit = (item, index) => {
    setEditItem(index);
    setUserData(item);
  };
  const onUpdate = () => {
    const updatedList = [...userList]; //copy current state

    updatedList[editItem] = userData; // replace the userdata on stored index

    setUserList(updatedList); // set state with latest data

    setUserData({
      name: "",
      email: "",
      role: "",
      feedback: "",
    }); //clear the form

    setEditItem(null); //reset the stored index
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>User Management</h1>
      <UserForm
        editItem={editItem}
        onSave={onSave}
        userData={userData}
        setUserData={setUserData}
        onUpdate={onUpdate}
      />
      <UserList onEdit={onEdit} onDelete={onDelete} userList={userList} />
    </div>
  );
};
export default UserManagement;
