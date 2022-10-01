import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import config from '../../config'

const AddCourses = () => {
  //employee inputs
  const [courseName, setCourseName] = useState("");
  const [description, setDescription] = useState("");
  // const [contents, setContents] = useState("");
  // const [selectedCourse, setSelectedCourse] = useState("");
  // const [teacher, setTeacher] = useState("");

  //After adding employee navigate to Employees page
  const navigate = useNavigate();

  const addCourse = () => {
    //check if admin has entered all the input data

    if (courseName.length === 0) {
      toast.error("please enter the Course name");
    } else if (description.length === 0) {
      toast.error("please enter the Description");
    } else {
      //make API call to  backend using axios
      const body = {
        courseName,
        description,
      };

      console.log("result", body);

      const url = config.serverURL + `api/admin/addCourse`;

      //axios api call
      axios.post(url, body).then((response) => {
        const result = response.data;
        console.log(result);

        // if ((result["status"] = "success")) {
        //   toast.success("New Course added succcessfully!!");
          navigate("/showAllCourses");
        // } else {
        //   toast.error("Course cannot be added");
        // }
      });
    }
  };

  return (
    <div style={{ marginTop: 20 }}>
      <h1 style={{ textAlign: "center", color: "black" }}>Add Courses</h1>
      <div style={styles.container}>
        <div className="mb-3">
          <label>Course Name</label>
          <input
            onChange={(e) => {
              setCourseName(e.target.value);
            }}
            className="form-control"
            type="text"
          />
        </div>
        <div className="mb-3">
          <label>Description</label>
          <input
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            className="form-control"
            type="text"
          />
        </div>

        <div className="mb-3" style={{ marginTop: 40 }}>
          <button onClick={addCourse} style={styles.Button}>
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
    height: 300,
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
    boxShadow: "1px 1px 20px 5px #C9C9C9",
  },
  Button: {
    position: "relative",
    width: "100%",
    height: 40,
    backgroundColor: "#7431F8",
    color: "white",
    borderRadius: 5,
    border: "none",
    marginTop: 10,
  },
};

export default AddCourses;
