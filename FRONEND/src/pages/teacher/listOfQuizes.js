import { useState, useEffect } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
import config from '../../config'
import axios from 'axios'

const QuizList = () => {
  const [MyQuiz, setMyQuiz] = useState([])

//   const navigate = useNavigate()

  useEffect(() => {
    // load all the services created by user
    qzlist()
  }, [])

  //get all services
  const qzlist = () => {
    //create axios api to send data to server
    const url =  config.serverURL + `api/student/showQuizes`

    axios.get(url).then((response) => {
      const res = response.data
      console.log('result', res)
      setMyQuiz(res)
    })
  }

  //delete any services
  //   const deleteuser=(uid)=>{
  //     const url = `http://localhost:8080/api/admin/deleteUser/${uid}`;
  //     axios.delete(url,uid).
  //     then((response)=>{
  //       console.log(response)
  //       userlist();
  //     })
  //   }

  return (
    <div className='container'>
      <h1 style={{ textAlign: 'center', color: 'navy', marginTop: 20 }}>
        List of quizes
      </h1>
      <table className='table table-striped' style={{ marginTop: 50 }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>quiz Name</th>
            <th>description </th>

            <th> que no</th>
            <th>teacher id</th>
            <th>student id</th>
          </tr>
        </thead>
        <tbody>
          {MyQuiz.map((sc) => {
            return (
              <tr>
                <td>{sc.id}</td>
                <td>{sc.quizName}</td>
                <td>{sc.description}</td>

                <td>{sc.queNo}</td>
                <td>{sc.teacher}</td>
                <td>{sc.student}</td>
                <td>
                  {/* <Link to={'/updateuser/'+`${users.id}`}>
                      <button
                        onClick={() => updateuser(users.id)}
                        style={styles.button}
                        className='btn btn-sm btn-success'>
                        Edit
                      </button> */}
                  {/* </Link> */}
                  {/* <button
                        onClick={() => deleteuser(users.id)}
                        style={styles.button}
                        className='btn btn-sm btn-danger'>
                        Delete
                      </button> */}
                </td>
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
export default QuizList