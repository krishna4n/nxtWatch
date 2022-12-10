import React from 'react'

const SaveContext = React.createContext({
  savedList: [],
  updateSavedList: () => {},
})

export default SaveContext
