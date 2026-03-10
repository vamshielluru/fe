import { Box,TextField,Button } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    let BASE_URL=process.env.REACT_APP_BE_API_URL;
    let navigate = useNavigate();
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false)

    async function loginSubmit (e){
        e.preventDefault();
        //console.log("hii");
        setIsLoading(true);

        if(email===""||password===""){
            alert("please fill the fields");
            setIsLoading(true);
        }

        let loginFormData = {
            email,
            password
        }
        //console.log(loginFormData);

        try{
            let res =await axios.post(`${BASE_URL}/customer/login`,loginFormData);
            let token =res.data.token;
            //console.log(token);
            localStorage.setItem("token",token);
            let decoded=jwtDecode(token);
            if(decoded.role == "admin"){
                navigate("/AdminDashboard");
            }
            if(decoded.role == "customer"){
                navigate("/CustomerDashboard");
            }
            alert(res.data.message);
        }
        catch(err){
            alert(err.response.data.message);
        }

        finally{
            setEmail("")
            setPassword("")
            setIsLoading(false)
        }

    }

  return (
    <Box sx={{display:"flex", justifyContent:"center", height:"60vh", padding:"25vh" }}>
 
        <Box component="form" sx={{border:"1px solid black", borderRadius:"10px", display:"flex", flexDirection:"column", width:"400px", padding:"30px", gap:"10px"}} onSubmit={loginSubmit}>

            <Box component="h1" sx={{textAlign:"center"}}>
                Login
            </Box>

            <Box>
                <TextField id="outlined-basic" label=" Email " variant="outlined" fullWidth onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
            </Box>

            <Box>
                <TextField id="outlined-basic" label=" Password " variant="outlined" fullWidth onChange={(e)=>{setPassword(e.target.value)}} value={password}/>
            </Box>

            <Box>
                <Button type="submit" variant="outlined" fullWidth>
                    {
                        isLoading===true?"Loading...":"Login"
                    }
                </Button>
            </Box>

            <Box>
                Not Registered? <Link to="/register">Register </Link>
            </Box>
        </Box>
    </Box>
  )
}

export default Login