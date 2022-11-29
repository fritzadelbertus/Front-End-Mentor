import SolutionCard from '../SolutionCard/SolutionCard'
import Solutions from '../Solutions/solutions'
import './SolutionList.scss'

function SolutionList() {
  return (
    <div className="SolutionList">
      <h2>Solutions</h2>
      <div>
        {
          Solutions.map((solution) => (
            <SolutionCard 
              key={solution.title}
              title={solution.title}
              path={solution.path} />
          ))
        }
      </div>
      
    </div>
  ) 
}

export default SolutionList
