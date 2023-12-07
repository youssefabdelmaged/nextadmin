"use client";

import { authenticate } from "@/app/lib/actions";
import styles from "./loginform.module.css";
import { useFormState } from "react-dom";

const LoginForm = () => {
 const[err , formaction]=useFormState(authenticate , undefined)

  return (
    <div>
      <form action={formaction} className={styles.form}>
        <h1>Login</h1>
        <input type="text" placeholder="UserName" name="userName" />
        <input type="password" placeholder="Password" name="password" />
        <button>Login</button>
        {err && err}
      </form>
    </div>
  );
};

export default LoginForm;
