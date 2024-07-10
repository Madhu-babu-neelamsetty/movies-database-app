import {BrowserRouter, Switch, Router} from 'react-router-dom'
import Header from './components/Header'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch></Switch>
  </BrowserRouter>
)

export default App
