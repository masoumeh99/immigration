import React, { useState } from 'react';
import TextField from "@material-ui/core/TextField";
import { Button} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import axios from "axios";

function Fnc() {
  return (


    <div
    style={{
     
      display: 'flex',
      justifyContent: 'Center',
      alignItems: 'Center',
      height: '100vh',
            
    }}
  >
    
   <div 
   style={{
      
textAlign: 'center',    
  
  }}
>
  
    <h2 >
  صحت کاربر تایید شد.
  </h2>
  
  </div>
  </div>
  );
}

const SignIn = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [url ,setUrl] = useState("/HomePage");
  const history = useHistory();

  const [value, setValue] = useState("");

  
function postdata() {
  axios.post('http://localhost:8000/login', {name,password})
 .then((response)=>{
        setValue(response.data.member);
        
        console.log(response.data.member.value);
        console.log(value);
        if(response.data.member==="lawyer"){
          setUrl("/lawyer-app");
        }else if(response.data.member==="secretary"){
          setUrl("/clerk-app");
        }else{
          setUrl("/HomePage");
        }
        localStorage.setItem("user", JSON.stringify(response.data));
        history.push(url);
      
    }).catch((error) => {
      if (error.response) {
        console.log(error.response);
        console.log(error.response.status);
        console.log(error.response.headers);
        }
    
    })
    }

  return (
    <div
    style={{
     
      display: 'flex',
      justifyContent: 'Center',
      alignItems: 'Center',
      height: '100vh',
   
    }}
  >
    
   <div 
   style={{
    
        
textAlign: 'center',    
  
    
  }}
>

    <h4 style={{display: 'block',fontSize:'40px', fontStyle:'normal'}}>ورود </h4>
    <h3 style={{marginTop: '50px',display: 'block', fontSize:'20px'}}>نام کاربری {name} </h3>
     
      <TextField
        value={name}
        label="نام کاربری"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    


      <h3 style={{marginTop: '20px',display: 'block', fontSize:'20px'}}>رمز {password} </h3>
      <TextField
        value={password}
        label="رمز"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

<Button 
  style={{marginTop: '30px',display: 'block'}}
  onClick={() => {
    postdata()
    appointment = value;
  }}>تایید</Button>

    </div>
    </div>
  );
};
  
export default SignIn;