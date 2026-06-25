import { useState } from "react";
import UserForm from "./userForm";
import UserList from "./userList";

const UserManagement = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    role: "",
    feedback: "",
  }); // store form values in this state for each user
  const [userList, setUserList] = useState([]);

  const onSave = (e) => {
    e.preventDefault();
    const userItem = {
      id: Date.now(), //timestamp of that moment
      ...userData,
    };
    setUserList((curr) => [...curr, userItem]); //store form data in list
    setUserData({
      name: "",
      email: "",
      feedback: "",
      role: "",
    }); //reset the form
  };
  return (
    <div>
      <h1>User Management</h1>
      <UserForm onSave={onSave} userData={userData} setUserData={setUserData} />
      <UserList userList={userList} />
    </div>
  );
};
export default UserManagement;
