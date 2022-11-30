import { Link } from 'react-router-dom'
import Solutions from '../../Solutions/solutions'
import './SolutionList.scss'
type SolutionCardType = {
  title: string,
  difficulty: string,
  repo: string,
  path: string,
}

function SolutionCard( {title, difficulty, repo, path}: SolutionCardType ) {
  return (
    <div className="SolutionCard">
      <h3>{title}</h3>
      <p>{difficulty}</p>
      <div className='link-box'>
        <a href={repo}><i className="fa-brands fa-github"></i></a>
        <Link to={`/solution/${path}`}><i className="fa-solid fa-globe"></i></Link>
      </div>
    </div>
  ) 
}

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
              difficulty={solution.difficulty}
              repo={solution.repo}
              path={solution.path} />
          ))
        }
      </div>
      
    </div>
  ) 
}

export default SolutionList
