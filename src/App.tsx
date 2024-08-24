import { Route, Routes } from 'react-router-dom'
import Chat from './pages/Chat/Chat'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Chat/>} index/>
    </Routes>
     
  )
}

export default App
