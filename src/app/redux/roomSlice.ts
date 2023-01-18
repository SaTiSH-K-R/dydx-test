import { createSlice } from "@reduxjs/toolkit"

type Data = {
  roomsInfo: Array<any> | null,
  isLoading: Boolean
}

const initialState: Data = {
  roomsInfo: null,
  isLoading: false
}

export const roomSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    getRoomsInfo: (state) => {
      state.isLoading = true
    },
    setRoomsInfo: (state, roomData) => {
      state.roomsInfo = roomData.payload
      state.isLoading = false
    }
  }
})

export const { getRoomsInfo, setRoomsInfo } = roomSlice.actions

export default roomSlice.reducer