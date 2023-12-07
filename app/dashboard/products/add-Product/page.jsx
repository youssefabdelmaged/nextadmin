import { addProduct } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/products/addproduct/addproduct.module.css";
const Add = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form} action={addProduct}>
        <input type="text" name="title" required placeholder="Title" />
       
        <select name="cat" id="cat">
          <option value="general">Choose a Category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input type="number" placeholder="Price" name="price" />
        <input type="number" placeholder="Stock" name="stock" />
        <input type="text" placeholder="Color" name="color" />
        <input type="text" placeholder="Size" name="size" />
        <textarea name="desc" id="desc"  rows="16" placeholder="Description"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Add;
