import { useParams } from 'react-router-dom'
import Solutions from './solutions'

type SolutionViewType = {
  solution: JSX.Element
}

function SolutionView( ) {
  const { path } = useParams();
  const solution = Solutions.find((item) => item.path === path)
  return (
    <>
      {
        solution === undefined ? <h1>No Solution</h1> : solution.element
      }
    </>
  )
}

export default SolutionView