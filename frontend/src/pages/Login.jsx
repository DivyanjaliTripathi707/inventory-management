import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../api/axiosClient";
import "./Login.css";

function Login() {

const navigate=useNavigate();

const [email,setEmail]=useState("");

const [password,setPassword]=useState("");

const login=async(e)=>{

e.preventDefault();

try{

await axiosClient.post("/users/login",{

email,

password

});

localStorage.setItem("token","logged");

navigate("/dashboard");

}

catch(err){

alert("Invalid Login");

}

};

return(

<div className="loginPage">

<form className="loginBox" onSubmit={login}>

<h2>Inventory Management</h2>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button>Login</button>

</form>

</div>

);

}

export default Login;