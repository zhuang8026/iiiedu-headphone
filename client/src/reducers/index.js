import cart from './cart'
// 記得要匯入combineReducers
import { combineReducers } from 'redux'

// 合併所有的reducers成一個大的reducer
// 傳入值為物件，用物件的es6的簡寫法
export const rootReducer = combineReducers({
  cart,
})
