import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Home'
const App = () => {

const [color] = useState("#eb8d04")
document.body.style.backgroundColor = color

return (
  <Routes>
    <Route path="/" element={<Home/>} />
  </Routes>
)
}

export default App