import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Trending from './components/Trending'
import Game from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import SaveContext from './components/Context/SaveContext'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'

class App extends Component {
  state = {savedList: [], darkTheme: false}

  updateSavedList = savedData => {
    this.setState(prevState => ({
      savedList: [...prevState.savedList, savedData],
    }))
  }

  updateTheme = () => {
    console.log('theme clicked')
    this.setState(prevState => ({
      darkTheme: !prevState.darkTheme,
    }))
  }

  render() {
    const {savedList, darkTheme} = this.state
    console.log('darkTheme', darkTheme)
    return (
      <SaveContext.Provider
        value={{
          savedList,
          darkTheme,
          updateSavedList: this.updateSavedList,
          updateTheme: this.updateTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Game} />
          <ProtectedRoute path="/videos/:id" component={VideoItemDetails} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route exact path="/bad-path" component={NotFound} />
          <Redirect to="/bad-path" />
        </Switch>
      </SaveContext.Provider>
    )
  }
}
export default App
