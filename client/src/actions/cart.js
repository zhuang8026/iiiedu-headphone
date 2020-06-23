import { PAYMENT_VALUE, DELIVERY_VALUE } from './actionTypes'

// action creator動作建立器
// 命名一般同action type，改為小駝峰寫法
// 一般也是一個action type寫一個
// 直接導出即可
// payload = { value: 1 }

export const paymentValue = (payload) => {
  return { type: PAYMENT_VALUE, payload }
}

export const deliveryValue = (payload) => {
  return { type: DELIVERY_VALUE, payload }
}
