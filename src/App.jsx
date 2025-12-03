import { Provider } from 'react-redux'
import './App.css'
import Cardapio from './components/Cardapio/Cardapio'
import Home from './pages/Home'
import store from './store/ConfigureStore'

function App() {

  return (
    <Provider store={store}>
      < Home />
      < Cardapio />
    </Provider>
  )
}

export default App
