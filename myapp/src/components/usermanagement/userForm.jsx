import styles from "./userForm.module.css";

const UserForm = ({ userData, setUserData, editItem, onUpdate, onSave }) => {
  const onInput = (e) => {
    const { id, value } = e.target;
    setUserData((curr) => ({ ...curr, [id]: value }));
  };
  return (
    <form className={styles.form}>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="name">
          Username
        </label>
        <input
          className={styles.input}
          value={userData.name}
          onChange={onInput}
          name="name"
          id="name"
          placeholder="Enter user name"
        />
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="role">
          Role
        </label>
        <select
          className={styles.select}
          value={userData.role}
          onChange={onInput}
          id="role"
          name="role"
        >
          <option disabled value="">
            Select Role
          </option>
          <option value="admin">Owner</option>
          <option value="staff">Staff</option>
          <option value="guest">Guest</option>
        </select>
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input
          className={styles.input}
          value={userData.email}
          onChange={onInput}
          type="email"
          placeholder="Enter user email"
          id="email"
          name="email"
        />
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="feedback">
          Feedback
        </label>
        <textarea
          className={styles.textarea}
          value={userData.feedback}
          onChange={onInput}
          id="feedback"
          name="feedback"
          placeholder="Enter your feedback..."
        ></textarea>
      </div>
      <div>
        {editItem === null && (
          <button className={styles.submitBtn} onClick={onSave}>
            Save
          </button>
        )}
        {editItem !== null && (
          <button className={styles.submitBtn} onClick={onUpdate}>
            Update
          </button>
        )}
      </div>
    </form>
  );
};

export default UserForm;
