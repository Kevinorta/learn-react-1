import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";

export const StudentDetailPage = () =>{
    const { id } = useParams();
    const [student,setStudent] = useState(null);

    useEffect(() => {
    const getStudent = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/students/${id}`);
    const data = await response.json();
    setStudent(data);
  };
  getStudent();
});
    return <div>{student ? student.firstName : "Loading..."}</div>
};