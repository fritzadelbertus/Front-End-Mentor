import { Link } from 'react-router-dom'
import './SolutionCard.scss'

type SolutionCardType = {
  title: string,
  path: string,
}

function SolutionCard( {title, path}: SolutionCardType ) {
  return (
    <div className="SolutionCard">
      <Link to={`/solution/${path}`}>{title}</Link>
      <h3>{title}</h3>
    </div>
  ) 
}

export default SolutionCard
