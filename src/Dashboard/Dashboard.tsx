import SolutionList from '../SolutionList/SolutionList';
import './Dashboard.scss'

function Dashboard() {
  return (
    <div className="Dashboard">
      <header>
        <h1>Front-End Mentor Solutions</h1>
      </header>
      <div className="Dasboard-content">
        <SolutionList />
      </div>
    </div>
  )
}

export default Dashboard;
