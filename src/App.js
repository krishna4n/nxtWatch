import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Trending from './components/Trending'
import Game from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import SaveContext from './components/Context/SaveContext'
import SavedVideos from './components/SavedVideos'

class App extends Component {
  state = {savedList: []}

  updateSavedList = savedData => {
    console.log('app', savedData)
    this.setState(prevState => ({
      savedList: [...prevState.savedList, savedData],
    }))
  }

  render() {
    const {savedList} = this.state
    return (
      <SaveContext.Provider
        value={{
          savedList,
          updateSavedList: this.updateSavedList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Game} />
          <ProtectedRoute path="/videos/:id" component={VideoItemDetails} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
        </Switch>
      </SaveContext.Provider>
    )
  }
}
export default App
