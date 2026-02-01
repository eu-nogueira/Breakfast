import { Provider } from 'react-redux'
import './App.css'
import Cardapio from './components/Cardapio/Cardapio'
import Menu from './components/Menu/Menu'
import store from './store/ConfigureStore'
import Home from './pages/Home'

function App() {

  return (
    <Provider store={store}>
      < Menu />
      < Home />
    </Provider>
  )
}

export default App
