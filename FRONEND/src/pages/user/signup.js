// // import { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import axios from "axios";
// import { useState } from "react";
// const Signup = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setconfirmPassword] = useState("");
//   const [dob, setDob] = useState("");
//   const [role, setRole] = useState("");
//   // const [houseNo, setHouseNo] = useState("");
//   // const [street, setStreet] = useState("");
//   // const [city, setCity] = useState("");
//   // const [state, setState] = useState("");
//   // const [pincode, setPincode] = useState("");

//   const navigate = useNavigate();

//   const signup = () => {
//     if (firstName.length === 0) {
//       toast.error("please enter First name");
//     } else if (lastName.length === 0) {
//       toast.error("please enter Last name");
//     } else if (email.length === 0) {
//       toast.error("please enter email");
//     } else if (password.length === 0) {
//       toast.error("please enter password");
//     } else if (password !== confirmPassword) {
//       toast.error("please enter confirm password");
//     } else if (dob === 0) {
//       toast.error("please enter date of birth");
//     } else if (role.length === 0) {
//       toast.error("please enter Role");
//     } else {
//       const body = {
//         firstName,
//         lastName,
//         email,
//         password,
//         dob,
//         role,
//       };

//       // url to call the api
//       const url = `http://localhost:8080/api/user/signup`;
//       // make the API call to check if user exists

//       // http method: post
//       // body: contains the data to be sent to the API
//       axios.post(url, body).then((response) => {
//         // get the data from the response
//         const result = response.data;
//         console.log(result);
//         if (result["status"] === "error") {
//           toast.error("Error try again");
//         } else {
//           toast.success("New User registered!!");
//           navigate("/signin");
//         }
//       });
//     }
//   };

//   return (
//     <div
//       className="shadow-lg p-3 mt-3 mb-3 bg-body opacity-100 img-fluid"
//       style={{
//         backgroundImage: 'url("login.jpg")',
//         backgroundPosition: "center",
//         backgroundSize: "cover",
//       }}
//     >
//       <div className="container text-center">
//         <div className="row">
//           <div className="col-10 col-sm-6 m-3 text-center">
//             <div
//               className="card cascading-right p-9"
//               style={{
//                 background: "hsla(0, 0%, 100%, 0.55)",
//                 backdropFilter: "blur(30px)",
//                 borderBottomRightRadius: 50,
//                 borderTopLeftRadius: 50,
//               }}
//             >
//               <div className="col-md-10 border-end pb-5">
//                 <h3 className="fw-bold mt-3">Personal Details</h3>
//                 <div className="row">
//                   <div className="ms-5 me-5 mb-3">
//                     <label>First Name </label>
//                     <input
//                       onChange={(e) => {
//                         setFirstName(e.target.value);
//                       }}
//                       className="form-control"
//                       type="text"
//                       placeholder="Your first name"
//                     />
//                   </div>
//                   <div className="ms-5 me-5 mb-3">
//                     <label>Last Name</label>
//                     <input
//                       onChange={(e) => {
//                         setLastName(e.target.value);
//                       }}
//                       className="form-control"
//                       type="text"
//                       placeholder="Your last name"
//                     />
//                   </div>
//                   <div className="ms-5 me-5 mb-3">
//                     <label>Email</label>
//                     <input
//                       onChange={(e) => {
//                         setEmail(e.target.value);
//                       }}
//                       className="form-control"
//                       type="email"
//                       placeholder="Your email"
//                     />
//                   </div>
//                   <div className="ms-5 me-5 mb-3">
//                     <label>Password</label>
//                     <input
//                       onChange={(e) => {
//                         setPassword(e.target.value);
//                       }}
//                       className="form-control"
//                       type="password"
//                       placeholder="Your password"
//                     />
//                   </div>
//                   <div className="ms-5 me-5 mb-3">
//                     <label>Confirm Password</label>
//                     <input
//                       onChange={(e) => {
//                         setconfirmPassword(e.target.value);
//                       }}
//                       className="form-control"
//                       type="password"
//                       placeholder="Repeat above password"
//                     />
//                   </div>
//                   <div className="ms-5 me-5 mb-3">
//                     <label>DOB</label>
//                     <input
//                       onChange={(e) => {
//                         setDob(e.target.value);
//                       }}
//                       className="form-control"
//                       type="date"
//                       placeholder="yyyy-dd-mm"
//                     />
//                   </div>
//                   <div className="ms-5 me-5 mb-3">
//                     <label>Role</label>
//                     <input
//                       onChange={(e) => {
//                         setRole(e.target.value);
//                       }}
//                       className="form-control"
//                       type="text"
//                       placeholder="Your Role "
//                     />
//                   </div>
//                 </div>
//                 <div className="mb3" style={{ marginTop: 30 }} />
//                 <div className="mb-3">
//                   <div>
//                     Already have an account?
//                     <Link to="/signin">Signin here</Link>
//                   </div>
//                   <button style={styles.Button} onClick={signup} className="">
//                     Signup
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     width: 500,
//     height: 650,
//     padding: 40,
//     position: "relative",
//     backgroundColor: "white",
//     top: 50,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     margin: "auto",
//     borderColor: "#663399",
//     borderRadius: 10,
//     borderWidth: 1,
//     borderStyle: "solid",
//     boxShadow: "1px 1px 10px 1px grey",
//   },

