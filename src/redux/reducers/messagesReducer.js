import { createSlice } from "@reduxjs/toolkit"


const messagesSlice = createSlice({
  name: 'messages',
  initialState: {
    list: []
  },
  reducers: {
    setMessages(state, { payload }) {
      const { messages } = payload
      state.list = messages
    }
  }
})

export const messagesActions = messagesSlice.actions

export const selectMessages = (state) => {
  return state.messages.list
}

export const selectFilteredMessages = (state) => {
  const copy = [...state.messages.list]
  return copy.sort((a, b) => {
    if (a.created > b.created) {
      return 1
    } else if (a.created < b.created) {
      return -1
    }
    return 0
  })
}

export default messagesSlice.reducer
