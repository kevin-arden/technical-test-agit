const { createSlice } = require("@reduxjs/toolkit");

const initialUserState = [
  { firstname: 'Andi', lastname: 'Andi', username: "admin", email: "email@email.com", password: "admin", currentpassword: "admin", expireddate: "2022-12-13T17:00:00.000Z", groupaccess: "Group 1" },
  { firstname: 'Budi', lastname: 'Michael', username: "123", email: "email@email.com", password: "123", currentpassword: "123", expireddate: "2022-12-14T17:00:00.000Z", groupaccess: "Group 1" },
  { firstname: 'Caca', lastname: 'Michael', username: "username2", email: "email@email.com", password: "987234", currentpassword: "987234", expireddate: "2022-12-15T17:00:00.000Z", groupaccess: "Group 1" },
  { firstname: 'Deni', lastname: 'Michael', username: "username3", email: "email@email.com", password: "987234", currentpassword: "987234", expireddate: "2022-12-16T17:00:00.000Z", groupaccess: "Group 1" },
  { firstname: 'Ekky', lastname: 'Michael', username: "username4", email: "email@email.com", password: "987234", currentpassword: "987234", expireddate: "2022-12-17T17:00:00.000Z", groupaccess: "Group 1" },
  { firstname: 'Farah', lastname: 'Michael', username: "username5", email: "email@email.com", password: "987234", currentpassword: "987234", expireddate: "2022-12-18T17:00:00.000Z", groupaccess: "Group 1" },
  { firstname: 'Hilman', lastname: 'Michael', username: "username6", email: "email@email.com", password: "987234", currentpassword: "987234", expireddate: "2022-12-19T17:00:00.000Z", groupaccess: "Group 1" },
  { firstname: 'Imam', lastname: 'Michael', username: "username7", email: "email@email.com", password: "987234", currentpassword: "987234", expireddate: "2022-12-20T17:00:00.000Z", groupaccess: "Group 1" },
  { firstname: 'Joni', lastname: 'Michael', username: "username8", email: "email@email.com", password: "987234", currentpassword: "987234", expireddate: "2022-12-21T17:00:00.000Z", groupaccess: "Group 1" },
]

const slice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    user: initialUserState,
  },
  reducers: {
    login: (state) => {
      state.isLoggedIn = true
    },
    logout: (state) => {
      state.isLoggedIn = false
    },
    addUser: (state, action) => {
      state.user.push(action.payload)
    },
    deleteUser: (state, action) => {
      state.user = state.user.filter(item => item.username !== action.payload.username)
    },
    updateUser: (state, action) => {
      state.user = state.user.filter(item => item.username !== action.payload.username)
      state.user.push(action.payload)
    }
  }
})


export const { login, logout, addUser, deleteUser, updateUser } = slice.actions;
export default slice