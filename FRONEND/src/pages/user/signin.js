import { Link, useNavigate } from "react-router-dom";
import Images from "../../images/post03.jpg";
import { toast } from "react-toastify";
import { useState } from "react";
import config from '../../config'
import axios from "axios";
//import config from "../config";
const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signin = () => {
    if (email.length === 0) {
      toast.error("please enter email");
    } else if (password.length === 0) {
      toast.error("please enter password");
    } else {
      const body = {
        email,
        password,
      };
      // url to call the api
      const url =  config.serverURL + `api/user/signin`;

      // make api call using axios
      axios
        .post(url, body)
        .then((response) => {
          // get the server result
          const result = response.data;
          console.log(result);
          console.log("role of user " + result.role);

          if (result["status"] === "error") {
            toast.error("Login Invalid!!");
          } else {
            if (result.role === 'admin') {
              //sessionStorage.setItem("user",result.email)
              toast.success('Welcome ADMIN')
              navigate('../admin')
            } else if (result.role === 'teacher') {
              //sessionStorage.setItem("user",result.email)
              toast.success('Welcome to ELearnig')
              navigate('../teacher')
            } else {
              toast.success('Welcome to ELearnig')
              navigate('../student')
            }
          }
        })
        .catch((error) => {
          console.log("error");
          console.log(error);
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
          <div className="col"></div>
          <div className="col-10 col-sm-4 m-3">
            <div
              className="card cascading-right p-9"
              style={{
                background: "hsla(0, 0%, 100%, 0.70)",
                backdropFilter: "blur(30px)",
                borderBottomRightRadius: 50,
                borderTopLeftRadius: 50,
              }}
            >
              <h2 className="fw-bold mb-1 mt-3">Login</h2>
              <div className="ps-5 pe-5 pt-4 pb-4">
                <div className="mb-3">
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
                <div className="mb-3">
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
                <div className="mb-3">
                  <div className="mb-3">
                    <div>
                      Don't have an account?
                      <Link to="/signup">Signup here</Link>
                    </div>
                    <button style={styles.Button} onClick={signin} className="">
                      Signin
                    </button>
                  </div>
                  <div>
                    <Link to="/forgot-password">Forgot password ?</Link>
                  </div>
                  <div>
                    <Link to="/reset-password">Reset password </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
    // <div style={styles.container1}>
    //   <div style={{ marginTop: 0 }}>
    //     <div style={styles.container}>
    //       <div className="mb-3">
    //         <label>Email</label>
    //         <input
    //           onChange={(e) => {
    //             setEmail(e.target.value);
    //           }}
    //           className="form-control"
    //           type="email"
    //           placeholder="Your email"
    //         />
    //       </div>

    //       <div className="mb-3">
    //         <label>Password</label>
    //         <input
    //           onChange={(e) => {
    //             setPassword(e.target.value);
    //           }}
    //           className="form-control"
    //           type="password"
    //           placeholder="Your password"
    //         />
    //       </div>

    //        <div className="mb3" style={{ marginTop: 40 }}></div>
    //         <div className="mb-3">
    //           <div>
    //              Don't have an account?
    //            <Link to="/signup">Signup here</Link>
    //          </div>
    //         <button style={styles.Button} onClick={signin} className="">
    //           Signin
    //         </button>
    //       </div>
    //       <div>
    //         <Link to="/forgot-password">Forgot password ?</Link>
    //       </div>
    //       <div>
    //         <Link to="/reset-password">Reset password </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

const styles = {
  container: {
    width: 400,
    height: 350,
    padding: 20,
    position: "relative",
    backgroundColor: "white",
    top: 100,
    left: 0,
    right: 0,
    bottom: 0,
    margin: "auto",
    borderColor: "#663399",
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: "solid",
    boxShadow: "1px 1px 10px 1px white",
  },

  container1: {
    backgroundImage: `url(${Images})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100vh",
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
export default Signin;
