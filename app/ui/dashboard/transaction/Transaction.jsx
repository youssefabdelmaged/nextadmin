import styles from "../transaction/transaction.module.css";
import Image from "next/image";
const Transaction = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr >
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
         
        <tr>
            <td  className={styles.user}   >
              <Image
              alt="noavatar"
                src="/noavatar.png"
                width={50}
                height={50}
                className={styles.userImage}
              />
              Mega
            </td>
            <td>
              {" "}
              <span className={` ${ styles.status} ${styles.pending}`}>Pending</span>{" "}
            </td>
            <td>14.11.2002</td>
            <td>50$</td>
          </tr>

          <tr>
            <td  className={styles.user}  >
              <Image
                            alt="noavatar"

                src="/noavatar.png"
                width={50}
                height={50}
                className={styles.userImage}
              />
              Mega
            </td>
            <td>
              {" "}
              <span className={` ${ styles.status} ${styles.done}`}>Done</span>{" "}
            </td>
            <td>14.11.2002</td>
            <td>50$</td>
          </tr>

          <tr>
            <td className={styles.user}  >
              <Image
                            alt="noavatar"

                src="/noavatar.png"
                width={50}
                height={50}
                className={styles.userImage}
              />
              Mega
            </td>
            <td  >
              {" "}
              <span className={` ${ styles.status} ${styles.cancelled}`}>Cancelled</span>{" "}
            </td>
            <td>14.11.2002</td>
            <td>50$</td>
          </tr>

          <tr>
            <td className={styles.user} >
              <Image
                            alt="noavatar"

                src="/noavatar.png"
                width={50}
                height={50}
                className={styles.userImage}
              />
              Mega
            </td>
            <td >
              {" "}
              <span className={` ${ styles.status} ${styles.pending}`}>Pending</span>{" "}
            </td>
            <td>14.11.2002</td>
            <td>50$</td>
          </tr>

          <tr>
            <td className={styles.user} >
              <Image
                            alt="noavatar"

                src="/noavatar.png"
                width={50}
                height={50}
                className={styles.userImage}
              />
              Mega
            </td>
            <td>
              {" "}
              <span className={` ${ styles.status} ${styles.done}`}>Done</span>{" "}
            </td>
            <td>14.11.2002</td>
            <td>50$</td>
          </tr>
          
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;
