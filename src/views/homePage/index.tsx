import Homepage from '@/assets/homepage.png'
import styles from './index.module.scss'
//导航为空时自动跳转
const HomePage = () => {
  return (
    <div className={styles.root}>
      <img src={Homepage}/>
    </div>
  )
}

export default HomePage