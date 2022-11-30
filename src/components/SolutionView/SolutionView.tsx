
type SolutionViewType = {
  solution: JSX.Element
}

function SolutionView( {solution}: SolutionViewType) {
  return (
    <div className="SolutionView">
      {solution}
    </div>
  )
}

export default SolutionView