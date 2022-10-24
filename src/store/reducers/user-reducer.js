import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userInfo: null,
  interests:[],
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload
    },
    setInterests: (state, action) => {
      state.interests = action.payload
    },
  },
})
// Action creators are generated for each case reducer function
export const { 
  setUserInfo,
  // demoAsync
 } = userSlice.actions

// export const demoAsyncFun = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(demoAsync(amount))
//   }, 1000)
// }
export default userSlice.reducer