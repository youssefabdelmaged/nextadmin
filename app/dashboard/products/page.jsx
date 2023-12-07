
import { DeleteProduct } from "@/app/lib/actions";
import { fetchProduct } from "@/app/lib/data";
import Pagination from "@/app/ui/dashboard/pagination/Pagination";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/search/Search";
import Image from "next/image";
import Link from "next/link";
import { IoMdAdd } from "react-icons/io";
import { LuView } from "react-icons/lu";
import { MdDelete } from "react-icons/md";


const ProductsPage = async ({ searchParams }) => {
  const q = searchParams.q || "";
  const page = searchParams.page || 1;
  const { count, products } = await fetchProduct(q, page);
  

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Product" />

        <Link href="products/add-Product">
          <button className={styles.addnew}>
            <IoMdAdd />
            Add New
          </button>
        </Link>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Color</td>
            <td>Stock</td>
            <td className={styles.center}>Action</td>
          </tr>
        </thead>
        <tbody>
          {products.length ? (
            products.map((product) => (
              <tr key={product.id}>
                <td className={styles.product}>
                  <Image
                    alt="product"
                    src={product.img || "/noproduct.jpg"}
                    width={50}
                    height={50}
                    className={styles.productImage}
                  />
                  {product.title}
                </td>
                <td>{product.desc}</td>
                <td>{product.price} $</td>
                <td>{product.color}</td>
                <td>{product.stock}</td>
                <td>
                  <div className={styles.buttons}>
                    <Link href={`products/${product.id}`}>
                      <button className={`${styles.button} ${styles.view}`}>
                        <LuView />
                        View
                      </button>
                    </Link>
                    <form action={DeleteProduct}>
                      <input type="hidden" name="id" value={product.id} />
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

export default ProductsPage;
