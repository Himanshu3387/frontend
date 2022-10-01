import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import config from '../../config'
const AddTut = () => {
  //employee inputs
  const [tutName, setTutName] = useState("");
  const [publishDate, setPublishDate] = useState("");
  const [contents, setContents] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [teacher, setTeacher] = useState("");

  //After adding employee navigate to Employees page
  const navigate = useNavigate();

  const addtut = () => {
    //check if admin has entered all the input data

    if (tutName.length === 0) {
      toast.error("please enter the first name");
    } else if (publishDate.length === 0) {
      toast.error("please enter the last name");
    } else if (contents.length === 0) {
      toast.error("please enter phone number");
    } else if (selectedCourse.length === 0) {
      toast.error("Assign Department");
    } else if (teacher.length === 0) {
      toast.error("Assign Department");
    } 
     else {
      //make API call to  backend using axios
      const body = {
        tutName,
        publishDate,
        contents,
        selectedCourse,
        teacher
      };

      console.log("result", body);

      const url = config.serverURL + `api/admin/addTutorial`;

      //axios api call
      axios.post(url, body).then(response => {
        const result = response.data;
        console.log(result);

        if ((result["status"] = "success")) {
          toast.success("New Employee added succcessfully!!");
          navigate("/listOfTutorials");
        } else {
          toast.error("Employee cannot be added");
        }
      });
    }
  };

  return (
    <div style={{ marginTop: 20 }}>
      <h1 style={{ textAlign: "center", color: "navy" }}>Add Tutorial</h1>
      <div style={styles.container}>
        <div className="mb-3">
          <label>Tutorial Name</label>
          <input
            onChange={e => {
              setTutName(e.target.value);
            }}
            className="form-control"
            type="text"
          />
        </div>
        <div className="mb-3">
          <label>Publish Date</label>
          <input
            onChange={e => {
              setPublishDate(e.target.value);
            }}
            className="form-control"
            type="date"
          />
        </div>

        <div className="mb-3">
          <label>Contents</label>
          <input
            onChange={e => {
              setContents(e.target.value);
            }}
            className="form-control"
            type="text"
          />
        </div>
        <div className="mb-3">
          <label>Course id</label>
          <input
            onChange={e => {
              setSelectedCourse(e.target.value);
            }}
            className="form-control"
            type="number"
          />
        </div>
        <div className="mb-3">
          <label>Teacher id</label>
          <input
            onChange={e => {
              setTeacher(e.target.value);
            }}
            className="form-control"
            type="text"
          />
       
          
        </div>

        <div className="mb-3" style={{ marginTop: 40 }}>
          <button onClick={addtut} style={styles.Button}>
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
    height: 580,
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

export default AddTut;
