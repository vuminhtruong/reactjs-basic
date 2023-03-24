import React from "react";
import {TextField,Grid} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';

function App() {
  const emailRegex = /\S+@\S+\.\S+/;
  const [loading, setLoading] = React.useState(false);
  const [submitted,setSubmitted] = React.useState(false);
  const [inputValue,setInputValue] = React.useState({
    firstName: '',
    lastName: '',
    email: ''
  });
  const inputErrors= React.useRef({
    firstName: '',
    lastName: '',
    email: ''
  });

  function handleChange(event) {
    const {name,value} = event.target;

    setInputValue({
      ...inputValue,
      [name]: value
    })

    inputErrors.current = ({
      ...inputErrors,
      [name]: ""
    })
  }

  function handleClick(event) {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000); // 3 seconds
    const fail = inputValue.firstName.trim() === "" || inputValue.lastName.trim() === "" || inputValue.email.trim() === "" || !emailRegex.test(inputValue.email);
    if(fail){
      if(inputValue.firstName.trim() === "") {
        inputErrors.current = ({
          ...inputErrors.current,
          firstName: 'Please enter your first name.',
        });
      }
      if(inputValue.lastName.trim() === "") {
        inputErrors.current = ({
          ...inputErrors.current,
          lastName: "Please enter your last name."
        })
      }
      if(inputValue.email.trim() === "") {
        inputErrors.current = ({
          ...inputErrors.current,
          email: "Please enter your email."
        })
      }
      if(!emailRegex.test(inputValue.email)) {
        inputErrors.current =({
          ...inputErrors.current,
          email: "Entered email is not email."
        })
      }
    } else {
      setSubmitted(true);
    }
    event.preventDefault();
  }

  return (
    <div className="app">
      <form className="register-form">  
        {submitted && (
          <h2 className="success" style={{color : "green"}}>Sign Up Success !</h2>
        )}
        <Grid container direction="column" spacing={8}>
          <Grid item>
            <TextField 
              name="firstName"
              id="standard-textarea"
              onChange={handleChange}
              label="First Name"
              color="info"
              helperText={inputErrors.current.firstName} 
              placeholder="Harry"
              multiline
              variant="standard"
            />
            
          </Grid>
          <Grid item>
            <TextField
              name="lastName"
              id="standard-textarea"
              onChange={handleChange}
              label="Last Name"
              color="info"
              helperText={inputErrors.current.lastName} 
              placeholder="Kane"
              multiline
              variant="standard"
            />
            
          </Grid>
          <Grid item>
            <TextField
              name="email"
              id="standard-textarea"
              onChange={handleChange}
              label="Email"
              helperText={inputErrors.current.email} 
              color="info"
              placeholder="harry_kane_10@gmail.com"
              multiline
              variant="standard"
            />
            
          </Grid>
          
          <Grid item>
            <LoadingButton
              id="loading-button"
              endIcon={<SendIcon />}
              variant="contained"
              onClick={handleClick}
              loading={loading}
            >
            <span>Sign Up</span>
            </LoadingButton>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default App;
