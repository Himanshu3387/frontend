import {useState,useEffect} from 'react'
// import {Link, useNavigate} from 'react-router-dom'
import axios  from 'axios';
import config from '../../config'

const ShowAllUsers =()=>{

  const [MyUsers, setMyUsers] = useState([])

  // const navigate = useNavigate()

  useEffect(() => {
    // load all the services created by user
    showallusers()
  }, [])
  
  //get all services
  const showallusers=()=>{
    //create axios api to send data to server
    const url = config.serverURL + `api/admin/getAllUsers`;

    axios.get(url).then((response)=>{
      const res = response.data
      console.log("result",res)
      setMyUsers(res)
    })

   
  }


 
  return(
    <div className='container'>
    <h1 style = {{textAlign: 'center', color:'navy', marginTop:20}} >User List</h1>
    <table className='table table-striped' style={{marginTop:50}}>
            <thead>
              <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>DOB</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {MyUsers.map((users) => {
                return (
                  <tr>
                    <td>{users.id}</td>
                    <td>{users.firstName}</td>
                    <td>{users.lastName}</td>
                    <td>{users.email}</td>
                    <td>{users.dob}</td>
                    <td>{users.role}</td>
                   
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
export default  ShowAllUsers
