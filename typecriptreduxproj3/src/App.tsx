// import { useState } from 'react'
import {store} from './Redux/store'
import { Provider } from 'react-redux'

import './App.css'
import Home from './components/Home'

function App() {
 // const [count, setCount] = useState(0)

  return (
    <>
    <Provider store={store}>


    <div>
        <h1>something</h1>
        <Home/>
        </div>
    </Provider>
     
    </>
  )
}

export default App
