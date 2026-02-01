import { Provider } from 'react-redux'
import './App.css'
import Cardapio from './pages/Cardapio/Cardapio'
import Home from './pages/Home/Home'
import Menu from './components/Menu/Menu'
import store from './store/ConfigureStore'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <Provider store={store}>
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cardapio" element={<Cardapio />} />
      </Routes>
    </Provider>
  )
}

export default App
