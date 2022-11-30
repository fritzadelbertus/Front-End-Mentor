import Solutions from '../../solutions'
import './SolutionList.scss'

type SolutionCardType = {
  title: string,
  difficulty: string,
  repo: string,
  page: string,
}

function SolutionCard( {title, difficulty, repo, page}: SolutionCardType ) {
  return (
    <div className="SolutionCard">
      <h3>{title}</h3>
      <p>{difficulty}</p>
      <div className='link-box'>
        <a href={repo}><i className="fa-brands fa-github"></i></a>
        <a href={page}><i className="fa-solid fa-globe"></i></a>
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
              page={solution.page} />
          ))
        }
      </div>
      
    </div>
  ) 
}

export default SolutionList
