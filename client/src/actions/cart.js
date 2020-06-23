import { ADD_VALUE, MINUS_VALUE, INIT_VALUE } from './actionTypes'

// action creator動作建立器
// 命名一般同action type，改為小駝峰寫法
// 一般也是一個action type寫一個
// 直接導出即可
// payload = { value: 1 }
export const addValue = (payload) => {
  console.log('原本 - addValue')
  return { type: ADD_VALUE, payload }
}

export const addValueAsync = (payload) => {
  // 回傳一個函式，第一傳入傳數得到dispatch，第二是getState，這兩個都是函式
  return async function updateTotalToSever(dispatch, getState) {
    // getState方法可以得到目前redux裡的狀態是什麼
    // https://redux.js.org/api/store#getstate
    console.log(getState())

    const newTotal = { total: getState().counter + payload.value }

    // 注意資料格式要設定，伺服器才知道是json格式
    const request = new Request('http://localhost:5555/counter/1', {
      method: 'PUT',
      body: JSON.stringify(newTotal),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    console.log(JSON.stringify(newTotal))

    const response = await fetch(request)
    const data = await response.json()

    console.log('伺服器回傳的json資料', data)
    // 要等驗証過，再設定資料(簡單的直接設定)

    dispatch(addValue(payload))
  }
}

export const minusValue = (payload) => {
  return { type: MINUS_VALUE, payload }
}

export const initValue = (payload) => {
  return { type: INIT_VALUE, payload }
}

export const initValueAsync = (payload) => {
  return async function getTotalFromServer(dispatch) {
    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request('http://localhost:5555/counter/1', {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    console.log(data)
    // 設定資料
    console.log('延後 - initValueAsync')

    dispatch(initValue({ value: data.total }))
  }
}
