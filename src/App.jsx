import { useState, useEffect } from "react";
import "./App.css";
import { StudentInfo } from "./studentInfo";
import { Link } from "react-router-dom";



function App() {
  // the point of state is that is is dynamic and can be changed
  const [students, setStudents] = useState([]); // init state as the studentList
  useEffect(() => { 
    // runs when component renders
    const getStudents = async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/students`);
      const data = await response.json();
      setStudents(data);
    };
    getStudents();
  }, []);
  return (
    //<React.Fragment> Are Thrown out also <> </>
    <div>
      <h1>Welcome to CTP</h1>
      <p>List of Students</p>
      {students.map((student) => (
        <Link to={`students/${student.sId}`} key={student.sId} >
          <StudentInfo {...student} key={student.sId} />
        </Link>
      ))}
      <Link to="/students/submit">Submit a new Student</Link>
      <button
        onClick={async () => {
          // use setter function when you want to use the previous state
          await fetch(`${import.meta.env.VITE_API_URL}/students`, {
            body: JSON.stringify({
              sId: '12345466756w',
              firstName: 'AJ',
              lastName: 'JA',
              major: 'Philosophy',
              school: 'Lehman',
              grade: 'FRESHMAN'
            }),
            headers: {
              'content-type': 'application/json',
            },
            method: 'POST',
          });
        }}
      >
        Add a new student
      </button>
      <button
        onClick={() => {
          // setStudents((oldStudentList) => oldStudentList.slice(0, -1));
          setStudents(students.slice(0, -1));
        }}
      >
        Remove Last Student
      </button>
    </div>
  );
}

export default App;
