import { createSlice } from "@reduxjs/toolkit";

const Modal = createSlice({
    name: 'modal',
    initialState: false,
    reducers: {
        openModalRedux(state) {
            return state = true
        },
        closeModalRedux(state) {
            return state = false
        }
    }
})

export const { openModalRedux, closeModalRedux } = Modal.actions
export default Modal.reducer