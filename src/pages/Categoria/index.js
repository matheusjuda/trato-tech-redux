import Header from 'components/Header';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styles from './Categoria.module.scss'
import Item from 'components/Item';

export default function Categoria() {
  const { nomeCategoria } = useParams();
  const { categoria, itens } = useSelector(state => ({ // Podemos pegar varios estados de uma só vez (destruct)
    categoria: state.categorias.find(categoria => categoria.id === nomeCategoria), // Pegando o nome da categoria q é o nome para mandar como rota 
    itens: state.itens.filter(item => item.categoria === nomeCategoria), // Filtrando itens para cada categorias  (pagina)
  }));

  return (
    <div>
      <Header
        titulo={categoria.nome}
        descricao={categoria.descricao}
        imagem={categoria.header}
      />
      <div className={styles.itens}>
        {itens?.map(item => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}