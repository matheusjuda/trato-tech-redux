import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    mudarCarrinho: (state, { payload }) => {
      const temItem = state.some(item => item.id === payload);
      if (!temItem) return [ //Criando um novo estado com o carrinho modificado 
        ...state,
        {
          id: payload,
          quantidade: 1
        }
      ]
      return state.filter(item => item.id !== payload);
    }
  }
});


export const { mudarCarrinho } = carrinhoSlice.actions;

export default carrinhoSlice.reducer;
//Se eu quiser mudar o estado (remover ou adicionar carrinho) = Immer (Imutabilidade )
// https://redux-toolkit.js.org/usage/immer-reducers