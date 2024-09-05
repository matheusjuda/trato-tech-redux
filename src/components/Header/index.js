import styles from './Header.module.scss';
import TituloComImagem from './TituloComImagem';
import TituloSemImagem from './TituloSemImagem';

export default function Header({ titulo, descricao, className = '', imagem }) {
  return (
    <header className={styles.header}>
      {titulo && !imagem && //Se tiver titulo e não tiver imagem renderiza:
        <TituloSemImagem
          titulo={titulo}
          descricao={descricao}
        />
      }
      {titulo && imagem && //Se tiver titulo e imagem renderiza:
        <TituloComImagem
          titulo={titulo}
          descricao={descricao}
          imagem={imagem}
          className={className}
        />
      }
    </header>
  )
}