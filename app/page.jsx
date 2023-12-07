import Link from "next/link";

import styles from "@/app/ui/Homepage.module.css";

const Homepage = () => {
  return (
    <div className={styles.bigContainer}>
      <div className={styles.container}>
        <h1 className={styles.h1}>Welcome</h1>

        <Link href={"/login?callbackUrl=https%3A%2F%2Fnextadminmega.vercel.app%2Flogin"}>
          <button className={styles.button}>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
