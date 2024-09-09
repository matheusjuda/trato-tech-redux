import { useDispatch, useSelector } from 'react-redux'
import styles from './Busca.module.scss'
import { mudarBusca, resetarBusca } from 'store/reducers/busca';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function Busca() {
  const busca = useSelector(state => state.busca);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(resetarBusca());
  }, [location.pathname, dispatch]) //Reseta busca quando mudar de pagina

  console.log(location)

  return (
    <div className={styles.busca}>
      <input
        className={styles.input}
        placeholder='O que você procura?'
        value={busca}
        onChange={evento => dispatch(mudarBusca(evento.target.value))} // disparando busca
      />
    </div>
  )
}