import Card from "../ui/dashboard/cards/Card";
import Chart from "../ui/dashboard/chart/Chart";
import styles from "../ui/dashboard/dashboard.module.css";
import Rightbar from "../ui/dashboard/rightbar/Rightbar";
import Transaction from "../ui/dashboard/transaction/Transaction";
const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.card}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transaction/>
        <Chart/>
      </div>
      <div className={styles.rightbar}>
        <Rightbar/>
      </div>
    </div>
  );
};

export default Dashboard;
