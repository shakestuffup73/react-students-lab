import Score from "../Score/Score"

const Student = (props) => {
  return (
    <>
      <h1>{props.student.name}{props.student.bio}</h1>
      {props.student.scores.map((score, idx) => 
        <Score 
          key={idx}
          score={score}
          studentName={props.student.name}
        />
      )}
    </>
  )
}

export default Student