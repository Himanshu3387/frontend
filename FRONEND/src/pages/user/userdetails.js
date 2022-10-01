import React from "react";
import { useEffect,useState } from "react";
import img from '../../images/blue.jpg'
import axios  from 'axios';
import config from '../../config'
import { useNavigate } from 'react-router-dom';

export default function UserDetails() {
    
    const id = sessionStorage.getItem("user")
    const navigate = useNavigate()
    const [user,setUser]= useState();
  useEffect(() => {
   
    userdetails();
  }, []);

  const userdetails = () => {
    
        const url = config.serverURL + `/api/admin/${id}` 
        axios.get(url).then
        (response=>{
            const result = response.data
            console.log("result",result)
            setUser(result)
        })
  };
  const update=(id)=>{
    console.log(id)
    navigate('/updateuser/'+ (user?.id))
  }
  const history=()=>{}
  return (
   <div>
    <div className="row">
    
        <div className="col"> 
            <img src={img} alt=""  style={styles.container1}/>
        </div>
        <div className="col" >
        <h1 style={{ textAlign: "left", color: "navy" }}>Hello {user?.firstName}</h1>
            
            <div style={styles.details}>
                <h5 style={{marginTop:20, marginBottom:20}}> Personal Details </h5>

                Name : {user?.firstName} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Surname: {user?.lastName}
                <br/>

                <br/>
                Email : {user?.email}
                <br/>
                <br/>
              Dob : {user?.dob}
                <br/>
                <br/>
                Role : {user?.role}
               
            </div>
          
            <div style={{marginTop:50}}>
           
        <button style={styles.Button} onClick={update} className="">
          Update
        </button>
        <button style={styles.Button} onClick={history} className="">
          Order
        </button>
        </div>
        </div>
       
    </div>
   </div>
    
  
  );
}
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
  
      container1: {
        width:500,
       height:730,
      },
  
    Button: {
      position: "relative",
      width: "10%",
      height: 40,
      backgroundColor: "navy",
      color: "white",
      borderRadius: 5,
      border: "none",
      marginTop: 10,
      marginLeft:30
    },

    details :{
        marginLeft:20,
        marginTop:10
    }
  };