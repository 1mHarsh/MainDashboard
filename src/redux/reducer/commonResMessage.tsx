import { createSlice } from "@reduxjs/toolkit"

const initialState: any = {
    message: {}
};

const messageSlice = createSlice({
    name: 'message',
    initialState: initialState,
    reducers: {
        setMessage: (state, action) => {
            state.message = action?.payload
        }
    },
})

export const { setMessage } = messageSlice.actions

export default messageSlice.reducer

export const selectMessage = (state: any) => state.message.message
