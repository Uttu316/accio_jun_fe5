const UserForm = ({ userData, setUserData, onSave }) => {
  const onInput = (e) => {
    const { id, value } = e.target;
    setUserData((curr) => ({ ...curr, [id]: value }));
  };
  return (
    <form>
      <div>
        <label htmlFor="name">Username</label>
        <input
          value={userData.name}
          onChange={onInput}
          name="name"
          id="name"
          placeholder="Enter user name"
        />
      </div>
      <div>
        <label htmlFor="role">Role</label>
        <select value={userData.role} onChange={onInput} id="role" name="role">
          <option disabled selected>
            Select Role
          </option>
          <option value="admin">Owner</option>
          <option value="staff">Staff</option>
          <option value="guest">Guest</option>
        </select>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          value={userData.email}
          onChange={onInput}
          type="email"
          placeholder="Enter user email"
          id="email"
          name="email"
        />
      </div>
      <div>
        <label htmlFor="feedback">Feedback</label>
        <textarea
          value={userData.feedback}
          onChange={onInput}
          id="feedback"
          name="feedback"
          placeholder="Enter your feedback..."
        ></textarea>
      </div>
      <div>
        <button onClick={onSave}>Save</button>
      </div>
    </form>
  );
};

export default UserForm;
