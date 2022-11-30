import Dashboard from './components/Dashboard/Dashboard'
import SolutionView from './components/SolutionView/SolutionView'
import Solutions from './Solutions/solutions'
import { Route, Routes } from 'react-router-dom'
import './App.scss'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Dashboard />} />
        {
          Solutions.map((solutionRoute) => (
            <Route 
              key={solutionRoute.title} 
              path={`/solution/${solutionRoute.path}`} 
              element={<SolutionView solution={solutionRoute.element} />} />
          ))
        }
      </Routes>
    </div>
  )
}

export default App
