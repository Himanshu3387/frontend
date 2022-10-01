import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import config from '../../config'
import axios from "axios";
const AddSchedule = () => {
  //employee inputs
  const [ subName, setSubName] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [date, setDate] = useState("");
  const [meetingId, setMeetingId] = useState("");
  const [meetingPassword, setMeetingPassword] = useState("");
  const [admin, setAdmin] = useState(0);
  const [studentId, setStudentId] = useState(0);
  const[teacher_id,setTeacher_id]=useState(0);
  

  //After adding employee navigate to Employees page
  const navigate = useNavigate();

  const addsc = () => {
    //check if admin has entered all the input data

    if (subName.length === 0) {
      toast.error("please enter the first name");
    } else if (teacherName.length === 0) {
      toast.error("please enter the last name");
    } else if (date.length === 0) {
      toast.error("please enter the last name");
    } 
     
    else if (meetingId.length === 0) {
      toast.error("please enter password");
    }
      
     else if (meetingPassword.length === 0) {
      toast.error("please enter password");
    } else if (admin.length === 0) {
      toast.error("please enter confirm password");}
      else if (studentId.length === 0) {
        toast.error("please enter DOB");}
        else if (teacher_id.length === 0) {
            toast.error("please enter role");
    } else {
      //make API call to  backend using axios
      const body = {
        subName,
        teacherName,
        date,
        meetingId,
        meetingPassword,
        admin,
        studentId,
        teacher_id
      };

      console.log("result", body);

      const url = config.serverURL + `api/admin/schedule`;

      //axios api call
      axios.post(url, body).then(response => {
        const result = response.data;
        console.log(result);

        if ((result["status"] = "success")) {
          toast.success("New User added succcessfully!!");
          navigate("/listOfSchedules");
        } else {
          toast.error("User cannot be added");
        }
      });
    }
  };

  return (
    <div style={{ marginTop: 20 }}>
      <h1 style={{ textAlign: "center", color: "black" }}>Add Schedule</h1>
      <div style={styles.container}>
        <div className="mb-3">
          <label>Subject Name</label>
          <input
            onChange={e => {
              setSubName(e.target.value);
            }}
            className="form-control"
            type="text"
          />
        </div>
        <div className="mb-3">
          <label>Teacher Name</label>
          <input
            onChange={e => {
              setTeacherName(e.target.value);
            }}
            className="form-control"
            type="text"
          />
        </div>

        <div className="mb-3">
          <label>Date</label>
          <input
            onChange={e => {
              setDate(e.target.value);
            }}
            className="form-control"
            type="date"
          />
        </div>
        <div className="mb-3">
          <label>Meeting id</label>
          <input
            onChange={e => {
              setMeetingId(e.target.value);
            }}
            className="form-control"
            type="text"
          />
        </div>
        <div className="mb-3">
          <label>Meeting password</label>
          <input
            onChange={e => {
              setMeetingPassword(e.target.value);
            }}
            className="form-control"
            type="text"
          />
        </div>
        <div className="mb-3">
          <label>Admin id </label>
          <input
            onChange={e => {
              setAdmin(e.target.value);
            }}
            className="form-control"
            type="number"
          />
        </div>
        <div className="mb-3">
          <label>Student Id</label>
          <input
            onChange={e => {
              setStudentId(e.target.value);
            }}
            className="form-control"
            type="number"
          />
        </div>
        <div className="mb-3">
          <label>Teacher Id</label>
          <input
            onChange={e => {
              setTeacher_id(e.target.value);
            }}
            className="form-control"
            type="number"
          />
        </div>

        <div className="mb-3" style={{ marginTop: 40 }}>
          <button onClick={addsc} style={styles.Button}>
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
    height: 750,
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

export default AddSchedule;