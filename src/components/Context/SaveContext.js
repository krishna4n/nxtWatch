import React from 'react'

const SaveContext = React.createContext({
  savedList: [],
  updateSavedList: () => {},
  darkTheme: false,
  updateTheme: () => {},
})

export default SaveContext
