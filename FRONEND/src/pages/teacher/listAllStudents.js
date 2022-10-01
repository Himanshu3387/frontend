import { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import config from '../../config'

const StudentList = () => {
  const [MyStudents, setMyStudents] = useState([])

  // const navigate = useNavigate()

  useEffect(() => {
    // load all the services created by user
    studentlist()
  }, [])

  //get all services
  const studentlist = () => {
    //create axios api to send data to server
    const url = config.serverURL +`/teacher/getAllStudents`

    axios.get(url).then((response) => {
      const res = response.data
      console.log('result', res)
      setMyStudents(res)
    })
  }

  //delete any services

  return (
    <div className='container'>
      <h1 style={{ textAlign: 'center', color: 'navy', marginTop: 20 }}>
        Student List
      </h1>
      <table className='table table-striped' style={{ marginTop: 50 }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>DOB</th>
          </tr>
        </thead>
        <tbody>
          {MyStudents.map((users) => {
            return (
              <tr>
                <td>{users.id}</td>
                <td>{users.firstName}</td>
                <td>{users.lastName}</td>
                <td>{users.email}</td>
                <td>{users.dob}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

// const styles = {
//   h3: {
//     textAlign: 'center',
//     margin: 20,
//   },
//   button: {
//     marginRight: 10,
//   },
// }
export default StudentList
