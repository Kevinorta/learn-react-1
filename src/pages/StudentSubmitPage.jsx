import { useState } from 'react';

export const StudentSubmitPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [major, setMajor] = useState('');
  const [school, setSchool] = useState('');
  const [grade, setGrade] = useState('');


  
  
  // 1. add onChange handlers to each input to update the state
  // 2. add onSubmit handler to the form to submit the data

  return (
    <form>
      <input type="text" onChange={(e)=> setFirstName(e.target.value)} placeholder="First Name" />
      <input type="text" onChange={(e)=> setLastName(e.target.value)} placeholder="Last Name" />
      <input type="text" onChange={(e)=> setMajor(e.target.value)} placeholder="Major" />
      <input type="text" onChange={(e)=> setSchool(e.target.value)} placeholder="School" />
      <select  onChange={(e)=> setGrade(e.target.value)} placeholder="Grade" >
         <option value="none" selected disabled hidden>Select an Option</option>
         <option value="FRESHMAN">Freshman</option>
         <option value="SOPHMORE">Sophmore</option>
         <option value="JUNIOR">Junior</option>
         <option value="SENIOR">Senior</option>
        </select>
      <button type="button" onClick = {async () => {
        
          await fetch('http://localhost:3000/students', {
            body: JSON.stringify({
              
              firstName: firstName,
              lastName: lastName,
              major: major,
              school: school,
              grade:grade,
            }),
            headers: {
              'content-type': 'application/json',
            },
            method: 'POST',
          });
        }}>Submit</button>
    </form>
  );
};