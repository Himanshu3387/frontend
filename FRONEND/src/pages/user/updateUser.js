// import React from "react";
// import { useEffect, useState } from "react";
// import axios from "axios";
// // import { useParams } from 'react-router-dom';
// import Button from "../../components/button";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// export default function UpdateUser() {
//   //const params = useParams()
//   const [user, setUser] = useState();
//   const navigate = useNavigate();

//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   //const [phone, setPhoneNumber] = useState("");
//   const [confirmPassword, setconfirmPassword] = useState("");
//   const [dob, setDob] = useState("");

//   //   const [houseNo, setHouseNo] = useState("");
//   //   const [street, setStreet] = useState("");
//   //   const [city, setCity] = useState("");
//   //   const [state, setState] = useState("");
//   const [role, setRole] = useState("");

//   useEffect(() => {
//     userdetails();
//   }, []);

//   const userdetails = () => {
//     const url = `http://localhost:8080/api/admin/getAllStudents`;
//     axios.get(url).then((response) => {
//       const result = response.data;
//       console.log("result", result);
//       setUser(result);
//       setFirstName(result.firstName);
//       setLastName(result.lastName);
//       setEmail(result.email);
//       //setPhoneNumber(result.phone)
//       setPassword(result.password);
//       //  setConfirmPassword(result.setConfirmPassword)
//       setDob(result.setDob);
//       setRole(result.setRole);
//     });
//   };
//   function update(id) {
//     //alert(id)
//     const body = {
//       firstName,
//       lastName,
//       email,
//       password,
//       dob,
//       role,
//     };
//     const url = `http://localhost:8080/api/admin/updateUser`;

//     axios.put(url, body).then((response) => {
//       const result = response.data;
//       console.log("updated", result);

//       if (result["status"] === "success") {
//         toast.success("Profile Updated");
//         navigate("/userdetails/" + id);
//       } else {
//         toast.error("Try again!!");
//       }
//     });
//   }
//   return (
//     <div className="row">
//       <h1 style={{ textAlign: "center", color: "#7431F8" }}>Update Profile</h1>
//       <div
//         className="col"
//         style={{ borderRightStyle: "solid", borderRightColor: "#7431F8" }}
//       >
//         <label>First Name </label>
//         <input
//           defaultValue={user?.firstName}
//           onChange={(e) => {
//             setFirstName(e.target.value);
//           }}
//           className="form-control"
//           type="text"
//         />

//         <label>Last Name</label>
//         <input
//           defaultValue={user?.lastName}
//           onChange={(e) => {
//             setLastName(e.target.value);
//           }}
//           className="form-control"
//           type="text"
//         />

//         <label>Email</label>
//         <input
//           defaultValue={user?.email}
//           onChange={(e) => {
//             setEmail(e.target.value);
//           }}
//           className="form-control"
//           type="email"
//         />

//         <label>Password</label>
//         <input
//           defaultValue={user?.password}
//           onChange={(e) => {
//             setPassword(e.target.value);
//           }}
//           className="form-control"
//           type="password"
//         />

//         <label>Confirm Password</label>
//         <input
//           defaultValue={user?.confirmPassword}
//           onChange={(e) => {
//             setconfirmPassword(e.target.value);
//           }}
//           className="form-control"
//           type="password"
//         />
//       </div>

//       <div className="col">
//         <label>DOB</label>
//         <input
//           defaultValue={user?.dob}
//           onChange={(e) => {
//             setDob(e.target.value);
//           }}
//           className="form-control"
//           type="date"
//         />
//       </div>

//       <div className="row">
//         <Button onClick={() => update(user?.id)} title="Update " />
//       </div>
//     </div>
//     // </div>
//   );
// }
import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Button from '../../components/button'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import config from '../../config'


export default function UpdateUser() {
  const params = useParams()
  const [user, setUser] = useState()
  const navigate = useNavigate()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  //const [phone, setPhoneNumber] = useState("");
  const [ setconfirmPassword] = useState('')
  const [dob, setDob] = useState('')

  //   const [houseNo, setHouseNo] = useState("");
  //   const [street, setStreet] = useState("");
  //   const [city, setCity] = useState("");
  //   const [state, setState] = useState("");

  useEffect(() => {
    // console.log(params.id)
    userdetails()
  }, [])

  const userdetails = async () => {
    const url =  config.serverURL + `api/admin/${params.id}`
    axios.get(url).then((response) => {
      const result = response.data
      console.log('result', result)
      setUser(result)
      setFirstName(result.firstName)
      setLastName(result.lastName)
      setEmail(result.email)
      //setPhoneNumber(result.phone)
      setPassword(result.password)
      // setConfirmPassword(result.setConfirmPassword)
      setDob(result.setDob)
    })
  }
  function update(id) {
    //alert(id)
    const body = {
      firstName,
      lastName,
      email,
      password,
      dob,
    }
    console.log(body)
    //url to call service api
    const url =  config.serverURL + `api/admin/${id}`

    axios.put(url, body).then((response) => {
      const result = response.data
      console.log('updated', result)

      if ((result['status'] = 'success')) {
        toast.success('Profile Updated')
        navigate('/listOfUsers')
      } else {
        toast.error('Try again!!')
      }
    })
  }
  return (
    <div className='row'>
      <h1 style={{ textAlign: 'center', color: 'navy' }}>Update Profile</h1>
      <div
        className='col'
        style={{ borderRightStyle: 'solid', borderRightColor: 'lightgray' }}>
        <label>First Name </label>
        <input
          defaultValue={user?.firstName}
          onChange={(e) => {
            setFirstName(e.target.value)
          }}
          className='form-control'
          type='text'
        />

        <label>Last Name</label>
        <input
          defaultValue={user?.lastName}
          onChange={(e) => {
            setLastName(e.target.value)
          }}
          className='form-control'
          type='text'
        />

        <label>Email</label>
        <input
          defaultValue={user?.email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          className='form-control'
          type='email'
        />

        <label>Password</label>
        <input
          defaultValue={user?.password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          className='form-control'
          type='password'
        />

        <label>Confirm Password</label>
        <input
          defaultValue={user?.confirmPassword}
          onChange={(e) => {
            setconfirmPassword(e.target.value)
          }}
          className='form-control'
          type='password'
        />
      </div>

      <div className='col'>
        <label>DOB</label>
        <input
          defaultValue={user?.dob}
          onChange={(e) => {
            setDob(e.target.value)
          }}
          className='form-control'
          type='date'
        />
      </div>

      <div className='row'>
        <Button onClick={() => update(user?.id)} title='Update ' />
      </div>
    </div>
    // </div>
  )
}