import { useSelector } from 'react-redux'

import cesta from '../../assets/cesta.png'
import { RootState } from '../../store'
import { paraReal } from '../Produto'
import * as S from './styles'

const Header = () => {
  const itensNoCarrinho = useSelector(
    (state: RootState) => state.carrinho.itens
  )
  const favoritos = useSelector((state: RootState) => state.favoritos.itens)

  const valorTotal = itensNoCarrinho.reduce(
    (total, item) => total + item.preco,
    0
  )

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} alt="Carrinho" />
        <span>
          {itensNoCarrinho.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
