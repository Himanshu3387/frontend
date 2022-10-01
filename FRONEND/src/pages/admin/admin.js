import { useNavigate } from "react-router-dom";
const Admin = () => {
  const navigate = useNavigate();

  const User = () => {
    navigate("/users");
    //add and remove employees
  };
  const Schedules = () => {
    //add and remove Services
    navigate("/schedule");
  };
  const Tutorials = () => {
    //view and accept orders
    navigate("/tutorial");
  };
  const showAllUsers = () => {
   //show all feedback 
    navigate("/showallusers");
  };
  const Course = () => {
    //show all feedback 
     navigate("/courses");
   };
 
  return (
    <div className="container">
      <h1 style={{ textAlign: "center", color: "black"}}>ADMIN PAGE</h1>
      <div className="row">
        <div
          className="card col mb-4"
          style={{
            margin: 20,
            display: "inline-block",
            cursor: "grabbing",
            border: 0,
            marginTop: 90
          }}
        >
          <img
            src="../addUser.png"
            alt=""
            className="rounded mx-auto d-block"
            style={{ height: 250, width: 250, display: "block" }}
          />
          <div className="card-body">
            <button onClick={User} style={styles.Button}>
              User
            </button>
          </div>
        </div>
        <div
          className="card col mb-4  "
          style={{
            margin: 20,
            display: "inline-block",
            cursor: "grabbing",
            border: 0,
            marginTop: 90

          }}
        >
          <img
            src="shedule.jpg"
            alt=""
            className="rounded mx-auto d-block"
            style={{ height: 250, width: 250, display: "block" }}
          />
          <div className="card-body" width="300">
            <button onClick={Schedules} style={styles.Button}>
                Schedules
            </button>
          </div>
        </div>

        <div
          className="card col mb-4  "
          style={{
            margin: 20,
            display: "inline-block",
            cursor: "grabbing",
            border: 0,
            marginTop: 90
          }}
        >
          <img
            src="tutorials.webp"
            alt=""
            className="rounded mx-auto d-block"
            style={{ height: 250, width: 250, display: "block" }}
          />
          <div className="card-body" width="300">
            <button onClick={Tutorials} style={styles.Button}>
              Tutorials
            </button>
          </div>
        </div>
        <div
          className="card col mb-4  "
          style={{
            margin: 20,
            display: "inline-block",
            cursor: "grabbing",
            border: 0,
            marginTop: 90
          }}
        >
          <img
            src="allUsers.webp"
            alt=""
            className="rounded mx-auto d-block"
            style={{ height: 250, width: 250, display: "block" }}
          />
          <div className="card-body" width="300">
            <button onClick={showAllUsers} style={styles.Button}>
              Show All Users
            </button>
          </div>
        </div>
        <br></br>
        <div
          className="card col mb-4"
          style={{
            margin: 20,
            display: "inline-block",
            cursor: "grabbing",
            border: 0,
            marginTop: 90
          }}
        >
          <img
            src="course.jpg"
            alt=""
            className="rounded mx-auto d-block"
            style={{ height: 250, width: 250, display: "block" }}
          />
          <div className="card-body">
            <button onClick={Course} style={styles.Button}>
              Courses
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
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

export default Admin;
