import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Box,Button } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';

function RegisterPage() {

    let BASE_URL=process.env.REACT_APP_BE_API_URL ;

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading,setIsLoading] = useState(false);

    async function register(e) {
        e.preventDefault();

        setIsLoading(true);

        if(name===""||email===""||number===""||password===""||confirmPassword===""){
            alert("enter all fields");
            return;
        }
        if(password!==confirmPassword){
            alert("enter correct password");
            return;
        }

        let formData = {
            name,
            email,
            number,
            password,
        }

        try{
            let res =await axios.post(`${BASE_URL}/customer/register`,formData);
            console.log(res.data);
            alert(res.data.message);
        }
        catch(err){
            console.log(err);
            alert(err.response.data.message);
        }
        
        finally{
            setName("");
            setEmail("");
            setNumber("");
            setPassword("");
            setConfirmPassword("");
            setIsLoading(false);
        }
    }    

  return (
    <Box sx={{display:"flex", justifyContent:"center", height:"100vh", alignItems:"center"}}>

        <Box component="form" 
             onSubmit={register}
             sx={{border:"1px solid black", width:"400px", display:"flex", flexDirection:"column", gap:"20px", padding:"25px", borderRadius:"10px"}}>

            <Box component="h1" sx={{textAlign:"center"}}>
                Register
            </Box>

            <Box>
                <TextField id="outlined-basic" label=" Name " variant="outlined" fullWidth onChange={(e)=>setName(e.target.value)} value={name}/>
            </Box>
            
            <Box>               
                <TextField id="outlined-basic" label=" Email " variant="outlined" fullWidth onChange={(e)=>setEmail(e.target.value)} value={email}/>
            </Box>
            
            <Box>               
                <TextField id="outlined-basic" label=" Number " variant="outlined" fullWidth onChange={(e)=>setNumber(e.target.value)} value={number}/>
            </Box>
            
            <Box>               
                <TextField id="outlined-basic" label=" Password " variant="outlined" fullWidth onChange={(e)=>setPassword(e.target.value)} value={password}/>
            </Box>
            
            <Box>              
                <TextField id="outlined-basic" label=" Confirm Password " variant="outlined" fullWidth onChange={(e)=>setConfirmPassword(e.target.value)} value={confirmPassword}/>
            </Box>

            <Box>
                <Button type='submit' variant="outlined" fullWidth >
                    {
                        isLoading===true?"loading...":"Register"
                    }
                </Button>
            </Box>

            <Box>
                Already Registered? <Link to="/login"> Login </Link>
            </Box>
                        
        </Box>
    </Box>
  )
}

export default RegisterPage