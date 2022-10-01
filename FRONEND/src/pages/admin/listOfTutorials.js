import {useState,useEffect} from 'react'
// import {Link, useNavigate} from 'react-router-dom'
import axios  from 'axios';
import config from '../../config'

const ScheduleList =()=>{

  const [MyTutorial, setMyTutorial] = useState([])

  // const navigate = useNavigate()

  useEffect(() => {
    // load all the services created by user
    tutlist()
  }, [])
  
  //get all services
  const tutlist=()=>{
    //create axios api to send data to server
    const url = config.serverURL + `api/admin/getSchedule`;

    axios.get(url).
    then((response)=>{
      const res = response.data
      console.log("result",res)
      setMySchedule(res)
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
  const addSchedule=(uid)=>{
    const url = config.serverURL + `api/admin/schedule`;
    axios.post(url).
    then((response)=>{
      console.log(response)
      sclist();
    })
  }
  return(
    <div className='container'>
    <h1 style = {{textAlign: 'center', color:'navy', marginTop:20}} >List Of Tutorials</h1>
    <table className='table table-striped' style={{marginTop:50}}>
            <thead>
              <tr>
                <th>Id</th>
                <th>sub Name</th>
                <th>Teacher Name</th>
                <th>Email</th>
                <th> date</th>
                <th>meeting id</th>
                <th>meeting password</th>
              </tr>
            </thead>
            <tbody>
              {MySchedule.map((sc) => {
                return (
                  <tr>
                    <td>{sc.id}</td>
                    <td>{sc.subjectName}</td>
                    <td>{sc.teacherName}</td>
                    <td>{sc.email}</td>
                    <td>{sc.date}</td>
                    <td>{sc.meetingId}</td>
                    <td>{sc.meetingPassword}</td>
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

const styles = {
  h3: {
    textAlign: 'center',
    margin: 20,
  },
  button: {
    marginRight: 10,
  },
}
export default ScheduleList