// import { useState, useEffect } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import axios from 'axios'

// const UserList = () => {
//   const [MyUsers, setMyUsers] = useState([])

//   const navigate = useNavigate()

//   useEffect(() => {
//     // load all the services created by user
//     userlist()
//   }, [])

//   //get all services
//   const userlist = () => {
//     //create axios api to send data to server
//     const url = `http://localhost:8080/api/admin/getAllUsers`

//     axios.get(url).then((response) => {
//       const res = response.data
//       console.log('result', res)
//       setMyUsers(res)
//     })
//   }

//   //delete any services
//   const deleteuser = (uid) => {
//     const url = `http://localhost:8080/api/admin/deleteUser/${uid}`
//     axios.delete(url, uid).then((response) => {
//       console.log(response)
//       userlist()
//     })
//   }
//   const updateuser = (uid) => {
//     const url = `http://localhost:8080/api/admin/updateUser`
//     axios.put(url, uid).then((response) => {
//       console.log(response)
//       userlist()
//     })
//   }
//   return (
//     <div className='container'>
//       <h1 style={{ textAlign: 'center', color: 'navy', marginTop: 20 }}>
//         User List
//       </h1>
//       <table className='table table-striped' style={{ marginTop: 50 }}>
//         <thead>
//           <tr>
//             <th>Id</th>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Email</th>
//             <th>DOB</th>
//             <th>Role</th>
//           </tr>
//         </thead>
//         <tbody>
//           {MyUsers.map((users) => {
//             return (
//               <tr>
//                 <td>{users.id}</td>
//                 <td>{users.firstName}</td>
//                 <td>{users.lastName}</td>
//                 <td>{users.email}</td>
//                 <td>{users.dob}</td>
//                 <td>{users.role}</td>
//                 <td>
//                   <Link to={'/updateuser/' + users.id}>
//                     <button
//                       // onClick={() => updateuser(users.id)}
//                       style={styles.button}
//                       className='btn btn-sm btn-success'>
//                       Edit
//                     </button>
//                   </Link>
//                   <button
//                     onClick={() => deleteuser(users.id)}
//                     style={styles.button}
//                     className='btn btn-sm btn-danger'>
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             )
//           })}
//         </tbody>
//       </table>
//     </div>
//   )
// }

// const styles = {
//   h3: {
//     textAlign: 'center',
//     margin: 20,
//   },
//   button: {
//     marginRight: 10,
//   },
// }
// export default UserList
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import config from '../../config'

const UserList = () => {
  const [MyUsers, setMyUsers] = useState([])

  // const navigate = useNavigate()

  useEffect(() => {
    // load all the services created by user
    userlist()
  }, [])

  //get all services
  const userlist = () => {
    //create axios api to send data to server
    const url = config.serverURL + `api/admin/getAllUsers`

    axios.get(url).then((response) => {
      const res = response.data
      console.log('result', res)
      setMyUsers(res)
    })
  }

  //delete any services
  const deleteuser = (uid) => {
    const url = config.serverURL +  `api/admin/deleteUser/${uid}`
    axios.delete(url, uid).then((response) => {
      console.log(response)
      userlist()
    })
  }
  // const updateuser = (uid) => {
  //   const url = `http://localhost:8080/api/admin/updateUser`
  //   axios.put(url, uid).then((response) => {
  //     console.log(response)
  //     userlist()
  //   })
  // }
  return (
    <div className='container'>
      <h1 style={{ textAlign: 'center', color: 'navy', marginTop: 20 }}>
        User List
      </h1>
      <table className='table table-striped' style={{ marginTop: 50 }}>
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
                <td>
                  <Link to={'/updateuser/' + users.id}>
                    <button
                      // onClick={() => updateuser(users.id)}
                      style={styles.button}
                      className='btn btn-sm btn-success'>
                      Edit
                    </button>
                  </Link>
                  <button
                    onClick={() => deleteuser(users.id)}
                    style={styles.button}
                    className='btn btn-sm btn-danger'>
                    Delete
                  </button>
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
export default UserList