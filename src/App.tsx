import Dashboard from './components/Dashboard/Dashboard'
import SolutionView from './Solutions/SolutionView'
import { Route, Routes } from 'react-router-dom'
import './App.scss'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/solution/:path' element={<SolutionView />} />
      </Routes>
    </div>
  )
}

export default App
