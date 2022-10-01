import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import config from '../../config'
import axios from "axios";
const AddUser = () => {
  //employee inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dob, setDob] = useState(0);
  const [role, setRole] = useState(0);
  

  //After adding employee navigate to Employees page
  const navigate = useNavigate();

  const adduser = () => {
    //check if admin has entered all the input data

    if (firstName.length === 0) {
      toast.error("please enter the first name");
    } else if (lastName.length === 0) {
      toast.error("please enter the last name");
    } else if (email.length === 0) {
      toast.error("please enter email");
    } else if (password.length === 0) {
      toast.error("please enter password");
    } else if (confirmPassword.length === 0) {
      toast.error("please enter confirm password");}
      else if (dob.length === 0) {
        toast.error("please enter DOB");}
        else if (role.length === 0) {
            toast.error("please enter role");
    } else {
      //make API call to  backend using axios
      const body = {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        dob,
        role
      };

      console.log("result", body);

      const url = config.serverURL + `api/admin/addNewUser`;

      //axios api call
      axios.post(url, body).then(response => {
        const result = response.data;
        console.log(result);

        if ((result["status"] = "success")) {
          toast.success("New User added succcessfully!!");
          navigate("/listOFUsers");
        } else {
          toast.error("User cannot be added");
        }
      });
    }
  };

  return (
    <div style={{ marginTop: 20 }}>
      <h1 style={{ textAlign: "center", color: "black" }}>ADD USER</h1>
      <div style={styles.container}>
        <div className="mb-3">
          <label>First Name</label>
          <input
            onChange={e => {
              setFirstName(e.target.value);
            }}
            className="form-control"
            type="text"
          />
        </div>
        <div className="mb-3">
          <label>Last Name</label>
          <input
            onChange={e => {
              setLastName(e.target.value);
            }}
            className="form-control"
            type="text"
          />
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input
            onChange={e => {
              setEmail(e.target.value);
            }}
            className="form-control"
            type="email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            onChange={e => {
              setPassword(e.target.value);
            }}
            className="form-control"
            type="password"
          />
        </div>
        <div className="mb-3">
          <label>confirmPassword</label>
          <input
            onChange={e => {
              setConfirmPassword(e.target.value);
            }}
            className="form-control"
            type="password"
          />
        </div>
        <div className="mb-3">
          <label>dob </label>
          <input
            onChange={e => {
              setDob(e.target.value);
            }}
            className="form-control"
            type="date"
          />
        </div>
        <div className="mb-3">
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
          <br></br>
          <input
            type='radio'
            name='myRadios'
            onChange={(e) => {
              setRole(e.target.value)
            }}
            value='admin'
          />{' '}
          admin
          <label class='form-check-label' for='exampleRadios2'></label>
        </div>
        </div>

        <div className="mb-3" style={{ marginTop: 40 }}>
          <button onClick={adduser} style={styles.Button}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
const styles = {
  container: {
    width: 400,
    height: 700,
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

export default AddUser;
