import { addUser } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/users/adduser/adduser.module.css";
const Add = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form} action={addUser}>
        <input type="text" name="userName" required placeholder="Username" />
        <input type="email" placeholder="Email" name="email" />

        <input type="password" placeholder="Password" name="password" />
        <input type="number" placeholder="Phone" name="phone" />

        <select name="isAdmin" id="admin">
          <option value={false}>Is Admin?</option>
          <option value={true}>Yes</option>
          <option  value={false}>No</option>
        </select>

        <select name="isActive" id="active">
          <option value={false}>Is Active?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

        <textarea
          name="address"
          id="address"
          rows="16"
          placeholder="Address"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Add;
