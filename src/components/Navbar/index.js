import styles from './Navbar.module.scss'
import { ReactComponent as Logo } from '../../assets/logo.svg';
import classNames from 'classnames';
import {
  BsCart, BsCartCheckFill
} from 'react-icons/bs';
import Busca from 'components/Busca';

const iconeProps = {
  color: 'white',
  size: 24
};

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Logo className={styles.logo} />
      <div className={styles.links}>
        <a href='/' className={classNames(styles.link, {
          [styles.selected]: window.location.pathname === '/'
        })}>
          Pagina Inicial
        </a>
      </div>
      <div className={styles.busca}>
        <Busca />
      </div>
      <div className={styles.icones}>
        <a href='/carrinho'>
          {window.location.pathname === '/carrinho'
            ? <BsCartCheckFill {...iconeProps} />
            : <BsCart {...iconeProps} />
          }
        </a>

      </div>
    </nav>
  )
}

export default Navbar