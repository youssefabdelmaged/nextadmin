import Image from 'next/image'
import styles from '../../../ui/dashboard/products/singleproduct/singleproduct.module.css'
import { fetchsingleProduct } from '@/app/lib/data'
import { updateProduct } from '@/app/lib/actions'
const SingleProductPage = async ({params}) => {
  const {id} =params
  const product = await fetchsingleProduct(id)
  
  return (
    <div className={styles.container}>
        <div className={styles.infocontainer}>
            <div className={styles.productimage}>
                <Image alt='noprooduct' src={product.img || '/noproduct.jpg'} fill/>
            </div>
          {product.title}
        </div>
        <div className={styles.formContainer}>
            <form action={updateProduct} className={styles.form}>
<input type="hidden" name='id' value={product.id} />
           <label>Title</label>
           <input type="text" name="Title" placeholder={product.title} />
           <label>Price</label>
           <input type="number" name="email" placeholder={product.price} />
          
           <label>Stock</label>
           <input type="number" name="Stock" placeholder={product.stock} />
           <label>Color</label>
           <input type="text" name="Color" placeholder={product.color} />
           <label>Size</label>
           <input type="text" name="Size" placeholder={product.size} />
          
        
        <label htmlFor="">Describtion</label>
         <textarea name="desc" id="" cols="30" rows="10" placeholder={product.desc}></textarea>
           <button>Update</button>
            </form>
        </div>
    </div>
  )
}

export default SingleProductPage