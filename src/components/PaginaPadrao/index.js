import Navbar from 'components/Navbar'
import styles from './PaginaPadrao.module.scss'
import { Outlet } from 'react-router-dom'

export default function PaginaPadrao() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={sytles['container-outlet']}>
        <Outlet />
      </div>
    </div>
  )
}