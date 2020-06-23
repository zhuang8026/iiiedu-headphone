// counter自己一個元件
// action = { type: 'ADD_VALUE', payload: { value: 2} }
// 通常會預設導出，因為這個檔案裡有可能還有其它的程式碼
// 然後一個reducer分不同的檔案寫
export default function cart(state = 0, action) {
  switch (action.type) {
    case 'ADD_VALUE':
      return state + action.payload.value
    case 'MINUS_VALUE':
      return state - action.payload.value
    case 'INIT_VALUE':
      return action.payload.value
    default:
      return state
  }
}
