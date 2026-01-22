import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
  name: "total",
  initialState: {},
  reducers: {
    incrementar(state, action) {
      const { index, nome } = action.payload;
      if (!state[index]) {
        state[index] = {
          index,
          quantidade: 0,
          nome
        };
      }
      state[index].quantidade += 1;
    },
    
    reduzir(state, action) {
      const { index } = action.payload;

      if (state[index] && state[index].quantidade > 1) {
        state[index].quantidade -= 1;
      } else {
        delete state[index]
      }
    },

    zerar(state, action) {
      const { index } = action.payload

      if (state[index] && state[index].quantidade > 0) {
        delete state[index]
      }
    }
  }
});

export const { incrementar, reduzir, zerar } = slice.actions;
export default slice.reducer;