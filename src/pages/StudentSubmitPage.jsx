// import { useState } from 'react';
import { useForm } from "react-hook-form";

export const StudentSubmitPage = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
        
          await fetch(`${import.meta.env.VITE_API_URL}/students`, {
            body: JSON.stringify({
              
              firstName: data.firstName,
              lastName: data.lastName,
              major: data.major,
              school: data.school,
              grade:data.grade,
            }),
            headers: {
              'content-type': 'application/json',
            },
            method: 'POST',
          });
        };

  // const [grade, setGrade] = useState('');


  
  
  // 1. add onChange handlers to each input to update the state
  // 2. add onSubmit handler to the form to submit the data

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("firstName")} placeholder="First Name" />
      <input type="text" {...register("lastName")} placeholder="Last Name" />
      <input type="text" {...register("major")} placeholder="Major" />
      <input type="text" {...register("school")} placeholder="School" />
      <select  {...register("grade")} placeholder="Grade" >
         <option value="none" selected disabled hidden>Select an Option</option>
         <option value="FRESHMAN">Freshman</option>
         <option value="SOPHMORE">Sophmore</option>
         <option value="JUNIOR">Junior</option>
         <option value="SENIOR">Senior</option>
        </select>
      <button type="submit" >Submit</button>
    </form>
  );
};