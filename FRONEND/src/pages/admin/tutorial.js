import { useNavigate } from "react-router-dom";

const Tutorial = () => {
  const navigate = useNavigate();

  const addUser = () => {
    //will transfer to add employee page to add employee details by the admon
    navigate("/addtutorial");
  };
  const listUser = () => {
    //will transfer to add employee page to add employee details by the admon
    navigate("/listOfSchedules");
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: "center", color: "black" }}>TUTORIAL</h1>
      <div className="row">
        <div
          className="card col mb-4"
          style={{
            margin: 20,
            display: "inline-block",
            cursor: "pointer",
            border: 0,
            marginTop: 70,
          }}
        >
          <img
            src="addemp2.png"
            alt=""
            className="rounded mx-auto d-block"
            style={{ height: 300, width: 300, display: "block" }}
          />
          <div className="card-body">
            <button onClick={addUser} style={styles.Button}>
              Add New Tutorial
            </button>
          </div>
        </div>
        <div
          className="card col mb-4  "
          style={{
            margin: 20,
            display: "inline-block",
            cursor: "pointer",
            border: 0,
            marginTop: 70,
          }}
        >
          <img
            src="showemp.jpg"
            alt=""
            className="rounded mx-auto d-block"
            style={{ height: 300, width: 300, display: "block" }}
          />
          <div className="card-body" width="300">
            <button onClick={listUser} style={styles.Button}>
            Tutorial List
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
    marginTop: 10,
  },
};

export default Tutorial;
