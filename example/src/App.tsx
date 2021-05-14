import React from 'react'

import { useLocalStorage } from 'just-hook'
import 'just-hook/dist/index.css'

const App = () => {
  const [data, set, remove] = useLocalStorage('keys', 'antonioLopes')

  console.log(data, set, remove)
  return <h1>Antonio Lopes</h1>
}

export default App
