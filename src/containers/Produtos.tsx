import { useDispatch, useSelector } from 'react-redux'

import Produto from '../components/Produto'
import { Produto as ProdutoType } from '../models/Produto'
import { useGetProdutosQuery } from '../services/api'
import { AppDispatch, RootState } from '../store'
import { adicionar } from '../store/reducers/carrinho'
import { alternarFavorito } from '../store/reducers/favoritos'

import * as S from './styles'

const ProdutosComponent = () => {
  const dispatch = useDispatch<AppDispatch>()
  const favoritos = useSelector((state: RootState) => state.favoritos.itens)
  const carrinho = useSelector((state: RootState) => state.carrinho.itens)
  const { data: produtos = [], isLoading, isError } = useGetProdutosQuery()

  const produtoEstaNosFavoritos = (produto: ProdutoType) =>
    favoritos.some((favorito) => favorito.id === produto.id)

  const adicionarAoCarrinho = (produto: ProdutoType) => {
    if (carrinho.some((item) => item.id === produto.id)) {
      alert('Item já adicionado')
      return
    }

    dispatch(adicionar(produto))
  }

  const favoritar = (produto: ProdutoType) => {
    dispatch(alternarFavorito(produto))
  }

  if (isLoading) return <p>Carregando produtos...</p>
  if (isError) return <p>Não foi possível carregar os produtos.</p>

  return (
    <S.Produtos>
      {produtos.map((produto) => (
        <Produto
          estaNosFavoritos={produtoEstaNosFavoritos(produto)}
          key={produto.id}
          produto={produto}
          favoritar={favoritar}
          aoComprar={adicionarAoCarrinho}
        />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
