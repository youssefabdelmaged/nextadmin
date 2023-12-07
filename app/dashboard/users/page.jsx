
import styles from "@/app/ui/dashboard/users/users.module.css";
import Image from "next/image";
import Search from "@/app/ui/dashboard/search/Search";
import { IoMdAdd } from "react-icons/io";
import { LuView } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import Link from "next/link";
import Pagination from "@/app/ui/dashboard/pagination/Pagination";
import { fetchUsers } from "@/app/lib/data";
import { DeleteUser } from "@/app/lib/actions";

const UsersPage = async ({ searchParams }) => {
  const q = searchParams.q || "";
  const page = searchParams.page || 1;
  const { count, users } = await fetchUsers(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="User" />

        <Link href="users/add-User">
          <button className={styles.addnew}>
            <IoMdAdd />
            Add New
          </button>
        </Link>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created at</td>
            <td>Role</td>
            <td>Status</td>
            <td className={styles.center}>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.length ? (
            users.map((user) => (
              <tr key={user.id}>
                <td className={styles.user}>
                  <Image
                    alt="noavatar"
                    src={user.img || "/noavatar.png"}
                    width={50}
                    height={50}
                    className={styles.userImage}
                  />
                  {user.userName}
                </td>
                <td>{user.email}</td>
                <td>{user.createdAt?.toString().slice(4, 16)}</td>
                <td>{user.isAdmin ? "Admin" : "Client"}</td>
                <td>{user.isActive ? "Active" : "Passive"}</td>

                <td>
                  <div className={styles.buttons}>
                    <Link href={`users/${user.id}`}>
                      <button className={`${styles.button} ${styles.view}`}>
                        <LuView />
                        View
                      </button>
                    </Link>
                    <form action={DeleteUser}>
                      <input type="hidden" name="id" value={user.id} />
                      <button className={`${styles.button} ${styles.delete}`}>
                        <MdDelete />
                        Delete
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className={styles.notfound} colSpan={5}>
                not found
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default UsersPage;
