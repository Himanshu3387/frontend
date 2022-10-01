
// const Home = () => 
// {
   
//     return (
//         <div>
//             <h2 className="h1-responsive font-weight-bold text-center my-4">WELCOME TO ELEARNING SYSTEM</h2>
//             <div className="card mb-3">
//                 <div className="row g-0 justify-content-center">
//                     <div className="col-md-3">
//                         <img src='home.jpg' className="img-fluid rounded-start m-5" alt="..." />
//                     </div>
//                     <div className="col-md-4">
//                         <div className="card-body text-center"><br />
//                             <h5 className="card-title">NET BANKING PROCESS</h5><br />
//                             <p className="card-text">1. Fill your basic details</p>
//                             <p className="card-text">2. Upload your KYC Document</p>
//                             <p className="card-text">3. Validate your Document and Information</p>
//                             <p className="card-text">4. Create Username and Password</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="card mb-3">
//                 <div className="row g-0 justify-content-center">
//                 <div className="col-md-4">
//                         <div className="card-body text-center"><br />
//                             <h5 className="card-title">DO'S AND DONT'S</h5><br />
//                             <p className="card-text">1. ALWAYS keep your computer free of malware</p>
//                             <p className="card-text">2. ALWAYS change your passwords periodically</p>
//                             <p className="card-text">3. NEVER share any bank and card details</p>
//                             <p className="card-text">4. NEVER respond to fraudulent calls</p><br />
//                         </div>
//                     </div>
//                     <div className="col-md-3">
//                         <img src='about.jpg' className="img-fluid rounded-start" alt="..." />
//                     </div>
//                 </div>
//             </div>
//         </div>
        
//     )
// }
const Home = () => {
    return (
      <>
        <center>
          <div style={styles.container1}>
          <h1 className="h1-responsive font-weight-bold text-left my-4">WELCOME TO E-LEARNING </h1>
          </div>
          
        </center>
        
        
      </>
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
      backgroundImage: `url("home3.jpg")`,
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
      backgroundColor: "navy",
      color: "white",
      borderRadius: 5,
      border: "none",
      marginTop: 10,
    },
  };
  export default Home;
  