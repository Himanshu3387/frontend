// import { StyleSheet, Text, View } from 'react-native'
import React from "react";
import { useState } from 'react';
import { useEffect } from 'react';
import config from '../../config'
import  axios  from 'axios';
//import Images from "../../images/blog01.jpg";
export default function ShowAllCourses() {
  const [Course,SetCourse]=useState([])


  useEffect(()=>{
    courselist();
  
  },[])
  
  const courselist=()=>{
    const url = config.serverURL + `api/student/getAllCourses`

    axios.get(url).then(response=>{
      const result = response.data
      console.log(result)

      SetCourse(result)
    })
  }

  // const changestatus=(id)=>{
  // console.log(id)

  // const url =`http://localhost:8080/api/admin/orders/updatestatus/${id}`
  
  // const body= {

  // }
  // axios.put(url,body).then(response=>{
  //   const result = response.data
  //   console.log(result)
  // })
  // orderlist();
  // }

  return (
    <div className="container">
      <h1 style={{ textAlign: "center", color: "navy" }}>Courses List</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Course Name</th>
            <th>Course Discription</th>
          </tr>
        </thead>
        <tbody>
          {Course.map((course) => {
            return (
              <tr>
                <td>{course.id}</td>
                <td>{course.courseName}</td>
                <td>{course.description}</td>
                {/* <td><img>src="blog01.jpg"</img></td> */}
                <td>
                
                  {/* <button 
                  onClick={() => changestatus(order.id)}
                    
                    style={styles.button}
                    className="btn btn-sm btn-success"
                  >
                    Change Status
                  </button> */}
                  
                  {/* <button
                    onClick={() => deletservice(MyService.id)}
                    style={styles.button}
                    className="btn btn-sm btn-danger"
                  >
                    Delete
                  </button> */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// const styles = {
//   h3: {
//     textAlign: "center",
//     margin: 20,
//   },
//   button: {
//     marginRight: 10,
//   },
// };