//   Button: {
//     position: "relative",
//     width: "40%",
//     height: 40,
//     backgroundColor: "#7431F8",
//     color: "white",
//     borderRadius: 5,
//     border: "none",
//     marginTop: 10,
//   },
// };

// export default Signup;
// import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import config from '../../config'
import { useState } from "react";
const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [dob, setDob] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  const signup = () => {
    if (firstName.length === 0) {
      toast.error("please enter First name");
    } else if (lastName.length === 0) {
      toast.error("please enter Last name");
    } else if (email.length === 0) {
      toast.error("please enter email");
    } else if (password.length === 0) {
      toast.error("please enter password");
    } else if (password !== confirmPassword) {
      toast.error("please enter confirm password");
    } else if (dob === 0) {
      toast.error("please enter date of birth");
    } else if (role.length === 0) {
      toast.error("please enter Role");
    } else {
      const body = {
        firstName,
        lastName,
        email,
        password,
        dob,
        role,
      };

      // url to call the api
      const url =  config.serverURL + `api/user/signup`;
      // make the API call to check if user exists

      // http method: post
      // body: contains the data to be sent to the API
      axios.post(url, body).then((response) => {
        // get the data from the response
        const result = response.data;
        console.log(result);
        if (result["status"] === "error") {
          toast.error("Error try again");
        } else {
          toast.success("New User registered!!");
          navigate("/signin");
        }
      });
    }
  };

  return (
    <div
      className="shadow-lg p-3 mt-3 mb-3 bg-body opacity-100 img-fluid"
      style={{
        backgroundImage: 'url("login.jpg")',
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="container text-center">
        <div className="row">
          
          <div className="col-10 col-sm-6 m-3">
            <div
              className="card cascading-right p-9"
              style={{
                background: "hsla(0, 0%, 100%, 0.70)",
                backdropFilter: "blur(30px)",
                borderBottomRightRadius: 50,
                borderTopLeftRadius: 50,
              }}
            >
              <h2 className="fw-bold mb-1 mt-3">REGISTERATION</h2>
              <div className="ms-5 me-5 mb-3">
                <label>First Name </label>
                <input
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  className="form-control"
                  type="text"
                  placeholder="Your first name"
                />
              </div>
              <div className="ms-5 me-5 mb-3">
                <label>Last Name</label>
                <input
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  className="form-control"
                  type="text"
                  placeholder="Your last name"
                />
              </div>
              <div className="ms-5 me-5 mb-3">
                <label>Email</label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="form-control"
                  type="email"
                  placeholder="Your email"
                />
              </div>
              <div className="ms-5 me-5 mb-3">
                <label>Password</label>
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="form-control"
                  type="password"
                  placeholder="Your password"
                />
              </div>
              <div className="ms-5 me-5 mb-3">
                <label>Confirm Password</label>
                <input
                  onChange={(e) => {
                    setconfirmPassword(e.target.value);
                  }}
                  className="form-control"
                  type="password"
                  placeholder="Repeat above password"
                />
              </div>
              <div className="ms-5 me-5 mb-3">
                <label>DOB</label>
                <input
                  onChange={(e) => {
                    setDob(e.target.value);
                  }}
                  className="form-control"
                  type="date"
                  placeholder="yyyy-dd-mm"
                />
              </div>
              <div className="ms-5 me-5 mb-3">
                <label>Role</label>
                <div>
          <input
            type='radio'
            name='myRadios'
            onChange={(e) => {
              setRole(e.target.value)
            }}
            value='student'
          />{' '}
          student
          <br></br>
          <input
            type='radio'
            name='myRadios'
            onChange={(e) => {
              setRole(e.target.value)
            }}
            value='teacher'
          />{' '}
          teacher
          <label class='form-check-label' for='exampleRadios2'></label>
        </div>
              </div>
              <div className="mb3" style={{ marginTop: 30 }} />
                 <div className="mb-3">
                   <div>
                     Already have an account?
                     <Link to="/signin">Signin here</Link>
                   </div>
                  <button style={styles.Button} onClick={signup} className="">
                     Signup
                  </button>
                </div>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: 500,
    height: 650,
    padding: 40,
    position: "relative",
    backgroundColor: "white",
    top: 50,
    left: 0,
    right: 0,
    bottom: 0,
    margin: "auto",
    borderColor: "#663399",
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: "solid",
    boxShadow: "1px 1px 10px 1px grey",
  },

  Button: {
    position: "relative",
    width: "40%",
    height: 40,
    backgroundColor: "#7431F8",
    color: "white",
    borderRadius: 5,
    border: "none",
    marginTop: 10,
  },
};

export default Signup;
