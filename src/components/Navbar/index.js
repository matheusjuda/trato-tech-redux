import styles from './Navbar.module.scss'
import { ReactComponent as Logo } from '../../assets/logo.svg';
import classNames from 'classnames';
import {
  BsCart, BsCartCheckFill
} from 'react-icons/bs';
import Busca from 'components/Busca';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const iconeProps = {
  color: 'white',
  size: 24
};

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <nav className={styles.nav}>
      <Logo className={styles.logo} onClick={() => navigate('/')} />
      <div className={styles.links}>
        <Link to='/' className={classNames(styles.link, {
          [styles.selected]: location.pathname === '/'
        })}>
          Pagina Inicial
        </Link>
      </div>
      <div className={styles.busca}>
        <Busca />
      </div>
      <div className={styles.icones}>
        <Link to='/carrinho'>
          {location.pathname === '/carrinho'
            ? <BsCartCheckFill {...iconeProps} />
            : <BsCart {...iconeProps} />
          }
        </Link>

      </div>
    </nav>
  )
}

export default Navbar