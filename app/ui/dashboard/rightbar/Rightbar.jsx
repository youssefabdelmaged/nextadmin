
import styles from './rightbar.module.css'
import Image from 'next/image'
import { MdPlayCircleFilled } from 'react-icons/md'
const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image alt='astronaut' className={styles.bg}  src='/astronaut.png'  fill sizes='1000px' />
        </div>
        <div className={styles.texts}>
          <span className={styles.notificatin}>🔥Available now </span>
          <h3 className={styles.title}>How to use the new version of the admin dashboard</h3>
          <span className={styles.subtitles}>Takes 4 minutes to learn</span>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, nesciunt.</p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image alt='rocket' className={styles.bg}  src='/astronaut.png' sizes='1000px' fill />
        </div>
        <div className={styles.texts}>
          <span className={styles.notificatin}>🚀Available now </span>
          <h3 className={styles.title}>How to use the new version of the admin dashboard</h3>
          <span className={styles.subtitles}>Takes 4 minutes to learn</span>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, nesciunt.</p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
    </div>
  )
}

export default Rightbar