const UserList = ({ userList }) => {
  return (
    <div>
      {userList.length === 0 && <p>No feedback available</p>}
      {userList.length !== 0 && (
        <div>
          {userList.map((item, index) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </div>
      )}
    </div>
  );
};
export default UserList;
