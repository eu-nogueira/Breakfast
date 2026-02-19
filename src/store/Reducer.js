import { createSlice } from "@reduxjs/toolkit";
import getLocalStorage from "./GetLocalStorage";
import toLocalStorage from "./toLocalStorage";


const slice = createSlice({
  name: "total",
  initialState: {
      cakes: getLocalStorage('cakes', {})
  },
  reducers: {
    incrementar: {
    reducer: (state, action) => {
      const { index, nome } = action.payload;
      if (!state.cakes[index]) {
        state.cakes[index] = {
          index,
          quantidade: 0,
          nome
        };
      }
      state.cakes[index].quantidade += 1;
      },
    prepare(payload) {
      return toLocalStorage(payload)
    }
    },
    
    reduzir: {
    reducer: (state, action) => {
      const { index } = action.payload;
      if (state.cakes[index] && state.cakes[index].quantidade > 1) {
        state.cakes[index].quantidade -= 1;
      } else {
        delete state.cakes[index]
      }
    },
    prepare(payload) {
      return toLocalStorage(payload)
    }
  },

    zerar: {
    reducer: (state, action) => {
      const { index } = action.payload

      if (state.cakes[index] && state.cakes[index].quantidade > 0) {
        delete state.cakes[index]
      }
    },
    prepare(payload) {
      return toLocalStorage(payload)
    }
  }
  }
});

export const { incrementar, reduzir, zerar } = slice.actions;
export default slice.reducer;