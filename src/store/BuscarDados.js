import { createSlice } from "@reduxjs/toolkit";

const buscarDados = createSlice({
    name: 'buscarDados',
    initialState: {
        loading: false,
        data: null,
        error: null
    },
    reducers: {
        fetchStarted(state) {
            state.loading = true
            state.error = null
        },
        fetchSuccess(state, action) {
            state.loading = false
            state.data = action.payload
            state.error = null
        },
        fetchError(state, action) {
            state.loading = false
            state.data = false
            state.error = action.payload
        }
    }
})

export const buscarDadosThunk = () => async (dispatch) => {
    try {
        dispatch(fetchStarted())

        const apiUrl = import.meta.env.VITE_API_URL
        console.log(apiUrl)
        const response = await fetch(`${apiUrl}/search.php?s=cake`)
        const dados = await response.json()

        dispatch(fetchSuccess(dados))
    } catch (err) {
        console.error(err)
        dispatch(fetchError(err.message))
    }
}

export const { fetchStarted, fetchSuccess, fetchError } = buscarDados.actions
export default buscarDados.reducer