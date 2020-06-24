import React from 'react'
import ReactDOM from 'react-dom'
import './assets/scss/index.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'

// 第一步 匯入createStore
import { createStore, applyMiddleware, compose } from 'redux'

// 這是react-redux要綁定使用的最上層元件
import { Provider } from 'react-redux'

//導入rootReducer
//從reducers目錄匯入，相當於導入'./reducers/index'
import { rootReducer } from './reducers'
import thunk from 'redux-thunk'

// 第三步 由rootReducer建立store
// 如果不需要搭配redux開發工具
// 使用 const store = createStore(rootReducer) 即可
// const store = createStore(
//   rootReducer /* preloadedState, */,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

// 套用middleware的修改
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
)

ReactDOM.render(
  <React.StrictMode>
    {/* 最上層的react與redux綁定用的元件，屬性即為上面建立的store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
