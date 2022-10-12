import Student from "../Student/Student";

const StudentList = (props) => {
  return ( 
    <>
      <h1>This is the StudentList Component</h1>
      {props.students.map(student => 
        <Student 
          key={student.name}  
          student={student}
        />
      )}
    </>
  );
}

export default StudentList;