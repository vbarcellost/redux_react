import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../models/Produto'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = { itens: [] }

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produtoJaAdicionado = state.itens.some(
        (item) => item.id === action.payload.id
      )

      if (!produtoJaAdicionado) state.itens.push(action.payload)
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
