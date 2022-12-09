import {Switch, Route} from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Trending from './components/Trending'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/fsdf" component={Home} />
    <ProtectedRoute exact path="/trending" component={Trending} />
  </Switch>
)

export default App
