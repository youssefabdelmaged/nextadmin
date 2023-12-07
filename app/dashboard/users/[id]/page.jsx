import Image from 'next/image'
import styles from '../../../ui/dashboard/users/singleUser/singleUser.module.css'
import { fetchUser } from '@/app/lib/data'
import { updateUser } from '@/app/lib/actions'
const SingleUserPage = async ({params}) => {
  const {id} = params
  const user =await fetchUser(id)

  return (
    <div className={styles.container}>
        <div className={styles.infocontainer}>
            <div className={styles.userImage}>
                <Image alt='noavatar' src={user.img ||'/noavatar.png'} fill/>
            </div>
           {user.userName}
        </div>
        <div className={styles.formContainer}>
            <form action={updateUser} className={styles.form}>
<input type="hidden"  value={user.id} name='id' />
           <label>Username</label>
           <input type="text" name="userName" placeholder={user.userName} />
           <label>Email</label>
           <input type="email" name="email" placeholder={user.email} />
           <label>Password</label>
           <input type="password" name="password" placeholder={user.password} />
           <label>Phone</label>
           <input type="number" name="number" placeholder={user.phone} />
           <label>Address</label>
           <textarea type="text" name='address' placeholder={user.address} />
           <label htmlFor="isAdmin">isAdmin?</label>
           <select name="isAdmin" id="isAdmin" >
            <option value={true} selected={user.isAdmin}>Yes</option>
            <option value={false} selected={!user.isAdmin}>No</option>
           </select>
           <label htmlFor="isActive">isActive?</label>
           <select name="isActive" id="isActive" >
            <option value={true} selected={user.isActive}>Yes</option>
            <option value={false}  selected={!user.isActive}>No</option>
           </select>
           <button>Update</button>
            </form>
        </div>
    </div>
  )
}

export default SingleUserPage