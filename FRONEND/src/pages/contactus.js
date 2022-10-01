// import { useState } from "react";
// import { toast } from "react-toastify";
// import { Link } from "react-router-dom";
// import SocialFollow from "../components/socialmedia";

import React from "react";
import { toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import config from '../config'
import axios from "axios";
//import SocialFollow from "../components/socialmedia";
export default function ContactUs() {
  const params = useParams();
  // const [data, setData] = useState([]);
  const navigate = useNavigate();
  //employee inputs
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [emailId, setEmailId] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  console.log(params);
  useEffect(() => {
    // load all the services created by admin
   // userlist();
  }, []);

  //get all services
  // const userlist = () => {
  //   //create axios api to send data to server
  //   const url = `http://localhost:8080/api/user/${params.id}`;

  //   axios.get(url).then(response => {
  //     const res = response.data;
  //     console.log("result in update", res);
  //     setData(res);
  //   });
  // };
  function contactus(id) {
    //alert(id)
    const body = {
      firstName,
      lastName,
      emailId,
      title,
      message
    };

    console.log(body);

    const url =   config.serverURL + `api/user/feedback`;

    //axios api call
    axios.post(url, body).then(response => {
      const result = response.data;
      console.log("result", result.data);

      if ((result["status"] = "success")) {
        toast.success("Employee details Updated succcessfully!!");
        navigate("/showfeedback");
      } else {
        toast.error("Employee details cannot be updated");
      }
    });
  }

  return (
    <div style={{ marginTop: 20 }}>
      <h2 style={{ textAlign: "center", color: "black" }}>Contact Us</h2>
      <div className="row">
        <div className="col">
          <div style={styles.container}>
            <div className="mb-3">
              <label>First Name</label>
              <input
                onChange={e => {
                  setFirstname(e.target.value);
                }}
                className="form-control"
                type="text"
              />
            </div>
            <div className="mb-3">
              <label>Last Name</label>
              <input
                onChange={e => {
                  setLastname(e.target.value);
                }}
                className="form-control"
                type="text"
              />
            </div>
            <div className="mb-3">
              <label>Email</label>
              <input
                onChange={e => {
                  setEmailId(e.target.value);
                }}
                className="form-control"
                type="email"
              />
            </div>
            <div className="mb-3">
              <label>Title</label>
              <input
                onChange={e => {
                  setTitle(e.target.value);
                }}
                className="form-control"
                type="text"
              />
            </div>
            <div className="mb-3">
              <label>Message</label>
              <textarea
                onChange={e => {
                  setMessage(e.target.value);
                }}
                rows="6"
                style={{ resize: "none" }}
                className="form-control"
              />
            </div>
            <div className="mb-3" style={{ marginTop: 10 }}>
              <button onClick={contactus} style={styles.Button}>
                Send
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div>
            <p>
              <p
                style={{
                  marginTop: 30,
                  fontWeight: 700,
                  fontFamily: "sans-serif",
                  fontSize: 30,
                  fontStyle: "italic",
                  color: "royalblue"
                }}
              >
                How can we Help?
              </p>
              <p>
                <img
                  src="contactus.avif"
                  alt=""
                  className="rounded mx-auto d-block"
                  style={{ left: 0, height: 300, width: 550, display: "block" }}
                />
              </p>
              <p
                style={{
                  marginTop: 15,
                  fontSize: 20,
                  fontFamily: "sans-serif",
                  fontStyle: "inherit",
                  color: "dimgrey",
                  fontWeight: 600
                }}
              >
                <p>Email : Elearning@test.com</p>
                <p>Address: Shaniwar Peth,Karad, Maharashtra </p>
                <p>Phone : 02164 225 500</p>
              </p>
              <header />
              {/* <SocialFollow /> */}
            </p>
          </div>
        </div>
      </div>
    </div>

    // <div style={{ marginTop: 20 }}>
    //   <h1 style={{ textAlign: "center", color: "navy" }}>
    //     Update Employee : {data.firstName}
    //   </h1>
    //   <div style={styles.container}>
    //     <div className="mb-3">
    //       <label>First Name</label>
    //       <input
    //         defaultValue={data.firstName}
    //         onChange={e => {
    //           setFirstName(e.target.value);
    //         }}
    //         type="text"
    //         className="form-control"
    //       />
    //     </div>
    //     <div className="mb-3">
    //       <label>Last Name</label>
    //       <input
    //         defaultValue={data.lastName}
    //         onChange={e => {
    //           setLastName(e.target.value);
    //         }}
    //         type="text"
    //         className="form-control"
    //       />
    //     </div>

    //     <div className="mb-3">
    //       <label>Phone Number</label>
    //       <input
    //         defaultValue={data.phoneNum}
    //         onChange={e => {
    //           setPhoneNum(e.target.value);
    //         }}
    //         className="form-control"
    //         type="tel"
    //       />
    //     </div>
    //     <div className="mb-3">
    //       <label>Hire Date</label>
    //       <input
    //         defaultValue={data.hireDate}
    //         onChange={e => {
    //           setHireDate(e.target.value);
    //         }}
    //         className="form-control"
    //         type="date"
    //       />
    //     </div>
    //     <div className="mb-3">
    //       <label>Salary</label>
    //       <input
    //         defaultValue={data.salary}
    //         onChange={e => {
    //           setSalary(e.target.value);
    //         }}
    //         className="form-control"
    //         type="number"
    //       />
    //     </div>
    //     <div className="mb-3">
    //       <label>Service Name </label>
    //       <input
    //         defaultValue={data.deptName}
    //         onChange={e => {
    //           setDeptName(e.target.value);
    //         }}
    //         className="form-control"
    //         type="text"
    //       />
    //     </div>
    //     <div className="mb-3">
    //       <label>Hire Status </label>
    //       <input
    //         defaultValue={data.empStatus}
    //         onChange={e => {
    //             setEmpStatus(e.target.value);
    //         }}
    //         className="form-control"
    //         type="text"
    //       />
    //     </div>

    //     <div className="mb-3" style={{ marginTop: 40 }}>
    //       <button onClick={() => contactus(data.id)} style={styles.Button}>
    //         Update
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
}
const styles = {
  container: {
    width: 400,
    height: 630,
    padding: 20,
    position: "relative",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: "auto",
    marginTop: 20,
    borderColor: "#7431F8",
    borderRadius: 10,
    broderWidth: 1,
    borderStyle: "solid",
    boxShadow: "1px 1px 20px 5px #C9C9C9"
  },
  Button: {
    position: "relative",
    width: "100%",
    height: 40,
    backgroundColor: "#7431F8",
    color: "white",
    borderRadius: 5,
    border: "none",
    marginTop: 10
  }
};
